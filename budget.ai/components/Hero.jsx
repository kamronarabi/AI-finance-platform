'use client'
import React, { useEffect, useRef } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {

    const imageRef = useRef(null);

    useEffect(() => {
      const imageElement = imageRef.current;
  
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100;
  
        if (scrollPosition > scrollThreshold) {
          imageElement.classList.add("scrolled");
        } else {
          imageElement.classList.remove("scrolled");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className=' pb-20 px-4'>
        <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 bg-gradient-to-br from-blue-600 to-purple-600 font-extrabold tracking-tighter pr-2 pb-2 text-transparent bg-clip-text">

                Budget Smarter with AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                An AI-powered financial management platform that helps you track, analyze, and optimize your spending with real-time insights.
            </p>
            <div className="flex justify-center space-x-4">
                <Link href='/dashboard'>
                <Button size='lg' className='px-8'>
                    Get Started
                </Button>
                </Link>
            </div>
            <div className="hero-image-wrapper mt-5 md:mt-0">
                <div ref={imageRef} className="hero-image">
                    <Image src='/next.svg' width={1280} height={720} alt= 'dashboard prev' className='rounded-lg shodow-2xl border mx-auto' priority />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero