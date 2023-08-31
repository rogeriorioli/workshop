import React from "react";

import styles from "./styles.module.css";
import Video from "../Video";

export default function Form() {
  return (
    <div className="relative">
      <div
        className={`absolute bg-white shadow-md p-2 ${styles.absoluteContainer}`}
      >
        <Video />
        <div className="p-2">
          <h2 className="text-xl font-semibold text-gray-900 my-3">
            Inscreva-se é rapidinho
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
            temporibus non ea
          </p>
          <form className="flex flex-col py-4">
            <div className="mb-3 border-2 border-gray-400 rounded-md">
              <input
                type="text"
                placeholder="Seu Nome"
                className="w-full p-2 outline-0 focus:outline-none rounded-md"
              />
            </div>
            <div className="mb-3 border-2 border-gray-400">
              <input
                type="text"
                placeholder="email@servidor.com.br"
                className="w-full p-2 outline-0 focus:outline-none"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-gray-900 text-white font-semibold uppercase text-center p-4 w-full"
              >
                Inscreva-se
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
