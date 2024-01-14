import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className=" inline-flex items-center gap-x-2">
      <Image src={"/icons/dailyhub.svg"} alt="" width={88} height={20} />
    </Link>
  );
};

export default Logo;
