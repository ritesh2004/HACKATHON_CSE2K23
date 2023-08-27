"use client"
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Appcontext from '@/context/Appcontext'
import LargeModal from '@/components/LargeModal'
import { useRouter } from 'next/navigation'
// const Razorpay = require('razorpay');

function page() {
    let { arr, updateRow } = useContext(Appcontext);
    const [amount, setAmount] = useState("100");
    const [open, setOpen] = useState(false);
    const [openAb, setOpenAb] = useState(false);

    const router = useRouter();

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src

            script.onload = () => {
                resolve(true)
            }

            script.onerror = () => {
                resolve(false)
            }

            document.body.appendChild(script)
        })
    }

    const initPayment = async (id) => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            alert("You are offline! Failed to load...")
        }

        var options = {
            "key": "rzp_test_h2zT2LYD0DiE3S", // Enter the Key ID generated from the Dashboard
            "amount": Number(amount) * 100,
            "currency": "INR",
            "name": "PhilanthroWave",
            "description": "Thank you so much for helping",
            "image": "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
            "prefill":
            {
                "email": "ritesh@gmail.com",
                "contact": +919912002300,
            },

            "handler": function (response) {
                alert("Payment successful")
                alert(response.razorpay_payment_id);
                // console.log(response)
                if (response) {
                    updateRow(id, amount)
                }
            },

        }
        const rzp1 = new window.Razorpay(options)
        rzp1.open()
    }

    // console.log(amount)

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
                            let raised_percent = ((data?.raised / data?.amount) * 100).toFixed(2) + "%"
                            return (<div class="xl:w-1/4 md:w-1/2 p-4">
                                <div class="p-6 rounded-2xl shadow-2xl">
                                    <Image width={720} height={400} class="h-40 rounded w-full object-cover object-center mb-6" src={data?.image_url} alt="content" />
                                    {data?.urgent && <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">URGENT</h3>}
                                    <h2 class="text-xl capitalize text-gray-900 font-bold title-font mb-2 cursor-pointer" onClick={()=>router.push(`/${data?.id}`)}>{data?.heading}</h2>
                                    <p class="leading-relaxed text-base text-center">{data?.name}</p>

                                    <div class="flex justify-between mb-1">
                                        <span class="text-base font-medium text-green-700 dark:text-white">Raised</span>
                                        <span class="text-sm font-medium text-green-700 dark:text-white">{raised_percent}</span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                                        <div class="bg-green-600 h-2.5 rounded-full" style={{ width: raised_percent }}></div>
                                    </div>

                                    <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900" onClick={() => setOpen(true)}>Donate</button>

                                    {open && <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 w-full p-4 flex justify-center items-center overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                        <div class="relative w-full max-w-2xl max-h-full">

                                            <div class="relative bg-white rounded-lg shadow-2xl dark:bg-gray-700">

                                                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                                        Amount to be Donated
                                                    </h3>
                                                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal" onClick={() => setOpen(false)}>
                                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div class="p-6 flex flex-row gap-5">
                                                    <div class="flex items-center mb-4">
                                                        <input id="op-1" type="radio" name="amount" onChange={(e) => setAmount(e.target.value)} value="100" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" defaultChecked />
                                                        <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            100/-
                                                        </label>
                                                    </div>
                                                    <div class="flex items-center mb-4">
                                                        <input id="op-2" type="radio" name="amount" onChange={(e) => setAmount(e.target.value)} value="1000" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            1000/-
                                                        </label>
                                                    </div>
                                                    <div class="flex items-center mb-4">
                                                        <input id="op-3" type="radio" name="amount" onChange={(e) => setAmount(e.target.value)} value="5000" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            5000/-
                                                        </label>
                                                    </div>
                                                    <div class="flex items-center mb-4">
                                                        <input id="op-4" type="radio" name="amount" onChange={(e) => setAmount(e.target.value)} value="10000" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            10,000/-
                                                        </label>
                                                    </div>
                                                    <div class="flex items-center mb-4">
                                                        <input id="op-5" type="radio" name="amount" onChange={(e) => setAmount(e.target.value)} value="20000" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                                        <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                            20,000/-
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                    <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => initPayment(data?.id)}>Proceed</button>
                                                    <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => setOpen(false)}>Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>}
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
