"use client";
import { Link } from "@nextui-org/react";
import React, { useState } from "react";
const page = () => {
  const [gender, setGender] = useState("null");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <>
      <div className="bg-[#fff] text-[#000]">
        <div className="flex justify-center border gap-10 items-center mt-10 shadow-xl w-[40%] h-[20vh] translate-x-[80%] mt-10 rounded-md">
          <img
            className="w-[6vw] h-[10vh] shrink-0 object-fit translate-y-[-10%] rounded-lg"
            src="https://www.vaidam.com/sites/default/files/dr_devi_prasad_shetty_.png"
            alt="doctor photo from internet"
          />
          <div className="flex flex-col">
            <h1 className="text-xl">Doctors Choosen</h1>
            <h1 className="text-blue-500 mt-1 text-xl">
              Dr. Devi Prasad Shetty
            </h1>
            <h1 className="text-[#9e9e9e] mt-1 text-xl">
              Cardiac Surgeon, Cardiology
            </h1>
            <h1 className="text-blue-500 mt-1 text-xl">
              Narayana Multispeciality Hospital, Bangalore
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-10 items-center border border-xl mt-10 shadow-xl w-[60%] py-4 translate-x-[40%] mt-10 rounded-md">
          <div className="flex flex-col translate-x-[-160%]">
            <h1 className="">
              Select Appointment Date<span className="text-red-500">*</span>
            </h1>
            <input className="text-[#9e9e9e] mt-2" type="date" />
          </div>

          <div className="flex flex-col translate-x-[-180%]">
            <h1 className="">
              Name<span className="text-red-500">*</span>
            </h1>
            <input
              className="text-[#9e9e9e] mt-2"
              type="text"
              placeholder="Enter name here"
            />
          </div>

          <div className="flex flex-col translate-x-[-180%]">
            <h1 className="">
              Country<span className="text-red-500">*</span>
            </h1>
            <input
              className="text-[#9e9e9e] mt-2"
              type="country"
              placeholder="Enter country name "
            />
          </div>

          <div className="flex flex-col translate-x-[-180%]">
            <h1 className="">
              City<span className="text-red-500">*</span>
            </h1>
            <input
              className="text-[#9e9e9e] mt-2"
              type="country"
              placeholder="Enter city name "
            />
          </div>

          <div className="flex flex-col translate-x-[-180%]">
            <h1 className="">
              Phone Number<span className="text-red-500">*</span>
            </h1>
            <input
              className="text-[#9e9e9e] mt-2"
              type="number"
              placeholder="Enter Phone No:"
            />
          </div>

          <div className="flex flex-col translate-x-[-130%]">
            <h1 className="">
              Patient's Date Of Birth or Age
              <span className="text-red-500">*</span>
            </h1>
            <input
              className="text-[#9e9e9e] mt-2"
              type="number"
              placeholder="Ex: 30 Yr or 10-09-1999"
            />
          </div>

          <div className="mt-2 flex items-center flex-col translate-x-[-220%]">
            <h1 className="">
              Select Your Gender<span className="text-red-500">*</span>
            </h1>
            <div className="flex gap-1 items-center">
              
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={handleGenderChange}
                  className="form-radio text-indigo-600 h-4 w-4 "
                />
                <span className="ml-2">Male</span>
              
              
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={handleGenderChange}
                  className="form-radio text-indigo-600 h-4 w-4"
                />
                <span className="ml-2">Female</span>
              
            </div>  
            
            <button className="px-6 py-3 mt-10 bg-red-600 rounded-md text-[#fff] cursor-pointer" onClick={()=>alert("Submitted 😊..")}>Submit</button>
            
          </div>
          <div><h1 className="text-[#9e9e9e]">By submitting the form I agree to the <span className="text-pink-300">Terms of Use</span> and <span className="text-pink-300">Privacy Policy</span> of <Link href="https://caremedico.com/">@caremedico..</Link></h1></div>
        </div>
        
      </div>
    </>
  );
};

export default page;
