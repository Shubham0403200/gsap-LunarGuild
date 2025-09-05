import { Button } from '@/components/ui/button'
import { PlayCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Newsletter = () => {
  return (
    <div className='py-16 md:py-24 px-6 max-w-4xl mx-auto relative'>
      {/* Video Section */}
      <div className="relative group w-full md:h-[200px] aspect-video rounded-xl max-w-xl mx-auto overflow-hidden shadow-lg">
        <Image
          src="https://images.pexels.com/photos/6953672/pexels-photo-6953672.jpeg"
          alt="how-start-image"
          width={600}
          height={400}
          className="w-full h-64 sm:h-80 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <PlayCircle className="w-16 h-16 text-white drop-shadow-lg cursor-pointer hover:scale-110 transition-transform" />
        </div>

        {/* Video Info Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
          <h1 className="text-lg font-semibold">Origin of Lunar Builds</h1>
          <p className="text-sm opacity-80">Interview with Shubham</p>
        </div>
      </div>

      {/* Bottom Box with Grid Pattern */}
      <div className="relative w-full py-8 bg-[#121212] mt-8 md:mt-0 flex flex-col items-center gap-4 rounded-xl overflow-hidden">
        {/* Light Square Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 40px),
              repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 40px)
            `,
            backgroundSize: '15px 15px',
          }}
        />

        {/* Content */}
        <h1 className="text-center text-3xl md:text-4xl font-bold text-white tracking-tight relative z-10">
          Ready to work on your <br />
          <span className="italic font-['cursive'] text-slate-300 font-medium">
            highest calling?
          </span>
        </h1>

        {/* Button with Glow */}
        <div className="relative mt-0 md:mt-4">
          {/* Glowing Light */}
          <div className="absolute inset-0 w-[150%] h-[150%] -left-1/4 -top-1/4 bg-white/20 blur-2xl rounded-full animate-pulse-slow" />
          <Button className="relative z-10 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-semibold  transition-transform tracking-tight hover:bg-white/80 cursor-pointer">
            Join Our Lunar Community
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
