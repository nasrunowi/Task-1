import { HtmlHTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement>{
    variant?: "light" | "dark";
    Image: string;
    title: string;
    label: string;

: