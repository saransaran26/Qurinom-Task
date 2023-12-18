import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { removeuser } from "../redux/userReducer";
import axios from "axios";

function Navbar() {
  const currentUser = useSelector((state)=>state.user.currentUser)
  console.log("redux",currentUser);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const[nav,setnav] = useState(false)
  const[show,setshow] = useState(false)
  const handleClick = () => {
    setnav(!nav)
  }
  const handleLogout = () => {
    dispatch(removeuser())
    navigate('/login')
  }
  return (
    <div className="bg-black text-white w-full h-[85px] flex items-center px-8 justify-between">
      <div>
        <p className="font-semibold text-3xl">Blog App</p>
      </div>
      {!currentUser?<ul className="hidden md:flex space-x-16">
        <li className="cursor-pointer hover:border-b-2" onClick={()=>navigate('/login')}>Login</li>
        <li className="cursor-pointer hover:border-b-2" onClick={()=>navigate('/')}>Register</li>
      </ul>:
      <div className="flex items-center space-x-16">
      <ul className="hidden md:flex space-x-16">
        <li onClick={()=>navigate('/home')} className="cursor-pointer hover:border-b-2">Home</li>
        <li onClick={()=>navigate('/about')} className="cursor-pointer hover:border-b-2">About</li>
      </ul>
      {/* <div className="hidden md:flex">
      <button className="px-6 py-1 rounded-lg text-black bg-gray-300 cursor-pointer">Cart</button>
      </div> */}
      <p className="cursor-pointer hover:border-b-2" onClick={handleLogout}>Logout</p>
      </div>
      }

      <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
        {!nav ? <FaBars className="text-2xl"/> : <MdCancel className="text-2xl"/>}
        
      </div>


      {!currentUser?<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 flex flex-col w-full h-screen justify-center items-center text-white bg-black text-4xl font-semibold'}>
        <li className="my-5 cursor-pointer hover:border-b-2" onClick={()=>navigate('/login')}>Login</li>
        <li className="my-5 cursor-pointer hover:border-b-2" onClick={()=>navigate('/')}>Register</li>
      </ul>:
      
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 flex flex-col w-full h-screen justify-center items-center text-white bg-black text-4xl font-semibold'}>
      <li className="my-5 cursor-pointer hover:border-b-2" onClick={()=>navigate('/home')}>Home</li>
      <li className="my-5 cursor-pointer hover:border-b-2" onClick={()=>navigate('/about')}>About</li>
      <ul className="my-5 cursor-pointer hover:border-b-2" onClick={()=>navigate('/about')}>Cart</ul>
    </ul>
      }
    </div>
  );
}

export default Navbar;
