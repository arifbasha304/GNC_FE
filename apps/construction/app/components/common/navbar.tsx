import React from "react";
import { CommonButton } from "@libs/ui";

const Navbar = ({ submitButtonText, form }: { submitButtonText: string; form: any }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-gray-500 shadow-sm bg-white">
      {/* Left Side - Title and Dates */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-gray-700">
          <CommonButton
            icon="pi pi-chevron-left"
            className=""
          />
          <CommonButton
            icon="pi pi-chevron-right"
            className=""
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            New Estimation
          </h2>
          <p className="text-sm text-gray-500">
            Feb 18, 2025 &bull; <i>Updated: Feb 24, 2025</i> 
          </p>
        </div>
      </div>

      
      <div className="flex items-center gap-3">
        {/* Icon Buttons */}
        {/* commenting this search icon after discussing with UX team, alternatively we will navigate back to table for searching  */}
        {/* <CommonButton
          icon="pi pi-search"
          className="border border-gray-300 rounded-md p-2 w-10 h-10 flex items-center text-center justify-center"
          /> */}
        <CommonButton
          icon="pi pi-plus"
          className="border border-gray-300 rounded-md p-2 w-10 h-10 flex items-center text-center  justify-center"
          />
        <CommonButton
          icon="pi pi-download"
          className="border border-gray-300 rounded-md p-2 w-10 h-10 flex items-center text-center  justify-center"
          />

        <CommonButton
          className="flex items-center gap-2 rounded-md bg-[#E31837] text-white border-none hover:bg-[#c2152e] px-4 py-2"
          icon="pi pi-check"
          value={submitButtonText}
          onClick={() => form.handleSubmit()}
        />

        <div className="h-6 border-l mx-2" />

        <CommonButton
          icon="pi pi-external-link"
          className=""
        />
      </div>
    </div>
  );
};

export default Navbar;
