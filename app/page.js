"use client"
import { useContext, useEffect, useState } from "react";
import Diversity1Icon from '@mui/icons-material/Diversity1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Authcontext from "@/context/Authcontext";
import Image from "next/image";
import Link from "next/link";
import Appcontext from "@/context/Appcontext";

export default function Home() {

  const {donated,applicants} = useContext(Appcontext)

  return (
    <div className="">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">Donating is about making
              a <span className="text-blue-700">Differenece.</span>
              {/* <br class="hidden lg:inline-block">readymade gluten/</br> */}
            </h1>
            <p class="mb-8 leading-relaxed">We should never get tired of doing little things for others, sometimes those little things occupy the best parts of their hearts. When one gives two gets happy and that is how the world gets going. Let us cherish each moment of our living but just donating a penny and be the part of the change we want to see.</p>
            <div class="flex justify-center">
              <Link href="/donation">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Donate Now ❤️</button></Link>
              <Link href="/fundraise">
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Raise For Fund</button></Link>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image width={720} height={600} class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Essential Information</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">This part contains all important points a person donating should know before giving their money to our fundraising organization.</p>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M8 17l4 4 4-4m-4-5v9"></path>
            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
          </svg> */}
                <Diversity1Icon style={{ height: '50px', width: '50px', color: 'blue' }} />
                <h2 class="title-font font-medium text-3xl text-gray-900">{applicants}</h2>
                <p class="leading-relaxed">Applicants</p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg> */}
                <GroupAddIcon style={{ height: '50px', width: '50px', color: 'blue' }} />
                <h2 class="title-font font-medium text-3xl text-gray-900">{applicants}</h2>
                <p class="leading-relaxed">Beneificery</p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
          </svg> */}
                <CurrencyRupeeIcon style={{ height: '50px', width: '50px', color: 'blue' }} />
                <h2 class="title-font font-medium text-3xl text-gray-900">{donated}</h2>
                <p class="leading-relaxed">Donated</p>
              </div>
            </div>
            {/* <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <Diversity3Icon style={{ height: '50px', width: '50px', color: 'blue' }} />
                <h2 class="title-font font-medium text-3xl text-gray-900">46</h2>
                <p class="leading-relaxed">Donors</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  )
}
