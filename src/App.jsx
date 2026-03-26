import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle,
  Clock,
  FileText,
  Landmark,
  ShieldCheck,
  Smartphone,
  Wallet,
  ArrowDownToLine,
  CircleDollarSign,
  LayoutDashboard,
  MessageCircle,
  Cpu,
  BadgeCheck,
  ChevronRight,
  TrendingUp,
  Building,
  HelpCircle,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Vi%20o%20Canal%20Incorpora%C3%A7%C3%B5es%20da%20Loft%20e%20quero%20entender%20como%20destravar%20o%20caixa%20do%20meu%20empreendimento.';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: 'easeOut' },
};

const sectionClass = 'relative py-28 md:py-32 border-t border-white/5';

const SurfaceCard = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.008 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] ${className}`}
  >
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
    {children}
  </motion.div>
);

const SectionHeader = ({ eyebrow, title, description, center = true }) => (
  <motion.div
    {...fadeUp}
    className={`${center ? 'text-center mx-auto' : ''} max-w-5xl mb-14 md:mb-16`}
  >
    {eyebrow ? (
      <span className="mb-5 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
        {eyebrow}
      </span>
    ) : null}
    <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white md:text-6xl">
      {title}
    </h2>
    {description ? (
      <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-zinc-400 md:text-xl">
        {description}
      </p>
    ) : null}
  </motion.div>
);

const Glow = ({ className = '' }) => (
  <div className={`pointer-events-none absolute rounded-full blur-3xl ${className}`} />
);

const MetricBadge = ({ label, value, className = '' }) => (
  <div
    className={`rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md ${className}`}
  >
    <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{label}</div>
    <div className="mt-1 text-lg font-bold text-white md:text-xl">{value}</div>
  </div>
);

const HeroSection = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 140]);
  const fade = useTransform(scrollY, [0, 300], [1, 0.88]);

  const monthly = [26, 34, 38, 52, 61, 74];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] pt-28">
      <motion.div style={{ y: bgY, opacity: fade }} className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:36px_36px]" />
        <Glow className="left-[-6%] top-20 h-72 w-72 bg-orange-700/20" />
        <Glow className="right-[4%] top-[22%] h-[24rem] w-[24rem] bg-orange-600/10" />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-20 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
            Canal Incorporações · infraestrutura de crédito imobiliário
          </span>

          <h1 className="mt-7 text-5xl font-black leading-[0.93] tracking-tight text-white md:text-7xl">
            VGV vendido{' '}
            <span className="text-zinc-500">não é caixa.</span>
            <br />
            <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              E isso está custando caro.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 md:text-2xl md:leading-9">
            A Loft conecta venda, documentação, bancos e operação até converter capital com mais
            velocidade, menos risco e mais previsibilidade para a conta da obra.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(255,106,0,0.35)] transition hover:bg-orange-600"
            >
              Falar com especialista <ArrowRight size={20} />
            </a>
            <a
              href="#esteira"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Ver como funciona
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            <MetricBadge label="Velocidade" value="35% mais rápido" />
            <MetricBadge label="Aprovação média" value="98%" />
            <MetricBadge label="Impacto no custo" value="-3 p.p." />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.12, ease: 'easeOut' }}
          className="relative"
        >
          <SurfaceCard className="p-5 md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Loft OS · operação em tempo real
                </div>
                <div className="mt-1 text-xl font-bold text-white">Empreendimento Horizon Park</div>
              </div>
              <div className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-orange-300">
                Em aceleração
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <MetricBadge label="VGV monitorado" value="R$ 124M" />
              <MetricBadge label="Caixa destravado" value="+R$ 8,4M" />
              <MetricBadge label="Prazo médio" value="18 dias" />
              <MetricBadge label="Banco líder" value="Santander" />
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="absolute left-4 top-4 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Aprovação por ciclo
                </div>
                <div className="relative mt-6 flex h-[calc(100%-24px)] items-end gap-2">
                  {monthly.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 8, opacity: 0.6 }}
                      whileInView={{ height: `${h}%`, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.85, delay: i * 0.06 }}
                      className="flex-1 rounded-t-xl bg-gradient-to-t from-orange-700 to-orange-400 shadow-[0_0_24px_rgba(255,106,0,0.3)]"
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Prioridades do dia
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    'Banco alternativo sugerido para unidade 214',
                    'Pasta documental concluída para 18 clientes',
                    'Fila pré-habite-se priorizada',
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <CheckCircle size={16} className="mt-0.5 text-orange-300" />
                      <span className="text-sm leading-6 text-zinc-300">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SurfaceCard>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-6 bottom-10 hidden rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-md lg:block"
          >
            <div className="flex items-center gap-2 text-sm text-white">
              <div className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(255,106,0,0.9)]" />
              O problema não é vender. É transformar venda em caixa.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const steps = [
    {
      title: 'Venda',
      subtitle: 'VGV contratado',
      bullets: ['Comprador qualificado', 'Contrato assinado'],
      icon: <Building2 className="text-orange-300" size={22} />,
    },
    {
      title: 'Documentação',
      subtitle: 'Leitura por IA',
      bullets: ['AI Force + Loft Check', 'Dossiê automático'],
      icon: <FileText className="text-orange-300" size={22} />,
    },
    {
      title: 'Loft OS',
      subtitle: 'Cérebro operacional',
      bullets: ['Motor multibanco', 'Roteamento inteligente', 'Score otimizado'],
      icon: <Cpu className="text-white" size={24} />,
      active: true,
    },
    {
      title: 'Bancos',
      subtitle: 'Distribuição e aprovação',
      bullets: ['Competição de taxas', 'Maior aderência', 'Aprovação acelerada'],
      icon: <Landmark className="text-orange-300" size={22} />,
    },
    {
      title: 'Caixa',
      subtitle: 'Capital convertido',
      bullets: ['Liberação mais rápida', 'Menor custo financeiro', 'VGV realizado'],
      icon: <CircleDollarSign className="text-orange-300" size={22} />,
    },
  ];

  return (
    <section id="esteira" className={`${sectionClass} overflow-hidden bg-[#050505]`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Infraestrutura"
          title={
            <>
              Assessoria não é serviço.
              <br />
              <span className="text-orange-400">É infraestrutura.</span>
            </>
          }
          description="Um sistema operacional que conecta venda, documentação, bancos e caixa — eliminando gargalos entre contrato e repasse."
        />

        <div className="relative mt-14">
          <div className="absolute left-[8%] right-[8%] top-10 hidden h-px bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-orange-500/0 lg:block" />

          <div className="grid gap-6 lg:grid-cols-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative"
              >
                <div className="mb-4 flex justify-center">
                  <div
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border ${
                      step.active
                        ? 'border-orange-500/40 bg-orange-500 text-black shadow-[0_0_30px_rgba(255,106,0,0.35)]'
                        : 'border-white/10 bg-[#111111]'
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>

                {i < steps.length - 1 ? (
                  <div className="absolute right-[-16px] top-7 hidden lg:block">
                    <ChevronRight className="text-orange-400/70" size={16} />
                  </div>
                ) : null}

                <div
                  className={`rounded-[28px] border p-6 ${
                    step.active
                      ? 'border-orange-500/20 bg-[linear-gradient(180deg,rgba(255,106,0,0.14),rgba(255,106,0,0.04))]'
                      : 'border-white/10 bg-white/[0.04]'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl font-black text-white">{step.title}</div>
                    <div className="mt-1 text-sm font-medium text-zinc-500">{step.subtitle}</div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="space-y-2.5 text-sm leading-6 text-zinc-300">
                      {step.bullets.map((bullet) => (
                        <div key={bullet}>{bullet}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ['35%', 'mais rápido'],
              ['-3 p.p.', 'custo capital'],
              ['98%', 'taxa aprovação'],
              ['7 dias', 'até ganho visível'],
            ].map(([value, label], i) => (
              <div
                key={label}
                className={`rounded-3xl border p-5 ${
                  i === 0
                    ? 'border-orange-500/20 bg-orange-500 text-white'
                    : 'border-white/10 bg-white/[0.03]'
                }`}
              >
                <div className="text-4xl font-black text-white">{value}</div>
                <div
                  className={`mt-1 text-sm uppercase tracking-[0.16em] ${
                    i === 0 ? 'text-white/80' : 'text-zinc-500'
                  }`}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};                {i < steps.length - 1 ? (
                  <div className="absolute right-[-18px] top-8 hidden lg:block">
                    <ChevronRight className="text-orange-400/70" size={18} />
                  </div>
                ) : null}

                <SurfaceCard
                  className={`h-full p-5 ${
                    step.active ? 'border-orange-500/25 bg-orange-500/10' : ''
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl font-black text-white">{step.title}</div>
                    <div className="mt-1 text-sm font-medium text-zinc-400">{step.subtitle}</div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="space-y-2.5 text-sm leading-6 text-zinc-300">
                      {step.bullets.map((bullet) => (
                        <div key={bullet}>{bullet}</div>
                      ))}
                    </div>
                  </div>
                </SurfaceCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ['35%', 'mais rápido'],
              ['-3 p.p.', 'custo capital'],
              ['98%', 'taxa aprovação'],
              ['7 dias', 'até ganho visível'],
            ].map(([value, label], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`rounded-3xl border p-5 ${
                  i === 0
                    ? 'border-orange-500/20 bg-orange-500 text-white'
                    : 'border-white/10 bg-white/[0.03]'
                }`}
              >
                <div className="text-4xl font-black text-white">{value}</div>
                <div
                  className={`mt-1 text-sm uppercase tracking-[0.16em] ${
                    i === 0 ? 'text-white/80' : 'text-zinc-500'
                  }`}
                >
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BankNetworkSection = () => {
  const banks = [
    { name: 'Itaú', left: '50%', top: '8%' },
    { name: 'Bradesco', left: '78%', top: '28%' },
    { name: 'Santander', left: '78%', top: '68%' },
    { name: 'Caixa', left: '50%', top: '88%' },
    { name: 'Inter', left: '22%', top: '68%' },
    { name: 'BRB', left: '22%', top: '28%' },
  ];

  return (
    <section className={`${sectionClass} overflow-hidden bg-[#080808]`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Distribuição"
          title="Conectado aos principais bancos do Brasil"
          description="Não é só integração. É poder real de distribuição, competição de taxa e roteamento por aderência para aumentar aprovação e reduzir custo financeiro."
        />

        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0c0e] p-8 md:p-12">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative mx-auto h-[560px] max-w-5xl">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 560" fill="none">
              {[
                ['500', '280', '500', '70'],
                ['500', '280', '780', '160'],
                ['500', '280', '780', '400'],
                ['500', '280', '500', '490'],
                ['500', '280', '220', '400'],
                ['500', '280', '220', '160'],
              ].map((line, i) => (
                <motion.path
                  key={i}
                  d={`M ${line[0]} ${line[1]} C ${line[0]} ${line[1]}, ${(Number(line[0]) + Number(line[2])) / 2} ${(Number(line[1]) + Number(line[3])) / 2}, ${line[2]} ${line[3]}`}
                  stroke="rgba(255,106,0,0.52)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0.35 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.15, delay: i * 0.07 }}
                />
              ))}
            </svg>

            {banks.map((bank, i) => (
              <motion.div
                key={bank.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="absolute"
                style={{ left: bank.left, top: bank.top, transform: 'translate(-50%, -50%)' }}
              >
                <div className="flex min-w-[160px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 text-lg font-bold text-white shadow-[0_0_25px_rgba(0,0,0,0.35)]">
                  {bank.name}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex h-40 w-40 items-center justify-center rounded-full border border-orange-400/40 bg-orange-500 shadow-[0_0_60px_rgba(255,106,0,0.45)]">
                <div className="text-center">
                  <div className="text-2xl font-black text-black">Loft</div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/70">
                    Multibanco
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative mt-6 grid gap-4 md:grid-cols-3">
            {[
              ['Um único cadastro', 'A operação conecta múltiplos bancos sem fricção manual.'],
              ['Maximização de aprovação', 'Roteamento por aderência e competição real de taxa.'],
              ['Velocidade operacional', 'Menos dispersão, menos retrabalho e mais caixa convertido.'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                <div className="text-lg font-bold text-white">{title}</div>
                <div className="mt-2 text-sm leading-6 text-zinc-400">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
          <div className="relative mt-4 grid gap-4 md:grid-cols-3">
            {[
              ['Um único cadastro', 'A operação conecta múltiplos bancos sem fricção manual.'],
              ['Maximização de aprovação', 'Roteamento por aderência e competição real de taxa.'],
              ['Velocidade operacional', 'Menos dispersão, menos retrabalho, mais caixa convertido.'],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-black/25 p-5"
              >
                <div className="text-lg font-bold text-white">{title}</div>
                <div className="mt-2 text-sm leading-6 text-zinc-400">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueDriversSection = () => {
  const [active, setActive] = useState('multibanco');

  const items = {
    multibanco: {
      title: 'Plataforma Multibanco',
      tag: 'Core',
      stat: '98%',
      statLabel: 'aprovação média',
      description:
        'Um único cadastro conecta sua operação aos grandes bancos simultaneamente. Mais competição de taxas, maior aprovação e velocidade que nenhum banco isolado consegue oferecer.',
      bullets: [
        'Um único cadastro',
        'Conexão com múltiplas instituições',
        'Maximização de aprovação',
      ],
      icon: <Landmark size={20} />,
    },
    portal: {
      title: 'Portal do Parceiro',
      tag: 'Cockpit',
      stat: '100%',
      statLabel: 'visão do funil',
      description:
        'Visibilidade de pipeline, status operacionais, prazos e eventos críticos para comercial, gestão e operação trabalharem no mesmo ritmo.',
      bullets: [
        'Dashboard completo do funil',
        'Pendências e SLA em tempo real',
        'Mais previsibilidade comercial',
      ],
      icon: <LayoutDashboard size={20} />,
    },
    simulador: {
      title: 'Simulador Inteligente',
      tag: 'Topo do funil',
      stat: '+35%',
      statLabel: 'mais velocidade',
      description:
        'Simulações que ajudam a qualificar e converter mais cedo, direcionando expectativa de taxa, banco e viabilidade antes do gargalo final.',
      bullets: ['Qualificação mais cedo', 'Melhor direcionamento', 'Conversão mais rápida'],
      icon: <TrendingUp size={20} />,
    },
    whatsapp: {
      title: 'Assistente via WhatsApp',
      tag: 'Multicanal',
      stat: '15s',
      statLabel: 'resposta inicial',
      description:
        'A operação conversa no canal do cliente para acelerar resposta, reduzir dispersão e aumentar velocidade de avanço na esteira.',
      bullets: ['Simulação em segundos', 'Atualização operacional', 'Menos atrito no atendimento'],
      icon: <MessageCircle size={20} />,
    },
    aiforce: {
      title: 'AI Force',
      tag: 'Automação',
      stat: '0',
      statLabel: 'erro manual desejado',
      description:
        'Leitura automática, estruturação documental e preparação operacional para reduzir retrabalho desde o começo da jornada.',
      bullets: ['Leitura por IA', 'Extração de dados', 'Base mais limpa para aprovação'],
      icon: <Cpu size={20} />,
    },
    loftcheck: {
      title: 'Loft Check',
      tag: 'Diagnóstico',
      stat: 'Instantâneo',
      statLabel: 'sinalização',
      description:
        'Diagnóstico rápido de inconsistências e pontos de atenção para não descobrir problemas só no fim da esteira.',
      bullets: ['Diagnóstico mais cedo', 'Menos surpresa', 'Maior previsibilidade'],
      icon: <BadgeCheck size={20} />,
    },
  };

  const navItems = [
    ['multibanco', 'Plataforma Multibanco', 'Um cadastro. Todos os bancos.'],
    ['portal', 'Portal do Parceiro', 'Dashboard completo do funil.'],
    ['simulador', 'Simulador Inteligente', 'Converta no topo do funil.'],
    ['whatsapp', 'Assistente via WhatsApp', 'Simulação em segundos.'],
    ['aiforce', 'AI Force', 'Zero erro humano.'],
    ['loftcheck', 'Loft Check', 'Diagnóstico instantâneo.'],
  ];

  const current = items[active];

  return (
    <section className={`${sectionClass} bg-[#050505]`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Ecossistema"
          title="Um ecossistema completo para incorporadoras"
          description="Não são features isoladas. São módulos que trabalham como um único sistema para aumentar aprovação, reduzir custo financeiro e acelerar caixa."
        />

        <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="space-y-3">
            {navItems.map(([key, title, subtitle]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex w-full items-center justify-between rounded-3xl border px-5 py-5 text-left transition ${
                  active === key
                    ? 'border-orange-500 bg-orange-500 text-white shadow-[0_0_30px_rgba(255,106,0,0.25)]'
                    : 'border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06]'
                }`}
              >
                <div>
                  <div className="text-lg font-bold">{title}</div>
                  <div
                    className={`mt-1 text-sm ${
                      active === key ? 'text-white/85' : 'text-zinc-500'
                    }`}
                  >
                    {subtitle}
                  </div>
                </div>
                <ArrowRight size={18} />
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <SurfaceCard className="h-full p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                    {current.tag}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-black">
                      {current.icon}
                    </div>
                    <h3 className="text-4xl font-black text-white">{current.title}</h3>
                  </div>
                </div>

                <div className="rounded-2xl border border-orange-500/20 bg-black/35 px-5 py-4 text-right">
                  <div className="text-4xl font-black text-orange-400">{current.stat}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">
                    {current.statLabel}
                  </div>
                </div>
              </div>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-300">
                {current.description}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="space-y-4">
                  {current.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/15">
                        <CheckCircle size={14} className="text-orange-300" />
                      </div>
                      <span className="text-base text-zinc-300">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    Resultado final
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      ['35%', 'mais rápido'],
                      ['-3 p.p.', 'custo capital'],
                      ['98%', 'taxa aprovação'],
                    ].map(([v, l]) => (
                      <div
                        key={l}
                        className="rounded-2xl bg-white/[0.04] p-4 text-center"
                      >
                        <div className="text-2xl font-black text-white">{v}</div>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                          {l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SurfaceCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const DashboardSection = () => {
  const monthly = [42, 46, 53, 61, 69, 78];
  const funnel = [
    ['Pré-análise', '100%', 'bg-orange-400'],
    ['Estratégia bancária', '82%', 'bg-orange-500'],
    ['Crédito aprovado', '71%', 'bg-orange-600'],
    ['Registro / repasse', '58%', 'bg-orange-300'],
  ];

  return (
    <section id="dashboard" className={`${sectionClass} bg-[#080808]`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Controle"
          title="Controle absoluto da operação em tempo real"
          description="Um cockpit para acompanhar taxa de aprovação, pipeline, tempo, gargalos e impacto de caixa sem depender de leitura manual do processo."
        />

        <motion.div
          {...fadeUp}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0d0f] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
        >
          <div className="flex items-center gap-2 border-b border-white/5 bg-[#141416] px-5 py-4">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <div className="ml-4 text-xs uppercase tracking-[0.18em] text-zinc-500">
              Loft OS · cockpit operacional
            </div>
          </div>

          <div className="grid gap-6 p-5 md:p-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ['VGV monitorado', 'R$ 124M'],
                  ['Taxa de aprovação', '98%'],
                  ['Prazo médio', '18 dias'],
                  ['Custo evitado', '-3 p.p.'],
                ].map(([label, value], i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                      {label}
                    </div>
                    <div className="mt-2 text-3xl font-black text-white">{value}</div>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                        Aprovação e evolução
                      </div>
                      <div className="mt-1 text-lg font-bold text-white">Últimos ciclos</div>
                    </div>
                    <BarChart3 className="text-zinc-500" size={18} />
                  </div>

                  <div className="mt-6 h-64 rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="flex h-full items-end gap-3">
                      {monthly.map((value, i) => (
                        <div key={i} className="flex flex-1 flex-col items-center justify-end gap-2">
                          <motion.div
                            initial={{ height: 8 }}
                            whileInView={{ height: `${value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.85, delay: i * 0.07 }}
                            className="w-full rounded-t-2xl bg-gradient-to-t from-orange-700 to-orange-400 shadow-[0_0_26px_rgba(255,106,0,0.28)]"
                          />
                          <span className="text-xs text-zinc-500">M{i + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    Funil operacional
                  </div>
                  <div className="mt-1 text-lg font-bold text-white">Volume por etapa</div>

                  <div className="mt-6 space-y-5">
                    {funnel.map(([label, value, color], i) => (
                      <div key={label}>
                        <div className="mb-2 flex items-center justify-between text-sm text-zinc-300">
                          <span>{label}</span>
                          <span>{value}</span>
                        </div>
                        <div className="h-3 rounded-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: value }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.85, delay: i * 0.07 }}
                            className={`h-3 rounded-full ${color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 text-sm leading-6 text-orange-100">
                    Melhor momento da operação: agir antes do repasse. É onde a plataforma comprime
                    prazo e devolve previsibilidade ao caixa.
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Eventos em tempo real
                </div>
                <div className="mt-1 text-lg font-bold text-white">Prioridades do dia</div>

                <div className="mt-5 space-y-3">
                  {[
                    ['Unidade 214', 'Banco alternativo sugerido', 'Agora'],
                    ['Pasta documental', '18 clientes concluídos', '11 min'],
                    ['Pré-habite-se', 'Fila acelerada para repasse', '24 min'],
                    ['Contrato 402', 'Aprovação concluída', '39 min'],
                  ].map(([title, desc, time], i) => (
                    <motion.div
                      key={`${title}-${desc}`}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="rounded-2xl border border-white/10 bg-black/25 p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex gap-3">
                          <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/15">
                            <CheckCircle size={15} className="text-orange-300" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white">{title}</div>
                            <div className="mt-1 text-sm leading-6 text-zinc-400">{desc}</div>
                          </div>
                        </div>
                        <div className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                          {time}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/12 to-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Impacto financeiro
                </div>
                <div className="mt-1 text-lg font-bold text-white">Caixa e custo</div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                      Caixa destravado
                    </div>
                    <div className="mt-2 text-3xl font-black text-orange-300">+R$ 8,4M</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                      Redução custo obra
                    </div>
                    <div className="mt-2 text-3xl font-black text-white">-3 p.p.</div>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-zinc-300">
                  O ganho não vem só da aprovação. Vem da compressão do ciclo entre venda e caixa,
                  reduzindo o capital parado na conta da obra.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StorySection = () => {
  const timeline = [
    ['2019', 'Unicórnio em apenas 16 meses de operação — o mais rápido da história do Brasil.'],
    ['2021', 'Expansão B2B: serviços dedicados a incorporadoras, imobiliárias e construtoras.'],
    ['2023', 'Breakeven atingido — consolidação da sustentabilidade do negócio.'],
    ['2025', 'Canal Incorporações como motor estratégico de crescimento e escala.'],
  ];

  return (
    <section id="historia" className={`${sectionClass} overflow-hidden bg-[#050505]`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Resultados"
          title="Escala, distribuição e operação para sustentar o canal"
          description="O Canal Incorporações é a frente B2B da Loft dedicada a conectar incorporadoras a uma infraestrutura financeira capaz de acelerar repasse, reduzir custo e aumentar previsibilidade de caixa."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <SurfaceCard className="p-7">
            <div className="space-y-6">
              {timeline.map(([year, text]) => (
                <div key={year} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-base font-black text-white">
                    {year.slice(2)}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-orange-300">{year}</div>
                    <div className="mt-1 text-sm leading-7 text-zinc-400">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </SurfaceCard>

          <div className="space-y-6">
            <SurfaceCard className="p-7">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Canal</div>
                  <div className="mt-3 text-3xl font-black text-white">B2B para incorporadoras</div>
                  <div className="mt-3 text-sm leading-7 text-zinc-400">
                    Distribuição, operação e infraestrutura financeira para acelerar repasse e previsibilidade de caixa.
                  </div>
                </div>

                <div className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-6">
                  <div className="text-xs uppercase tracking-[0.18em] text-orange-300">Tese</div>
                  <div className="mt-3 text-3xl font-black text-white">Venda só vira valor quando vira caixa</div>
                  <div className="mt-3 text-sm leading-7 text-zinc-200/80">
                    O ganho está em comprimir prazo, reduzir atrito e aumentar aprovação antes do gargalo final.
                  </div>
                </div>
              </div>
            </SurfaceCard>

            <div className="grid gap-4 md:grid-cols-4">
              {[
                ['R$ 7B+', 'valuation'],
                ['1.2M+', 'transações'],
                ['35%', 'crescimento'],
                ['12+', 'bancos parceiros'],
              ].map(([value, label]) => (
                <SurfaceCard key={label} className="p-5 text-center">
                  <div className="text-4xl font-black text-white">{value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
                    {label}
                  </div>
                </SurfaceCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
            <div className="grid gap-4 md:grid-cols-4">
              {[
                ['R$ 7B+', 'valuation'],
                ['1.2M+', 'transações'],
                ['35%', 'crescimento'],
                ['12+', 'bancos parceiros'],
              ].map(([value, label]) => (
                <SurfaceCard key={label} className="p-5 text-center">
                  <div className="text-4xl font-black text-white">{value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
                    {label}
                  </div>
                </SurfaceCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  return (
    <section className={`${sectionClass} bg-[#080808]`}>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Bottom line"
          title="Mais caixa, menos risco, mais velocidade"
          description="O ganho aparece quando o crédito deixa de ser uma caixa-preta e passa a ser uma camada de infraestrutura da operação."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <SurfaceCard className="p-7">
            <div className="mb-5 text-xs uppercase tracking-[0.18em] text-zinc-500">
              Antes
            </div>
            <div className="space-y-4">
              {[
                ['Prazo até repasse', '45+ dias'],
                ['Previsibilidade de aprovação', 'Baixa'],
                ['Carga operacional interna', 'Alta'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-4"
                >
                  <span className="text-zinc-300">{label}</span>
                  <span className="text-lg font-bold text-zinc-500">{value}</span>
                </div>
              ))}
            </div>
          </SurfaceCard>

          <SurfaceCard className="p-7">
            <div className="mb-5 text-xs uppercase tracking-[0.18em] text-orange-300">
              Depois
            </div>
            <div className="space-y-4">
              {[
                ['Prazo até repasse', '18 dias'],
                ['Previsibilidade de aprovação', 'Alta'],
                ['Carga operacional interna', 'Assistida'],
              ].map(([label, value], i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between rounded-2xl border border-orange-500/20 bg-orange-500/10 px-4 py-4"
                >
                  <span className="text-zinc-100">{label}</span>
                  <span className="text-lg font-bold text-orange-300">{value}</span>
                </motion.div>
              ))}
            </div>
          </SurfaceCard>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ['Aceleração do ciclo financeiro', 'Menos tempo entre contrato e caixa.'],
            ['Aumento de aprovação', 'Distribuição bancária com mais aderência.'],
            ['Redução de esforço operacional', 'Menos retrabalho, mais previsibilidade.'],
          ].map(([title, subtitle], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-[#0d0d0f] p-5"
            >
              <div className="text-2xl font-black text-white">{title}</div>
              <div className="mt-2 text-sm leading-6 text-zinc-400">{subtitle}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: 'Quanto custa?',
      a: 'A estrutura pode variar conforme estágio do empreendimento, volume e escopo operacional. O desenho considera o potencial de aceleração, ganho de aprovação e redução do custo financeiro.',
    },
    {
      q: 'Funciona com qual banco?',
      a: 'A operação é multibanco e orientada por aderência. A lógica não é empurrar um único banco, mas direcionar cada caso para a alternativa com maior probabilidade e melhor resultado financeiro.',
    },
    {
      q: 'Em quanto tempo vejo resultado?',
      a: 'Os primeiros ganhos costumam aparecer rapidamente na organização documental, previsibilidade de pipeline e velocidade de resposta. O impacto financeiro cresce conforme a operação entra mais cedo na esteira.',
    },
    {
      q: 'Isso substitui meu time?',
      a: 'Não. A proposta é reduzir atrito, retrabalho e gargalos operacionais, dando ao time comercial e de crédito uma infraestrutura mais forte para converter venda em caixa.',
    },
  ];

  return (
    <section className={`${sectionClass} bg-[#050505]`}>
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Objeções comuns, respondidas de forma direta"
          description="O objetivo aqui é simples: mostrar por que a operação vale ser discutida agora, e não no fim do ciclo."
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <SurfaceCard className="p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
                    <HelpCircle size={18} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{faq.q}</div>
                    <div className="mt-3 text-base leading-7 text-zinc-400">{faq.a}</div>
                  </div>
                </div>
              </SurfaceCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProofSection = () => {
  const stats = [
    ['1.2M+', 'Transações processadas'],
    ['+R$ 10B', 'Originação de crédito'],
    ['+450 mil', 'Contratos sob gestão'],
    ['35%', 'Mais ágil na aprovação'],
  ];

  return (
    <section className="border-y border-white/5 bg-[#050505] py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map(([value, label], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl font-black tracking-tight text-orange-400 md:text-5xl">
                {value}
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.22em] text-zinc-500 md:text-xs">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-28">
      <Glow className="left-[15%] top-8 h-72 w-72 bg-orange-700/15" />
      <Glow className="right-[10%] bottom-0 h-72 w-72 bg-orange-500/10" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-8">
        <motion.div {...fadeUp}>
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Destrave o caixa do seu empreendimento
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400 md:text-2xl">
            Se a operação entrar cedo, a conversão acontece com menos atrito, mais previsibilidade e
            melhor proteção de caixa.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-9 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(255,106,0,0.35)] transition hover:bg-orange-600"
            >
              Falar com especialista <ArrowRight size={20} />
            </a>
            <a
              href="#dashboard"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-9 py-4 text-lg font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Ver cockpit da operação
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div
      id="topo"
      className="min-h-screen bg-[#050505] font-sans text-zinc-50 selection:bg-orange-500/30"
    >
<div className="flex items-center gap-3">
  <div className="text-3xl font-black tracking-tight text-white">loft</div>
  <div className="h-8 w-px bg-white/10" />
  <div>
    <div className="text-sm font-black uppercase tracking-[0.18em] text-white">
      Canal Incorporações
    </div>
    <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
      Infraestrutura de crédito imobiliário
    </div>
  </div>
</div>

          <div className="hidden items-center gap-8 lg:flex">
            <a href="#esteira" className="text-sm text-zinc-400 transition hover:text-white">
              Infraestrutura
            </a>
            <a href="#dashboard" className="text-sm text-zinc-400 transition hover:text-white">
              Ecossistema
            </a>
            <a href="#historia" className="text-sm text-zinc-400 transition hover:text-white">
              Resultados
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </nav>

      <main>
        <HeroSection />
        <SolutionSection />
        <BankNetworkSection />
        <ValueDriversSection />
        <DashboardSection />
        <StorySection />
        <TimelineSection />
        <SocialProofSection />
        <FAQSection />
        <CTASection />
      </main>

      <footer className="border-t border-white/5 bg-[#050505] py-8 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} Loft · Canal Incorporações
      </footer>
    </div>
  );
}
