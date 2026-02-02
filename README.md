# نظام تسجيل وتسجيل دخول - Backend بـ Node.js و Express و bcrypt

## نظرة عامة
المشروع ده بيطبق نظام **تسجيل مستخدمين وتسجيل دخول** باستخدام **Node.js** و **Express** و **bcrypt**.  
المستخدمين يقدروا **يسجلوا** و **يسجلوا دخولهم** بطريقة آمنة مع حفظ كلمات المرور بشكل مشفر.

---

## ما تم تعلمه

### 1️⃣ إعداد Express
- إنشاء سيرفر باستخدام Express.  
- استخدام `app.use(express.json())` لقراءة JSON من الـ body.  
- إعداد Routes:  
  - GET `/` → رسالة ترحيبية  
  - POST `/api/register` → تسجيل مستخدم جديد  
  - POST `/api/login` → تسجيل دخول مستخدم  

### 2️⃣ إدارة بيانات المستخدمين
- تعريف **TypeScript interface** للمستخدمين:

```ts
interface User {
  id?: number,
  name: string,
  email: string,
  password: string
}
```

-->أهم النقاط المستفادة

تشفير كلمات المرور مهم جدًا (bcrypt hash).

التحقق من البيانات قبل المعالجة يحمي السيرفر.

استخدام Status Codes صحيحة يحسن احترافية الـ API.

فهم async/await مع try/catch أساسي في backend.

طباعة الأخطاء في التيرمنال أفضل من إخفائها

تثبيت الحزم:
```
npm install express bcrypt
npm install -D @types/bcrypt @types/express
npx ts-node index.ts
