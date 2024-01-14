import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

const TemplateCard = () => {
  return (
    <Link
      href={"/"}
      className=" border transition-all duration-500 border-skin-gray-900/5 rounded-lg p-3 relative group space-y-2.5 will-change-transform hover:bg-skin-card-foreground cursor-pointer"
    >
      <div className="template-card-image-container">
        <div className=" absolute top-0 left-0 right-0  bottom-0 rounded-[inherit]">
          <Image
            src={
              "https://framerusercontent.com/images/QDTX0bs9nNBCDLgMB5F7I01UAzE.jpg"
            }
            className=" block w-full h-full object-cover object-center "
            style={{
              imageRendering: "auto",
            }}
            alt=""
            width={350}
            height={700}
          />
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <div className=" inline-flex items-center gap-1">
            <div>
              <h5 className="text-sm group-hover:!text-white text-skin-gray-100 font-normal">
                Dailyhub
              </h5>
            </div>
            <Badge variant={"new"}>new</Badge>
          </div>
          <div>
            <h5 className=" text-sm text-skin-gray-100 font-normal">$69</h5>
          </div>
        </div>
        <div>
          <p className="text-sm text-skin-gray-200 font-normal">Inspiration</p>
        </div>
      </div>
    </Link>
  );
};

export default TemplateCard;
