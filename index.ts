import express from "express"
import bcrypt from "bcrypt";
import { userInfo } from "node:os";
//=============>create login and register
const app=express();
app.use(express.json());
interface User{
    id:number,
    name:string,
    email:string,
    password:string
}
const Users: User[]=[];

app.get("/",(req,res)=>{
    
    res.json(Users);
})

//=============>Register
app.post("/api/register/",async(req,res)=>{
    try{
        const {email,password,name}=req.body;
        if(!email || !password){
            return res.status(400).json({message:"Email and Password are required!"});
        }
        if(!email.includes("@gmail.com")){
            return res.status(400).json({message:"Invalid email"});
        }
        const findMail=Users.find((m)=>m.email===email);
        // if(findMail){
        //     return res.status(409).json({message:"Email already exists"});
        // }
        const hashedPassWord = await bcrypt.hash(password,10);
        Users.push({
            id:Users.length+1,
            name,
            email,
            password:hashedPassWord
        });
            return res.status(201).json({message:"Registration successful..."});
    }catch(err){
        console.log("error===>",err);
        res.status(500).json({message:"server error!"})
    }
})
//=============>Login
app.post("/api/login",async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({message:"Email and Password are required!"});
        }
        const findUser=Users.find((U)=>U.email===email);
        if(!findUser){
            return res.status(404).json({message:"Wrong email or password..."});
        }
        const isMatch= await bcrypt.compare(password,findUser.password);
        if(isMatch){
            return res.status(200).json({message:"Login successful"});
        }else{
            return res.status(401).json({message:"Password is wrong..."});
        }
    }catch(err){
        return res.status(500).json({message:"Server Error!"});
    }
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})