"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Logo from "../common/Logo";
import SidebarSearchBar from "../common/SidebarSearchBar";
import { SIDEBAR_SOURCE_ITEMS } from "./Sidebar";
import SidebarItem from "./SidebarItem";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <header className="flex h-[80px] px-4  header items-center justify-between fixed top-0 left-0 right-0  z-[999] border-b border-skin-sidebar-border">
        <div>
          <Logo />
        </div>

        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </header>
      {menuOpen && (
        <div className="  top-[80px] fixed w-[280px] left-0 h-full bg-background z-[9999]">
          <aside
            className={cn(
              " flex  flex-col justify-between  right-0 left-0 top-0   overflow-hidden  overflow-y-auto bg-sidebar flex-none w-full   relative  z-50 h-full"
            )}
          >
            <div className="flex  flex-col items-start flex-nowrap gap-y-10  px-4 py-6 w-full max-w-full h-full opacity-100">
              <div className=" space-y-5 w-full">
                <SidebarSearchBar />
                <ul className=" space-y-[6px]">
                  <li>
                    <SidebarItem
                      onClick={() => setMenuOpen(false)}
                      href="/discover"
                      title="discover"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          focusable="false"
                          className=" w-4 h-4  "
                          style={{
                            userSelect: "none",
                            display: "inline-block",
                            flexShrink: 0,
                          }}
                        >
                          <g>
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z" />
                          </g>
                        </svg>
                      }
                    />
                  </li>
                  <li>
                    <SidebarItem
                      onClick={() => setMenuOpen(false)}
                      href="/info"
                      title="info"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          focusable="false"
                          className=" w-4 h-4  "
                          style={{
                            userSelect: "none",
                            display: "inline-block",
                            flexShrink: 0,
                          }}
                        >
                          <g>
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" />
                          </g>
                        </svg>
                      }
                    />
                  </li>
                  <li>
                    <SidebarItem
                      onClick={() => setMenuOpen(false)}
                      href="/sponsors"
                      title="A Sponsor"
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          focusable="false"
                          className=" w-4 h-4  "
                          style={{
                            userSelect: "none",
                            display: "inline-block",
                            flexShrink: 0,
                          }}
                        >
                          <g>
                            <path d="M192,116a12,12,0,1,1-12-12A12,12,0,0,1,192,116ZM152,64H112a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm96,48v32a24,24,0,0,1-24,24h-2.36l-16.21,45.38A16,16,0,0,1,190.36,224H177.64a16,16,0,0,1-15.07-10.62L160.65,208h-57.3l-1.92,5.38A16,16,0,0,1,86.36,224H73.64a16,16,0,0,1-15.07-10.62L46,178.22a87.69,87.69,0,0,1-21.44-48.38A16,16,0,0,0,16,144a8,8,0,0,1-16,0,32,32,0,0,1,24.28-31A88.12,88.12,0,0,1,112,32H216a8,8,0,0,1,0,16H194.61a87.93,87.93,0,0,1,30.17,37c.43,1,.85,2,1.25,3A24,24,0,0,1,248,112Zm-16,0a8,8,0,0,0-8-8h-3.66a8,8,0,0,1-7.64-5.6A71.9,71.9,0,0,0,144,48H112A72,72,0,0,0,58.91,168.64a8,8,0,0,1,1.64,2.71L73.64,208H86.36l3.82-10.69A8,8,0,0,1,97.71,192h68.58a8,8,0,0,1,7.53,5.31L177.64,208h12.72l18.11-50.69A8,8,0,0,1,216,152h8a8,8,0,0,0,8-8Z" />
                          </g>
                        </svg>
                      }
                    />
                  </li>
                </ul>
              </div>
              <div className="flex flex-col h-min gap-4 w-full items-start overflow-hidden relative">
                <div className="flex w-full items-center gap-2">
                  <div>
                    <h6
                      className=" uppercase text-xs font-normal"
                      style={{
                        color: "rgb(94, 90, 79)",
                      }}
                    >
                      source
                    </h6>
                  </div>
                  <div className=" flex-1 h-[1px] bg-skin-sidebar-border"></div>
                </div>
                <ul className=" w-full space-y-[6px]">
                  {SIDEBAR_SOURCE_ITEMS.map((item, index) => (
                    <SidebarItem
                      href={item.href}
                      icon={item.icon}
                      key={index}
                      title={item.label}
                      onClick={() => setMenuOpen(false)}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex  px-4 py-3 flex-col gap-4">
              <div className=" flex-none h-[1px] bg-skin-sidebar-border"></div>
              <h6
                className="text-xs font-normal "
                style={{
                  color: "rgb(94, 90, 79)",
                }}
              >
                © 2023 MADE BY DMYTRI
              </h6>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Header;
