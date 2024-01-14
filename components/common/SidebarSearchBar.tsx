import { BiSearch } from "react-icons/bi";

const SidebarSearchBar = () => {
  return (
    <div className=" w-full  flex items-center h-10  px-2  rounded-[4px] transition-all duration-300 border hover:border-skin-sidebar-border text-skin-gray-600 border-transparent hover:bg-skin-gray-800 hover:text-white bg-transparent">
      <button className="flex items-center space-x-1 w-full ">
        <BiSearch className=" w-4 h-4 " />
        <span className=" text-sm font-normal">Search</span>
      </button>
    </div>
  );
};

export default SidebarSearchBar;
