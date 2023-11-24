// "use client";
// import React, { useState } from "react";
// import YouTube from "react-youtube";
// import Youtube from "react-youtube";

// const Promotion = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [duration, setDuration] = useState(5);
//   const [closeVideo, setCloseVideo] = useState(false);

//   const videoId = "iOI-OAQlaXI";

//   const option = {
//     width: "300",
//     height: "250",
//   };

//   const countDown = () => {
//     const interval = setInterval(() => {
//       setDuration((pre) => (pre > 1 ? pre - 1 : pre - 0));
//     }, 1000);
//     return () => clearInterval(interval);
//   };

//   const handleButton = () => {
//     countDown();
//     setTimeout(() => {
//       setCloseVideo(true);
//     }, duration * 1000);
//   };

//   const closeIklan = () => {
//     setIsOpen(false);
//   };

//   return isOpen ? (
//     <div className="fixed bottom-2 right-2">
//       <button
//         className="float-right text-lg bg-dark text-white px-5"
//         onClick={() => (closeVideo ? closeIklan() : handleButton())}>
//         {closeVideo ? `Close` : `Close ${duration}s`}
//       </button>
//       <YouTube
//         videoId={videoId}
//         opts={option}
//         onReady={(event) => event.target.pauseVideo()}
//       />
//     </div>
//   ) : null;
// };

// export default Promotion;
