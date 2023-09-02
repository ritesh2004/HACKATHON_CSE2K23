"use client"
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Appcontext from '@/app/context/Appcontext'
import LargeModal from '@/components/LargeModal'
import { useRouter } from 'next/navigation';
import DeleteIcon from '@mui/icons-material/Delete';
import Authcontext from '../context/Authcontext'
import ChatIcon from '@mui/icons-material/Chat';
// const Razorpay = require('razorpay');

function Page() {
    let { arr, updateRow,deleteRow,getRows } = useContext(Appcontext);
    let {userInfo} = useContext(Authcontext);
    const [amount, setAmount] = useState("100");
    const [open, setOpen] = useState(false);
    const [openAb, setOpenAb] = useState(false);

    const router = useRouter();

    useEffect(()=>{
        getRows
    },[arr])

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
            <section class="text-gray-600 body-font relative">
            <div onClick={()=>router.push('/comment')}>
            <ChatIcon style={{width:'80px',height:'80px',padding:'15px',borderRadius:'50%'}} className='fixed bottom-5 right-5 bg-blue-700 color-white-500 cursor-pointer'/>
            </div>
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">Help us <span className='text-blue-700'>save</span> the world</h1>
                            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Saving the world is not in our hands but it is possible only by an equal amount of effort from each living being to make Earth a better living place. I urge everybody to come forward and be a part of change.</p>
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
                        {arr?.map((data, id) => {
                            let raised_percent = ((data?.raised / data?.amount) * 100).toFixed(2) + "%"
                            return (<div class="xl:w-1/4 md:w-1/2 p-4" key={id}>
                                <div class="p-6 rounded-2xl shadow-2xl w-80 relative xl:w-full">
                                    <Image width={500} height={300} class="h-40 rounded w-full object-cover object-center mb-6" src={data?.image_url} alt="content" />
                                    {data?.urgent && <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">URGENT</h3>}
                                    <h2 class="text-xl capitalize text-gray-900 font-bold title-font mb-2 cursor-pointer" onClick={() => router.push(`/${data?.id}`)}>{data?.heading}</h2>
                                    <p class="leading-relaxed text-base text-center">{data?.name}</p>

                                    <div class="flex justify-between mb-1">
                                        <span class="text-base font-medium text-green-700 dark:text-white">Raised</span>
                                        <span class="text-sm font-medium text-green-700 dark:text-white">{raised_percent}</span>
                                    </div>
                                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                                        <div class="bg-green-600 h-2.5 rounded-full" style={{ width: raised_percent }}></div>
                                    </div>
                                    {userInfo?.email===data?.email&&<div className='flex flex-row absolute bottom-5 right-5 gap-5 hover:bg-sky-100 p-2 rounded-lg cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>deleteRow(data?.id)} width="25" height="25" fill="red" className="bi bi-trash3" style={{boxShadow:'0px 5px 10px rgba(0,0,0,0.2)',padding:'5px',borderRadius:'50%'}} viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>router.push(`/edit/${data?.id}`)} width="" height="" fill="blue" class="bi bi-pencil-square" style={{boxShadow:'0px 5px 10px rgba(0,0,0,0.2)',padding:'5px',borderRadius:'50%'}} viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </div>}
                                    <div>
                                        <div class="flex items-center mb-4">
                                            <input id="option-1" type="radio" name="amount" onChange={e => setAmount(e.target.value)} value="500" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                500/-
                                            </label>
                                        </div>
                                        <div class="flex items-center mb-4">
                                            <input id="option-2" type="radio" name="amount" onChange={e => setAmount(e.target.value)} value="5000" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="option-2" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                5000/-
                                            </label>
                                        </div>
                                        <div class="flex items-center mb-4">
                                            <input id="option-3" type="radio" name="amount" onChange={e => setAmount(e.target.value)} value="10000" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="option-3" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                10,000/-
                                            </label>
                                        </div>
                                    </div>

                                    <button type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900" onClick={() => initPayment(data?.id)}>Donate</button>

                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page
