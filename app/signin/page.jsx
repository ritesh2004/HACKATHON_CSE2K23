"use client"
import Authcontext from '@/context/Authcontext'
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'


function Page() {
    const router = useRouter()
    let {logIn,err,loading} = useContext(Authcontext);
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 class="title-font font-medium text-5xl text-gray-900">Welcome to the PhilanthroWave</h1>
                    <p class="leading-relaxed mt-4 text-2xl">Let's log you in quickly</p>
                </div>
                <div class="lg:w-2/6 md:w-1/2 rounded-2xl shadow-2xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <form onSubmit={logIn}>
                    <h2 class="text-gray-900 text-4xl font-medium title-font mb-5">Sign In</h2>
                    <div class="relative mb-4">
                        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div class="relative mb-4">
                        <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    {err&&<span className='text-red-500'>Something went wrong!</span>}
                    <br/>
                    <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type='submit' disabled={loading} style={loading?{backgroundColor:'gray',cursor:'not-allowed'}:{}} onClick={()=>router.push('/')}>Sign In</button>
                    <p class="text-md text-gray-500 mt-3">Don't have an account? <a className='text-blue-500 cursor-pointer underline' href='/signup'>Create One</a></p>
                </form>
                </div>
            </div>
        </section>
    )
}

export default Page