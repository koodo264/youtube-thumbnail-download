import { useState } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
<header className="text-center mb-8" style={{ width: "42%" }}>
        <h1 className="text-3xl font-bold mb-2">
          Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600">
Get free thumbnail image of any youtube videos in Full HD(1080), HD (720), SD, and also in small size. it's currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos

What is the use of this YouTube Thumbnail Grabber website?
People use this YouTube thumbnail downloader website for getting thumbnail from any youtube videos. That can be used in presentation, animation work or many other activities.

How to use this YouTube thumbnail downloader website?
I have shared some of screenshot in which i have guided you how you can use this YouTube downloader website. It's quite easy first step is you just copy any YouTube link whom thumbnail you want. youtube cover download Easily you can download you tube cover

Now paste that url in input box, the moment you paste that link it's automatically going to generate different size of thumbnails for you. Now click on thumbnail download button and it's going to automatically downloaded in your system. If you are using Android phone then you have to saved that images and if you are using iphone then i don't know how you can do it?

Is it legal to download YouTube thumbnails?
Of course it's 100% legal you can download any YouTube videos thumbnails but as you know thumbnail and video are copyrighted product you should take author permissions 1st in order to reuse that.

Compatibility of this YT thumbnail grabber website
This YouTube thumbnail downloader website is going to work well in all devices except iPhone, because iPhone doesn't allow images to be saved in iPhone. But if you using jailbroken iphone then there is no any problem. on the other hand is going to work fine in almost all kinds Android devices and laptop or desktop system.

Is there any Copyright risk on YouTube Thumbnails?
Whatever youtube screenshot you are downloading a copyright of respective on owner of that videos. If you want to use it in your work then you should ask for permission.        </p>
      </header>
      <div className="text-center">
        <input
          type="text"
          className="w-full md:w-1/2 px-4 py-2 border rounded"
          placeholder="Enter YouTube URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button
          className="btn-blue mt-2"
          onClick={() => getYouTubeThumbnail(videoURL)}
        >
          Download Thumbnails
        </button>
      </div>
      {thumbnailOptions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {thumbnailOptions.map((option, index) => (
              <div key={index} className="thumbnail-option">
                <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                <button
                  className="btn-blue mt-2"
                  onClick={() => copy(option.url)}
                >
                  Copy Image URL
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
