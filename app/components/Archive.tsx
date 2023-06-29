"use client";
import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const CardItems = [
    {
        id: 1,
        title: "Educare English Learning Academy",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        listItem: ["ReactJs", "Tailwind CSS", "Rest Api"],
        link: "https://udemy.com",
    },
    {
        id: 2,
        title: "Saidpur News | Newspaper & Magazin",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        listItem: ["NextJs", "Tailwind CSS", "Next-auth"],
        link: "https://nextjs.org",
    },
    {
        id: 1,
        title: "Educare English Learning Academy",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        listItem: ["ReactJs", "Tailwind CSS", "Rest Api"],
        link: "https://udemy.com",
    },
    {
        id: 2,
        title: "Saidpur News | Newspaper & Magazin",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        listItem: ["NextJs", "Tailwind CSS", "Next-auth"],
        link: "https://nextjs.org",
    },
    {
        id: 1,
        title: "Educare English Learning Academy",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        listItem: ["ReactJs", "Tailwind CSS", "Rest Api"],
        link: "https://udemy.com",
    },
    {
        id: 2,
        title: "Saidpur News | Newspaper & Magazin",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        listItem: ["NextJs", "Tailwind CSS", "Next-auth"],
        link: "https://nextjs.org",
    },
    {
        id: 1,
        title: "Educare English Learning Academy",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        listItem: ["ReactJs", "Tailwind CSS", "Rest Api"],
        link: "https://udemy.com",
    },
    {
        id: 2,
        title: "Saidpur News | Newspaper & Magazin",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        listItem: ["NextJs", "Tailwind CSS", "Next-auth"],
        link: "https://nextjs.org",
    },
    {
        id: 1,
        title: "Educare English Learning Academy",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        listItem: ["ReactJs", "Tailwind CSS", "Rest Api"],
        link: "https://udemy.com",
    },
    {
        id: 2,
        title: "Saidpur News | Newspaper & Magazin",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        listItem: ["NextJs", "Tailwind CSS", "Next-auth"],
        link: "https://nextjs.org",
    },
    {
        id: 1,
        title: "Educare English Learning Academy",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        listItem: ["ReactJs", "Tailwind CSS", "Rest Api"],
        link: "https://udemy.com",
    },
    {
        id: 2,
        title: "Saidpur News | Newspaper & Magazin",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        listItem: ["NextJs", "Tailwind CSS", "Next-auth"],
        link: "https://nextjs.org",
    },
]

const Archive = () => {
    const [cardIndex, setCardIndex] = useState(6)

    const handleShowMore = () => {
        setCardIndex(cardIndex + 3);
    }

    const handleLess = () => {
        setCardIndex(6);
    }
    return (
        <div className="max-w-contentContainer mx-auto px-4 py-24">
            <div className="w-full flex flex-col items-center">
                <h2 className="text-3xl font-titleFont font-semibold">Other Noteworthy Projects</h2>
                <p className="text-sm font-titleFont text-textGreen">view the archive</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
                {CardItems.slice(0, cardIndex).map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <ArchiveCard
                            title={item.title}
                            des={item.des}
                            listItem={item.listItem}
                            link={item.link}
                        />
                    </motion.div>
                ))}
            </div>
            <div className="mt-12 flex items-center justify-center">
                <button
                    onClick={CardItems.length === cardIndex ? handleLess : handleShowMore}
                    className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
                    {CardItems.length === cardIndex ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    )
}

export default Archive