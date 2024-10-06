import React, { useState } from 'react'

function HomePage() {
  return (
    <>
    <div className='flex justify-center items-center p-48 '>
        <div className='grid grid-flow-col'>
        <div className='login and signup w-80' dir='rtl'>
<h1 className='text-7xl font-bold text-white mb-10'>يحدث الآن </h1>
<h3 className='text-4xl text-white mb-9'>انضم اليوم.</h3>

<button className='btn bg-white text-black rounded-full w-full hover:bg-slate-100'><img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" className='h-5'/>الاشتراك من خلال Google </button>
<button className='btn bg-white text-black rounded-full w-full font-bold hover:bg-slate-100'><img
src="https://www.svgrepo.com/show/69341/apple-logo.svg"
alt="apple-icon"
className='h-5'
/>التسجيل باستخدام Apple</button>
<div className="divider divider-neutral">أو</div>
<button onClick={()=>{setWindows(true)}} className='btn bg-[#1a8cd8] text-white rounded-full w-full hover:bg-slate-600'>إنشاء حساب</button>

<small>بالتسجيل، أنت توافق على <a href="#" className='text-[#1a8cd8]'>شروط الخدمة</a>
و<a href="#" className='text-[#1a8cd8]' >سياسة الخصوصية</a>
، بما في ذلك <a href="#" className='text-[#1a8cd8]'>استخدام الكوكيز.</a></small>
<h4>هل لديك حساب  بالفعل ؟</h4>
<button className='btn btn-outline text-[#1a8cd8] rounded-full w-full hover:bg-cyan-100'>تسجيل الدخول </button>
</div>
<div className='image-twitter w-96'>
<img 
src='https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png'
alt='logo-x'
className='w-full'
/>
</div>

</div>
<div>


</div>

    </div>
    
<ul className='flex r flex-wrap flex-row-reverse  gap-4 justify-center'>
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