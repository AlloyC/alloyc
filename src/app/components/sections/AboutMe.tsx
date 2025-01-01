import React from 'react'
import SectionHeader from '../utils/SectionHeader'

function AboutMe() {
  return (
    <div className='px-3 space-y-5'>
      <div className='flex md:justify-start'>
      <SectionHeader text='Get to Know me' />
          </div>
          <div className='flex flex-col md:flex-row md:gap-10 lg:gap-5 gap-2 leading-7 md:px-4 text-pretty md:text-balance justify-center max-w-screen-[1000px]'>
              <p className='md:w-6/12 lg:w-full'>
              Hi, I’m John Okeoghene, a self-taught <span className='text-dark-blue'>front-end developer</span> passionate about creating impactful digital solutions. My journey into web development stems from a lifelong curiosity about how things work, from dissecting broken radios as a kid to building innovative projects like a hands-free flashlight.
              </p>
              <p className='md:w-5/12 lg:w-full'>
              Over the years, I’ve honed my skills by collaborating with senior developers and UI/UX designers, contributing to efficient and user-centered projects. For me, tech isn’t just a field, it’s a tool to solve real-world problems creatively. 
              </p>
          </div>
    </div>
  )
}

export default AboutMe
