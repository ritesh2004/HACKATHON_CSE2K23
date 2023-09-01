"use client"
import React, { useContext, useState } from 'react'
import Authcontext from '../context/Authcontext'
import Appcontext from '../context/Appcontext';

function Page() {
    let {postComments,loading,comments} = useContext(Appcontext)
    const [comment,setComment] = useState();
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Comment Section</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">We deeply appreciate your review and experience for our website</p>
                </div>
                <div className='max-w-full'>
                    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end justify-center">
                        <div class="w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div class="flex items-center justify-center mb-4">
                                <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">User comments</h5>
                            </div>
                            <div class="flow-root">
                                <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                                    {comments?.map((item)=>{
                                        let time = new Date().toDateString(item?.created_at)
                                        {/* console.log(time) */}
                                        return(
                                        <li class=" py-3 sm:py-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    {item?.user}
                                                </p>
                                                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {item?.comments}
                                                </p>
                                            </div>
                                            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {time}
                                            </div>
                                        </div>
                                    </li>
                                        )
                                    })}
                                </ul>
                            </div>

                            <form onSubmit={postComments}>
                                <label for="chat" class="sr-only">Your message</label>
                                <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                                    {/*  */}
                                    <textarea id="chat" name='comment' onChange={(e)=>setComment(e.target.value)} value={comment} rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                                    <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                                        <svg class="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                                        </svg>
                                        <span class="sr-only">Send message</span>
                                    </button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page