"use client";
import React, { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

type AutenticatedProps = {
  children: ReactNode;
};
export type UserDto = {
  id: string;
  name: string;
};
const Authenticated = ({ children }: AutenticatedProps) => {
  const router = useRouter();
  useEffect(() => {
    const user = window.localStorage.getItem("user");
    const userData: UserDto = user && JSON.parse(user);
    if (userData?.id) {
      router.push("/workshop");
    } else {
      router.push("/login");
    }
  });

  return <div>{children}</div>;
};

export default Authenticated;
