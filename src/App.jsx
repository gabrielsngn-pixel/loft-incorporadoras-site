import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle,
  CircleDollarSign,
  Clock,
  Cpu,
  FileText,
  Landmark,
  LayoutDashboard,
  MessageCircle,
  TrendingUp,
  BadgeCheck,
  ChevronRight,
  Wallet,
  ArrowDownToLine,
  Plus,
  Minus,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Vi%20a%20p%C3%A1gina%20do%20Canal%20Incorpora%C3%A7%C3%B5es%20da%20Loft%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20acelerar%20o%20caixa%20do%20meu%20empreendimento.';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: 'easeOut' },
};

const sectionClass = 'relative py-28 md:py-32 border-t border-white/5';

const SurfaceCard = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.01 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] ${className}`}
  >
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
    {children}
  </motion.div>
);

const Glow = ({ className = '' }) => (
  <div
    className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    aria-hidden="true"
  />
);

const SectionHeader = ({ eyebrow, title, description, center = true }) => (
  <motion.div
    {...fadeUp}
    className={`${center ? 'text-center mx-auto' : ''} max-w-4xl mb-14 md:mb-16`}
  >
    {eyebrow ? (
      <span className="mb-5 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
        {eyebrow}
      </span>
    ) : null}
    <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
    {description ? (
      <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-zinc-400 md:text-xl">
        {description}
      </p>
    ) : null}
  </motion.div>
);

const MetricBadge = ({ label, value, tone = 'orange', className = '' }) => {
  const tones = {
    orange: 'border-orange-500/20 bg-orange-500/10 text-orange-300',
    green: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
    white: 'border-white/10 bg-white/[0.04] text-white',
  };

  return (
    <div className={`rounded-2xl border px-4 py-3 backdrop-blur-md ${tones[tone]} ${className}`}>
      <div className="text-[11px] uppercase tracking-[0.18em] opacity-70">{label}</div>
      <div className="mt-1 text-lg font-bold md:text-xl">{value}</div>
    </div>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 140]);
  const fade = useTransform(scrollY, [0, 300], [1, 0.88]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] pt-28">
      <motion.div style={{ y: bgY, opacity: fade }} className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:36px_36px]" />
        <Glow className="left-[-8%] top-24 h-72 w-72 bg-orange-700/20" />
        <Glow className="right-[4%] top-[22%] h-[26rem] w-[26rem] bg-orange-600/12" />
        <Glow className="bottom-10 left-[28%] h-64 w-64 bg-orange-500/10" />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-20 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
            Canal Incorporações · Infraestrutura de Crédito
          </span>

          <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.92] tracking-tight text-white md:text-7xl">
            VGV vendido não é caixa.
            <br />
            <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              E isso está custando caro.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 md:text-2xl md:leading-9">
            A Loft conecta venda, documentação, bancos e operação em uma infraestrutura única para
            reduzir custo financeiro, acelerar repasse e devolver previsibilidade ao caixa do
            empreendimento.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.35)] transition hover:bg-orange-600"
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

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            <MetricBadge label="Velocidade" value="+35%" tone="orange" />
            <MetricBadge label="Aprovação" value="98%" tone="white" />
            <MetricBadge label="Custo" value="-3 p.p." tone="white" />
            <MetricBadge label="Resultado" value="7 dias" tone="white" />
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
                  Loft OS · Capital Flow
                </div>
                <div className="mt-1 text-xl font-bold text-white">Empreendimento Vista Park</div>
              </div>
              <div className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-orange-300">
                Operação ativa
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <MetricBadge label="VGV monitorado" value="R$ 124M" tone="orange" />
              <MetricBadge label="Aprovação média" value="98%" tone="white" />
              <MetricBadge label="Prazo médio" value="18 dias" tone="white" />
              <MetricBadge label="Caixa destravado" value="+R$ 8,4M" tone="orange" />
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Evolução de aprovação
                </div>
                <div className="mt-4 flex h-48 items-end gap-2">
                  {[36, 42, 48, 58, 69, 78].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 8 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.85, delay: i * 0.07 }}
                      className="flex-1 rounded-t-2xl bg-gradient-to-t from-orange-700 to-orange-400 shadow-[0_0_26px_rgba(255,106,0,0.28)]"
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Fluxo financeiro
                </div>
                <div className="mt-4 space-y-4">
                  {[
                    ['Venda contratada', '100%'],
                    ['Dossiê estruturado', '86%'],
                    ['Crédito aprovado', '71%'],
                    ['Repasse / caixa', '58%'],
                  ].map(([label, value], i) => (
                    <div key={label}>
                      <div className="mb-1 flex items-center justify-between text-xs text-zinc-400">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: value }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.85, delay: i * 0.07 }}
                          className="h-2.5 rounded-full bg-gradient-to-r from-orange-600 to-orange-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    Eventos recentes
                  </div>
                  <div className="mt-3 space-y-3">
                    {[
                      'Banco alternativo sugerido para unidade 214',
                      'Pasta documental concluída para 18 clientes',
                      'Fila de repasse acelerada no pré-habite-se',
                    ].map((text) => (
                      <div key={text} className="flex items-start gap-3">
                        <CheckCircle size={16} className="mt-0.5 text-orange-400" />
                        <span className="text-sm leading-6 text-zinc-300">{text}</span>
                      </div>
                    ))}
                  </div>
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
              Capital travado custa caro. Fluxo devolve caixa.
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
          description="Um sistema operacional que conecta venda, documentação, bancos e caixa em uma jornada contínua — eliminando gargalos entre contrato e repasse."
        />

        <div className="relative mt-14">
          <div className="absolute left-[6%] right-[6%] top-14 hidden h-px bg-gradient-to-r from-orange-500/0 via-orange-500/45 to-orange-500/0 lg:block" />

          <div className="grid gap-5 lg:grid-cols-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="relative"
              >
                <div className="mb-5 flex justify-center">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${
                      step.active
                        ? 'border-orange-500/40 bg-orange-500 text-black shadow-[0_0_35px_rgba(249,115,22,0.35)]'
                        : 'border-white/10 bg-white/[0.04]'
                    }`}
                  >
                    {step.icon}
                  </div>
                </div>

                {i < steps.length - 1 ? (
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
              ['7 dias', 'ganho visível'],
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
    { name: 'Itaú', x: '50%', y: '8%' },
    { name: 'Bradesco', x: '78%', y: '26%' },
    { name: 'Santander', x: '78%', y: '66%' },
    { name: 'Caixa', x: '50%', y: '84%' },
    { name: 'Inter', x: '22%', y: '66%' },
    { name: 'BRB', x: '22%', y: '26%' },
  ];

  return (
    <section className={`${sectionClass} overflow-hidden bg-[#080808]`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Distribuição"
          title="Conectado aos principais bancos do Brasil"
          description="Não é só integração. É capacidade real de roteamento, competição de taxa e direcionamento por aderência para aumentar aprovação e reduzir custo."
        />

        <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(255,106,0,0.12),transparent_35%),#0c0c0e] p-8 md:p-12">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />

          <div className="relative mx-auto h-[520px] max-w-5xl">
            {banks.map((bank, i) => (
              <motion.div
                key={bank.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="absolute"
                style={{ left: bank.x, top: bank.y, transform: 'translate(-50%, -50%)' }}
              >
                <div className="flex min-w-[150px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 text-lg font-bold text-white shadow-[0_0_25px_rgba(0,0,0,0.35)]">
                  {bank.name}
                </div>
              </motion.div>
            ))}

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 520" fill="none">
              {[
                ['500', '260', '500', '72'],
                ['500', '260', '780', '155'],
                ['500', '260', '780', '344'],
                ['500', '260', '500', '447'],
                ['500', '260', '220', '344'],
                ['500', '260', '220', '155'],
              ].map((line, i) => (
                <motion.path
                  key={i}
                  d={`M ${line[0]} ${line[1]} C ${line[0]} ${line[1]}, ${(Number(line[0]) + Number(line[2])) / 2} ${(Number(line[1]) + Number(line[3])) / 2}, ${line[2]} ${line[3]}`}
                  stroke="rgba(255,106,0,0.55)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0.3 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.08 }}
                />
              ))}
            </svg>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex h-36 w-36 items-center justify-center rounded-full border border-orange-400/40 bg-orange-500 shadow-[0_0_60px_rgba(255,106,0,0.45)]">
                <div className="text-center">
                  <div className="text-xl font-black text-black">Loft</div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/70">
                    Multibanco
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

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
        'Um único cadastro conecta sua operação aos grandes bancos simultaneamente. Mais competição de taxas, maior aprovação e velocidade que nenhum banco isolado entrega.',
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
          description='Um cockpit para acompanhar taxa de aprovação, pipeline, tempo, gargalos e impacto de caixa sem depender de leitura manual do processo.'
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
                    <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{label}</div>
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
                    Melhor momento da operação: agir antes do repasse. É onde a plataforma comprime prazo e devolve previsibilidade ao caixa.
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
                        <div className="text-xs uppercase tracking-[0.16em] text-zinc-500">{time}</div>
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
                  O ganho não vem só da aprovação. Vem da compressão do ciclo entre venda e caixa, reduzindo o capital parado na conta da obra.
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
          eyebrow="História"
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
            <SurfaceCard className="overflow-hidden p-0">
              <div className="h-[320px] bg-[linear-gradient(135deg,rgba(255,106,0,0.18),rgba(255,255,255,0.02))] p-8">
                <div className="grid h-full grid-cols-3 gap-4">
                  <div className="rounded-3xl border border-white/10 bg-black/25" />
                  <div className="rounded-3xl border border-white/10 bg-black/25" />
                  <div className="rounded-3xl border border-white/10 bg-black/25" />
                  <div className="col-span-2 rounded-3xl border border-white/10 bg-black/25" />
                  <div className="rounded-3xl border border-white/10 bg-orange-500/20" />
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

const TimelineSection = () => {
  return (
    <section className={`${sectionClass} bg-[#080808]`}>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Resultado"
          title="Mais caixa, menos risco, mais velocidade"
          description="A lógica não é só aprovar mais. É encurtar ciclo, reduzir atrito e transformar VGV em caixa com mais previsibilidade."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <SurfaceCard className="p-7">
            <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Modelo tradicional</div>
            <div className="mt-5 space-y-4">
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
            <div className="text-xs uppercase tracking-[0.18em] text-orange-300">
              Infraestrutura Loft
            </div>
            <div className="mt-5 space-y-4">
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

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-[#0d0d0f] p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              ['35%', 'aceleração do ciclo financeiro'],
              ['98%', 'aumento de aprovação'],
              ['-3 p.p.', 'redução do custo financeiro'],
              ['Menos esforço', 'operação assistida no funil'],
            ].map(([title, subtitle], i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="text-2xl font-black text-white">{title}</div>
                <div className="mt-2 text-sm leading-6 text-zinc-400">{subtitle}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, open, onClick }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03]">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-lg font-bold text-white">{question}</span>
        <span className="text-orange-400">{open ? <Minus size={20} /> : <Plus size={20} />}</span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: open ? 'auto' : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-base leading-7 text-zinc-400">{answer}</div>
      </motion.div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Quanto custa?',
      a: 'O modelo varia conforme escopo operacional, volume e desenho da operação. O ponto principal é que a conversa não é sobre custo isolado, e sim sobre retorno: menos capital parado, menor atrito operacional e mais previsibilidade de caixa.',
    },
    {
      q: 'Funciona com qual banco?',
      a: 'A operação é estruturada para trabalhar com múltiplas instituições e direcionar cada fluxo por aderência. O objetivo não é depender de um único banco, e sim maximizar aprovação e competitividade de taxa.',
    },
    {
      q: 'Em quanto tempo vejo resultado?',
      a: 'Depende do estágio do empreendimento e da maturidade da operação atual, mas os primeiros ganhos normalmente aparecem rápido na organização do fluxo, na visibilidade das pendências e na velocidade de avanço da esteira.',
    },
    {
      q: 'Isso substitui minha operação interna?',
      a: 'Não necessariamente. A Loft pode complementar, estruturar ou acelerar a operação já existente, reduzindo gargalos entre comercial, documentação, crédito, banco e repasse.',
    },
  ];

  return (
    <section className={`${sectionClass} bg-[#050505]`}>
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Objeções comuns, respostas diretas"
          description="A decisão costuma travar nas mesmas perguntas. Melhor tratá-las com clareza."
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              question={faq.q}
              answer={faq.a}
              open={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
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
    ['+450 mil',
