import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, ShieldIcon, HelmetIcon, SearchCheckIcon, HeartPulseIcon } from "@/components/icons";

export default function EquipamentosProtecaoPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-navy-deep py-16 text-white lg:py-24">
        <div className="grid-pattern absolute inset-0 opacity-30" />
        <div className="container-fv relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-brand-300">NR-06 • Equipamentos de Proteção Individual</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Equipamentos de Proteção Individual
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Entenda como selecionar, utilizar e gerenciar EPIs de acordo com os riscos ocupacionais e os requisitos da NR-06.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. INTRODUÇÃO E PRINCÍPIO CENTRAL */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="container-fv">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <Reveal>
              <h2 className="text-3xl font-bold text-navy mb-4">O que é EPI?</h2>
              <p className="text-ink leading-relaxed mb-6">
                O EPI é um dispositivo ou produto de uso individual destinado à proteção do trabalhador contra riscos ocupacionais que possam ameaçar sua segurança e saúde.
              </p>
              <p className="text-ink leading-relaxed">
                Ele faz parte das medidas de prevenção e deve ser considerado dentro do gerenciamento dos riscos ocupacionais, não como substituto automático das medidas de proteção coletiva (EPCs).
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-3xl bg-brand-50 p-8 border border-brand-100">
                <div className="flex items-center gap-4 mb-4">
                  <ShieldIcon className="h-8 w-8 text-brand-600" />
                  <h3 className="text-xl font-bold text-brand-700">O EPI não é uma solução isolada</h3>
                </div>
                <p className="text-brand-700/90 leading-relaxed">
                  A utilização de EPI deve estar integrada às demais medidas de prevenção adotadas pela organização, considerando os riscos ocupacionais identificados.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. SELEÇÃO DO EPI */}
      <section className="bg-white py-20 lg:py-24 border-t border-brand-100">
        <div className="container-fv">
          <Reveal className="mb-12 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">Como selecionar o EPI adequado</h2>
            <p className="text-ink leading-relaxed">
              A escolha do EPI deve partir dos riscos identificados e avaliados na atividade, considerando também as características do trabalho e do trabalhador. Outras NRs podem estabelecer requisitos específicos.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "1. Risco", desc: "Quais perigos e riscos estão presentes na atividade?" },
              { title: "2. Atividade", desc: "O que o trabalhador realmente executa?" },
              { title: "3. Proteção necessária", desc: "Qual nível e tipo de proteção são necessários?" },
              { title: "4. Trabalhador", desc: "O equipamento é adequado ao usuário (ajuste, conforto, características)?" },
              { title: "5. Compatibilidade", desc: "Os equipamentos podem ser utilizados simultaneamente sem comprometer a eficácia?" }
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 50} className="card p-6 border border-brand-100 bg-surface">
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-ink">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRINCIPAIS TIPOS DE EPI */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="container-fv">
          <Reveal className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold text-navy mb-4">Proteção para diferentes riscos</h2>
            <p className="text-ink leading-relaxed">Principais categorias de equipamentos de proteção individual.</p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Cabeça", desc: "Capacetes e capuzes contra impactos, agentes térmicos ou químicos.", icon: HelmetIcon },
              { title: "Olhos e Face", desc: "Óculos e protetores faciais contra partículas e radiação.", icon: ShieldIcon },
              { title: "Audição", desc: "Protetores auditivos (concha ou plug) para exposição a ruídos.", icon: HeartPulseIcon },
              { title: "Vias Respiratórias", desc: "Respiradores e máscaras contra poeiras, gases e vapores.", icon: SearchCheckIcon },
              { title: "Mãos e Braços", desc: "Luvas e mangotes contra agentes mecânicos, químicos ou térmicos.", icon: ShieldIcon },
              { title: "Pés e Pernas", desc: "Calçados de segurança e perneiras contra impactos e umidade.", icon: HelmetIcon },
              { title: "Tronco", desc: "Vestimentas de segurança para proteção do corpo inteiro.", icon: ShieldIcon },
              { title: "Quedas", desc: "Cinturões de segurança e talabartes para trabalho em altura.", icon: SearchCheckIcon }
            ].map((epi, idx) => (
              <Reveal key={epi.title} delay={idx * 50} className="card p-6 bg-white hover:-translate-y-2 transition-all shadow-card">
                <epi.icon className="h-6 w-6 text-brand-600 mb-4" />
                <h3 className="font-bold text-navy mb-2">{epi.title}</h3>
                <p className="text-sm text-ink">{epi.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICADO DE APROVAÇÃO E CONSERVAÇÃO (Agrupados para escaneabilidade) */}
      <section className="bg-white py-20 lg:py-24 border-t border-brand-100">
        <div className="container-fv">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-bold text-navy mb-4">Certificado de Aprovação (CA)</h2>
              <p className="text-ink leading-relaxed mb-4">
                O CA identifica a aprovação do EPI pelo órgão nacional competente em SST e é requisito para sua comercialização e utilização. Antes da aquisição, verifique se o CA é válido e se corresponde à proteção necessária.
              </p>
              <div className="rounded-2xl bg-surface p-6 border border-brand-100">
                <p className="text-sm text-navy font-bold mb-2">Entenda a validade:</p>
                <ul className="text-sm text-ink space-y-2">
                  <li>• <strong className="text-navy">Validade do CA:</strong> Refere-se ao prazo para comercialização. Depende do mecanismo de avaliação da conformidade.</li>
                  <li>• <strong className="text-navy">Validade do Equipamento:</strong> Após adquirido, devem ser observadas as condições de uso, armazenamento e validade informadas pelo fabricante/importador.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="text-3xl font-bold text-navy mb-4">Conservar, inspecionar e substituir</h2>
              <p className="text-ink leading-relaxed mb-4">
                O EPI deve ser mantido em condições adequadas de conservação e funcionamento. Equipamentos danificados, extraviados ou que deixem de oferecer a proteção necessária devem ser avaliados e substituídos.
              </p>
              <ul className="text-ink space-y-2 mb-4">
                <li className="flex gap-2 items-start"><SearchCheckIcon className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" /> Realizar limpeza e higienização.</li>
                <li className="flex gap-2 items-start"><SearchCheckIcon className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" /> Garantir o armazenamento correto.</li>
                <li className="flex gap-2 items-start"><SearchCheckIcon className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" /> Fazer inspeções periódicas.</li>
                <li className="flex gap-2 items-start"><SearchCheckIcon className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" /> Seguir as orientações do fabricante.</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. USO CORRETO E TREINAMENTO */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="container-fv">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-3xl font-bold text-navy mb-4">Usar corretamente também é proteger</h2>
              <p className="text-ink leading-relaxed mb-6">A eficácia do equipamento depende diretamente do comportamento de quem o utiliza.</p>
              <ul className="text-ink space-y-3">
                <li>• Utilizar o EPI exclusivamente para a finalidade indicada.</li>
                <li>• Ajustar corretamente ao corpo.</li>
                <li>• Respeitar as orientações do fabricante.</li>
                <li>• Conhecer suas limitações técnicas.</li>
                <li>• Inspecionar as condições antes de cada uso.</li>
                <li>• Comunicar problemas que comprometam a proteção.</li>
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="text-3xl font-bold text-navy mb-4">Antes de usar, é preciso saber usar</h2>
              <p className="text-ink leading-relaxed mb-6">
                A organização deve orientar e, quando aplicável, realizar treinamento para que o trabalhador conheça o risco protegido, o funcionamento, as limitações, o ajuste, o uso, a retirada, a higienização, a guarda e os critérios de substituição.
              </p>
              <div className="card p-6 bg-white border-l-4 border-l-brand-600 shadow-sm">
                <p className="text-sm text-navy font-bold">Importante</p>
                <p className="text-sm text-ink mt-1">Os treinamentos e orientações devem ser registrados conforme os requisitos aplicáveis.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. RESPONSABILIDADES */}
      <section className="bg-white py-20 lg:py-24 border-t border-brand-100">
        <div className="container-fv">
          <Reveal className="mb-12 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">Responsabilidades</h2>
            <p className="text-ink leading-relaxed">A segurança é um esforço conjunto. Conheça as obrigações fundamentais de cada parte.</p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="card p-8 bg-surface border border-brand-100 h-full">
                <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-3">
                  <ShieldIcon className="h-6 w-6 text-brand-600" /> Organização (Empregador)
                </h3>
                <ul className="text-ink space-y-3">
                  <li>• Selecionar o EPI adequado ao risco.</li>
                  <li>• Fornecer gratuitamente.</li>
                  <li>• Orientar e treinar o trabalhador.</li>
                  <li>• Exigir o uso.</li>
                  <li>• Registrar o fornecimento.</li>
                  <li>• Manter condições adequadas de uso.</li>
                  <li>• Substituir quando necessário.</li>
                  <li>• Realizar manutenção/higienização quando aplicável.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card p-8 bg-surface border border-brand-100 h-full">
                <h3 className="text-xl font-bold text-navy mb-6 flex items-center gap-3">
                  <HelmetIcon className="h-6 w-6 text-brand-600" /> Trabalhador
                </h3>
                <ul className="text-ink space-y-3">
                  <li>• Utilizar corretamente apenas para a finalidade destinada.</li>
                  <li>• Zelar pela guarda e conservação.</li>
                  <li>• Comunicar danos ou alterações ao empregador.</li>
                  <li>• Cumprir as orientações recebidas.</li>
                  <li>• Participar dos treinamentos oferecidos.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. GESTÃO E RESUMO VISUAL */}
      <section className="bg-surface py-20 lg:py-24">
        <div className="container-fv">
          <Reveal className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-4">Gestão de EPI em 6 passos</h2>
            <p className="text-ink leading-relaxed">
              Do fornecimento ao acompanhamento: uma boa gestão envolve matriz de EPIs, controle de estoque, inspeções e registros físicos ou sistemas eletrônicos.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {[
              { step: "1", title: "Identifique", desc: "Os riscos da atividade." },
              { step: "2", title: "Selecione", desc: "O EPI adequado à proteção exigida." },
              { step: "3", title: "Verifique", desc: "CA válido para compra e condições de uso." },
              { step: "4", title: "Forneça", desc: "Registre a entrega (ficha ou sistema)." },
              { step: "5", title: "Oriente", desc: "Ensine o uso, ajuste, limitações e cuidados." },
              { step: "6", title: "Acompanhe", desc: "Inspecione, conserve e substitua." }
            ].map((item, idx) => (
              <Reveal key={item.step} delay={idx * 50} className="card p-6 bg-white border border-brand-100 relative overflow-hidden">
                <span className="absolute -right-4 -top-6 text-[100px] font-extrabold text-brand-50 opacity-50 select-none">{item.step}</span>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-brand-600 mb-2">{item.title}</h3>
                  <p className="text-sm text-ink">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          
          <Reveal className="text-center">
            <p className="text-xs text-ink/70 max-w-2xl mx-auto">
              Nota: O fornecimento precisa ser registrado. O descumprimento das normas de SST pode resultar em medidas administrativas e responsabilidades legais. A prioridade deve ser sempre a prevenção.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="bg-white py-20 lg:py-28 border-t border-brand-100">
        <div className="container-fv">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-navy p-8 sm:p-16 text-center text-white">
              <div className="grid-pattern absolute inset-0 opacity-20" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                  Precisa de ajuda para implementar a gestão de EPIs na sua empresa?
                </h2>
                <p className="text-lg text-white/80 mb-10 leading-relaxed">
                  A FVelloso pode apoiar sua empresa na identificação de riscos, definição de medidas de prevenção e estruturação de processos de Segurança, Meio Ambiente e Saúde.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/orcamento" className="btn btn-primary bg-white !text-brand-700 !bg-none">
                    Solicitar Consultoria Técnica
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <Link href="/contato" className="btn btn-ghost-light">
                    Falar com Especialista
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}