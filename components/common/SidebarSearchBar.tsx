"use client";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const SidebarSearchBar = () => {
  const [openModal, setopenModal] = useState(false);
  const movieItems = [
    {
      id: 0,
      title: "Titanic",
      description: "A movie about love",
    },
    {
      id: 1,
      title: "Dead Poets Society",
      description: "A movie about poetry and the meaning of life",
    },
    {
      id: 2,
      title: "Terminator 2",
      description: "A robot from the future is sent back in time",
    },
    {
      id: 3,
      title: "Alien 2",
      description: "Ripley is back for a new adventure",
    },
  ];

  const handleOnSearch = (string: string, results: any) => {
    console.log(string, results);
  };

  const handleOnHover = (result: any) => {
    console.log(result);
  };

  const handleOnSelect = (item: any) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  const formatResult = (item: any) => {
    return (
      <div className="result-wrapper">
        <span className="result-span">id: {item.id}</span>
        <span className="result-span">name: {item.name}</span>
      </div>
    );
  };

  return (
    <>
      <div className=" w-full  flex items-center h-10  px-2  rounded-[4px] transition-all duration-300 border hover:border-skin-sidebar-border fill-skin-gray-600 hover:fill-white text-skin-gray-600 border-transparent hover:bg-skin-gray-800 hover:text-white bg-transparent">
        <button
          onClick={() => setopenModal((prev) => !prev)}
          className="flex items-center space-x-1 w-full "
        >
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
      <Dialog
        open={openModal}
        onOpenChange={() => setopenModal((prev) => !prev)}
      >
        <DialogContent className=" bg-transparent border-0 outline-none focus:outline-none">
          <ReactSearchAutocomplete
            items={movieItems}
            fuseOptions={{ keys: ["title", "description"] }} // Search on both fields
            resultStringKeyName="title" // String to display in the results
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            showIcon={true}
            styling={{
              height: "54px",
              border: "1px solid rgb(15, 13, 11)",
              borderRadius: "4px",
              backgroundColor: "rgb(15, 13, 11)",
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 40px 0px",
              hoverBackgroundColor: "none",
              color: "rgb(250, 249, 247)",
              fontSize: "12px",
              fontFamily: "Courier",
              iconColor: "rgb(129, 123, 111)",
              lineColor: "lightgreen",
              placeholderColor: "darkgreen",
              clearIconMargin: "3px 8px 0 0",
              zIndex: 2,
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SidebarSearchBar;
