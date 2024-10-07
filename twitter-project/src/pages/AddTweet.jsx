import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import Suggestions from './Suggestions'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function AddTweet() {
const [name , setName]=useState("")
const [inputTweet ,setInputTweet] = useState("")
const [comment ,setcomment]=useState([])
const {id}=useParams()

const tweetinput =(e)=>{
    setInputTweet(e.target.value)

    }

    const send =()=>{
        axios.post(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/comment`,{
            tweet: inputTweet,
    userId:id
        }).then((res)=>{
            console.log(res.data);
            setInputTweet("")
        })
    }
    
       


    useEffect(()=>{
        axios.get(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/login/${id}`)
.then((res)=>{
console.log(res.data);
setName(res.data.username)
})



    axios.get(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/comment?userId=${id}`)
.then((res)=>{
    console.log(res.data);
    setcomment(res.data)
    
})

},[id])

const deleteTweet =(tweetid)=>{
     
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/comment/${tweetid}`)
                .then(res=>{
                    console.log(res.data);
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              setcomment(comment.filter(e=>e.id !== tweetid))
            })  .catch((error) => {
                console.error("There was an error deleting the tweet!", error);
            })

            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
        })
    
}



  return (
    <div className='flex flex-wrap justify-center'>
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
<div className="border rounded-lg border-secondary mt-6">
    <h1>الاشتراك في Premium</h1>
    <p>اشترك لاكتشاف ميزات جديدة وفي حال كنت مؤهلًا، ستتسلّم حصة من إيرادات الإعلانات.</p>
    <button className="btn rounded-full bg-[#1a8cd8]">اشتراك</button>

</div>
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
    <a href="#" className="link link-[] ">عرض المزيد</a>
</div>
<Suggestions />
</div>
<div className="container w-1/3 border-r border-l border-primary" >
                <div role="tablist" className="tabs tabs-bordered">
                    <a role="tab" className="tab">المتابعون</a>
                    <a role="tab" className="tab tab-active">لك</a>
                </div>
                <div className="" dir="rtl">
                    <img
                        className="h-12"
                        src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
                    />

                    <textarea placeholder="ماذا يحدث؟" onChange={tweetinput} value={inputTweet} required/>


                    <div className="flex flex-wrap justify-between">
<div className='flex flex-wrap gap-6 p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-gif" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H9v-1h3a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.278 13.124a1.4 1.4 0 0 0-.14-.492 1.3 1.3 0 0 0-.314-.407 1.5 1.5 0 0 0-.48-.275 1.9 1.9 0 0 0-.636-.1q-.542 0-.926.229a1.5 1.5 0 0 0-.583.632 2.1 2.1 0 0 0-.199.95v.506q0 .408.105.745.105.336.32.58.213.243.533.377.323.132.753.132.402 0 .697-.111a1.29 1.29 0 0 0 .788-.77q.097-.261.097-.551v-.797H1.717v.589h.823v.255q0 .199-.09.363a.67.67 0 0 1-.273.264 1 1 0 0 1-.457.096.87.87 0 0 1-.519-.146.9.9 0 0 1-.305-.413 1.8 1.8 0 0 1-.096-.615v-.499q0-.547.234-.85.237-.3.665-.301a1 1 0 0 1 .3.044q.136.044.236.126a.7.7 0 0 1 .17.19.8.8 0 0 1 .097.25zm1.353 2.801v-3.999H3.84v4h.79Zm1.493-1.59v1.59h-.791v-3.999H7.88v.653H6.124v1.117h1.605v.638z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" />
                            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                            <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-heart" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM1 14V4h14v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1m7-6.507c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                        </div>
                        <button className="btn bg-[#1a8cd8] rounded-full pl-8 pr-8 mb-2" onClick={send}>نشر</button>

                    </div>
                    <hr />

                    <div className=''style={{ height: '100vh', overflow: 'auto' }}>
                        {comment.map((e)=>{
                            return(
                            <ul key={e.id}>
                                <li>
<div className='border border-secondary pt-20 grid'>
<details className="dropdown bg-slate-100 relative w-full">
  <summary className="btn m-1 bg-black border-black absolute left-0 -top-20 font-bold text-xl">...</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow absolute left-0 -top-10 ">
    <li><a onClick={()=>deleteTweet(e.id)}>حذف</a></li>
  </ul>
</details>
<p>{e.tweet}</p>

<div role="tablist" className="tabs tabs-bordered">
                    <a role="tab" className="tab"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
</svg></a>
                    <a role="tab" className="tab ">#</a>
                    <a role="tab" className="tab"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
  <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
</svg></a>
                    <a role="tab" className="tab "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16">
  <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"/>
</svg></a>
                    <a role="tab" className="tab"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg></a>
                    <a role="tab" className="tab "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg></a>
                </div>
</div>
                                </li>
                            
                            
                            </ul>
)
                        })}
                        
                    </div>
                </div>
            </div>
            <NavBar name={name}/>

    </div>
  )
}

export default AddTweet