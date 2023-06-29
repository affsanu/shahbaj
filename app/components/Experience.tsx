"use client";
import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import ReactBD from './works/ReactBD'
import Google from './works/Google';
import Apple from './works/Apple';
import Splash from './works/Splash';
import Amazon from './works/Amazon';

const Experience = () => {
    const [workReactbd, setWorkReactbd] = useState(true);
    const [workGoogle, setWorkGoogle] = useState(false);
    const [WorkApple, setWorkApple] = useState(false);
    const [workSplash, setWorkSplash] = useState(false);
    const [workAmazon, setWorkAmazon] = useState(false);

    const handleReactbd = () => {
        setWorkReactbd(true);
        setWorkGoogle(false)
        setWorkApple(false)
        setWorkSplash(false)
        setWorkAmazon(false)
    }
    const handleGoogle = () => {
        setWorkReactbd(false);
        setWorkGoogle(true)
        setWorkApple(false)
        setWorkSplash(false)
        setWorkAmazon(false)
    }
    const handleApple = () => {
        setWorkReactbd(false);
        setWorkGoogle(false)
        setWorkApple(true)
        setWorkSplash(false)
        setWorkAmazon(false)
    }
    const handleSplash = () => {
        setWorkReactbd(false);
        setWorkGoogle(false)
        setWorkApple(false)
        setWorkSplash(true)
        setWorkAmazon(false)
    }
    const handleAmazon = () => {
        setWorkReactbd(false);
        setWorkGoogle(false)
        setWorkApple(false)
        setWorkSplash(false)
        setWorkAmazon(true)
    }
    return (
        <section id="experience" className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
            <SectionTitle titleNo="02" title="Where I have Worked" />
            <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
                <ul className='md:w-32 flex flex-col'>
                    <li
                        onClick={handleReactbd}
                        className={`border-l-2 ${workReactbd ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        ReactBD
                    </li>
                    <li
                        onClick={handleGoogle}
                        className={`border-l-2 ${workGoogle ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        Google
                    </li>
                    <li
                        onClick={handleApple}
                        className={`border-l-2 ${WorkApple ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        Apple
                    </li>
                    <li
                        onClick={handleSplash}
                        className={`border-l-2 ${workSplash ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        Splash
                    </li>
                    <li
                        onClick={handleAmazon}
                        className={`border-l-2 ${workAmazon ? 'border-l-textGreen text-textGreen' : 'border-l-hoverColor text-textDark'} bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                        Amazon
                    </li>
                </ul>
                {workReactbd && <ReactBD />}
                {workGoogle && <Google />}
                {WorkApple && <Apple />}
                {workSplash && <Splash />}
                {workAmazon && <Amazon />}
            </div>
        </section>
    )
}

export default Experience