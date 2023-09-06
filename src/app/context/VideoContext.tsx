// VideoContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface VideoContextType {
  videoId: string;
  setVideoId: (videoId: string) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

interface VideoProviderProps {
  children: ReactNode;
}

export default function VideoProvider({ children }: VideoProviderProps) {
  const [videoId, setVideoId] = useState<string>("xLhR0kdPcWQ"); // Initialize with an empty string

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

  return context;
}
