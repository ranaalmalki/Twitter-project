import { useState } from "react"
import { Link } from "react-router-dom"
import UserPage from "../pages/UserPage"

function NavBar() {
    const [clickindex ,setClickIndex]=useState(0)
  return (
    <div dir="rtl" className="flex h-screen">
        <ul className="menu  rounded-box w-56 justify-evenly bg-black">
            <li><img 
            
            src="https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png"
            className="h-16 w-20"
            /></li>
  <li onClick={()=>{setClickIndex(0)}} className={clickindex===0?"bg-white":"none"}>
    <Link to="/Home" >
<a>
    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-house-door-fill h-5 w-5" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg>
      الرئيسية
      </a>
    </Link>
  </li>
  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search h-5 w-5" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
      استكشاف
    </a>
  </li>
  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-bell h-6 w-6" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg>
      التنبيهات
    </a>
  </li>
  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-envelope h-5 w-5" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
      الرسائل
    </a>
  </li>
  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-slash-square h-5 w-5" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg>
      Grok
    </a>
  </li>
  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-people h-5 w-5" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
</svg>
      المجتمعات
    </a>
  </li>
  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-twitter-x h-5 w-5" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
      Premium
    </a>
  </li>
  <li onClick={()=>{setClickIndex(1)}} className={clickindex === 1?"bg-white":"none"}>
    <Link to="/userpage" >
    <a>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person h-5 w-5" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
      الملف الشخصي
      </a>
    </Link>
  </li>
  <li>
    <a>
    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-three-dots h-5 w-5  border rounded-full" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>
      المزيد
    </a>

  </li>
  <li><button className="btn bg-[#1a8cd8] rounded-full">نشر</button></li>
<li className="flex flex-row p-2">
<img
src=""
alt="user-img"
className="h-9 w-9  rounded-full"
/>
<h3 className="pl-7 pr-10">name</h3>

<svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-three-dots h-9" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>
</li>

</ul>
    </div>
  )
}

export default NavBar