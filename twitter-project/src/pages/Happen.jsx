
function Happen() {
  return (
    <div dir="rtl" className=" flex justify-center"> 
    <div className="w-1/3 ">
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
    </div>
  )
}

export default Happen