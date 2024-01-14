import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { FC } from "react";

interface Props {
  title?: string;
}
const Breadcrumbs: FC<Props> = ({ title }) => {
  return (
    <div className=" w-full max-w-[1280px] mx-auto">
      <div className=" w-full flex items-center justify-start gap-2 ">
        <div className="flex ">
          <Link
            href={"/"}
            className=" text-sm tracking-[0.01em] leading-[140%] hover:text-white text-skin-gray-200"
          >
            Home
          </Link>
        </div>
        <div>
          <ChevronRightIcon
            strokeWidth={1}
            className=" w-4 h-4 text-skin-gray-200"
          />
        </div>
        <div className="flex ">
          <Link
            href={"/templates"}
            className=" text-sm tracking-[0.01em] leading-[140%] hover:text-white text-skin-gray-200"
          >
            Templates
          </Link>
        </div>
        <div>
          <ChevronRightIcon
            strokeWidth={1}
            className=" w-4 h-4 text-skin-gray-200"
          />
        </div>
        <Link
          href={"/"}
          className=" text-sm tracking-[0.01em] leading-[140%] hover:text-white text-skin-gray-200"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default Breadcrumbs;
