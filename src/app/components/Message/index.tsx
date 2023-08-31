import React from "react";

// import { Container } from './styles';

export type MessageProps = {
  messsage: string;
  cssClass: string;
};

const Message = ({ messsage, cssClass }: MessageProps) => {
  return (
    <div
      className={`${cssClass} font-bold p-4 mt-2 text-center rounded-md border-2`}
    >
      {messsage}
    </div>
  );
};

export default Message;
