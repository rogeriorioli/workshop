"use client";
import React, { useEffect, useState } from "react";
import Authenticated, { UserDto } from "../helpers/Authenticated";
import Accordeon from "../components/Accordeon";
import Player from "../components/Player";
import VideoProvider from "../context/VideoContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DiscussionEmbed } from "disqus-react";
const Workshop = () => {
  const [user, setUser] = useState<UserDto>();

  const data = [
    {
      title: "DIA 1 - Bem-Vindo e introdução",
      content: [
        {
          key: 1,
          title: "Sobre o Projeto  e ferramentas nescessárias",
          videoId: "YP7cZwdHmp8",
        },
        {
          key: 2,
          title: "Entendo o Next JS",
          videoId: "OdKDNcOyRjI",
        },
        {
          key: 3,
          title: "Entendo o tailwind css",
          videoId: "c0An_KUTlUM",
        },
      ],
    },
    {
      title: "DIA 2 - CRIANDO",
      content: [
        {
          key: 1,
          title: "Instalando as ferramentas nescessárias",
          videoId: "sasjaskja",
        },
        {
          key: 2,
          title: "Entendo o Next JS",
          videoId: "sasjaskja",
        },
        {
          key: 3,
          title: "Entendo o tailwind css",
          videoId: "sasjaskja",
        },
      ],
    },
    {
      title: "DIA 3 - DEPLOY",
      content: [
        {
          key: 1,
          title: "Instalando as ferramentas nescessárias",
          videoId: "sasjaskja",
        },
        {
          key: 2,
          title: "Entendo o Next JS",
          videoId: "sasjaskja",
        },
        {
          key: 3,
          title: "Entendo o tailwind css",
          videoId: "sasjaskja",
        },
      ],
    },
  ];

  useEffect(() => {
    const getUser = window.localStorage.getItem("user");
    setUser(getUser && JSON.parse(getUser));
  }, []);

  return (
    <Authenticated>
      <Header username={`Olá,  ${user?.name}`} />
      <div className="bg-gray-900 flex items-center flex-col ">
        <VideoProvider>
          <div className="flex flex-row justify-center items-center my-8 w-full">
            <div className="container flex flex-row">
              <div className="w-3/4">
                <Player />
              </div>
              <div className="w-3/12 min-h-min bg-white ">
                {data.map((item, i) => (
                  <Accordeon
                    key={i}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            </div>
          </div>
        </VideoProvider>
        <div className="container flex flex-col">
          <div className="w-full border-b-2 ">
            <h2 className="text-2xl text-white font-semibold">Descrição</h2>
          </div>
          <div>
            <div className="my-2 w-2/3 py-2">
              <p className="text-white ">
                Criaremos uma Landing Page utilizando React com Nextjs fazendo a
                modelagem de banco de dados com Prisma e faremos toda a
                configuração no cloud da Vercel totalmente Gratuito!
              </p>
            </div>
            <div className="w-full border-b-2 ">
              <h2 className="text-2xl text-white font-semibold">
                Material de Apoio
              </h2>
            </div>
            <p className="font-bold mt-2 text-white">
              Links importantes e dowloads
            </p>
            <ul className="p-8 text-white list-disc ">
              <li>
                <a href="https://nodejs.org/en" target="_blank">
                  NodeJs
                </a>
              </li>
              <li>
                <a href="https://nextjs.org/" target="_blank">
                  NextJs
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/docs/installation"
                  target="_blank"
                >
                  Tailwindcss
                </a>
              </li>
              <li>
                <a href="https://www.prisma.io/" target="_blank">
                  Prisma
                </a>
              </li>
              <li>
                <a
                  className="font-bold"
                  href="https://www.figma.com/file/tlh16AMGiXejZ4xkSJgfzg/designhope-worshop?type=design&node-id=502%3A51&mode=design&t=eZOEGkMBEBTulBoO-1"
                  target="_blank"
                >
                  FIGMA DO PROJETO
                </a>
              </li>
              <li>
                <a className="font-bold" href="/assets.zip" target="_blank">
                  IMAGENS DO PROJETO
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full border-b-2 mb-8 ">
            <h2 className="text-2xl text-white font-semibold">Ajuda</h2>
          </div>
          <DiscussionEmbed
            shortname="designhope-workshop"
            config={{
              url: "https://workshop-pearl.vercel.app/worskhop",
              identifier: "1",
              title: "DESIGNHOPE WORKSHOP",
              language: "pt_BR",
            }}
          />
        </div>
      </div>
      <Footer />
    </Authenticated>
  );
};

export default Workshop;
