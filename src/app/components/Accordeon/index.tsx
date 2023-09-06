"use client";
import { useVideo } from "@/app/context/VideoContext";
import React, { useState, useRef } from "react";

type AccordionProps = {
  title: string;
  content: Array<{
    key: number;
    title: string;
    videoId: string;
  }>;
};
const Accordeon = ({ title, content }: AccordionProps) => {
  const { videoId, setVideoId } = useVideo();
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>("0px");
  const contentElement = useRef(null);

  const handleVideo = async (id: string) => {
    setVideoId(id);
  };

  const HandleOpening = () => {
    setOpened(!isOpened);
    //@ts-ignore
    setHeight(!isOpened ? `${contentElement.current?.scrollHeight}px` : "0px");
  };
  return (
    <div className="border-b-gray-600 border-b-2 last:border-b-0">
      <div
        onClick={HandleOpening}
        className={
          "bg-black p-4 flex justify-between text-white cursor-pointer"
        }
      >
        <h4 className="font-semibold">{title}</h4>
        {isOpened ? "-" : "+"}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="bg-white overflow-hidden transition-all duration-200"
      >
        <div className="px-4 py-2 h-auto">
          <ul className="p-2">
            {content.map((item, i) => (
              <li
                className={`list-disc p-2 cursor-pointer hover:font-medium ${
                  item.videoId === `${videoId}` && "font-bold underline"
                }`}
                key={item.key}
                data-id={item.videoId}
                onClick={() => handleVideo(item.videoId)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordeon;
