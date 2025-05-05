
import React from "react";
import BannerUrlInput from "./BannerUrlInput";
import CreateNewBanner from "./CreateNewBanner";

const BannerManagement = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-2xl p-8 bg-gray-100 rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold text-center mb-6">Manage Your Banner</h1>
        
        <div className="space-y-6">
          <BannerUrlInput />
          <CreateNewBanner />
        </div>
      </div>
    </div>
  );
};

export default BannerManagement;
