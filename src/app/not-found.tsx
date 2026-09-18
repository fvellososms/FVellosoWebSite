import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="bg-navy-deep py-24 lg:py-32 flex flex-col items-center justify-center min-h-[80vh] text-white">
      <div className="container-fv max-w-3xl text-center flex flex-col items-center">
        
        <h1 
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-10 tracking-tight"
          style={{ textShadow: "0 0 10px rgba(240, 148, 51, 0.8), 0 0 20px rgba(240, 148, 51, 0.6), 0 0 40px rgba(220, 39, 67, 0.5)" }}
        >
          Erro 404 — Área Isolada
        </h1>
        
        <div className="relative w-full max-w-lg mx-auto aspect-video mb-10 overflow-hidden rounded-[2rem] border-4 border-brand-500 shadow-[0_0_30px_rgba(240,148,51,0.3)]">
          <Image
            src="/404-cone.png"
            alt="Cone de Sinalização Isolando a Área"
            fill
            className="object-cover"
          />
        </div>
        
        <p className="text-lg sm:text-xl leading-relaxed text-white/90 max-w-2xl mb-12">
          Parece que você ultrapassou a linha de segurança. A página que você procura não existe, foi interditada ou mudou de endereço.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row w-full max-w-md">
          <Link href="/" className="btn btn-primary w-full sm:w-auto">
            Voltar para a Home
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <Link href="/orcamento" className="btn btn-ghost-light w-full sm:w-auto">
            Falar com a equipe
          </Link>
        </div>
      </div>
    </section>
  );
}
