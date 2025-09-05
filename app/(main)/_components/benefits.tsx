import { benefitData } from '@/components/data'
import Image from 'next/image'
import React from 'react'

const Benefits = () => {
  return (
    <div className='w-full px-6 md:px-8 max-w-4xl mx-auto flex flex-col gap-6 py-12 md:py-24'>
      {/* Header */}
      <div>
        <h1
          id='benefit-h1'
          className='text-center text-3xl md:text-4xl font-semibold tracking-tight'
        >
          Community{' '}
          <span className="font-['cursive'] italic text-slate-200">Benefits</span>
        </h1>
      </div>

      {/* Benefits Grid */}
      <div className='grid mt-8 md:mt-12 grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8'>
        {benefitData.map((benefit) => (
          <div
            key={benefit.id}
            className='relative group bg-gradient-to-b from-gray-900/70 to-black/50 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300'
          >
            {/* Image */}
            <div className='relative w-full h-40 md:h-48'>
              <Image
                src={benefit.image}
                alt={benefit.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-black/40'></div>
            </div>

            {/* Text */}
            <div className='p-4 md:p-6'>
              <h2 className='text-lg md:text-xl font-semibold tracking-tight text-white'>
                {benefit.title}
              </h2>
              <p className='text-xs text-slate-300 mt-1 tracking-tight'>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Benefits
