"use client";
import React, { FormEvent, useRef, useState } from "react";

import styles from "./styles.module.css";
import Video from "../Video";
import axios from "axios";
import Message, { MessageProps } from "../Message";

export default function Form() {
  const [message, setMessage] = useState<MessageProps>();
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      email: emailRef.current?.value,
      name: nameRef.current?.value,
    };

    if (emailRef.current?.value !== "" && nameRef.current?.value !== "") {
      const subscriber = await axios
        .post("/api/signup", data)
        .then((success) => {
          const { data } = success;
          setMessage({
            messsage: data.message,
            cssClass: "text-green-900 bg-green-100 border-green-400",
          });
        });
    } else {
      setMessage({
        messsage: "Os campos devem ser preenchidos",
        cssClass: "text-red-900 bg-red-100 border-red-400",
      });
    }
  };
  return (
    <div className="relative">
      <div
        className={`lg:absolute lg:mt-0 mt-10 shadow-md p-2 bg-gray-100 ${styles.absoluteContainer}`}
      >
        <Video />
        <div className="p-2">
          <h2 className="text-xl font-semibold text-gray-900 my-3">
            Inscreva-se é rapidinho.
          </h2>
          <p>Preencha os campos abaixo e borá meter a mão na massa.</p>
          <form className="flex flex-col py-4" onSubmit={handleFormSubmit}>
            <div className="mb-3 border-2 border-gray-400 rounded-md focus-within:border-gray-900">
              <input
                type="text"
                name="name"
                ref={nameRef}
                placeholder="Seu Nome"
                className="w-full p-2 outline-0 focus:outline-none rounded-md"
              />
            </div>
            <div className="mb-3 border-2 border-gray-400 rounded-md focus-within:border-gray-900">
              <input
                name="email"
                type="email"
                ref={emailRef}
                placeholder="email@servidor.com.br"
                className="w-full p-2 outline-0 focus:outline-none rounded-md "
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-gray-900 hover:bg-gray-700 transition-all text-white font-semibold uppercase text-center p-4 w-full"
              >
                Inscreva-se
              </button>
              {message && (
                <Message
                  messsage={message.messsage}
                  cssClass={message.cssClass}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
