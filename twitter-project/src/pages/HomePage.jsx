import React, { useState } from 'react'
import Signup from './Signup'
import { Link} from "react-router-dom"
import Login from './Login'

function HomePage() {
    const [windows,setWindows]=useState(false)
  return (
    <>
    <div className='flex flex-col-reverse justify-around lg:flex-row items-center p-48 '>
        <div className='login and signup w-80' dir='rtl'>
<h1 className='text-7xl font-bold text-white mb-10'>يحدث الآن </h1>
<h3 className='text-4xl text-white mb-9'>انضم اليوم.</h3>

<button className='btn bg-white text-black rounded-full w-full hover:bg-slate-100 mb-3'><img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" className='h-5'/>الاشتراك من خلال Google </button>
<button className='btn bg-white text-black rounded-full w-full font-bold hover:bg-slate-100'><img
src="https://www.svgrepo.com/show/69341/apple-logo.svg"
alt="apple-icon"
className='h-5'
/>التسجيل باستخدام Apple</button>
<div className="divider divider-neutral">أو</div>
<button onClick={()=>{setWindows(true)}} className='btn bg-[#1a8cd8] text-white rounded-full w-full hover:bg-slate-600'>إنشاء حساب</button>
{windows &&
  <div className="fixed inset-0 bg-[#242d34]/50 flex justify-center items-center z-10">
    <div className="bg-black shadow-lg rounded-xl p-6 "><Signup toggle={()=>setWindows(false)} />
</div>
</div>
  }
<div >

</div>
<small>بالتسجيل، أنت توافق على <a href="#" className='text-[#1a8cd8]'>شروط الخدمة</a>
و<a href="#" className='text-[#1a8cd8]' >سياسة الخصوصية</a>
، بما في ذلك <a href="#" className='text-[#1a8cd8]'>استخدام الكوكيز.</a></small>
<h4>هل لديك حساب  بالفعل ؟</h4>
<a className='btn btn-outline text-[#1a8cd8] rounded-full w-full hover:bg-cyan-100' href="#my_modal_8">تسجيل الدخول </a>

{/* Put this part before </body> tag */}
<div className="modal" role="dialog" id="my_modal_8">
  <div className="modal-box">
      <Login/>
   
    <div className="modal-action">
      <a href="#" className="btn">إغلاق</a>
    </div>
  </div>
</div>
</div>
<div className='image-twitter flex justify-end lg:justify-center pr-4  lg:max-w-lg  w-96'>
<img 
src='https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png'
alt='logo-x'
className=' lg:max-w-md max-w-[4rem] '
/>
</div>

</div>
<div>



    </div>
    
<ul className='flex r flex-wrap flex-row-reverse  gap-3 justify-center text-[#71767b] text-sm'>
    <li>حول</li>
    <li>تنزل  تطبيق X</li>
    <li>مركز المساعدة</li>
    <li>شروط الخدمة</li>
    <li>سياسة الخصوصية</li>
    <li>سياسة الكوكيز</li>
    <li>إمكانية الوصول</li>
    <li>معلومات الإعلان</li>
    <li>المدونة</li>
    <li>الوظائف</li>
    <li>موارد العلامة التجارية</li>
    <li>إعلانات</li>
    <li>التسويق</li>
    <li>ْللأعمال X</li>
    <li>المطورون</li>
    <li>الدليل</li>
    <li>الإعلانات</li>
    <li>x corp 2024 .</li>
</ul>
</>
  )
}

export default HomePage