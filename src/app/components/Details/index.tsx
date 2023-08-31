const features = [
  {
    name: "Next Js",
    description:
      "O Next.js é um framework React que não apenas simplifica o desenvolvimento, mas também oferece recursos avançados que tornarão nossa Landing Page altamente performática e amigável tanto para os usuários quanto para os mecanismos de busca.",
  },
  {
    name: "Tailwind CSS",
    description:
      "Na criação da nossa Landing Page, aproveitaremos o poder e a eficiência do Tailwind CSS para dar estilo e vida ao nosso design. O Tailwind CSS é uma ferramenta inovadora que nos permitirá construir uma interface atraente e responsiva de maneira ágil e simplificada",
  },
  {
    name: "Prisma e PostgresSQL",
    description:
      "Para tornar nossa Landing Page dinâmica, precisamos armazenar e exibir informações específicas, como depoimentos de clientes ou produtos em destaque. Para isso, vamos utilizar o Prisma, uma ferramenta ORM (Object-Relational Mapping) que simplifica a interação com bancos de dados.",
  },
  {
    name: "Vercel",
    description:
      "Agora que a Landing Page está pronta, é hora de compartilhá-la com o mundo. A Vercel oferece hospedagem gratuita e rápida para projetos Next.js. Conecte seu repositório do GitHub à Vercel e implante sua Landing Page com apenas alguns cliques.",
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
              <div key={feature.name} className="relative">
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
