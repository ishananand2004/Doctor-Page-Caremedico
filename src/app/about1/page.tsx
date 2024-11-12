import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { FaRegImage } from "react-icons/fa6";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { FaBed } from "react-icons/fa6";
import { GiGoldShell } from "react-icons/gi";
import { FaCaretRight } from "react-icons/fa6";
const page = () => {
  return (
    <>
      <div className="bg-[#fff] text-[#000]">
        <div className="flex p-[3%] justify-evenly ">
          <div className="">
            <div className="flex items-center">
              <IoMdStar size={"2vw"} className="text-yellow-400" />
              <h1 className="text-red-500">
                You are viewing our top rated Hospital
              </h1>
            </div>
            <h1 className="text-3xl font-semibold mt-2">
              Fortis Hospital, Bangalore (Bannerghatta Road)
            </h1>
            <div className="flex gap-0 mt-3">
              <IoMdStar size={"15px"} className="text-yellow-500" />
              <IoMdStar size={"15px"} className="text-yellow-500" />
              <IoMdStar size={"15px"} className="text-yellow-500" />
              <IoMdStar size={"15px"} className="text-yellow-500" />
              <IoMdStarOutline />
              <div className="text-xs translate-x-[10%]">4.2(58 Ratings)</div>
            </div>

            <div className="mt-2 flex gap-1 items-center">
              <MdLocationPin size={"20px"} className="text-[#9e9e9e]" />
              <h1>Bangalore, India</h1>
            </div>
          </div>

          <div className="w-[20vw] flex border gap-2 h-[10vh] w-fit p-2 bg-pink-200 rounded-lg border border-pink-700">
            <FaRegThumbsUp size={"3vw"} className="text-pink-400" />
            <div>
              <h1 className="font-semibold text-xl">95% patients</h1>
              <h1>recommended this hospital</h1>
            </div>
          </div>
        </div>

        {/* 2nd part */}
        <div className="px-[11%]">
          <div className="flex gap-10 justify-center">
            <img
              className="w-[33vw] h-[40vh] object-cover shrink-0 rounded-lg"
              src="https://d1ea147o02h74h.cloudfront.net/hospitals/fortis_hospital_bangalore.jpg"
              alt="fortisis image"
            />
            <img
              className="w-[33vw] h-[40vh] object-cover shrink-0 rounded-lg"
              src="https://d1ea147o02h74h.cloudfront.net/hospitals/fortis_hospital_bangalore_bannerghatta_road_building-min.jpg"
              alt=""
            />
          </div>

          <div className="w-[58vw] translate-x-[17%] mt-10 border border-[#9e9e9e] rounded-xl shadow-xl flex">
            <div className="flex flex-col">
              <div className="px-10 py-3 flex items-center gap-2">
                <FaUserDoctor size={"20px"} className="text-pink-500" />
                <div>
                  <h1>DoctorList</h1>
                  <h1>Click here</h1>
                </div>
              </div>
              <hr />
              <div className="px-10 py-3 flex items-center gap-2">
                <GiPlagueDoctorProfile
                  size={"20px"}
                  className="text-pink-500"
                />

                {/* <FaUserDoctor size={"20px"} /> */}
                <div>
                  <h1>Specialty</h1>
                  <h1>Multi Specialty</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="px-10 py-3 flex items-center gap-2">
                <MdLocationPin size={"20px"} className="text-pink-500" />
                <div>
                  <h1>Location</h1>
                  <h1>Bangalore</h1>
                </div>
              </div>
              <hr />
              <div className="px-10 py-3 flex items-center gap-2">
                <FaRegImage size={"20px"} className="text-pink-500" />

                <div>
                  <h1>Images</h1>
                  <h1>Click here</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="px-10 py-3 flex items-center gap-2">
                <MdPlaylistAddCheckCircle
                  size={"20px"}
                  className="text-pink-500"
                />
                <div>
                  <h1>Established in</h1>
                  <h1>2006</h1>
                </div>
              </div>
              <hr />
              <div className="px-10 py-3 flex items-center gap-2">
                <FaBed size={"20px"} className="text-pink-500" />

                <div>
                  <h1>Number of beds</h1>
                  <h1>284</h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="px-10 py-3 flex items-center gap-2">
                <GiGoldShell size={"20px"} className="text-yellow-500" />
                <div>
                  <h1>Accreditations</h1>
                  <h1>NABH</h1>
                </div>
              </div>
              <hr />
              <div className="px-10 py-3 flex items-center gap-2">
                <FaCaretRight size={"20px"} className="text-pink-500" />
                <div>
                  <h1>Faclities</h1>
                  <h1>Click here</h1>
                </div>
              </div>
            </div>
          </div>


          <div>
            <h1 className="bg-red-700 w-fit p-3 text-[#fff] rounded-lg">Book Appointment</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
