"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import OuterLayoutRouter from "next/dist/client/components/layout-router";


  
const page = () => {
    let [activeButton, setActiveButton] = useState(null);
  let handleClick = (a) => {
    setActiveButton(a);
  }
  return (
    <>
    <div className="bg-[#fff] text-[#000]">
    <div className="px-20 py-10 flex justify-evenly gap-40">
        <img
          className="w-[13vw] h-[27vh] object-cover shrink-0 rounded-md"
          src="https://d1ea147o02h74h.cloudfront.net/rules-have-changed-heathcare-providers-have-to-be-more-considerate-devi-prasad-shetty-narayana-health.jpg"
          alt="doctor photo"
        />
        <div className="flex flex-col translate-x-[-40%]">
          <div className="flex w-fit gap-5 items-center cursor-pointer">
            <div className="flex gap-2 cursor-pointer ">
              <h1 className="text-xl font-semibold">Dr. Devi Prasad Shetty</h1>
              <FaCircleCheck
                className="text-green-500 translate-y-[25%]"
                size={"16px"}
              />
            </div>
            <h1 className="text-base bg-blue-300 border border-blue-500 rounded-full p-1 text-xs hover:underline">
              Cardiac Surgeon
            </h1>
          </div>
          <h1>Chairman</h1>
          <h1>MBBS , MS , FRCS</h1>
          <div className="flex mt-3">
            <MdStar className="text-yellow-500" />
            <MdStar className="text-yellow-500" />
            <MdStar className="text-yellow-500" />
            <MdStar className="text-yellow-500" />
            <MdOutlineStarBorder />
            <h1 className="text-xs translate-x-[5%] text-green-500">
              4.2 (54 Ratings)
            </h1>
          </div>
          <h1 className="mt-2 text-base">52 years of overall experience</h1>
          <h1 className="mt-1 text-base">Surgeries Performed: 15000+</h1>
        </div>

        <div className="translate-x-[-7px] translate-y-[30px]">
          <Link
            href="/appointment"
            className="bg-red-500 px-20 py-3 border-none hover:bg-red-600 rounded-md text-[#fff] border border-[#000]"
          >
            Book Appointment
          </Link>
          <Link
            href="https://web.whatsapp.com/"
            className=" px-20 items-center border-none text-[#fff] py-3 mt-10 flex gap-2 bg-green-500 hover:bg-green-600 border border-[#000] rounded-md"
          >
            <FaWhatsapp />
            <h1>WhatsApp us</h1>
          </Link>
        </div>
      </div>

      <div className="m-auto w-3/4 translate-x-[-12%] w-[70%] p-5 border shadow rounded-lg">
        <h1 className="text-2xl font-semibold text-black-300">
          About Dr. Devi Prasad Shetty
        </h1>

        <div className="mt-4 flex items-center gap-2">
          <GiCheckMark className="text-green-500" />
          <h1 className="text-base">
            Dr. Devi Prasad Shetty is one of the most renowned Cardiothoracic
            Surgeon in Bangalore.
          </h1>
        </div>

        <div className="mt-4 flex gap-2">
          <GiCheckMark size={"25px"} className="text-green-500" />
          <h1 className="text-base">
            Dr. Shetty has been awarded 'Padma Shri', the fourth highest
            civilian award in India and 'Padma Bhushan', the third-highest
            civilian award by the Government of India for his contribution to
            healthcare.
          </h1>
        </div>

        <div className="mt-4 flex gap-2">
          <GiCheckMark size={"20px"} className="text-green-500" />
          <h1 className="text-base">
            With an experience of over 45+ years, Dr Devi Prasad Shetty has
            performed over 15,000 heart operations among which 5000 were
            performed on kids.
          </h1>
        </div>

        <div className="mt-4 flex gap-2">
          <GiCheckMark size={"30px"} className="text-green-500" />
          <h1 className="text-base">
            Dr. Shetty has completed his MBBS & MS from the eminent Kasturba
            Medical College. Following this, he did his FRCS from the West
            Midlands Cardio-Thoracic Rotation Program between Walsgrave
            Hospital, Coventry and East Birmingham Hospital.
          </h1>
        </div>

        <div className="mt-4 flex gap-2">
          <GiCheckMark size={"17px"} className="text-green-500" />
          <h1 className="text-base">
            Dr. Shetty has performed Asia’s first dynamic cardiomyoplasty
            operation to strengthen the weak heart muscle using the chest wall
            muscle.
          </h1>
        </div>

        <div className="mt-4 flex gap-2">
          <GiCheckMark size={"17px"} className="text-green-500" />
          <h1 className="text-base">
            He is one of the few surgeons in the world to use a microchip camera
            to perform a keyhole heart surgery.
          </h1>
        </div>

        <div className="mt-4 flex gap-2">
          <GiCheckMark size={"17px"} className="text-green-500" />
          <h1 className="text-base">
            For the first time in India, he has used a left ventricular assist
            device to temporarily support a failing heart.
          </h1>
        </div>

        <div className="mt-4 flex gap-2">
          <GiCheckMark size={"17px"} className="text-green-500" />
          <h1 className="text-base">
            Dr. Devi Prasad Shetty is counted among one of the most experienced
            doctors in the world in performing a bypass-grafting operation on a
            beating heart.
          </h1>
        </div>

        <div className="mt-4 flex gap-2">
          <GiCheckMark size={"17px"} className="text-green-500" />
          <h1 className="text-base">
            In 1990, he became the first surgeon in India to venture into
            Neonatal open heart surgery by performing open-heart surgery on a
            9-day-old baby.
          </h1>
        </div>

        <div className="mt-4 flex gap-2">
          <GiCheckMark size={"15px"} className="text-green-500" />
          <h1 className="text-base">
            Dr. Shetty has won several awards for his contribution to both
            Medical Science and Public Welfare.
          </h1>
        </div>

        <div className="mt-4 flex gap-2">
          <GiCheckMark size={"22px"} className="text-green-500" />
          <h1 className="text-base">
            Dr. Devi Prasad Shetty is the founder of the multi-speciality
            hospital Narayana Hrudayalaya, Bangalore and Rabindranath Tagore
            International Institute of Cardiac Sciences (RTIICS) Kolkata.
          </h1>
        </div>

        <div className="mt-4 flex gap-2">
          <GiCheckMark size={"15px"} className="text-green-500" />
          <h1 className="text-base">
            Dr. Devi Prasad Shetty has expertise in Paediatric Cardiac Surgery
          </h1>
        </div>

        <h1 className="font-semibold text-xl mt-6">Special Interest</h1>
        <h1 className="mt-4">
          Dr Devi Prasad Shetty Specializes in the following:
        </h1>
        <div className="flex items-center mt-5 gap-2 mb-7">
          <h1 className="bg-blue-100 w-fit p-1 rounded-full text-blue-900 border border-blue-900 ">
            Cardiothoracic Surgery
          </h1>
          <h1 className="bg-blue-100 w-fit p-1 rounded-full text-blue-900 border border-blue-900 ">
            Pediatric Cardiac Surgery
          </h1>
          <h1 className="bg-blue-100 w-fit p-1 rounded-full text-blue-900 border border-blue-900 ">
            Cardiovascular Surgery
          </h1>
          <h1 className="bg-blue-100 w-fit p-1 rounded-full  text-blue-900 border border-blue-900 ">
            CABG
          </h1>
        </div>
      </div>

      {/* 3rd part */}
      <div className="m-auto w-3/4 translate-x-[-12%] w-[70%] p-5 border shadow rounded-lg mt-10">
        <h1 className="rounded-t-lg bg-blue-900 text-[#fff] w-fit p-3 font-semibold hover:scale-95 cursor-pointer">
          Skilled At
        </h1>
        <hr className="mt-2 bg-[#9e9e9e]" />

        <div className="flex justify-between px-5">
          <div className="flex mt-7 gap-2">
            <GiCheckMark size={"17px"} className="text-green-500" />
            <h1 className="text-base">ASD (Atrial Septal Defect) Closure</h1>
          </div>

          <div className="flex mt-7 gap-2">
            <GiCheckMark size={"17px"} className="text-green-500" />
            <h1 className="text-base">
              PPI-Permanent Pacemaker Implant - Double Chamber
            </h1>
          </div>
        </div>

        <div className="flex justify-between px-5">
          <div className="flex mt-2 gap-2">
            <GiCheckMark size={"17px"} className="text-green-500" />
            <h1 className="text-base">AICD</h1>
          </div>

          <div className="flex mt-2 gap-2 translate-x-[-2%]">
            <GiCheckMark size={"17px"} className="text-green-500" />
            <h1 className="text-base ">
              CRT- D Implant (Cardiac Resynchronization Therapy)
            </h1>
          </div>
        </div>

        <div className="flex justify-between px-5">
          <div className="flex mt-2 gap-2">
            <GiCheckMark size={"17px"} className="text-green-500" />
            <h1 className="text-base">Heart Bypass Surgery (CABG)</h1>
          </div>

          <div className="flex mt-2 gap-2 translate-x-[-160%]">
            <GiCheckMark size={"17px"} className="text-green-500" />
            <h1 className="text-base">Valve Replacement</h1>
          </div>
        </div>

        <div className="flex mt-2 gap-2 px-5">
          <GiCheckMark size={"17px"} className="text-green-500" />
          <h1 className="text-base">FRCS</h1>
        </div>
      </div>

      {/* 4th part */}

      <div className="m-auto w-3/4 translate-x-[-12%] w-[70%] p-5 border shadow rounded-lg mt-10 flex">
        <div className="">
          <button
            className="ml-3 font-semibold text-[#9e9e9e]"
            onClick={() => handleClick(1)}
          >
            Education & Training
          </button>
          <button
            className="ml-3 font-semibold text-[#9e9e9e]"
            onClick={() => handleClick(2)}
          >
            Honours & Awards
          </button>
          <button
            className="ml-3 bg-blue-600 p-2 rounded-t-lg text-[#fff] font-semibold "
            onClick={() => handleClick(3)}
          >
            Work Experience
          </button>

          <hr className="mt-2 w-[210%]" />
          {activeButton === 1 && (
            <div>
              <div className="mt-6 flex gap-1">
                <GiCheckMark size={"17px"} className="text-green-500" />
                <h1>MBBS, Kasturba Medical College ,Mangalore</h1>
              </div>
              <div className="mt-4 flex gap-1">
                <GiCheckMark size={"17px"} className="text-green-500" />
                <h1>MS, Kasturba Medical College ,Mangalore</h1>
              </div>

              <div className="mt-4 flex gap-1">
                <GiCheckMark size={"17px"} className="text-green-500" />
                <h1>FRCS</h1>
              </div>
            </div>
          )}

          {activeButton === 2 && (
            <div className="mt-5 text-base">
              <p>
                1.Padma Bhushan, 2012 2. Padma Shri Award for Medicine in 2004.
                3. Karnataka Ratna Award in the year 2001 4. Rajyotsava Award in
                the year 2002. 5. Sir M. Visvesvaraya Memorial Award in for the
                year 2003. 6. Ernst & Young-Entrepreneur of the Year in 2003. 7.
                Dr. B.C. Roy Award for the year 2003. 8. Schwab Foundation's
                award in 2005.
              </p>
            </div>
          )}

          {activeButton === 3 && (
            <div className="mt-6">
              <div className="flex gap-2">
                <GiCheckMark size={"17px"} className="text-green-500" />
                <h1>Chairman, Narayana Multispeciality Hospital, Bangalore</h1>
              </div>
              <div className="flex gap-2 mt-2">
                <GiCheckMark size={"17px"} className="text-green-500" />
                <h1>
                  Chairman, Rabindranath Tagore International Institute of
                  Cardiac Sciences (RTIICS) in Kolkata.{" "}
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 5th part */}
      <div className="m-auto w-3/4 translate-x-[-12%] w-[70%] p-5 border shadow rounded-lg mt-10  bg-blue-200">
        <h1 className="text-[#000] font-semibold text-2xl">Patient's Review</h1>
        <div className="w-3/4 bg-[#fff] z-1 w-[100%] p-3 mt-4 rounded-lg">
          <h1>Dilip Budhdev</h1>
          <div className="flex mt-4">
            <MdStar className="text-yellow-500" />
            <MdStar className="text-yellow-500" />
            <MdStar className="text-yellow-500" />
            <MdStar className="text-yellow-500" />
            <MdOutlineStarBorder className="" />
          </div>
          <h1 className="mt-4 text-xs">Kenya</h1>
        </div>
      </div>

      {/* 6th part */}
      <div className="m-auto w-3/4 translate-x-[-12%] w-[70%] p-5 border shadow rounded-lg mt-10">
        <h1 className="text-2xl font-semibold">
          Case Study of Patients Treated by Dr. Devi Prasad Shetty
        </h1>
        <div className="flex gap-10 mt-7">
          <img
            className="w-[12vw] h-[15vh]  rounded-lg"
            src="https://www.vaidam.com/sites/default/files/knowledge-center/narayana_bangalore.jpg"
            alt=""
          />
          <div>
            <h1>Dilip From Kenya Gets Surgery to Treat Aortic Aneurysm</h1>
            <h1 className="mt-3 text-blue-500 cursor-pointer">
              "Must say,the doctor was exceptional",says Dilip.
            </h1>
            <Link
              href="/about"
              className="mt-3 text-blue-500 hover:underline cursor-pointer"
            >
              Read More
            </Link>
          </div>
        </div>
        <hr className="mt-3" />
      </div>

      <div className="m-auto w-3/4 translate-x-[-12%] w-[70%] p-5 border shadow rounded-lg mt-10">
        <h1 className="text-2xl font-semibold">
          News Related to Dr. Devi Prasad Shetty
        </h1>
        <div className="flex gap-6 mt-5">
          <img
            className="w-[14vw] h-[15vh] rounded-lg"
            src="https://d1ea147o02h74h.cloudfront.net/rules-have-changed-heathcare-providers-have-to-be-more-considerate-devi-prasad-shetty-narayana-health.jpg"
            alt=""
          />
          <div>
            <h1>
              Dr. Devi Prasad: World's Best Cardiothoracic Surgeon in India
            </h1>
            <h1 className="text-blue-600 mt-3 cursor-pointer">
              Dr.Devi Prasad:Wold's Best Cardiothoracic Surgeon in IndiaRead
              More
            </h1>
          </div>
        </div>
      </div>

      <div className="m-auto w-3/4 translate-x-[-12%] w-[70%] h-[23vh]  border shadow rounded-lg flex justify-between  mt-10 bg-gradient-to-r from-purple-900 via-red-900 to-blue-900">
        <div className="p-5">
          <h1 className="text-[#fff] text-2xl px-5 py-2">
            Want to consult the doctor?
          </h1>
          <h1 className="text-[#fff] px-5">Don't Igonre Your Health!</h1>
          <button className="px-[5vw] py-2 bg-red-600 rounded-lg text-[#fff] mt-4 translate-x-[7%]">
            Send Enquirey
          </button>
        </div>
        <img
          className="h-[23vh]"
          src="https://test.drdineshkumarmittal.com/dr.png"
          alt=""
        />
      </div>
      </div>
    </>
  )
}

export default page;