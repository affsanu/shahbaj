"use client";
import { TbBrandGithub } from 'react-icons/tb';
import { SlSocialYoutube, SlSocialFacebook, SlSocialLinkedin, SlSocialInstagram } from 'react-icons/sl';
import { motion } from "framer-motion";

const LeftSide = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
            <div className='flex flex-col gap-4'>
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    href='https://github.com/affsanu' target='_blank'>
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <TbBrandGithub />
                    </span>
                </motion.a>
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7 }}
                    href='https://github.com/affsanu' target='_blank'>
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialYoutube />
                    </span>
                </motion.a>
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    href='https://github.com/affsanu' target='_blank'>
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialLinkedin />
                    </span>
                </motion.a>
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.9 }}
                    href='https://github.com/affsanu' target='_blank'>
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialFacebook />
                    </span>
                </motion.a>
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    href='https://github.com/affsanu' target='_blank'>
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialInstagram />
                    </span>
                </motion.a>
            </div>
            <div className='w-[2px] h-32 bg-textDark'></div>
        </div>
    )
}

export default LeftSide