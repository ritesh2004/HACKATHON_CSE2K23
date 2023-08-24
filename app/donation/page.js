"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Appcontext from '@/context/Appcontext'

function page() {
    let { arr } = useContext(Appcontext);
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">Help us <span className='text-blue-700'>save</span> the world</h1>
                            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <section class="text-gray-600 body-font">
                        <div class="container px-5 py-24 mx-auto">
                            <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                                <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Raise For Help</h1>
                                <Link href='/fundraise'>
                                    <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Raise Fund</button>
                                </Link>
                            </div>
                        </div>
                    </section>
                    <div class="flex flex-wrap -m-4">
                        {arr?.map((data) => {
                            let raised_percent = ((data?.raised / data?.amount)*100).toFixed(2) + "%"
                            return (<div class="xl:w-1/4 md:w-1/2 p-4">
                                <div class="p-6 rounded-2xl shadow-2xl">
                                    <Image width={720} height={400} class="h-40 rounded w-full object-cover object-center mb-6" src={data?.image_url} alt="content" />
                                    {data?.urgent && <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">URGENT</h3>}
                                    <h2 class="text-xl capitalize text-gray-900 font-bold title-font mb-2">{data?.heading}</h2>
                                    <p class="leading-relaxed text-base text-center">{data?.name}</p>

                                    <div class="flex justify-between mb-1">
                                        <span class="text-base font-medium text-green-700 dark:text-white">Raised</span>
                                        <span class="text-sm font-medium text-green-700 dark:text-white">{raised_percent}</span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                                        <div class="bg-green-600 h-2.5 rounded-full" style={{width:raised_percent}}></div>
                                    </div>

                                    <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Donate</button>

                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page