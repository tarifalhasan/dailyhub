"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";
interface Props {
  href: string;
  title: string;
  icon: ReactNode;
  onClick?: () => void;
}
const SidebarItem: FC<Props> = ({ href, title, icon, onClick }) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "  w-full  flex relative items-center h-10  px-2  rounded-[4px] transition-all duration-300 border hover:border-skin-sidebar-border fill-skin-gray-600 hover:fill-white text-skin-gray-600 border-transparent hover:bg-skin-gray-800 hover:text-white bg-transparent",
        pathName === href ? "bg-skin-gray-800" : "bg-transparent"
      )}
    >
      <button className="flex capitalize text-skin-gray-100 hover:text-white items-center space-x-1 w-full ">
        {icon}
        <span className=" text-sm font-normal ">{title}</span>
      </button>
      {pathName === href && (
        <>
          <div className="active_sidebar" />
          <div className="active_sidebar_2" />
          <div className="active_sidebar_3" />
        </>
      )}
    </Link>
  );
};

export default SidebarItem;
