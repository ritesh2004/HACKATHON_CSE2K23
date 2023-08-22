"use client"
import Authcontext from '@/context/Authcontext';
import React, { useContext, useState } from 'react'

function page() {
    let { signUp, loading, sent, err,setSent } = useContext(Authcontext);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    console.log("sent",sent);
    return (
        <>
        {/* Modal  */}
        {sent&&<div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 p-4 w-full h-full flex items-center justify-center overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal" onClick={()=>{setSent(false)}}>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">A confirmation mail has been sent. Please verify your mail</h3>
            </div>
        </div>
    </div>
</div>}

        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 class="title-font font-medium text-5xl text-gray-900">Welcome to PhilanthroWave</h1>
                    <p class="leading-relaxed mt-4 text-2xl">Let's sign you up quickly</p>
                </div>
                <div class="lg:w-2/6 md:w-1/2 rounded-2xl shadow-2xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <form onSubmit={signUp}>
                        <h2 class="text-gray-900 text-4xl font-medium title-font mb-5">Sign Up</h2>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        {err && <span className='text-red-500'>Something went wrong!</span>}
                        <br />
                        <button type='submit' class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" disabled={loading} style={loading ? { backgroundColor: 'gray', cursor: 'not-allowed' } : {}}>Sign Up</button>
                        <p class="text-md text-gray-500 mt-3">Already have an account? <a className='text-blue-500 cursor-pointer underline' href='/signin'>Log In</a></p>
                    </form>
                </div>
            </div>
            </section>
            
            </>
    )
}

export default page