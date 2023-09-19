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
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Youtube Thumbnail Downloader
        </h1>
        <p className="text-gray-600">
          <h1 style="text-align: center;color: rgb(0, 0, 0);background-color: rgb(255, 255, 255);font-size: 48px;">YouTube Thumbnail Downloader</h1>
<p><br></p>
<div style="text-align: left;color: rgb(0, 0, 0);background-color: rgb(255, 255, 255);font-size: medium;">
    <p style="text-align: center;">Get free thumbnail image of any youtube videos in Full HD(1080), HD (720), SD, and also in small size. it&apos;s currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos</p>
    <h2 style="text-align: center;">What is the use of this YouTube Thumbnail Grabber website?</h2>
    <p style="text-align: center;">People use this YouTube thumbnail downloader website for getting thumbnail from any youtube videos. That can be used in presentation, animation work or many other activities.</p>
    <h2 style="text-align: center;">How to use this YouTube thumbnail downloader website?</h2>
    <p style="text-align: center;">I have shared some of screenshot in which i have guided you how you can use this YouTube downloader website. It&apos;s quite easy first step is you just copy any YouTube link whom thumbnail you want. youtube cover download Easily you can download you tube cover</p>
    <p style="text-align: center;">Now paste that url in input box, the moment you paste that link it&apos;s automatically going to generate different size of thumbnails for you. Now click on thumbnail download button and it&apos;s going to automatically downloaded in your system. If you are using Android phone then you have to saved that images and if you are using iphone then i don&apos;t know how you can do it?</p>
    <h2 style="text-align: center;">Is it legal to download YouTube thumbnails?</h2>
    <p style="text-align: center;">Of course it&apos;s 100% legal you can download any YouTube videos thumbnails but as you know thumbnail and video are copyrighted product you should take author permissions 1st in order to reuse that.</p>
    <h2 style="text-align: center;">Compatibility of this YT thumbnail grabber website</h2>
    <p style="text-align: center;">This YouTube thumbnail downloader website is going to work well in all devices except iPhone, because iPhone doesn&apos;t allow images to be saved in iPhone. But if you using jailbroken iphone then there is no any problem. on the other hand is going to work fine in almost all kinds Android devices and laptop or desktop system.</p>
    <h2 style="text-align: center;">Is there any Copyright risk on YouTube Thumbnails?</h2>
    <p style="text-align: center;">Whatever youtube screenshot you are downloading a copyright of respective on owner of that videos. If you want to use it in your work then you should ask for permission.</p>
    <p style="text-align: center; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: medium;">Especially if you are reusing on YouTube then it&apos;s can create problem but if your plan is outside of YouTube. like use on website for creating logos or any Photoshop types of stuff then there is no any problem. You hardly receive any dmca complaint about related to that particular Youtube thumnail.</p>
    <h2 style="text-align: center; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);">Is reusing YouTube thumbnails are SEO friendly?</h2>
    <p style="text-align: center; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-size: medium;">Nope it&apos;s not, in short answer it&apos;s not seo friendly because almost all thumbnails which are on YouTube are indexed by Google. So which one is unique and which one is duplicate google know it. So it&apos;s not SEO friendly as you know. But you can do some stuff on that thumbnail I mean getting some unique effects using photoshop or any other software that can make your thumbnail unique again so that can be reused and make that seo friendly again.</p>
</div>
        </p>
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
