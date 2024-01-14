const SidebarSearchBar = () => {
  return (
    <div className=" w-full  flex items-center h-10  px-2  rounded-[4px] transition-all duration-300 border hover:border-skin-sidebar-border fill-skin-gray-600 hover:fill-white text-skin-gray-600 border-transparent hover:bg-skin-gray-800 hover:text-white bg-transparent">
      <button className="flex items-center space-x-1 w-full ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className=" w-3 h-3 "
        >
          <path
            d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"
            fill="currentColor"
          />
        </svg>

        <span className=" text-sm font-normal">Search</span>
      </button>
    </div>
  );
};

export default SidebarSearchBar;
