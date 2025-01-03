import { faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
      <button
        onClick={togglePopup}
        className="inline-block h-[100px] w-[100px] leading-[103px] bg-primary rounded-[50%] text-center duration-500 relative before:absolute before:content-[''] before:left-[50%] before:top-[50%] before:block before:w-full before:h-full before:rounded-[50%] before:z-[1] ap_video"
      >
        <FontAwesomeIcon icon={faPlay} className="text-white text-2xl" />
      </button>
      {isOpen && (
        <div
          onClick={togglePopup}
          className="fixed inset-0 z-[1001] flex items-center justify-center bg-black bg-opacity-75"
        >
          <button
            onClick={togglePopup}
            className="h-8 w-8 flex items-center justify-center p-[2px] rounded-full border border-solid border-gray-300 absolute top-2 right-2 text-2xl text-white"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div
            onClick={closePopup}
            className="relative w-[90%] h-[90%] bg-white rounded"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/SZEflIVnhH8?si=Bh49mJbQuwQ-VpmA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoModal;
