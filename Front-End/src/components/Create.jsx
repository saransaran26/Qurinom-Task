import React, { useState } from "react";
import Navbar from "./Navbar";
import { IoMdCloudUpload } from "react-icons/io";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const [title, settitle] = useState("");
  const[bool,setbool] = useState(false)
  // const [file, setfile] = useState(null);
  const handleinput = async (e) => {
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

  const handleCreate = async () => {
    setbool(true)
    const payload = {
      name,
      title,
      image,
    };
    try {
      const res = await axios.post(
        "https://qurinom-task.onrender.com/api/post/create",
        payload
      );
      console.log(res.data);
      setbool(false)
      navigate("/home");
    } catch (error) {
      setbool(false)
      console.log(error.data);
    }
  };

  return (
    <>
      <div className="max-w-[1150px] mx-auto">
        <div>
          <h1 className="font-semibold text-4xl text-center mt-8">
            Create new one to upload
          </h1>
        </div>
        {bool && <p className="text-3xl font-semibold text-red-600 my-5">Loading to upload please wait...</p>}

        <div className="flex flex-col">
          
          <input
            type="text"
            placeholder="Enter Name"
            className="bg-slate-100 p-3 rounded-lg my-3 mt-4"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Title"
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
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}

export default Create;
