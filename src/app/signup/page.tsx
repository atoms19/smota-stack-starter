"use client";


export default function signUp() {
   return (
      <div className="w-full py-20 mx-auto max-w-lg">
          <h1 className='text-4xl font-bold  w-full pt-10 py-2'>Sign up</h1>
    <p className='text-gray-400 mb-5'> if you are too lazy to make your own signin and signup page just use this .and modify as you go  else delete this auth folder</p>

        <div className="flex flex-col mt-10 gap-1">
        <a
               className="rounded-xl border border-solid border-black/[.8] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:text-black dark:hover:bg-[#e2dede] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          
        >sign in with Google </a>   
         <a
               className="rounded-xl border border-solid border-black/[.8] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:text-black dark:hover:bg-[#e2dede] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          
        >sign in with Github </a>

        </div>
            <div className="my-10 w-full h-0.5 bg-gray-300 text-center "><span style={{
                transform:'translateY(-50%)'
            }}>OR</span></div>
         <form className="flex flex-col gap-2">
            <input
               type="email"
               placeholder="enter your email"
               className="outline-0 focus:ring-2 ring-purple-400 ring-offset-2 dark:text-white dark:ring-offset-black dark:border-gray-400 border-gray-200 focus:border-purple-500 border-2 rounded-lg px-4 py-2 text-black"
            />
            <button
               type="submit"
               
               className="rounded-xl mt-1 border border-solid border-transparent transition-colors flex items-center  justify-center bg-purple-400 text-purple-950 gap-2 hover:bg-purple-500 dark:hover:bg-[#f8c8c8] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            >Create Account</button>
         </form>
      </div>
   );
}
