"use client"
import Appcontext from '@/app/context/Appcontext'
import Image from 'next/image'
import React, { useContext, useEffect } from 'react'

const Page = ({ params }) => {
    const {getRow,row} = useContext(Appcontext)
    useEffect(()=>{
        getRow(params?.story)
        // console.log(row)
    },[row])
    // console.log(params?.story)
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image class="object-cover object-center rounded" alt="hero" src={row[0]?.image_url} width={400} height={350}/>
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {row[0]?.heading}
                    </h1>
                    <p class="mb-8 leading-relaxed">
                        {row[0]?.reason}
                    </p>
                    <p class="mb-8 leading-relaxed text-green-700 font-extrabold">
                       Raised: {row[0]?.amount} /-
                    </p>
                    {row[0]?.urgent&&<p class="mb-8 leading-relaxed text-red-700 font-extrabold">
                       URGENT
                    </p>}
                    <p class="mb-8 leading-relaxed font-extrabold">
                       Address: {row[0]?.address}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Page