"use client";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface ArchiveCardProps {
    title: string;
    des: string;
    listItem: Array<string>;
    link: string;
}

const ArchiveCard = ({ title, des, listItem, link }: ArchiveCardProps) => {
    return (
        <a href={link} target="_blank">
            <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer">
                <div className="flex justify-between items-center">
                    <FaRegFolder className="text-4xl text-textGreen" />
                    <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
                </div>
                <div>
                    <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">{title}</h2>
                    <p className="text-sm mt-3">{des}</p>
                </div>
                <ul className="text-xs mdl:text-sm text-textDark flex items-center justify-between gap-2 flex-wrap">
                    {listItem.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </a>
    )
}

export default ArchiveCard