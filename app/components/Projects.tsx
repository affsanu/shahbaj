"use client";
import { project } from '@/public/assets';
import SectionTitle from './SectionTitle';
import Image from 'next/image';
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
    return (
        <section
            id='project'
            className='max-w-container mx-auto lgl:px-20 py-24'
        >
            <SectionTitle titleNo='03' title='Some Things I Have Built' />
            <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
                {/* Project 1 */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <a
                            className='w-full xl:w-1/2 h-auto relative group'
                            href='https://saidpurnews.com'
                            target='_blank'>
                            <div>
                                <Image
                                    className='w-full h-full object-cover'
                                    src={project}
                                    alt='project'
                                />
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                            <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                            <h3 className='text-2xl font-bold'>Newspaper Website</h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat in, saepe aliquam numquam iste nam nisi et officiis cum cumque accusantium hic consequuntur animi autem iusto minima ullam dolore, sequi illum doloremque tenetur veritatis!
                            </p>
                            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>NextJs</li>
                                <li>TypeScript</li>
                                <li>Next-auth</li>
                                <li>Stripe</li>
                                <li>Cloud Hosting</li>
                            </ul>
                            <ul>
                                <div className='text-2xl flex gap-4'>
                                    <a
                                        className='hover:text-textGreen duration-300'
                                        href=''
                                        target='_blank'
                                    >
                                        <TbBrandGithub />
                                    </a>
                                    <a
                                        className='hover:text-textGreen duration-300'
                                        href=''
                                        target='_blank'
                                    >
                                        <AiOutlineYoutube />
                                    </a>
                                    <a
                                        className='hover:text-textGreen duration-300'
                                        href=''
                                        target='_blank'
                                    >
                                        <RxOpenInNewWindow />
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* Project 2 */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row-reverse gap-6'>
                        <a
                            className='w-full xl:w-1/2 h-auto relative group'
                            href='https://saidpurnews.com'
                            target='_blank'>
                            <div>
                                <Image
                                    className='w-full h-full object-cover'
                                    src={project}
                                    alt='project'
                                />
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end  z-10'>
                            <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                            <h3 className='text-2xl font-bold'>Newspaper Website</h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat in, saepe aliquam numquam iste nam nisi et officiis cum cumque accusantium hic consequuntur animi autem iusto minima ullam dolore, sequi illum doloremque tenetur veritatis!
                            </p>
                            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>NextJs</li>
                                <li>TypeScript</li>
                                <li>Next-auth</li>
                                <li>Stripe</li>
                                <li>Cloud Hosting</li>
                            </ul>
                            <ul>
                                <div className='text-2xl flex gap-4'>
                                    <a
                                        className='hover:text-textGreen duration-300'
                                        href=''
                                        target='_blank'
                                    >
                                        <TbBrandGithub />
                                    </a>
                                    <a
                                        className='hover:text-textGreen duration-300'
                                        href=''
                                        target='_blank'
                                    >
                                        <AiOutlineYoutube />
                                    </a>
                                    <a
                                        className='hover:text-textGreen duration-300'
                                        href=''
                                        target='_blank'
                                    >
                                        <RxOpenInNewWindow />
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
                {/* Project 3 */}
                <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                    <div className='flex flex-col xl:flex-row gap-6'>
                        <a
                            className='w-full xl:w-1/2 h-auto relative group'
                            href='https://saidpurnews.com'
                            target='_blank'>
                            <div>
                                <Image
                                    className='w-full h-full object-cover'
                                    src={project}
                                    alt='project'
                                />
                            </div>
                        </a>
                        <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                            <p className='font-titleFont text-textGreen text-sm tracking-wide'>Featured Project</p>
                            <h3 className='text-2xl font-bold'>Newspaper Website</h3>
                            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat in, saepe aliquam numquam iste nam nisi et officiis cum cumque accusantium hic consequuntur animi autem iusto minima ullam dolore, sequi illum doloremque tenetur veritatis!
                            </p>
                            <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                                <li>NextJs</li>
                                <li>TypeScript</li>
                                <li>Next-auth</li>
                                <li>Stripe</li>
                                <li>Cloud Hosting</li>
                            </ul>
                            <ul>
                                <div className='text-2xl flex gap-4'>
                                    <a
                                        className='hover:text-textGreen duration-300'
                                        href=''
                                        target='_blank'
                                    >
                                        <TbBrandGithub />
                                    </a>
                                    <a
                                        className='hover:text-textGreen duration-300'
                                        href=''
                                        target='_blank'
                                    >
                                        <AiOutlineYoutube />
                                    </a>
                                    <a
                                        className='hover:text-textGreen duration-300'
                                        href=''
                                        target='_blank'
                                    >
                                        <RxOpenInNewWindow />
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects