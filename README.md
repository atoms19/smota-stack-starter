# SmotaStack Readme  

SmotaStack is a modern full-stack starter kit combining Next.js,tRPC, Auth.js, Drizzle ORM, Tailwind CSS, ShadCN UI, and NeonDB. This guide focuses on setting up the project and customizing it for your needs after installation.  

---

## Getting Started  

### 1. Install Dependencies  
Run the following command to install the required packages:  
```bash  
pnpm install  
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

or you could rename the existing `exapmple.env` to `.env.local`

---

## Running the Application  

Start the development server:  
```bash  
pnpm run dev  
```  

Visit [http://localhost:3000](http://localhost:3000) to view your app.  

---


### 3. Running Database Migrations  

### step 0 : Connection String
Add your database connection string to the `.env.local` 

``` DATABASE_URL= your_postgres_connection_string  
```
#### Step 1: Configure Drizzle  
Ensure your database schema is defined in `/db/schema.ts`.  

#### Step 2: Run Migrations And Push 
Generate and push migrations using db helpers

```bash
pnpm run db:update
```
> note :  `db:update` is combination of db:migrate and `db:push`

---

### 4. Authentication Setup  

### step 1: Generate Auth Secret
to generate auth secret and initialize auth run 
```bash
pnpm run auth:init
```

#### step 2 :Middleware  
Set up authentication middleware by adding the following to `middleware.ts`:  
```javascript  


export default auth(async (req) => {

   let publicPaths=[
      "/",
      "/auth/signup", 
      "/posts"
   ]

   if (!req.auth && !publicPaths.includes(req.nextUrl.pathname)){
      const newUrl = new URL("/auth/signup", req.nextUrl.origin);
      return NextResponse.redirect(newUrl);
   } else {

   }
});
```

after you run auth:init smota stack will automatically redirect all the routes to signup page unless its mentioned in the publicPaths 
so add the paths to `publicPaths` if u dont want them secured by auth 


#### Auth.js Configuration  
Update `/pages/api/auth/[...nextauth].ts` with your preferred authentication providers:  
```javascript  

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
To Install predefined components from shadcn UI component library use the `ui:add` helper followed by component name or just itself to choose multiple components   
```bash  
pnpm run ui:add button
```  

#### Step 2: Use the Component  
Import and use components in your app:  
```tsx
import { Button } from "@/components/ui/button";  

export default function Home() {  
  return <Button>Click Me</Button>;  
}  
```  

#### Step 3: Customize Components  
Modify the styles in `/app/styles/global.css` or override the component styles directly in `/components/ui/`.  

---

### 6. Customizing Tailwind  

#### Update Colors  
Modify the theme in `app/styles/global.css` by defiing css variables for colors fonts etc 
```css
@theme{  
    --primary: #4CAF50;  
    ---secondary: #FFC107;    
}
```  
then you can use `bg-primary` `text-secondary` etc this also applies to fonts 


# Defining procedures and routers 
procedures are the default way to deal with server calls in smota stack they replace traditional REST APIs 
procedures can be for data fetching mutations or any other secured or non secured action that you want to run on the server 

to define procedures head to `/procedures/`
here you can see `./routes` folder and `router.ts` file 
you can directly define the routes in the `router.ts` file

```ts
export const procedureRouter=defineProcedures({
    "say":baseProcedure.query(
        ()=> "hello"
    )
})
```
`baseProcedures` are used for procedures that are used in normal cases where u dont want additional security
and `secureProcedures` are used where you want additional security 
`mutations` are used to mutate data
see trpc documentation for more 

to run a procedure in a server component use the `serverCall`
```tsx
import {serverCall} from "@/lib/serverProcedures"

export default function RandomComponent(){
   let message= serverCall.say()

  return (
    <div>
      server said :{message}
    </div>
  )
}
```

to run a procedure in a client component use `useQuery()` and `useProcedures()` hooks you can see an example in the posts page of the starter template 
where revalidation is also being done

```tsx
"use client"
import {serverCall} from "@/lib/serverProcedures"

export default function RandomComponent(){

  let procedures=useProcedures()
  let message= useQuery(procedures.say.queryOptions())

  return (
    <div>
      server said :{message.data}
    </div>
  )
}

```



## Next Steps  

1. **Secure Routes**: Define protected and public routes using middleware.  
2. **Integrate APIs**: Connect the backend endpoints with database queries using Drizzle ORM.  
3. **Deploy**: Set up a deployment pipeline using Vercel or your preferred platform.  

