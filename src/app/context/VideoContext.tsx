// VideoContext.tsx
"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface VideoContextType {
  videoId: string;
  setVideoId: (videoId: string) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

interface VideoProviderProps {
  children: ReactNode;
}

export default function VideoProvider({ children }: VideoProviderProps) {
  const [videoId, setVideoId] = useState<string>("");
  useEffect(() => {
    const lastVideoPlayed = window.localStorage.getItem("lastplay");
    console.log(lastVideoPlayed);
    if (lastVideoPlayed) {
      setVideoId(lastVideoPlayed);
    } else {
      setVideoId("YP7cZwdHmp8");
    }
  }, []);
  return (
    <VideoContext.Provider value={{ videoId, setVideoId }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  const context = useContext(VideoContext);

  if (!context) {
    throw new Error("useVideo must be used within a VideoProvider");
  }
  console.log(context);
  return context;
}
