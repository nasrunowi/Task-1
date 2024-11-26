import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { CardProps } from "./card.type";
import { Button } from "@/stories/Button";

export const Card: FC<CardProps> =({
    variant = "light",
    image = "https://placehold.co/600x400",
    title,
    label,
}) => {
    const variants = {
        "dark": "bg-gray-800 border-gray-700 text-white",
        "light": "bg-white border border-gray-200 text-gray-900"
    }[variant]
    return (
        <div className={["max-w-sm rounded-lg shadow", variants].join("")}>
            <Link href="#">
                <Image className="rounded-t-lg" src={image} alt={title} width={600} height={400} />
            </Link>
            <div className="p-5">
                <Link href="#">
                    <h5 className="=mb-2 text-2xl font-bold tracking-tight">{title}</h5>
                </Link>
                <p className="mb-3 font-normal">{label}</p>
                <Button label="Button" primary />
            </div>
        </div>
    );
};