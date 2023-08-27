"use client"
import Appcontext from '@/app/context/Appcontext';
import React, { useContext, useEffect, useState } from 'react'

const Page = () => {
    let {postFeedback,sent} = useContext(Appcontext)
    const [email,setEmail] = useState();
    const [feedback,setFeedback] = useState();
    useEffect(()=>{
        if(sent){
            setEmail("");
            setFeedback("");
        }
    },[sent])
  return (
    <section class="text-gray-600 body-font relative">
    <div id='map'>

    </div>
  <div class="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35231274091!2d88.26495097637454!3d22.535406374520655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1693114921059!5m2!1sen!2sin"></iframe>
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p class="leading-relaxed mb-5 text-gray-600">Share your thoughts! Tell us what you love and how we can make your experience even better. Your feedback matters!</p>
      <form onSubmit={postFeedback}>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="feedback" name="feedback" value={feedback} onChange={(e)=>setFeedback(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type='submit'>Send</button>
      </form>
    </div>
  </div>
</section>
  )
}

export default Page