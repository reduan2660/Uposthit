import React from 'react'
import { Link } from 'react-router-dom'
import * as MdIcons from 'react-icons/md'
import * as FiIcons from 'react-icons/fi'
import * as BsIcons from 'react-icons/bs'
import * as FaIcons from 'react-icons/fa'
import * as BiIcons from 'react-icons/bi'



const Sidebar = () => {
  return (
    <div className='flex-initial border-r h-screen relative bg-white text-black shadow-xl'>
        <div className="top flex h-12 items-center justify-center">
            <span className="logo text-black text-2xl font-black font-dancing-script ">UPOSTHIT</span>
        </div>
        <hr className='mb-3 mx-2'/>
        <div className="center px-2">
            <ul className='list-none m-0 p-0'>
                <li className='text-gray-400 pl-2 pt-3 text-sm'>
                    <span>MAIN</span>
                </li>
                <li>
                    <Link to="/dashboard" className='flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                        <MdIcons.MdDashboard className='text-black text-2xl'/>
                        <span className='text-gray-600'>Dashboard</span>
                    </Link>
                </li>
                <li className='text-gray-400 pl-2 pt-6 text-sm'>
                    <span>LISTS</span>
                </li>
                <li>
                    <Link to="/students" className='flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                        <FaIcons.FaBookReader className='text-black text-2xl'/>
                        <span className='text-gray-600'>Students</span>
                    </Link>
                </li>
                <li>
                    <Link to="/teacher" className='flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                        <FaIcons.FaChalkboardTeacher className='text-black text-2xl'/>
                        <span className='text-gray-600'>Teachers</span>
                    </Link>
                </li>
                <li className='flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <FaIcons.FaUserShield className='text-black text-2xl'/>
                    <span className='text-gray-600'>Officers</span>
                </li>
                <li className='text-gray-400 pl-2 pt-6 text-sm'>
                    <span>PROGRAMS</span>
                </li>
                <li className='flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <FiIcons.FiBookOpen className='text-black text-2xl'/>
                    <span className='text-gray-600'>Courses</span>
                </li>
                <li className='flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <MdIcons.MdTimeline className='text-black text-2xl'/>
                    <span className='text-gray-600'>Semesters</span>
                </li>
                <li className='text-gray-400 pl-2 pt-6 text-sm'>
                    <span>USER</span>
                </li>
                <li className='flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                    <BsIcons.BsPersonCircle className='text-black text-2xl'/>
                    <span className='text-gray-600'>Profile</span>
                </li>
                <li>
                    <Link to="/login" className='flex gap-2 items-center pr-6 pl-2 mb-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                        <BiIcons.BiLogOutCircle className='text-black text-2xl'/>
                        <span className='text-gray-600'>Logout</span>
                    </Link>
                </li>
            </ul>
        </div> 
        <hr className='mb-3 mt-6 mx-2'/>
        <div className="bottom px-2">
            <div className='text-gray-400 pl-2 pt-6 text-sm'>
                <span>SUPPORT</span>
            </div>
            <div className='flex gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                <MdIcons.MdHelpOutline className='text-black text-2xl'/>
                <span className='text-gray-600'>Help</span>
            </div>
            <div className='flex w-full gap-2 items-center pr-6 pl-2 my-2 py-1.5 text-xl hover:text-black hover:bg-violet-200 rounded-md cursor-pointer'>
                <MdIcons.MdInfoOutline className='text-black text-2xl'/>
                <span className='text-gray-600'>About</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar