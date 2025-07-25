import React from 'react'
import Title from '../components/Title'
import Newsletterbox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At SparkCart, we believe fashion is not just about what you wear—it's about how it makes you feel. Our mission is to bring you an effortless shopping experience, offering trendy, comfortable, and affordable clothing for men, women, and kids all in one place.</p>
            <p>Founded with a vision to spark confidence and creativity, SparkCart is your go-to destination for everyday fashion essentials and statement pieces. From casual wear to party outfits, we curate styles that suit every mood, season, and personality.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>We are here to redefine how you shop for clothes—by combining the latest trends, top-notch quality, and budget-friendly prices into one seamless experience. Whether you're shopping for a casual day out or a special occasion, SparkCart is committed to helping you express your unique style with confidence.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-y-4 md:gap-x-3'>
        <div style={{ backgroundImage: `url(${assets.quality_assurance})`,filter: 'brightness(0.90)' }} className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>We are committed to delivering products that meet the highest standards of fabric, fit, and finish. Every item in our collection goes through a strict quality check process before it reaches you—because your satisfaction is our top priority.</p>
        </div>

        <div style={{ backgroundImage: `url(${assets.convenience})`,filter: 'brightness(0.95)' }} className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>At SparkCart, we are all about making your shopping experience easy, fast, and hassle-free. We know your time is valuable, so we’ve designed our platform to help you find what you love with just a few clicks—no stress, no confusion.</p>
        </div>

        <div style={{ backgroundImage: `url(${assets.customer_support})`,filter: 'brightness(0.95)' }} className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>We pride ourselves on delivering exceptional customer service that puts your needs first. Whether you have a question, a concern, or simply need help choosing the right outfit, our dedicated support team is here to assist you every step of the way.</p>
        </div>
      </div>

      <Newsletterbox />

    </div>
  )
}

export default About
