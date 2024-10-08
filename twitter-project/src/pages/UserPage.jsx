import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Suggestions from './Suggestions'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Heart from "react-animated-heart";



function UserPage() {
    const { user } = useParams()
    const [tweets, setTweets] = useState([]);
    const [click, setClick] = useState([])

    const toggleClick = (tweetId) => {


        setClick(prevClicks => ({
            ...prevClicks,
            [tweetId]: !prevClicks[tweetId]
        }));
    }



    useEffect(() => {
        //         axios.get(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/login`)
        // .then((res)=>{
        // console.log(res.data);
        // setName(res.data.username)
        // })



        axios.get(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/comment?username=${user}`)
            .then((res) => {
                console.log(res.data);
                setcomment(res.data)

                const iclick = {}
                res.data.forEach((e) => {
                    iclick[e.username] = false
                })
                setClick(iclick)

            })

    }, [user])

    useEffect(() => {

        axios.get(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/comment?username=${user}`)
            .then(response => {
                console.log(response.data);

                setTweets(response.data);
            })
            .catch(error => console.error('Error fetching user tweets:', error));
    }, [user]);

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
                        <h1 className='font-bold'>{ }</h1>
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
                        <h1 className='font-bold text-2xl'>{user}</h1>
                        <button className='btn btn-outline rounded-full'>وثق حسابك</button>
                    </div>
                    <p>{user}@</p>
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


                    </div>



           
                 </div>
                 <div className='' style={{ height: '100vh', overflow: 'auto' }} dir='rtl'>

{tweets.map(e => (

    <ul key={e.id}>
        <li >
            <div className='border border-secondary pt-7 grid'>
                <div className='flex items-center'>
                    <img
                        className="h-12 mb-2 "
                        src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
                    /><h1 className='ml-2'>{e.username}</h1>
                    <p className='text-secondary'>@{e.username}</p>
                </div>
                <details className="dropdown bg-slate-100 relative w-full">
                    <summary className="btn m-1 bg-black border-black absolute left-0 -top-20 font-bold text-xl">...</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute left-0 -top-10 ">
                        <li><a onClick={() => deleteTweet(e.id)}>حذف</a></li>
                    </ul>
                </details>
                <p className='p-3'>{e.tweet}</p>

                <div role="tablist" className="tabs tabs-bordered">
                    <a role="tab" className="tab"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                    </svg></a>
                    <a role="tab" className="tab ">#</a>
                    <a role="tab" className="tab h-20"><Heart isClick={click[e.id]} onClick={() => { toggleClick(e.id) }} /></a>
                    <a role="tab" className="tab "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
                        <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
                    </svg></a>
                    <a role="tab" className="tab"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                    </svg></a>
                    <a role="tab" className="tab "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                    </svg></a>
                </div>
            </div>
        </li>


    </ul>

))}
</div>
            </div>
            <NavBar name={user} />
        </div>
    )
}

export default UserPage