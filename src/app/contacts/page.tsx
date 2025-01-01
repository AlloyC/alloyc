import React from 'react'
import SectionHeader from '../components/utils/SectionHeader'
import ContactCard from '../components/sections/ContactCard'

function ContactPage() {
  return (
    <div className='flex flex-col items-center py-10'>
          <SectionHeader text='Contact Me' />
          <p className='mt-4 mb-8'>I&rsquo;ve love to know how I can assist you</p>
          <ContactCard/>
    </div>
  )
}

export default ContactPage
