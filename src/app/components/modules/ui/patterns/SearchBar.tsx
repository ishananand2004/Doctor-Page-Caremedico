"use client";
import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import Link from "next/link";
const SearchBar = () => {
  const [country, setCountry] = useState("INDIA");
  const [city, setCity] = useState("All cities");
  const [department, setdepartment] = useState("All Department");
  const [hospitals, sethospitals] = useState("All Hospital");
  return (
    <>
      <div className="bg-zinc-200 h-[25vh] p-3">
        <div className="flex justify-center items-center ">
          <h1 className="text-3xl font-semibold">
            Best Cardiac Surgeons in Bangalore
          </h1>
        </div>

        <div className="w-[80%] flex gap-2 translate-x-[15%] rounded-lg bg-pink-500 mt-[2%] p-4">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-[19%] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
          >
            <option value="India">India</option>
            <option value="UAE">UAE</option>
            <option value="Thailand">Thailand</option>
            <option value="Turkey">Turkey</option>
            <option value="South Korea">South Korea</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Germany">Germany</option>
            <option value="Singaore">Singaore</option>
            <option value="South Africa">South Africa</option>
            <option value="Oman">Oman</option>
            <option value="Isrel">Isrel</option>
            <option value="Egypt">Egypt</option>
            <option value="Spain">Spain</option>
            <option value="Switzerland">Switzerland</option>
          </select>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-[19%] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
          >
            <option value="All cities">All cities</option>
            <option value="New Delhi">New Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Kolkata">Kolkata</option>
          </select>
          <select
            value={department}
            onChange={(e) => setdepartment(e.target.value)}
            className="w-[19%] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
          >
            <option value="All department">All Department</option>
            <option value="Cardiologists">Cardiologists</option>
            <option value="Neurologists">Neurologists</option>
            <option value="Endocrinologist">Endocrinologist</option>
            <option value="Oncologists">Oncologists</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Gastroenterology">Gastroenterology</option>
            <option value="Obstetrics and Gynecology">
              Obstetrics and Gynecology
            </option>
            <option value="Nephrology">Nephrology</option>
            <option value="Pediatrics">Pediatrics</option>
          </select>

          <select
            value={hospitals}
            onChange={(e) => sethospitals(e.target.value)}
            className="w-[19%] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
          >
            <option value="All Hospitals">All Hospitals</option>
            <option value="Manipal hospital bangalore">
              Manipal hospital bangalore
            </option>
            <option value="Apollo hospital bangalore">
              Apollo hospital bangalore
            </option>
            <option value="Fortis hospital bangalore">
              Fortis hospital bangalore
            </option>
          </select>

          <button
            className="w-[14vw] p-4 bg-blue-500 text-[#fff] hover:bg-blue-600 hover:scale-105 font-semibold rounded-lg translate-x-[5%]"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <h1 className="text-xs">
          Based on the expertise and experience you seek in your doctor, choose
          from the 125+ skilled Cardiac Surgeons in our network. You can trust
          us to help you find the caring and competent medical care you need.
        </h1>
      </div>

      {/* box wala part hai ye */}
      <div className="px-[10%] mt-7  flex justify-start items-center">
        <div className="flex flex-col rounded-md border  mt-10 w-[60vw] h-[38vh]  border-blue-200 ">
          <div className="px-2 py-4 w-[60vw] flex justify-evenly  gap-10 translate-x-[-2%] ">
            <img
              className="w-[10vw] h-[20vh] object-cover shrink-0 rounded-md"
              src="https://d1ea147o02h74h.cloudfront.net/rules-have-changed-heathcare-providers-have-to-be-more-considerate-devi-prasad-shetty-narayana-health.jpg"
              alt="doctor photo"
            />
            <div className="flex flex-col translate-x-[-10%]">
              <div className="flex w-fit gap-5 items-center cursor-pointer">
                <div className="flex gap-2 cursor-pointer ">
                  <Link href="/about">
                    <h1 className="text-xl font-semibold">
                      Dr. Devi Prasad Shetty
                    </h1>
                  </Link>
                  <FaCircleCheck
                    className="text-green-500 translate-y-[25%]"
                    size={"16px"}
                  />
                </div>
                <h1 className="text-base bg-blue-300 border border-blue-500 rounded-full p-1 text-xs hover:underline">
                  Cardiac Surgeon
                </h1>
              </div>
              <h1 className="text-xs">Bangalore, India</h1>
              <div className="flex mt-1">
                <MdStar className="text-yellow-500" />
                <MdStar className="text-yellow-500" />
                <MdStar className="text-yellow-500" />
                <MdStar className="text-yellow-500" />
                <MdOutlineStarBorder />
                <h1 className="text-xs translate-x-[5%] text-green-500">
                  4.2 (54 Ratings)
                </h1>
              </div>
              <h1 className="mt-1 text-base text-xs">
                52+ years of overall experience
              </h1>
              <h1 className="mt-1 text-base text-xs">Designation: Chairman</h1>
              <h1 className="text-xs">
                Works At:{" "}
                <span className="text-blue-500">
                  <Link href="/about1">Narayana Multispeciality Hospital, Bangalore</Link>
                </span>
              </h1>
            </div>
            <div className="flex gap-4 flex-col translate-x-[15%] items-center justify-center">
              <Link
                href="/appointment"
                className="bg-red-500 p-3  hover:bg-red-600 rounded-md border-none text-[#fff] border border-[#000]"
              >
                Book Appointment
              </Link>
              <Link
                href="https://web.whatsapp.com/"
                className=" items-center p-3 text-[#fff] border-none flex gap-2 bg-green-500 hover:bg-green-600 border border-[#000] rounded-md"
              >
                <FaWhatsapp className="w-[2vw]" />
                <h1 className="translate-x-[-10%]">WhatsApp us</h1>
              </Link>
            </div>
          </div>
          <div className="px-3 text-base text-[#9e9e9e] font-semibold">
            <h1>
              Dr. Devi Prasad Shetty is a well-known Cardiothoracic Surgeon with
              over 45 years of experience. He founded Narayana Health in 2000.
              He has performed over 15,000 hear....
            </h1>
          </div>
          <div className="flex justify-end px-9">
            <Link href="/about">
              <h1 className="text-blue-500 font-semibold">Read more</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-[10%] mt-8  flex justify-start items-center">
        <div className="flex flex-col rounded-md border   w-[60vw] h-[38vh] border-blue-200 ">
          <div className="px-2 py-4 w-[60vw] flex justify-evenly  gap-10 translate-x-[-2%] ">
            <img
              className="w-[10vw] h-[20vh] object-cover shrink-0 rounded-md"
              src="https://d1ea147o02h74h.cloudfront.net/joseph-xavier-4.jpg"
              alt="doctor photo"
            />
            <div className="translate-x-[-5%]">
              <div className="flex flex-col translate-x-[-10%]">
                <div className="flex w-fit gap-5 items-center cursor-pointer">
                  <div className="flex gap-2 cursor-pointer ">
                    <Link href="/about">
                      <h1 className="text-xl font-semibold">
                        Dr. Joseph Xavier
                      </h1>
                    </Link>
                    <FaCircleCheck
                      className="text-green-500 translate-y-[25%]"
                      size={"16px"}
                    />
                  </div>
                  <h1 className="text-base bg-blue-300 border border-blue-500 rounded-full p-1 text-xs hover:underline">
                    Cardiac Surgeon
                  </h1>
                </div>
                <h1 className="text-xs">Bangalore, India</h1>

                <h1 className=" text-base text-xs mt-1">
                  28+ years of overall experience
                </h1>
                <h1 className="mt-1 text-base text-xs">
                  Designation: Consultant
                </h1>
                <h1 className="text-xs">
                  Works At:{" "}
                  <span className="text-blue-500">
                    Narayana Multispeciality Hospital, Bangalore
                  </span>
                </h1>
              </div>
            </div>
            <div className="flex gap-4 flex-col translate-x-[15%] items-center justify-center">
              <Link
                href="/appointment"
                className="bg-red-500 p-3  hover:bg-red-600 rounded-md border-none text-[#fff] border border-[#000]"
              >
                Book Appointment
              </Link>
              <Link
                href="https://web.whatsapp.com/"
                className=" items-center p-3 text-[#fff] border-none flex gap-2 bg-green-500 hover:bg-green-600 border border-[#000] rounded-md"
              >
                <FaWhatsapp className="w-[2vw]" />
                <h1 className="translate-x-[-10%]">WhatsApp us</h1>
              </Link>
            </div>
          </div>
          <div className="px-3 text-base text-[#9e9e9e] translate-x-[1%] font-semibold">
            <h1>
              Dr. Joseph Xavier is a leading Cardiac Surgeon with +26 years of
              experience in the field of cardio-thoracic surgeries. He is the
              founding trustee and the V....
            </h1>
          </div>
          <div className="flex justify-end px-9">
            <Link href="/about">
              <h1 className="text-blue-500 font-semibold">Read more</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-[10%] mt-8  flex justify-start items-center">
        <div className="flex flex-col rounded-md border   w-[60vw] h-[38vh] border-blue-200 ">
          <div className="px-2 py-4 w-[60vw] flex justify-evenly  gap-10 translate-x-[-2%] ">
            <img
              className="w-[10vw] h-[20vh] object-cover shrink-0 rounded-md"
              src="https://d1ea147o02h74h.cloudfront.net/dr._devananda_n.s_-_cardiovascular_and_thoracic_surgeon.jpg"
              alt="doctor photo"
            />
            <div className="translate-x-[-5%]">
              <div className="flex flex-col translate-x-[-10%]">
                <div className="flex w-fit gap-5 items-center cursor-pointer">
                  <div className="flex gap-2 cursor-pointer ">
                    <Link href="/about">
                      <h1 className="text-xl font-semibold">
                        Dr. Devananda N.S
                      </h1>
                    </Link>
                    <FaCircleCheck
                      className="text-green-500 translate-y-[25%]"
                      size={"16px"}
                    />
                  </div>
                  <h1 className="text-base bg-blue-300 border border-blue-500 rounded-full p-1 text-xs hover:underline">
                    Cardiac Surgeon
                  </h1>
                </div>
                <h1 className="text-xs">Bangalore, India</h1>
                <div className="flex mt-1">
                  <MdStar className="text-yellow-500" />
                  <MdStar className="text-yellow-500" />
                  <MdStar className="text-yellow-500" />
                  <MdStar className="text-yellow-500" />
                  <MdStar className="text-yellow-500" />
                  <h1 className="text-xs translate-x-[5%] text-green-500">
                    5 (42 Ratings)
                  </h1>
                </div>
                <h1 className="mt-2 text-base text-xs mt-1">
                  33+ years of overall experience
                </h1>
                <h1 className="mt-1 text-base text-xs">
                  Designation: Chairman
                </h1>
                <h1 className="text-xs">
                  Works At:{" "}
                  <span className="text-blue-500">
                    Manipal Hospital (Old Airport Road) Bangalore
                  </span>
                </h1>
              </div>
            </div>
            <div className="flex gap-4 flex-col translate-x-[15%] items-center justify-center">
              <Link
                href="/appointment"
                className="bg-red-500 p-3  hover:bg-red-600 rounded-md border-none text-[#fff] border border-[#000]"
              >
                Book Appointment
              </Link>
              <Link
                href="https://web.whatsapp.com/"
                className=" items-center p-3 text-[#fff] border-none flex gap-2 bg-green-500 hover:bg-green-600 border border-[#000] rounded-md"
              >
                <FaWhatsapp className="w-[2vw]" />
                <h1 className="translate-x-[-10%]">WhatsApp us</h1>
              </Link>
            </div>
          </div>
          <div className="px-3 text-base text-[#9e9e9e] translate-x-[1%] font-semibold">
            <h1>
              Dr. Devananda N.S is a Cardiovascular and Thoracic Surgeon with
              28+ years of experience. He has been awarded the Rotary Centenary
              Award for Vocational excellence and....
            </h1>
          </div>
          <div className="flex justify-end px-9">
            <Link href="/about">
              <h1 className="text-blue-500 font-semibold">Read more</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-[10%] mt-8  flex justify-start items-center">
        <div className="flex flex-col rounded-md border   w-[60vw] h-[38vh] border-blue-200 ">
          <div className="px-2 py-4 w-[60vw] flex justify-evenly  gap-10 translate-x-[-2%] ">
            <img
              className="w-[10vw] h-[20vh] object-cover shrink-0 rounded-md"
              src="https://d1ea147o02h74h.cloudfront.net/dr._vivek_jawali.jpg"
              alt="doctor photo"
            />
            <div className="translate-x-[-5%]">
              <div className="flex flex-col translate-x-[-10%]">
                <div className="flex w-fit gap-5 items-center cursor-pointer">
                  <div className="flex gap-2 cursor-pointer ">
                    <Link href="/about">
                      <h1 className="text-xl font-semibold">
                        Dr. Vivek Jawali
                      </h1>
                    </Link>
                    <FaCircleCheck
                      className="text-green-500 translate-y-[25%]"
                      size={"16px"}
                    />
                  </div>
                  <h1 className="text-base bg-blue-300 border border-blue-500 rounded-full p-1 text-xs hover:underline">
                    Cardiac Surgeon
                  </h1>
                </div>
                <h1 className="text-xs">Bangalore, India</h1>
                <div className="flex mt-1">
                  <MdStar className="text-yellow-500" />
                  <MdStar className="text-yellow-500" />
                  <MdStar className="text-yellow-500" />
                  <MdStar className="text-yellow-500" />
                  <MdStar className="text-yellow-500" />
                  <h1 className="text-xs translate-x-[5%] text-green-500">
                    5.0 (117 Ratings)
                  </h1>
                </div>
                <h1 className=" text-base text-xs mt-1">
                  44+ years of overall experience
                </h1>
                <h1 className="mt-1 text-base text-xs">
                  Designation: Chairman
                </h1>
                <h1 className="text-xs">
                  Works At:{" "}
                  <span className="text-blue-500">
                    Fortis Hospital, Bangalore (Bannerghatta Road)
                  </span>
                </h1>
              </div>
            </div>
            <div className="flex gap-4 flex-col translate-x-[15%] items-center justify-center">
              <Link
                href="/appointment"
                className="bg-red-500 p-3  hover:bg-red-600 rounded-md border-none text-[#fff] border border-[#000]"
              >
                Book Appointment
              </Link>
              <Link
                href="https://web.whatsapp.com/"
                className=" items-center p-3 text-[#fff] border-none flex gap-2 bg-green-500 hover:bg-green-600 border border-[#000] rounded-md"
              >
                <FaWhatsapp className="w-[2vw]" />
                <h1 className="translate-x-[-10%]">WhatsApp us</h1>
              </Link>
            </div>
          </div>
          <div className="px-3 text-base text-[#9e9e9e] translate-x-[1%] font-semibold">
            <h1>
              Dr. Vivek Jawali is one of the best Cardiothoracic and Vascular
              Surgeons in India. He has 40+ years of experience and did over
              18,000 open-heart surgeries. Dr. Jawali als....
            </h1>
          </div>
          <div className="flex justify-end px-9">
            <Link href="/about">
              <h1 className="text-blue-500 font-semibold">Read more</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-[10%] mt-8  flex justify-start items-center">
        <div className="flex flex-col rounded-md border   w-[60vw] h-[38vh] border-blue-200 ">
          <div className="px-2 py-4 w-[60vw] flex justify-evenly  gap-10 translate-x-[-2%] ">
            <img
              className="w-[10vw] h-[20vh] object-cover shrink-0 rounded-md"
              src="https://d1ea147o02h74h.cloudfront.net/dr._k_p_srihari_das-min.jpg"
              alt="doctor photo"
            />
            <div className="translate-x-[-5%]">
              <div className="flex flex-col translate-x-[-10%]">
                <div className="flex w-fit gap-5 items-center cursor-pointer">
                  <div className="flex gap-2 cursor-pointer ">
                    <Link href="/about">
                      <h1 className="text-xl font-semibold">
                        Dr. K P Srihari Das
                      </h1>
                    </Link>
                    <FaCircleCheck
                      className="text-green-500 translate-y-[25%]"
                      size={"16px"}
                    />
                  </div>
                  <h1 className="text-base bg-blue-300 border border-blue-500 rounded-full p-1 text-xs hover:underline">
                    Cardiac Surgeon
                  </h1>
                </div>
                <h1 className="text-xs">Bangalore, India</h1>

                <h1 className="mt-2 text-base text-xs mt-1">
                  30+ years of overall experience
                </h1>
                <h1 className="mt-1 text-base text-xs">
                  Designation: Consultant
                </h1>
                <h1 className="text-xs">
                  Works At:{" "}
                  <span className="text-blue-500">
                    Manipal hospitals Life's On, Jayanagar
                  </span>
                </h1>
              </div>
            </div>
            <div className="flex gap-4 flex-col translate-x-[15%] items-center justify-center">
              <Link
                href="/appointment"
                className="bg-red-500 p-3  hover:bg-red-600 rounded-md border-none text-[#fff] border border-[#000]"
              >
                Book Appointment
              </Link>
              <Link
                href="https://web.whatsapp.com/"
                className=" items-center p-3 text-[#fff] border-none flex gap-2 bg-green-500 hover:bg-green-600 border border-[#000] rounded-md"
              >
                <FaWhatsapp className="w-[2vw]" />
                <h1 className="translate-x-[-10%]">WhatsApp us</h1>
              </Link>
            </div>
          </div>
          <div className="px-3 text-base text-[#9e9e9e] translate-x-[1%] font-semibold">
            <h1>
              Dr. K P Srihari Das is a senior and skilled Interventional
              Cardiologist with +27 years of experience in the field of treating
              cardiac conditions. Dr. K P Srihari Das....
            </h1>
          </div>
          <div className="flex justify-end px-9">
            <Link href="/about">
              <h1 className="text-blue-500 font-semibold">Read more</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-[10%] mt-8  flex justify-start items-center">
        <div className="flex flex-col rounded-md border   w-[60vw] h-[38vh] border-blue-200 ">
          <div className="px-2 py-4 w-[60vw] flex justify-evenly  gap-10 translate-x-[-2%] ">
            <img
              className="w-[10vw] h-[20vh] object-cover shrink-0 rounded-md"
              src="https://d1ea147o02h74h.cloudfront.net/dr._padma_kumar.jpg"
              alt="doctor photo"
            />
            <div className="translate-x-[-5%]">
              <div className="flex flex-col translate-x-[-10%]">
                <div className="flex w-fit gap-5 items-center cursor-pointer">
                  <div className="flex gap-2 cursor-pointer ">
                    <Link href="/about">
                      <h1 className="text-xl font-semibold">
                        Dr. P. Padmakumar
                      </h1>
                    </Link>
                    <FaCircleCheck
                      className="text-green-500 translate-y-[25%]"
                      size={"16px"}
                    />
                  </div>
                  <h1 className="text-base bg-blue-300 border border-blue-500 rounded-full p-1 text-xs hover:underline">
                    Cardiac Surgeon
                  </h1>
                </div>
                <h1 className="text-xs">Bangalore, India</h1>
                <h1 className="mt-1 text-base text-xs ">
                  34+ years of overall experience
                </h1>
                <h1 className="mt-1 text-base text-xs">
                  Designation: Consultant
                </h1>
                <h1 className="text-xs">
                  Works At:{" "}
                  <span className="text-blue-500">
                    Manipal Hospital (Old Airport Road) Bangalore
                  </span>
                </h1>
              </div>
            </div>
            <div className="flex gap-4 flex-col translate-x-[15%] items-center justify-center">
              <Link
                href="/appointment"
                className="bg-red-500 p-3  hover:bg-red-600 rounded-md border-none text-[#fff] border border-[#000]"
              >
                Book Appointment
              </Link>
              <Link
                href="https://web.whatsapp.com/"
                className=" items-center p-3 text-[#fff] border-none flex gap-2 bg-green-500 hover:bg-green-600 border border-[#000] rounded-md"
              >
                <FaWhatsapp className="w-[2vw]" />
                <h1 className="translate-x-[-10%]">WhatsApp us</h1>
              </Link>
            </div>
          </div>
          <div className="px-3 text-base text-[#9e9e9e] translate-x-[1%] font-semibold">
            <h1>
              Dr. Padma Kumar is a senior consultant in cardiology with more
              than 30 years of experience in the practice. He is specialized in
              procedures like cardiac ablation, he....
            </h1>
          </div>
          <div className="flex justify-end px-9">
            <Link href="/about">
              <h1 className="text-blue-500 font-semibold">Read more</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-[10%] mt-8  flex justify-start items-center">
        <div className="flex flex-col rounded-md border   w-[60vw] h-[38vh] border-blue-200 ">
          <div className="px-2 py-4 w-[60vw] flex justify-evenly  gap-10 translate-x-[-2%] ">
            <img
              className="w-[10vw] h-[20vh] object-cover shrink-0 rounded-md"
              src="https://d1ea147o02h74h.cloudfront.net/dr._ranjan_shetty-min.jpg"
              alt="doctor photo"
            />
            <div className="translate-x-[-5%]">
              <div className="flex flex-col translate-x-[-10%]">
                <div className="flex w-fit gap-5 items-center cursor-pointer">
                  <div className="flex gap-2 cursor-pointer ">
                    <Link href="/about">
                      <h1 className="text-xl font-semibold">
                        Dr. Ranjan Shetty
                      </h1>
                    </Link>
                    <FaCircleCheck
                      className="text-green-500 translate-y-[25%]"
                      size={"16px"}
                    />
                  </div>
                  <h1 className="text-base bg-blue-300 border border-blue-500 rounded-full p-1 text-xs hover:underline">
                    Cardiac Surgeon
                  </h1>
                </div>
                <h1 className="text-xs">Bangalore, India</h1>
                <div className="flex mt-1">
                  <MdStar className="text-yellow-500" />
                  <MdStar className="text-yellow-500" />
                  <MdStar className="text-yellow-500" />
                  <MdStar className="text-yellow-500" />
                  <MdStar className="text-yellow-500" />
                  <h1 className="text-xs translate-x-[5%] text-green-500">
                    5.0 (117 Ratings)
                  </h1>
                </div>
                <h1 className=" text-base text-xs mt-1">
                  21+ years of overall experience
                </h1>
                <h1 className="mt-1 text-base text-xs">
                  Designation: Consultant
                </h1>
                <h1 className="text-xs">
                  Works At:{" "}
                  <span className="text-blue-500">
                    Manipal Hospital (Old Airport Road) Bangalore
                  </span>
                </h1>
              </div>
            </div>
            <div className="flex gap-4 flex-col translate-x-[15%] items-center justify-center">
              <Link
                href="/appointment"
                className="bg-red-500 p-3  hover:bg-red-600 rounded-md border-none text-[#fff] border border-[#000]"
              >
                Book Appointment
              </Link>
              <Link
                href="https://web.whatsapp.com/"
                className=" items-center p-3 text-[#fff] border-none flex gap-2 bg-green-500 hover:bg-green-600 border border-[#000] rounded-md"
              >
                <FaWhatsapp className="w-[2vw]" />
                <h1 className="translate-x-[-10%]">WhatsApp us</h1>
              </Link>
            </div>
          </div>
          <div className="px-3 text-base text-[#9e9e9e] translate-x-[1%] font-semibold">
            <h1>
              Dr. Ranjan Shetty is a renowned Interventional Cardiologist
              practicing successfully for more than 17 years. He is proficient
              in performing Coronary, Congenital, Stru....
            </h1>
          </div>
          <div className="flex justify-end px-9">
            <Link href="/about">
              <h1 className="text-blue-500 font-semibold">Read more</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
