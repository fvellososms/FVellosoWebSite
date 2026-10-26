
import Image, { StaticImageData } from "next/image";
import Reveal from "@/components/Reveal";

import fabioImg from "@/assets/images/equipe/fabio.png";
import albertoImg from "@/assets/images/equipe/alberto.png";
import daviImg from "@/assets/images/equipe/davi.png";
import nicoleImg from "@/assets/images/equipe/nicole.jpeg";
import marianaImg from "@/assets/images/equipe/mariana.jpeg";
import pedroImg from "@/assets/images/equipe/pedro.jpeg";
import alexandreImg from "@/assets/images/equipe/alexander.jpeg";

type MembroEquipe = {
  nome: string;
  cargo: string;
  foto: StaticImageData | null;
  linkedin: string | null;
  iniciais: string;
};

const equipe: MembroEquipe[] = [
  {
    nome: "Fábio Velloso",
    cargo: "CEO",
    foto: fabioImg,
    linkedin: "https://www.linkedin.com/in/fabio-velloso-sms/",
    iniciais: "CEO",
  },
  {
    nome: "Alexander Luiz",
    cargo: "Sócio",
    foto: alexandreImg,
    linkedin: "https://www.linkedin.com/in/alexandre-luiz-da-silva-39755a44/",
    iniciais: "Sócio",
  },
  {
    nome: "Pedro Ferreira",
    cargo: "Desenvolvedor de Software",
    foto: pedroImg,
    linkedin: "www.linkedin.com/in/pedro-daniel-ferreira/",
    iniciais: "DEV",
  },
  {
    nome: "Alberto Martins",
    cargo: "Ténico Segurança do Trabalho",
    foto: albertoImg,
    linkedin: null,
    iniciais: "SST",
  },
  {
    nome: "Davi Mello",
    cargo: "Estagiário em Engenharia",
    foto: daviImg,
    linkedin: "https://www.linkedin.com/in/davi-mello-ferreira-a5561b2a1/",
    iniciais: "SST",
  },
  {
    nome: "Nicole Soeiro",
    cargo: "Estagiária em Segurança do Trabalho",
    foto: nicoleImg,
    linkedin: null,
    iniciais: "SST",
  },
  {
    nome: "Mariana Cyrilo",
    cargo: "Estagiária em Administração",
    foto: marianaImg,
    linkedin: null,
    iniciais: "SST",
  },
];

export default function EquipeSection() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="equipe-titulo"
    >
      <div className="container-fv">

        {/* Cabeçalho */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            Quem faz acontecer
          </span>

          <h2
            id="equipe-titulo"
            className="mt-3 text-3xl font-bold text-balance sm:text-4xl"
          >
            Nossa Equipe
          </h2>

          <p className="mt-4 text-base leading-relaxed">
            Conheça os profissionais que fazem parte
            da nossa história.
          </p>
        </Reveal>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">

          {equipe.map((membro) => (
            <article
              key={membro.nome}
              className="card flex h-full min-w-0 flex-col items-center p-3 text-center sm:p-7"
            >
              {/* Foto circular */}
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-50 sm:h-28 sm:w-28">

                {membro.foto ? (
                  <Image
                    src={membro.foto}
                    alt={`Foto de ${membro.nome}`}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                ) : (
                  <span className="text-lg font-bold text-brand-600">
                    {membro.iniciais}
                  </span>
                )}

              </div>

              {/* Nome */}
              <h3 className="mt-5 break-words text-sm font-bold text-navy sm:text-lg">
                {membro.nome}
              </h3>

              {/* Cargo */}
              <div className="mt-3 flex flex-1 items-start justify-center">
                <span className="text-center text-xs font-medium leading-relaxed text-brand-600 sm:text-sm">
                  {membro.cargo}
                </span>
              </div>

              {/* LinkedIn */}
              <div className="mt-6 w-full">
                {membro.linkedin ? (
                  <a
                    href={membro.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${membro.nome}`}
                    className="flex w-full items-center justify-center rounded-lg bg-[#0A66C2] px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#004182] sm:text-sm"
                  >
                    LinkedIn
                  </a>
                ) : (
                  <span className="flex w-full items-center justify-center rounded-lg bg-[#0A66C2] px-3 py-2.5 text-xs font-semibold text-white sm:text-sm">
                    LinkedIn
                  </span>
                )}
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
