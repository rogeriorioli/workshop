"use client";
import React, { useEffect, useState } from "react";
import Authenticated, { UserDto } from "../helpers/Authenticated";
import Accordeon from "../components/Accordeon";
import Player from "../components/Player";
import VideoProvider from "../context/VideoContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DiscussionEmbed } from "disqus-react";
import Head from "next/head";
const Workshop = () => {
  const [user, setUser] = useState<UserDto>();

  const data = [
    {
      title: "DIA 1 - Bem-Vindo e introdução",
      content: [
        {
          key: 1,
          title: "Instalando as ferramentas nescessárias",
          videoId: "xLhR0kdPcWQ",
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
            <div className="w-1/3">
              <h2 className="text-2xl text-white font-semibold">
                Material de Apoio
              </h2>
            </div>
          </div>
          <div className="w-full border-b-2 ">
            <h2 className="text-2xl text-white font-semibold">Ajuda</h2>
          </div>
          <DiscussionEmbed
            shortname="example"
            config={{
              url: "https://workshop-pearl.vercel.app/worskhop",
              identifier: "DESIGNHOPE WORKSHOP",
              title: "DESIGNHOPE WORKSHOP",
              language: "pt",
            }}
          />
        </div>
      </div>
      <Footer />
    </Authenticated>
  );
};

export default Workshop;
