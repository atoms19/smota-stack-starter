# SmotaStack Readme  

SmotaStack is a modern full-stack starter kit combining Next.js, Auth.js, Drizzle ORM, Tailwind CSS, ShadCN UI, and NeonDB. This guide focuses on setting up the project and customizing it for your needs after installation.  

---

## Getting Started  

### 1. Install Dependencies  
Run the following command to install the required packages:  
```bash  
npm install  
```  

---

### 2. Configure Environment Variables  
Create a `.env.local` file in the root directory and add the following environment variables:  

```env  
# Next.js API  
NEXT_PUBLIC_API_URL=http://localhost:3000  

# Auth.js  
AUTH_SECRET=your_auth_secret  
AUTH_PROVIDER_ID=your_provider_id  
AUTH_PROVIDER_SECRET=your_provider_secret  

# Database (NeonDB)  
DATABASE_URL=your_neon_db_connection_string  
```  

---

### 3. Running Database Migrations  

#### Step 1: Configure Drizzle  
Ensure your database schema is defined in `/db/schema.ts`.  

#### Step 2: Run Migrations  
Generate and push migrations using Drizzle CLI:  
```bash  
npx drizzle-kit generate:migrations  
npx drizzle-kit push  
```  

---

### 4. Authentication Setup  

#### Middleware  
Set up authentication middleware by adding the following to `middleware.ts`:  
```javascript  
import { authMiddleware } from "next-auth/middleware";  

export default authMiddleware({  
  publicRoutes: ["/login", "/signup"],  
});  

export const config = { matcher: ["/protected-route"] };  
```  

#### Auth.js Configuration  
Update `/pages/api/auth/[...nextauth].ts` with your preferred authentication providers:  
```javascript  
import NextAuth from "next-auth";  
import Providers from "next-auth/providers";  

export default NextAuth({  
  providers: [  
    Providers.Google({  
      clientId: process.env.AUTH_PROVIDER_ID,  
      clientSecret: process.env.AUTH_PROVIDER_SECRET,  
    }),  
  ],  
  secret: process.env.AUTH_SECRET,  
});  
```  

---

### 5. Adding Components with ShadCN UI  

#### Step 1: Install a Component  
Run the ShadCN UI CLI to install components:  
```bash  
npx shadcn add button  
```  

#### Step 2: Use the Component  
Import and use components in your app:  
```javascript  
import { Button } from "@/components/ui/button";  

export default function Home() {  
  return <Button>Click Me</Button>;  
}  
```  

#### Step 3: Customize Components  
Modify the styles in `tailwind.config.js` or override the component styles directly in `/components/ui/`.  

---

### 6. Customizing Tailwind  

#### Update Colors  
Modify the theme in `tailwind.config.js`:  
```javascript  
module.exports = {  
  theme: {  
    extend: {  
      colors: {  
        primary: "#4CAF50",  
        secondary: "#FFC107",  
      },  
    },  
  },  
};  
```  

#### Add Utilities  
Add custom utilities or plugins to enhance your styling capabilities.  

---

## Running the Application  

Start the development server:  
```bash  
npm run dev  
```  

Visit [http://localhost:3000](http://localhost:3000) to view your app.  

---

## Next Steps  

1. **Secure Routes**: Define protected and public routes using middleware.  
2. **Integrate APIs**: Connect the backend endpoints with database queries using Drizzle ORM.  
3. **Deploy**: Set up a deployment pipeline using Vercel or your preferred platform.  

