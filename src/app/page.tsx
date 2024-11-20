
import { Code2Icon, Database, Globe2Icon, Shield, SwatchBook } from "lucide-react";
import Image from "next/image";

export default function Home() {


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className=""
          src="/smota.svg"
          alt="smota stack logo"
          width={704}
          height={220}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>see the changes in real time</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-xl border border-solid border-transparent transition-colors flex items-center  justify-center bg-purple-400 text-purple-950 gap-2 hover:bg-purple-500 dark:hover:bg-[#f8c8c8] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
           <Globe2Icon className="w-5 h-5 text-purple-950"/>
            Deploy now
          </a>
          <a
            className="rounded-xl border border-solid border-black/[.8] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:text-black dark:hover:bg-[#e2dede] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open all references
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div
          className="flex items-center gap-1"
        
        >
          <Code2Icon className="w-5 h-5 text-stone-600"/>
          <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
           target="_blank"
          rel="noopener noreferrer"
        >
          Nextjs</a>
          + <a className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href='https://react.dev'
          target="_blank"
          rel="noopener noreferrer">
            React
          </a>
        </div>
        <div

        className="flex items-center gap-1"
         
        >
          
          <SwatchBook className="w-5 h-5 text-stone-600" />
          <a 
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer">
            tailwind
          </a> +  <a 
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://ui.shadcn.com/docs/cli"
          target="_blank"
          rel="noopener noreferrer">
            shadcn UI
          </a>
        </div>
        <div 
        className="flex items-center gap-1"
        >
          <Database className="w-5 h-5 text-stone-600" />

          <a 
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://orm.drizzle.team/docs/" 
          target="_blank"
          rel="noopener noreferrer"> 
          drizzle
          </a> +  <a 
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://console.neon.tech/" 
          target="_blank"
          rel="noopener noreferrer"> 
          Neon db
          </a>
        </div>
        <div 
        className="flex items-center gap-1"
        >
       <Shield className="h-5 w-5 text-stone-600"/>

          <a 
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://authjs.dev/getting-started/installation?framework=Next.js" 
          target="_blank"
          rel="noopener noreferrer"> 
          Auth js
          </a> +  <a 
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://console.cloud.google.com/apis/credentials" 
          target="_blank"
          rel="noopener noreferrer"> 
          Google auth
          </a>
        </div>
      </footer>
    </div>
  );
}
