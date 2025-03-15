"use client"
import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useProcedures } from '@/lib/remote';
import { useState } from 'react';

export default function PostPage() {


  const [name, setName] = useState("");
  const qclient =useQueryClient()

  const procedures = useProcedures()
  const latestPost=useSuspenseQuery(procedures.posts.getLatest.queryOptions());

  const createPost=useMutation(procedures.posts.create.mutationOptions({
    onSuccess:async ()=>{
        qclient.invalidateQueries({queryKey:procedures.posts.pathKey()})
        setName("")
    }
  }))

  return  (
    <div className="w-full h-full max-w-xl p-10 mx-auto">
      <h1 className='text-4xl font-bold  w-full pt-10 py-2'>posts</h1>
    <p className='text-gray-400 mb-5'>you might wonder why is this here , it is here to showcase the instant speed of making forms out of trpc and tanstack query </p>

    {latestPost ? (
      <p className="truncate"><span >Your most recent post:</span> <span className='text-purple-600 font-bold ml-0.5'>{latestPost.data.name}</span></p>
    ) : (

      <p className='text-slate-500'>You have no posts yet.</p>
    )}
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ name });
      }}
      className="flex mt-10 flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Title"
         value={name}
        onChange={(e) => setName(e.target.value)}
        className="outline-0 focus:ring-2 ring-purple-400 ring-offset-2 dark:text-white dark:ring-offset-black dark:border-gray-400 border-gray-200 focus:border-purple-500 border-2 rounded-lg px-4 py-2 text-black"
      />
      <button
        type="submit"
            className="rounded-xl mt-1 border border-solid border-transparent transition-colors flex items-center  justify-center bg-purple-400 text-purple-950 gap-2 hover:bg-purple-500 dark:hover:bg-[#f8c8c8] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
         disabled={createPost.isPending}
      >
         {createPost.isPending ? "Submitting..." : "Submit"} 
      </button>
    </form>
  </div>
  )
}