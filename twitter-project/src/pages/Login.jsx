import axios from "axios"
import {  useNavigate, useParams } from "react-router-dom"
import { useState } from "react"

function Login() {
    const [inputName ,setInputName] = useState("")
    const [inputPassword ,setPassword]=useState("")
    const {id}=useParams()
const navigate =useNavigate()
    const nameinput =(e)=>{
        setInputName(e.target.value)

    
    }

    const passwordInput =(e)=>{
        setPassword(e.target.value)

    }
const handleSubmit =(e)=>{
    e.preventDefault()
    axios.get(`https://66e7e69bb17821a9d9da6eb2.mockapi.io/login`)
    .then((res)=>{
        res.data.map((e)=>{
            if(inputName === e.username && inputPassword === e.password ){
                alert("wellcom")
                navigate(`/addtwett/${e.id}`)
            }
        })
       
        console.log(res.data.username);
        
    }).catch( (error)=> {
        console.log(error);
      });


}



  return (
    <div className="flex justify-center items-center p-64">
        
        <div className="card w-96 border">
        <img
                src="https://freepnglogo.com/images/all_img/1725374683twitter-x-logo.png"
                className="h-10 w-10"
                />
            <div className="card-body">
              
        <form onSubmit={handleSubmit}>
                
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="الاسم" onChange={nameinput} value={inputName}  required/>
</label>
<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type="password" className="grow" onChange={passwordInput} value={inputPassword} required/>
</label>


<button className="btn" type="submit">Log in</button>
</form>



    </div>
    </div>
    </div>
  )
}

export default Login