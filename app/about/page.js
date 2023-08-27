import React from 'react';
import Image from 'next/image';
function page() {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-20 mx-auto flex text-center flex-col">
                    <h1 class="sm:text-5xl text-2xl font-medium title-font mb-4 text-gray-900">Be The <span className='text-blue-700'>Change</span></h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base mb-5">Mattis et aliquam fermentum sed sagittis eu elit mauris. Nisl eros vel neque vitae lorem molestie.</p>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full shadow-2xl px-8 pt-16 pb-24 rounded-2xl overflow-hidden text-center relative">
                                <svg className='w-full text-center mb-1' width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M16.0003 6.14625L14.1794 4.27454C11.3096 1.32603 5.94337 2.30125 3.99547 6.10308C3.1066 7.84273 2.85009 10.4382 4.59482 13.8794C6.24812 17.1505 9.70203 21.1301 16.0003 25.5033C22.2961 21.1276 25.75 17.1479 27.4058 13.8794C29.1505 10.4382 28.8966 7.84273 28.0052 6.10562C26.0573 2.30125 20.691 1.32603 17.8212 4.27454L16.0003 6.14625ZM14.7559 27.7331C-12.6214 8.83826 7.137 -5.67574 15.6676 2.1768C15.7819 2.28093 15.8937 2.39013 16.0029 2.50442C16.1121 2.39013 16.2238 2.28093 16.3381 2.1768C24.8713 -5.67574 44.622 8.8408 17.2447 27.7331L17.8416 28.9217C17.8789 28.9964 17.9012 29.0777 17.9071 29.161C17.913 29.2444 17.9025 29.328 17.8761 29.4073C17.8496 29.4865 17.8079 29.5598 17.7532 29.6229C17.6984 29.6859 17.6318 29.7377 17.5571 29.775C17.4824 29.8124 17.4011 29.8346 17.3178 29.8406C17.2344 29.8465 17.1508 29.8359 17.0715 29.8095C16.9923 29.7831 16.919 29.7413 16.8559 29.6866C16.7928 29.6319 16.7411 29.5653 16.7038 29.4906L16.6835 29.4474C16.7038 29.7268 16.7343 29.9604 16.7774 30.1839C16.9146 30.8696 17.1863 31.4232 17.8416 32.7311C18.573 34.199 18.4384 35.6517 18.0346 36.8682C17.6358 38.0593 16.9628 39.0701 16.5413 39.6999L16.5311 39.7177C16.4847 39.787 16.4252 39.8466 16.3558 39.8929C16.2864 39.9393 16.2086 39.9715 16.1268 39.9878C16.0449 40.0041 15.9607 40.0041 15.8789 39.9878C15.797 39.9715 15.7192 39.9393 15.6498 39.8929C15.5805 39.8465 15.5209 39.787 15.4746 39.7176C15.4282 39.6482 15.396 39.5704 15.3797 39.4886C15.3634 39.4067 15.3634 39.3225 15.3797 39.2407C15.396 39.1588 15.4283 39.081 15.4746 39.0117C15.9013 38.3717 16.4905 37.4879 16.8282 36.4644C17.166 35.4587 17.2422 34.3717 16.7038 33.3L16.6708 33.2289C16.0613 32.0099 15.7057 31.3039 15.533 30.4302C15.4619 30.0529 15.4177 29.671 15.401 29.2874L15.2994 29.4906C15.2624 29.5658 15.2109 29.6329 15.1479 29.6881C15.0849 29.7433 15.0115 29.7855 14.9321 29.8123C14.8527 29.839 14.7688 29.8497 14.6852 29.8439C14.6016 29.838 14.52 29.8157 14.4451 29.7781C14.3702 29.7406 14.3035 29.6886 14.2487 29.6252C14.194 29.5617 14.1524 29.488 14.1263 29.4084C14.1002 29.3288 14.0901 29.2448 14.0966 29.1613C14.1031 29.0777 14.126 28.9963 14.1642 28.9217L14.761 27.7331H14.7559ZM10.9541 5.23198C9.30584 4.77485 7.18779 5.44277 6.25574 7.25861C5.92305 7.91384 5.63353 9.00842 6.05257 10.649C6.21257 11.2687 7.10398 11.1519 7.28937 10.5398C7.8227 8.76969 8.88172 6.86497 10.7407 6.24276C11.2918 6.05736 11.5128 5.3869 10.9541 5.23198Z" fill="#1A8FE3" />
                                </svg>

                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Help</h1>
                                <p class="leading-relaxed mb-3">When we help a person in misery it is equivalent to serving God. It is our earnest request to you to come forward and help us in this great cause we are approaching step by step.</p>
                                <a class="text-indigo-500 inline-flex items-center">Learn More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full bg-blue-400 shadow-2xl px-8 pt-16 pb-24 rounded-2xl overflow-hidden text-center relative">
                                <svg className='w-full text-center mb-1' width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" d="M3.99994 37.9994H23.2396C24.3938 38 25.5343 37.7506 26.5829 37.2683C27.6314 36.786 28.563 36.0822 29.3135 35.2055L39.5174 23.3016C39.731 23.0528 39.8802 22.7553 39.9518 22.4352C40.0234 22.1151 40.0151 21.7823 39.9278 21.4662C39.8405 21.15 39.6767 20.8602 39.451 20.6223C39.2253 20.3843 38.9445 20.2056 38.6334 20.1017L34.6974 18.7897C33.7462 18.4805 32.7333 18.4105 31.7486 18.586C30.7638 18.7615 29.8375 19.177 29.0515 19.7957L22.6816 24.8896L21.4477 22.4197C20.7866 21.0882 19.7659 19.9685 18.5012 19.1874C17.2365 18.4062 15.7783 17.9948 14.2918 17.9997H3.99994C1.79397 17.9997 0 19.7937 0 21.9997V33.9995C0 36.2054 1.79397 37.9994 3.99994 37.9994ZM3.99994 21.9997H14.2918C15.8177 21.9997 17.1877 22.8457 17.8697 24.2096L18.7637 25.9996H9.99984V29.9995H22.0276C22.3353 29.9955 22.6379 29.9202 22.9116 29.7795L22.9176 29.7775L22.9256 29.7735H22.9316L22.9356 29.7715H22.9436L22.9456 29.7695C22.9636 29.7755 22.9516 29.7675 22.9516 29.7675C22.9716 29.7675 22.9556 29.7655 22.9556 29.7655H22.9576L22.9616 29.7635L22.9676 29.7615L22.9716 29.7595L22.9756 29.7575L22.9816 29.7555L22.9856 29.7535C22.9916 29.7535 22.9876 29.7515 22.9896 29.7515L22.9956 29.7475L22.9996 29.7455L23.0036 29.7435L23.0096 29.7415L23.0136 29.7395H23.0156L23.0196 29.7375H23.0216L23.0256 29.7355L23.0296 29.7335C23.0476 29.7315 23.0356 29.7315 23.0356 29.7315L23.0396 29.7295C23.1167 29.683 23.1902 29.6309 23.2596 29.5735L31.5515 22.9397C32.0755 22.5237 32.7975 22.3937 33.4315 22.6057L34.5454 22.9777L26.2796 32.6235C25.8994 33.0552 25.4317 33.4012 24.9076 33.6384C24.3835 33.8756 23.8149 33.9987 23.2396 33.9995H3.99994V21.9997ZM27.9995 1.88111e-05H27.9655C27.6396 0.00401875 25.9536 0.0780174 23.9996 1.41C22.0976 0.114017 20.4517 0.0100185 20.0637 0.00201863L20.0037 1.88111e-05H19.9957C18.3937 1.88111e-05 16.8857 0.626009 15.7577 1.75599C14.6258 2.88997 13.9998 4.39595 13.9998 5.99992C13.9998 7.6039 14.6258 9.10987 15.7217 10.2079L22.5496 17.3797C22.7375 17.5748 22.9628 17.7298 23.212 17.8357C23.4612 17.9416 23.7293 17.9961 24 17.9959C24.2708 17.9957 24.5388 17.9408 24.7878 17.8346C25.0369 17.7284 25.262 17.573 25.4496 17.3777L32.2415 10.2419C33.3755 9.10987 33.9995 7.6039 33.9995 5.99992C33.9995 4.39595 33.3735 2.88997 32.2435 1.75799C31.6882 1.19909 31.0275 0.755924 30.2997 0.454162C29.5719 0.1524 28.7914 -0.00196129 28.0036 1.88111e-05H27.9995ZM29.9995 5.99992C29.9995 6.53391 29.7915 7.03591 29.3775 7.4499L23.9996 13.0998L18.5857 7.4139C18.2077 7.03591 17.9997 6.53391 17.9997 5.99992C17.9997 5.46593 18.2077 4.96394 18.5877 4.58394C18.9494 4.21606 19.4418 4.00614 19.9577 3.99995C20.0077 4.00195 20.9617 4.06395 22.0916 4.96994C22.2536 5.09994 22.4176 5.24793 22.5856 5.41393L23.9996 6.82791L25.4136 5.41393C25.5816 5.24793 25.7456 5.09994 25.9076 4.96994C26.9656 4.11995 27.8596 4.01395 28.0116 4.00195C28.2722 4.00191 28.5303 4.05349 28.7709 4.15372C29.0116 4.25396 29.23 4.40086 29.4135 4.58595C29.7915 4.96394 29.9995 5.46593 29.9995 5.99992Z" fill="white" />
                                </svg>
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Donation</h1>
                                <p class="leading-relaxed mb-3">Alone we can do little but together we can do much, donation is not just about giving but altogether making a difference. Giving a little is a lot then not giving at all.</p>
                                <a class="text-indigo-500 inline-flex items-center">Learn More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full shadow-2xl px-8 pt-16 pb-24 rounded-2xl overflow-hidden text-center relative">
                                <svg className='w-full text-center mb-1' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="fluent:person-heart-20-regular">
                                        <path id="Vector" d="M22.5 5C19.8478 5 17.3043 6.05357 15.4289 7.92893C13.5536 9.8043 12.5 12.3478 12.5 15C12.5 17.6522 13.5536 20.1957 15.4289 22.0711C17.3043 23.9464 19.8478 25 22.5 25C25.1522 25 27.6957 23.9464 29.5711 22.0711C31.4464 20.1957 32.5 17.6522 32.5 15C32.5 12.3478 31.4464 9.8043 29.5711 7.92893C27.6957 6.05357 25.1522 5 22.5 5ZM15 15C15 13.0109 15.7902 11.1032 17.1967 9.6967C18.6032 8.29018 20.5109 7.5 22.5 7.5C24.4891 7.5 26.3968 8.29018 27.8033 9.6967C29.2098 11.1032 30 13.0109 30 15C30 16.9891 29.2098 18.8968 27.8033 20.3033C26.3968 21.7098 24.4891 22.5 22.5 22.5C20.5109 22.5 18.6032 21.7098 17.1967 20.3033C15.7902 18.8968 15 16.9891 15 15ZM10.0225 27.5C9.36409 27.4974 8.71164 27.6247 8.10256 27.8748C7.49348 28.1249 6.93976 28.4927 6.47315 28.9572C6.00654 29.4217 5.63621 29.9738 5.38342 30.5818C5.13062 31.1897 5.00032 31.8416 5 32.5C5 36.7275 7.0825 39.915 10.3375 41.9925C13.5425 44.035 17.8625 45 22.5 45C24.8875 45 27.19 44.745 29.3 44.2175L27.35 42.0825C25.84 42.3575 24.2125 42.5 22.5 42.5C18.1625 42.5 14.3575 41.59 11.6825 39.8825C9.0575 38.2075 7.5 35.775 7.5 32.5C7.5 31.1175 8.62 30 10.0225 30H23.2475C23.6668 29.0699 24.2503 28.2231 24.97 27.5H10.02H10.0225ZM36.2475 30.0075L34.6775 28.775C33.4957 27.8462 32.0076 27.3961 30.5092 27.5141C29.0107 27.6322 27.6115 28.3098 26.5897 29.4122C25.5679 30.5146 24.9984 31.9611 24.9942 33.4643C24.9901 34.9674 25.5518 36.417 26.5675 37.525L35.325 47.1C35.4421 47.2281 35.5846 47.3304 35.7435 47.4004C35.9023 47.4704 36.0739 47.5065 36.2475 47.5065C36.4211 47.5065 36.5927 47.4704 36.7515 47.4004C36.9104 47.3304 37.0529 47.2281 37.17 47.1L45.93 37.525C46.9457 36.417 47.5074 34.9674 47.5032 33.4643C47.4991 31.9611 46.9296 30.5146 45.9078 29.4122C44.886 28.3098 43.4868 27.6322 41.9883 27.5141C40.4898 27.3961 39.0018 27.8462 37.82 28.775L36.2475 30.0075Z" fill="#1A8FE3" />
                                    </g>
                                </svg>

                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Volunteer</h1>
                                <p class="leading-relaxed mb-3">Service to others is the rent we pay for our room here on Earth. Hence, I request all of you to come forward and shake a hand. It is not always about having compassion but we must act towards the cause.</p>
                                <a class="text-indigo-500 inline-flex items-center">Learn More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Another section  */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <span className='text-blue-700 font-bold text-xl'>ABOUT US</span>
                    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        <h1 class="flex-grow sm:pr-16 text-5xl font-medium title-font text-gray-900">We are here to support <span className='text-blue-700'>vulnerable</span> communities.</h1>
                        <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Donate Now</button>
                    </div>
                </div>
            </section>
            {/* Another section  */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="text-5xl font-medium title-font mb-4 text-gray-900">Our <span className='text-blue-700'>Selfless</span> Team </h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever we as a fundraiser group collect shall be directed to the benefits of people in poverty.</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-col items-center text-center">
                                <Image width={200} height={200} alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                                <div class="w-full">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
                                    <h3 class="text-gray-500 mb-3">UI Developer</h3>
                                    <span class="inline-flex">
                                        <a class="text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-col items-center text-center">
                                <Image width={200} height={200} alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://th.bing.com/th/id/OIP._6kSqsTmX5o4yeSjGnw48AHaLH?w=138&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                                <div class="w-full">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
                                    <h3 class="text-gray-500 mb-3">UI Developer</h3>
                                    <span class="inline-flex">
                                        <a class="text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-col items-center text-center">
                                <Image width={200} height={200} alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://th.bing.com/th/id/OIP.0l7k5zqRUVQ5Yq9eTpW2LgHaLJ?w=137&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                                <div class="w-full">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
                                    <h3 class="text-gray-500 mb-3">UI Developer</h3>
                                    <span class="inline-flex">
                                        <a class="text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full flex flex-col items-center text-center">
                                <Image width={200} height={200} alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="data:image/jpeg;base64,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" />
                                <div class="w-full">
                                    <h2 class="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
                                    <h3 class="text-gray-500 mb-3">UI Developer</h3>

                                    <span class="inline-flex">
                                        <a class="text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-500">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page