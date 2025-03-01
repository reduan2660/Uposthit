import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'

const Home = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className="homeContainer flex-1">
        <Navbar/>
        <hr className='mx-2 mb-3'/>
        <div className="widgets flex ml-7 my-7">
          <Widget type="students"/>
          <Widget type="teachers"/>
          <Widget type="officers"/>
          <Widget type="courses"/>
          <Widget type="semesters"/>
        </div>
      </div>
    </div>
  )
}

export default Home