const features = [
  {
    name: "Next Js",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
  },
  {
    name: "Tailwind CSS",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
  },
  {
    name: "Prisma e PostgresSQL",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
  },
  {
    name: "Vercel",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
  },
];

export default function Details() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-gray-800">
            Borá codar
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            O que iremos abordar !
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Criaremos uma Landing Page utilizando{" "}
            <a href="" className="font-semibold">
              {" "}
              React
            </a>{" "}
            com
            <a href="" className="font-semibold">
              {" "}
              Nextjs{" "}
            </a>{" "}
            fazendo a modelagem de banco de dados com{" "}
            <a href="" className="font-semibold">
              Prisma
            </a>{" "}
            e faremos toda a configuração no cloud da{" "}
            <a href="" className="font-semibold">
              Vercel
            </a>{" "}
            totalemente Gratuito!
          </p>
        </div>
        <div className="flex justify-center items-center my-6">
          <a
            className="w-56 p-4 text-white font-semibold text-center bg-gray-900"
            href=""
          >
            INSCREVA-SE
          </a>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
