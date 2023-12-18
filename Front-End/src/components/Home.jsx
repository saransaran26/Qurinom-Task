import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";


function Home() {
  const navigate = useNavigate();
  const[data,setdata] = useState([])
  const[bool,setbool] = useState(false)
  const[del,setdel] = useState(false)
  //console.log("datas is",data);
  
  // useEffect(()=>{
  //   setbool(true)
  //   const findit = async()=>{
  //     const res = await axios.get('http://localhost:4000/api/post')
  //     //console.log("ans",res.data);
  //     setdata(res.data)
  //     setbool(false)
  //   }
  //   findit()
  // },[])

  useEffect(()=>{
    setbool(true)
    const findit = async()=>{
      const res = await axios.get('http://localhost:4000/api/post')
      //console.log("ans",res.data);
      setdata(res.data)
      setbool(false)
    }
    findit()
  },[del])

  const handleDelete = async(id) => {
    console.log("Clicked");
    try {
      const res = await axios.delete(`http://localhost:4000/api/post/delete/${id}`)
    console.log(res.data);
    setdel(true)
    setTimeout(()=>{
      setdel(false)
    },2000)
    
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <>
      {!bool ? <div className="max-w-[1150px] mx-auto">
        <div className="mt-6">
          <p className="text-3xl font-semibold">Sample Storage App</p>
        </div>
        <div className="my-4">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:opacity-90"
            onClick={() => navigate("/create")}
          >
            Create +
          </button>
        </div>
        {del && <p className="flex justify-center items-center my-3 px-4 bg-red-500 text-white text-xl">Deleted Succesfully</p>}
        <div className="flex gap-x-24 gap-y-10 items-center flex-wrap mt-5">
        {data && data.map((datas)=>{
          return (
            <div key={datas._id} className="w-[300px] h-auto p-4 border hover:transform hover:scale-105 transition-transform">
              <img src={datas.image} alt="its error" className="w-full h-56 object-cover object-center"/>
              <p className="font-semibold my-2 text-center">Name :{datas.name}</p>
              <p className="font-semibold my-2 text-center">Title : {datas.title}</p>
              <div className="flex justify-around my-4">
              <button className="bg-green-600 text-white hover:opacity-95 px-4 py-2 rounded-lg" onClick={()=>navigate(`/update/${datas._id}`)}>Update</button>
              <button className="bg-red-600 text-white hover:opacity-95 px-4 py-2 rounded-lg" onClick={()=>handleDelete(datas._id)}>Delete</button>
              </div>
            </div>
          )
        })}
        </div>
      </div>:
      <div className="max-w-[1150px] mx-auto">
      <div className="mt-6">
      <p className="text-3xl font-semibold">Sample Storage App</p>
    </div>
    <div className="my-4">
      <button
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:opacity-90"
        onClick={() => navigate("/create")}
      >
        Create +
      </button>
    </div>
    <div className="flex justify-center items-center">
      <p className="text-5xl text-red-600">Loading....</p>
      </div>
      </div>
      }
    </>
  );
}

export default Home;
