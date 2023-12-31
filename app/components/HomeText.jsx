import React from "react";

const HomeText = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Best YouTube Video Downloader</h1>

      <div className="rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 mb-8">
        <p className="text-lg">
          Yt1s is a free and easy YouTube downloader that allows you to convert
          and download YouTube videos in multiple formats and the best quality.
          Using this Yt1s downloader, you can download unlimited video and audio
          on your mobile and other devices without any registration and without
          spending money. So you can play MP3 and MP4 without an internet
          connection.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-4">
        Convert and Download High-Quality Audio Files
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="rounded-md bg-white p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">
            High-Quality Audio Files
          </h3>
          <p>
            Convert and download high-quality audio files in 64kbps, 128kbps,
            192kbps, 256kbps, and 320kbps, and in different formats for free.
          </p>
        </div>

        <div className="rounded-md bg-white p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">Device Compatibility</h3>
          <p>
            Yt1s works flawlessly on all devices, including computers, tablets,
            and mobile devices. It supports converting to many different formats
            such as MP3, MP4, M4V, FLV, WEBM, 3GP, WMV, AVI, etc without
            installing any special software or browser extensions.
          </p>
        </div>

        <div className="rounded-md bg-white p-6 shadow-md">
          <h3 className="text-lg font-semibold mb-4">Unlimited Conversions</h3>
          <p>
            YT1s offers unlimited conversion from YouTube and download MP3 and
            MP4 without length limit free of cost.
          </p>
        </div>
      </div>

      <div className="flex items-center mt-8">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <p className="text-lg font-semibold">Easy to use and Fast Download</p>
      </div>
      <p className="mb-4">
        Using this Yt1s fast YouTube downloader helps to download and save MP4
        and MP3 easily. Just copy and paste the URL into the search box and
        press the "convert" button.
      </p>

      {/* Add more infoboxes and content as needed */}

      <div className="flex items-center mt-8">
        <svg
          className="w-6 h-6 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        <p className="text-lg font-semibold">Cloud Integration</p>
      </div>
      <p>
        We offer to upload and save converted files directly into Google Drive
        and Dropbox.
      </p>
    </div>
  );
};

export default HomeText;
