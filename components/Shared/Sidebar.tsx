import Logo from "../common/Logo";
import SidebarSearchBar from "../common/SidebarSearchBar";

const Sidebar = () => {
  return (
    <aside className="  hidden lg:block right-0 left-0 top-0  h-screen overflow-hidden  bg-sidebar flex-none max-w-[280px] relative w-[19%] z-50 ">
      <div className="flex  flex-col items-start flex-nowrap gap-y-10  overflow-hidden overflow-y-auto px-4 py-6 w-full max-w-full h-full opacity-100">
        <Logo />
        <div className=" space-y-5 w-full">
          <SidebarSearchBar />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
