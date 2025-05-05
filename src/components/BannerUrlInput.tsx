
import React, { useState } from "react";
import { toast } from "sonner";

const BannerUrlInput = () => {
  const [bannerUrl, setBannerUrl] = useState("");

  const handleSubmit = () => {
    if (!bannerUrl.trim()) {
      toast.error("Please enter a valid URL");
      return;
    }
    
    // Here you would typically handle the URL submission
    toast.success("Banner URL submitted successfully");
    console.log("Submitted URL:", bannerUrl);
    setBannerUrl("");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Option 1: Enter Active Banner URL</h2>
      
      <input
        type="url"
        value={bannerUrl}
        onChange={(e) => setBannerUrl(e.target.value)}
        placeholder="Enter your banner URL here"
        className="w-full p-3 bg-blue-50 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
      >
        Submit URL
      </button>
    </div>
  );
};

export default BannerUrlInput;
