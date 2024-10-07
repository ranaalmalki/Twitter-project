import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Suggestions from './Suggestions'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function UserPage() {
    const {name} = useParams()


    return (
        <div className='flex flex-wrap justify-center' >
            <div dir="rtl" className="pr-4 w-96">

                <label className="input input-bordered flex items-center gap-2 rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="text" className="grow " placeholder="بحث" />

                </label>
                <div className="border border-secondary rounded-3xl p-4 w-full mt-4">
                    <h1 className="text-2xl font-bold pb-6">ماذا يحدث
                    </h1>
                    <ul className="">
                        <li className="flex flex-wrap  justify-between flex-col">
                            <p className="flex justify-between">المتداول في المملكة العربية السعودية<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-three-dots h-5" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                            </svg></p>
                            <h5>#الديوان_الملكي</h5>
                            <p>المتداول مع #خادم_الحرمين_الشريفين، الفحوصات الطبيه</p>

                        </li>
                    </ul>
                    <Link to="/happen" className="link link-[] ">عرض المزيد</Link>
                </div>
                <Suggestions />
            </div>
            <div className="container w-1/3 border-r border-l border-primary">
                <div className=" flex gap-3 items-center p-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                    <div>
                        <h1 className='font-bold'>{}</h1>
                        <p>0 منشور </p>
                    </div>
                </div>
                <div className='p-20 bg-gray-500 relative'>

                </div>

                <div className="w-full " dir="rtl">
                    <img
                        className="h-44 absolute top-32"
                        src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
                    />
                    <button className='btn btn-outline rounded-full relative -left-96 top-4'>تعديل الملف الشخصي</button>
                    <div className='flex gap-3  pt-20'>
                        <h1 className='font-bold text-2xl'>{name}</h1>
                        <button className='btn btn-outline rounded-full'>وثق حسابك</button>
                    </div>
                    <p>{name}@</p>
                    <p>انضم في اكتوبر 2024</p>
                    <ul className='flex gap-2'>

                        <li> 3متابع</li>
                        <li>3متابع</li>
                    </ul>

                </div>
                <div role="tablist" className="tabs tabs-bordered w-full">
                    <a role="tab" className="tab ">الإعجابات</a>
                    <a role="tab" className="tab ">الوسائط</a>
                    <a role="tab" className="tab ">المقالات</a>
                    <a role="tab" className="tab ">المميزة</a>
                    <a role="tab" className="tab ">الردود</a>
                    <a role="tab" className="tab tab-active">المنشورات</a>


                </div>
                <div className=' overflow-auto' dir='rtl'>
                    <h1 className='font-bold text-2xl pb-4'>لنبدأ في الأعداد</h1>
                    <div className="carousel rounded-box gap-4">

                        <div className="carousel-item grid justify-items-center">
                            <div className='bg-gradient-to-r from-pink-500 via-violet-400 to-blue-600 w-44 h-28 flex justify-center items-center rounded-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-plus  h-7 " viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                                </svg>
                            </div>
                            <p>تابع 5 حسابات </p>
                        </div>

                        <div className="carousel-item grid justify-items-center">
                            <div className='bg-gradient-to-r from-pink-500 via-violet-400 to-blue-600 w-44 h-28 flex justify-center items-center rounded-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-plus  h-7 " viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                                </svg>
                            </div>
                            <p>تابع 5 حسابات </p>
                        </div>

                        <div className="carousel-item grid justify-items-center">
                            <div className='bg-gradient-to-r from-pink-500 via-violet-400 to-blue-600 w-44 h-28 flex justify-center items-center rounded-xl'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-plus  h-7 " viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                                </svg>
                            </div>
                            <p>تابع 5 حسابات </p>
                        </div>

                        <div className="carousel-item grid justify-items-center">
                                                 <div className='bg-gradient-to-r from-pink-500 via-violet-400 to-blue-600 w-44 h-28 flex justify-center items-center rounded-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-person-plus  h-7 " viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
</svg>
</div>
<p>تابع 5 حسابات </p>
</div>                    

                        <div className="carousel-item grid justify-items-center">
                                                 <div className='bg-gradient-to-r from-pink-500 via-violet-400 to-blue-600 w-44 h-28 flex justify-center items-center rounded-xl'>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-person-plus  h-7 " viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
</svg>
</div>
<p>تابع 5 حسابات </p>
</div>                    


                    </div>



                </div>
            </div>
            <NavBar  name={name}/>
        </div>
    )
}

export default UserPage