import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"
function Happen() {
  return (
    <div  className=" flex flex-wrap justify-center"> 
                <div dir="rtl" className="pr-4 w-96">

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
                </div>
    <div className="w-1/3 " dir="rtl">
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

         <div role="tablist" className="tabs tabs-bordered">
            
  <a role="tab" className="tab tab-active">لك</a>
  <a role="tab" className="tab">الموضوعات المتداولة</a>
  <a role="tab" className="tab">الأخبار</a>
  <a role="tab" className="tab">الترفية</a>
</div>
</div>

<NavBar/>
    </div>
  )
}

export default Happen