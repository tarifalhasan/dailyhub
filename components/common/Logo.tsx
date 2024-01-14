import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className=" inline-flex items-center gap-x-2">
      <div className=" w-4 h-4">
        <div
          className="svgContainer"
          style={{
            width: "100%",
            height: "100%",
            aspectRatio: "inherit",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={24}
            height={24}
          >
            <use href="#svg1607142748"></use>
          </svg>
        </div>
      </div>

      <Image src={"/icons/dailyhub.svg"} alt="" width={88} height={20} />
    </Link>
  );
};

export default Logo;
