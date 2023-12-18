import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const navigate = useNavigate()
  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const [title, settitle] = useState("");
  const {id} = useParams()
  console.log("id",id);

  const handleUpdate = async() => {
      const payload = {
        name,
        title,
        image
      }
      try {
        const res = await axios.put(`http://localhost:4000/api/post/update/${id}`,payload)
        console.log(res);
        navigate('/home')
      } catch (error) {
        console.log(error);
      }
  }

  const handleinput = async(e) => {
    //setfile(e.target.files[0]);
    const reader = new FileReader();
    await reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      //console.log(reader.result);
      setimage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("error", error);
    };
  };


  useEffect(()=>{
    const updates = async() => {
      try {
        const res = await axios.get(`http://localhost:4000/api/post/getbyid/${id}`)
        console.log("After get updates",res.data.name);
        setname(res.data.name)
        settitle(res.data.title)
        setimage(res.data.image)
      } catch (error) {
        console.log(error);
      }
    }
    updates()
    
  },[])

  return (
    <>
      <div className="max-w-[1150px] mx-auto">
        <div>
          <h1 className="font-semibold text-4xl text-center mt-8">
            Update
          </h1>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            value={name}
            placeholder="Enter Name"
            className="bg-slate-100 p-3 rounded-lg my-3 mt-4"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            className="bg-slate-100 p-3 rounded-lg my-3"
            onChange={(e) => settitle(e.target.value)}
            required
          />
        </div>
        <div className="my-4 ">
          <input type="file" onChange={handleinput} required/>
          <div className="mt-5">
            {!image ? (
              ""
            ) : (
              <img
                src={image}
                alt="its error"
                className="w-56 h-56 object-cover"
              />
            )}
          </div>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <button
            className="px-5 py-2 bg-black text-white rounded-md"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
      </>
  )
}

export default Update