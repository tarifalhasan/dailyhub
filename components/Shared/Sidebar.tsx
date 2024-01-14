import { cn } from "@/lib/utils";
import { FC } from "react";
import Logo from "../common/Logo";
import SidebarSearchBar from "../common/SidebarSearchBar";
import SidebarItem from "./SidebarItem";
interface SidebarProps {
  className?: string;
}
export const SIDEBAR_SOURCE_ITEMS = [
  {
    label: "Inspirations",
    href: "/inspirations",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        focusable="false"
        className=" w-4 h-4"
        style={{
          userSelect: "none",

          display: "inline-block",

          flexShrink: 0,
        }}
      >
        <g>
          <path d="M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85ZM128,216a72.08,72.08,0,0,1-72-72c0-22,8.09-44.79,24.06-67.84l26.37,25.58a8,8,0,0,0,13.09-3l22.27-61.07C164.21,58.08,200,97.91,200,144A72.08,72.08,0,0,1,128,216Z" />
        </g>
      </svg>
    ),
  },
  {
    label: "Templates",
    href: "/templates",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        focusable="false"
        className=" w-4 h-4"
        style={{
          userSelect: "none",

          display: "inline-block",

          flexShrink: 0,
        }}
      >
        <g>
          <path d="M208,96V32a8,8,0,0,0-8-8H56a8,8,0,0,0-5.31,14L107,88H56a8,8,0,0,0-8,8v64a8,8,0,0,0,2.34,5.66l72,72A8,8,0,0,0,136,232V168h64a8,8,0,0,0,5.31-14L149,104h51A8,8,0,0,0,208,96Zm-29,56H128a8,8,0,0,0-8,8v52.69l-56-56V104h61Zm13-64H131L77,40H192Z" />
        </g>
      </svg>
    ),
  },
  {
    label: "Design System",
    href: "/design-system",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        focusable="false"
        className=" w-4 h-4"
        style={{
          userSelect: "none",

          display: "inline-block",

          flexShrink: 0,
        }}
      >
        <g>
          <path d="M172,76a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,76Zm-44,28a28,28,0,1,1,28-28A28,28,0,0,1,128,104Zm60,24a44,44,0,1,0,44,44A44.05,44.05,0,0,0,188,128Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,188,200ZM68,128a44,44,0,1,0,44,44A44.05,44.05,0,0,0,68,128Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,68,200Z" />
        </g>
      </svg>
    ),
  },
  {
    label: "Premium UI Kits",
    href: "/premium-ui-kits",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        focusable="false"
        className=" w-4 h-4"
        style={{
          userSelect: "none",

          display: "inline-block",

          flexShrink: 0,
        }}
      >
        <g>
          <path d="M184,96a40,40,0,0,0-24-72H88A40,40,0,0,0,64,96a40,40,0,0,0,1.37,65A44,44,0,1,0,136,196V160a40,40,0,1,0,48-64Zm0-32a24,24,0,0,1-24,24H136V40h24A24,24,0,0,1,184,64ZM64,64A24,24,0,0,1,88,40h32V88H88A24,24,0,0,1,64,64Zm24,88a24,24,0,0,1,0-48h32v48H88Zm32,44a28,28,0,1,1-28-28h28Zm40-44a24,24,0,1,1,24-24A24,24,0,0,1,160,152Z"></path>
        </g>
      </svg>
    ),
  },
  {
    label: "Icons",
    href: "/icons",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        focusable="false"
        className=" w-4 h-4"
        style={{
          userSelect: "none",

          display: "inline-block",

          flexShrink: 0,
        }}
      >
        <g>
          <path d="M221.07,144.41A96.68,96.68,0,0,0,181,88h59a8,8,0,0,0,0-16H159a32,32,0,0,0-62,0H16a8,8,0,0,0,0,16H75a96.68,96.68,0,0,0-40.07,56.41A32,32,0,1,0,51.08,146,80.6,80.6,0,0,1,99,93.44a32,32,0,0,0,58.06,0A80.6,80.6,0,0,1,204.92,146a32,32,0,1,0,16.15-1.57ZM56,176a16,16,0,1,1-16-16A16,16,0,0,1,56,176Zm72-80a16,16,0,1,1,16-16A16,16,0,0,1,128,96Zm88,96a16,16,0,1,1,16-16A16,16,0,0,1,216,192Z"></path>
        </g>
      </svg>
    ),
  },
  {
    label: "Typography",
    href: "/typography",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        focusable="false"
        className=" w-4 h-4"
        style={{
          userSelect: "none",

          display: "inline-block",

          flexShrink: 0,
        }}
      >
        <g>
          <path d="M87.24,52.59a8,8,0,0,0-14.48,0l-64,136a8,8,0,1,0,14.48,6.81L39.9,160h80.2l16.66,35.4a8,8,0,1,0,14.48-6.81ZM47.43,144,80,74.79,112.57,144ZM200,96c-12.76,0-22.73,3.47-29.63,10.32a8,8,0,0,0,11.26,11.36c3.8-3.77,10-5.68,18.37-5.68,13.23,0,24,9,24,20v3.22A42.76,42.76,0,0,0,200,128c-22.06,0-40,16.15-40,36s17.94,36,40,36a42.73,42.73,0,0,0,24-7.25,8,8,0,0,0,16-.75V132C240,112.15,222.06,96,200,96Zm0,88c-13.23,0-24-9-24-20s10.77-20,24-20,24,9,24,20S213.23,184,200,184Z"></path>
        </g>
      </svg>
    ),
  },
  {
    label: "Design tools",
    href: "/design-tools",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        focusable="false"
        className=" w-4 h-4"
        style={{
          userSelect: "none",

          display: "inline-block",

          flexShrink: 0,
        }}
      >
        <g>
          <path d="M215.12,123.64a8,8,0,1,0-14.24-7.28,79.58,79.58,0,0,1-33.08,33.5l-16.58-37.32A40,40,0,0,0,136,40.8V24a8,8,0,0,0-16,0V40.8a40,40,0,0,0-15.22,71.74L56.69,220.75a8,8,0,1,0,14.62,6.5l25.14-56.56A95.48,95.48,0,0,0,128,176a99.13,99.13,0,0,0,31.6-5.21l25.09,56.46a8,8,0,0,0,14.62-6.5l-25-56.25A95.81,95.81,0,0,0,215.12,123.64ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56Zm0,104a79.52,79.52,0,0,1-25-4l16.42-36.94a39.81,39.81,0,0,0,17.2,0l16.48,37.06A83.21,83.21,0,0,1,128,160Z"></path>
        </g>
      </svg>
    ),
  },
];
const Sidebar: FC<SidebarProps> = ({ className }) => {
  return (
    <aside
      className={cn(
        " flex flex-col justify-between  right-0 left-0 top-0   overflow-hidden  overflow-y-auto bg-sidebar flex-none  max-w-[280px] relative w-[19%] z-50 h-full",
        className
      )}
    >
      <div className="flex  flex-col items-start flex-nowrap gap-y-10  px-4 py-6 w-full max-w-full h-full opacity-100">
        <Logo />
        <div className=" space-y-5 w-full">
          <SidebarSearchBar />
          <ul className=" space-y-[6px]">
            <li>
              <SidebarItem
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
  );
};

export default Sidebar;
