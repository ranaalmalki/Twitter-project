import NavBar from "../components/NavBar"
import Happen from "./Happen"
import Suggestions from "./Suggestions"

function Home() {
    return (
        <div className="flex flex-wrap justify-center ">
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
                <div className="border border-secondary rounded-lg mt-6">
                    <h1>الاشتراك في Premium</h1>
                    <p>اشترك لاكتشاف ميزات جديدة وفي حال كنت مؤهلًا، ستتسلّم حصة من إيرادات الإعلانات.</p>
                    <button className="btn rounded-full bg-[#1a8cd8]">اشتراك</button>

                </div>
                <div className="border rounded-3xl p-4 w-full mt-6">
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
                    <a href="#" className="link link-[] ">عرض المزيد</a>
                </div>
                <Suggestions />
            </div>
            <div className="container w-1/3">
             
                <div className="" dir="rtl">
                    
                  

                </div>
            </div>

            <NavBar/>

        </div>
    )
}

export default Home