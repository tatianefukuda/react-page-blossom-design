
import React from "react";
import { toast } from "sonner";

const CreateNewBanner = () => {
  const handleCreateBanner = () => {
    // Here you would typically navigate to a banner creation page or open a modal
    toast.success("Redirecting to banner creation tool");
    console.log("Create new banner clicked");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium">Option 2: Create a New Banner</h2>
      
      <p className="text-gray-600 text-sm">
        Start from scratch and design a new banner for your website.
      </p>
      
      <button
        onClick={handleCreateBanner}
        className="w-full py-3 bg-green-700 text-white font-medium rounded-md hover:bg-green-800 transition-colors"
      >
        Create New Banner
      </button>
    </div>
  );
};

export default CreateNewBanner;
