import React from 'react';
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
  Zap,
} from 'lucide-react';

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

const Glow = ({ className = '' }) => (
  <div
    className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    aria-hidden="true"
  />
);

const MetricBadge = ({ label, value, tone = 'orange', className = '' }) => {
  const tones = {
    orange: 'border-orange-500/20 bg-orange-500/10 text-orange-300',
    green: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
    blue: 'border-sky-500/20 bg-sky-500/10 text-sky-300',
  };

  return (
    <div className={`rounded-2xl border px-4 py-3 backdrop-blur-md ${tones[tone]} ${className}`}>
      <div className="text-[11px] uppercase tracking-[0.18em] opacity-70">{label}</div>
      <div className="mt-1 text-lg font-bold md:text-xl">{value}</div>
    </div>
  );
};

const MiniTrendChart = () => {
  const heights = [28, 40, 36, 55, 52, 68, 74, 88];
  return (
    <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-4">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,115,22,0.08),transparent_50%,transparent)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="relative flex h-full items-end gap-2">
        {heights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 8, opacity: 0.5 }}
            whileInView={{ height: `${h}%`, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.06 }}
            className="flex-1 rounded-t-xl bg-gradient-to-t from-orange-600 via-orange-500 to-orange-300 shadow-[0_0_30px_rgba(249,115,22,0.35)]"
          />
        ))}
      </div>
      <div className="absolute left-4 top-4 text-xs uppercase tracking-[0.18em] text-zinc-500">
        Evolução de aprovação
      </div>
    </div>
  );
};

const ProcessStep = ({ title, detail, icon, active = false, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    className={`relative min-w-[220px] rounded-3xl border p-5 md:min-w-[240px] ${
      active
        ? 'border-orange-500/30 bg-orange-500/10 shadow-[0_0_40px_rgba(249,115,22,0.18)]'
        : 'border-white/10 bg-white/[0.04]'
    }`}
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-black/30">
      {icon}
    </div>
    <div className="text-lg font-bold text-white">{title}</div>
    <div className="mt-2 text-sm leading-6 text-zinc-400">{detail}</div>
  </motion.div>
);

const HeroSection = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 140]);
  const fade = useTransform(scrollY, [0, 300], [1, 0.88]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] pt-28">
      <motion.div style={{ y: bgY, opacity: fade }} className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px]" />
        <Glow className="left-[-8%] top-24 h-72 w-72 bg-orange-700/20" />
        <Glow className="right-[4%] top-[22%] h-[26rem] w-[26rem] bg-blue-700/20" />
        <Glow className="bottom-10 left-[28%] h-64 w-64 bg-orange-500/10" />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-20 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
            Tecnologia + serviços + previsibilidade
          </span>

          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
            Transforme VGV em caixa com{' '}
            <span className="bg-gradient-to-r from-orange-300 via-orange-500 to-orange-600 bg-clip-text text-transparent">
              previsibilidade
            </span>{' '}
            e velocidade
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 md:text-2xl md:leading-9">
            Plataforma multibanco com pré-análise automatizada, operação assistida e cockpit em
            tempo real para reduzir atrito, acelerar aprovação e proteger o caixa do
            empreendimento.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.35)] transition hover:bg-orange-600"
            >
              Ver a operação em ação <ArrowRight size={20} />
            </a>
            <a
              href="#esteira"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Entender a esteira
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            <MetricBadge label="Aprovação média" value="+35%" tone="orange" />
            <MetricBadge label="Operação multibanco" value="3 bancos" tone="blue" />
            <MetricBadge label="Suporte operacional" value="BPO dedicado" tone="green" />
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
                  Cockpit de Originação
                </div>
                <div className="mt-1 text-xl font-bold text-white">Empreendimento Vista Park</div>
              </div>
              <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                Em operação
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <MetricBadge label="VGV em acompanhamento" value="R$ 124M" tone="orange" />
              <MetricBadge label="Taxa de aprovação" value="72%" tone="green" />
              <MetricBadge label="Tempo até repasse" value="18 dias" tone="blue" />
              <MetricBadge label="Economia potencial" value="-18% custo financeiro" tone="orange" />
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[1.2fr_0.8fr]">
              <MiniTrendChart />

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Pipeline operacional
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    ['Pré-análise', '100%', 'bg-sky-500'],
                    ['Enquadramento', '86%', 'bg-orange-500'],
                    ['Crédito aprovado', '74%', 'bg-emerald-500'],
                    ['Registro / repasse', '58%', 'bg-orange-300'],
                  ].map(([label, value, color], i) => (
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
                          transition={{ duration: 0.9, delay: i * 0.08 }}
                          className={`h-2.5 rounded-full ${color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    Status recentes
                  </div>
                  <div className="mt-3 space-y-3">
                    {[
                      'Banco alternativo sugerido para unidade 214',
                      'Pasta documental concluída para 18 clientes',
                      'Repasse priorizado para fase pré-habite-se',
                    ].map((text) => (
                      <div key={text} className="flex items-start gap-3">
                        <CheckCircle size={16} className="mt-0.5 text-emerald-400" />
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
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              Aprovação em segundos no comparativo multibanco
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const items = [
    {
      title: 'Documentação dispersa',
      text: 'Informações quebradas entre comercial, crédito, banco e cliente geram retrabalho desde a largada.',
    },
    {
      title: 'Aprovação sem previsibilidade',
      text: 'Sem comparativo multibanco e pré-análise estruturada, o time vende sem visibilidade real da esteira.',
    },
    {
      title: 'Caixa preso até o repasse',
      text: 'Cada semana sem fluidez na operação aumenta custo financeiro e posterga conversão de VGV em caixa.',
    },
  ];

  return (
    <section className={`${sectionClass} bg-[#080808]`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="O problema"
          title="O ciclo tradicional trava o capital em pontos previsíveis"
          description="A dor não está só na aprovação. Está na quebra de continuidade entre documentação, crédito, operação e repasse."
        />

        <div className="relative mt-8">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent lg:block" />
          <div className="grid gap-6 lg:grid-cols-3">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <SurfaceCard className="h-full p-7">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-zinc-400">{item.text}</p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      Gargalo recorrente
                    </div>
                    <div className="mt-2 text-sm text-zinc-300">
                      Prazo elevado, retorno inconsistente e menor visibilidade de conversão.
                    </div>
                  </div>
                </SurfaceCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const steps = [
    {
      title: 'Lead e elegibilidade',
      detail: 'Captura estruturada de dados essenciais antes da venda avançar sem critério.',
      icon: <Building2 className="text-orange-300" size={22} />,
    },
    {
      title: 'Pasta mãe automatizada',
      detail: 'Organização documental com leitura e consolidação da base do cliente.',
      icon: <FileText className="text-sky-300" size={22} />,
      active: true,
    },
    {
      title: 'Motor multibanco',
      detail: 'Comparativo e direcionamento por aderência, taxa, prazo e probabilidade.',
      icon: <Landmark className="text-orange-300" size={22} />,
    },
    {
      title: 'BPO operacional',
      detail: 'Acompanhamento ativo de pendências, SLA e interface com comercial e cliente.',
      icon: <Smartphone className="text-emerald-300" size={22} />,
    },
    {
      title: 'Registro e repasse',
      detail: 'Operação monitorada até a conversão financeira final do empreendimento.',
      icon: <ShieldCheck className="text-orange-300" size={22} />,
    },
  ];

  return (
    <section id="esteira" className={`${sectionClass} overflow-hidden bg-[#050505]`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="A esteira"
          title="Uma operação contínua, e não apenas uma etapa de crédito"
          description="A plataforma conecta tecnologia, serviço e acompanhamento operacional em uma esteira única — do lead ao repasse."
        />

        <div className="relative mt-10 overflow-x-auto pb-4">
          <div className="absolute left-12 right-12 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-orange-500/0 via-orange-500/35 to-orange-500/0 md:block" />
          <motion.div
            initial={{ x: '-10%' }}
            whileInView={{ x: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2.8, ease: 'easeInOut' }}
            className="absolute top-1/2 hidden h-2 w-20 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-orange-400 to-transparent blur-sm md:block"
          />
          <div className="relative flex min-w-max gap-5">
            {steps.map((step, i) => (
              <ProcessStep
                key={step.title}
                title={step.title}
                detail={step.detail}
                icon={step.icon}
                active={step.active}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <SurfaceCard className="p-7">
            <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Iniciativas-chave</div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                'Pré-análise automatizada para reduzir retrabalho',
                'Comparativo multibanco antes do gargalo final',
                'BPO dedicado por projeto ou volume',
                'Monitoramento em tempo real de pendências',
                'Aceleração de conversão no pré-habite-se',
                'Camada operacional para proteger caixa e previsibilidade',
              ].map((text) => (
                <div
                  key={text}
                  className="rounded-2xl border border-white/10 bg-black/25 px-4 py-4 text-sm leading-6 text-zinc-300"
                >
                  {text}
                </div>
              ))}
            </div>
          </SurfaceCard>

          <SurfaceCard className="p-7">
            <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Onde a plataforma atua</div>
            <div className="mt-5 space-y-4">
              {[
                ['Antes da aprovação', 'estruturando documentação e elegibilidade'],
                ['Durante a aprovação', 'direcionando operação por aderência bancária'],
                ['Antes do repasse', 'priorizando unidades e removendo fricções finais'],
              ].map(([title, subtitle], i) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/15 text-sm font-bold text-orange-300">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-base font-semibold text-white">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-zinc-400">{subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </div>
    </section>
  );
};

const ValueDriversSection = () => {
  const cards = [
    {
      title: 'Pasta Mãe Automatizada',
      description:
        'Centralização documental com leitura, estruturação e preparação da base para o fluxo operacional.',
      iconWrap: 'bg-sky-500/15 text-sky-300',
      icon: <FileText size={24} />,
      demo: (
        <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
          <div className="space-y-3">
            {[
              ['RG / CNH', 'Validado'],
              ['Comprovante de renda', 'Extraído'],
              ['Matrícula / imóvel', 'Consolidado'],
              ['Pendências', '2 alertas'],
            ].map(([label, status], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-between rounded-xl bg-white/[0.04] px-3 py-3"
              >
                <span className="text-sm text-zinc-300">{label}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                  {status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Operação Assistida e Multicanal',
      description:
        'Acompanhamento ativo de pendências e comunicação estruturada entre comercial, cliente e operação.',
      iconWrap: 'bg-emerald-500/15 text-emerald-300',
      icon: <Smartphone size={24} />,
      demo: (
        <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
          <div className="space-y-3">
            {[
              ['Simulação enviada', '08:12'],
              ['Banco alternativo sugerido', '08:19'],
              ['Pendência resolvida', '08:31'],
              ['Cliente atualizado via WhatsApp', '08:40'],
            ].map(([label, time], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-sm text-zinc-300">{label}</span>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                  {time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Previsibilidade de Caixa',
      description:
        'Indicadores de prazo, aprovação e conversão para reduzir risco operacional e custo financeiro.',
      iconWrap: 'bg-orange-500/15 text-orange-300',
      icon: <BarChart3 size={24} />,
      demo: (
        <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              ['Prazo médio', '18d'],
              ['Aprovação', '72%'],
              ['Caixa convertido', '+35%'],
            ].map(([label, value], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl bg-white/[0.04] p-3 text-center"
              >
                <div className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">{label}</div>
                <div className="mt-2 text-lg font-bold text-orange-300">{value}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 flex h-24 items-end gap-2">
            {[32, 48, 44, 64, 82].map((value, i) => (
              <motion.div
                key={i}
                initial={{ height: 8 }}
                whileInView={{ height: `${value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.06 }}
                className="flex-1 rounded-t-xl bg-gradient-to-t from-orange-700 to-orange-400"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className={`${sectionClass} bg-[#080808]`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Os pilares"
          title="As alavancas que sustentam a experiência do incorporador"
          description="Tecnologia sozinha não resolve. O ganho aparece quando a automação encontra governança operacional e visibilidade financeira."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <SurfaceCard className="h-full p-7">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${card.iconWrap}`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                <p className="mt-4 min-h-[84px] text-base leading-7 text-zinc-400">
                  {card.description}
                </p>
                <div className="mt-6">{card.demo}</div>
              </SurfaceCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DashboardSection = () => {
  const banks = [
    { name: 'Itaú', rate: '71%', width: '71%' },
    { name: 'Bradesco', rate: '66%', width: '66%' },
    { name: 'Santander', rate: '74%', width: '74%' },
  ];

  const pipeline = [
    { name: 'Pré-análise', count: 182, width: '100%', color: 'bg-sky-500' },
    { name: 'Enquadramento', count: 146, width: '80%', color: 'bg-orange-500' },
    { name: 'Crédito aprovado', count: 118, width: '64%', color: 'bg-emerald-500' },
    { name: 'Registro / repasse', count: 84, width: '46%', color: 'bg-orange-300' },
  ];

  return (
    <section id="dashboard" className={`${sectionClass} bg-[#050505]`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          eyebrow="Cockpit"
          title="Controle absoluto da esteira em tempo real"
          description='Não é um mockup decorativo. É a lógica visual de uma operação que acompanha SLA, bancos, funil e eventos críticos até o caixa.'
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
              Cockpit de crédito imobiliário
            </div>
          </div>

          <div className="grid gap-6 p-5 md:p-8 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ['VGV monitorado', 'R$ 124M'],
                  ['Taxa de aprovação', '72%'],
                  ['Tempo médio até repasse', '18 dias'],
                  ['Operações críticas', '12'],
                ].map(([label, value], i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{label}</div>
                    <div className="mt-2 text-2xl font-black text-white">{value}</div>
                  </motion.div>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                        Evolução de aprovações
                      </div>
                      <div className="mt-1 text-lg font-bold text-white">
                        Últimos 6 ciclos operacionais
                      </div>
                    </div>
                    <Clock className="text-zinc-500" size={18} />
                  </div>

                  <div className="mt-6">
                    <div className="relative h-56 overflow-hidden rounded-2xl border border-white/10 bg-black/25 p-4">
                      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:30px_30px]" />
                      <div className="relative flex h-full items-end gap-3">
                        {[38, 42, 48, 58, 65, 72].map((value, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 8, opacity: 0.6 }}
                            whileInView={{ height: `${value}%`, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: i * 0.08 }}
                            className="flex flex-1 flex-col items-center justify-end gap-2"
                          >
                            <div className="w-full rounded-t-2xl bg-gradient-to-t from-orange-700 to-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.3)]" style={{ height: `${value}%` }} />
                            <span className="text-xs text-zinc-500">M{i + 1}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                    Aderência por banco
                  </div>
                  <div className="mt-1 text-lg font-bold text-white">Comparativo multibanco</div>

                  <div className="mt-6 space-y-4">
                    {banks.map((bank, i) => (
                      <div key={bank.name}>
                        <div className="mb-2 flex items-center justify-between text-sm text-zinc-300">
                          <span>{bank.name}</span>
                          <span>{bank.rate}</span>
                        </div>
                        <div className="h-3 rounded-full bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: bank.width }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: i * 0.08 }}
                            className="h-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-4 text-sm leading-6 text-orange-100">
                    Melhor banco do ciclo atual: <strong>Santander</strong> para o mix de clientes
                    enquadrados.
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Funil operacional</div>
                <div className="mt-1 text-lg font-bold text-white">Volume por etapa</div>

                <div className="mt-6 space-y-4">
                  {pipeline.map((item, i) => (
                    <div key={item.name}>
                      <div className="mb-2 flex items-center justify-between text-sm text-zinc-300">
                        <span>{item.name}</span>
                        <span>{item.count} operações</span>
                      </div>
                      <div className="h-3 rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.width }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: i * 0.07 }}
                          className={`h-3 rounded-full ${item.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Eventos críticos</div>
                <div className="mt-1 text-lg font-bold text-white">Ocorrências com ação</div>

                <div className="mt-5 space-y-3">
                  {[
                    ['Unidade 214', 'Banco alternativo sugerido', 'Agora'],
                    ['Bloco C / fase final', 'Aceleração pré-habite-se ativada', '7 min'],
                    ['Pasta documental', '18 clientes concluídos', '11 min'],
                    ['Repasse prioritário', 'Fila operacional ajustada', '22 min'],
                  ].map(([title, desc, time], i) => (
                    <motion.div
                      key={`${title}-${desc}`}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-2xl border border-white/10 bg-black/25 p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex gap-3">
                          <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10">
                            <CheckCircle size={16} className="text-emerald-400" />
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
                <div className="text-xs uppercase tracking-[0.18em] text-zinc-500">Impacto financeiro</div>
                <div className="mt-1 text-lg font-bold text-white">Proteção de caixa</div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                      Conversão estimada
                    </div>
                    <div className="mt-2 text-2xl font-black text-orange-300">+R$ 8,4M</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                      Custo evitado
                    </div>
                    <div className="mt-2 text-2xl font-black text-emerald-300">-18%</div>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-zinc-300">
                  Quanto mais cedo a operação entra, maior a previsibilidade do fluxo e menor o
                  risco de capital parado na conta da obra.
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
          title="O ganho aparece quando o crédito deixa de ser uma caixa-preta"
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
              Infraestrutura multibanco
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
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['35% mais rápido', 'na conversão de VGV em caixa'],
              ['BPO dedicado', 'para reduzir fricção operacional'],
              ['Monitoramento contínuo', 'para antecipar gargalos e agir cedo'],
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
            Seu empreendimento não pode esperar o crédito andar.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400 md:text-2xl">
            Se a operação entrar cedo, a conversão acontece com menos atrito, mais previsibilidade e
            melhor proteção de caixa.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-9 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.35)] transition hover:bg-orange-600"
            >
              Ver cockpit da operação <ArrowRight size={20} />
            </a>
            <a
              href="#topo"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-9 py-4 text-lg font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Voltar ao início
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
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-black shadow-[0_0_25px_rgba(249,115,22,0.35)]">
              <span className="text-lg font-black">L</span>
            </div>
            <div>
              <div className="text-base font-black tracking-tight text-white md:text-lg">
                Loft Incorporadoras
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                Infraestrutura de crédito imobiliário
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <a href="#esteira" className="text-sm text-zinc-400 transition hover:text-white">
              Esteira
            </a>
            <a href="#dashboard" className="text-sm text-zinc-400 transition hover:text-white">
              Dashboard
            </a>
            <a href="#dashboard" className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.08]">
              Portal do Parceiro
            </a>
          </div>
        </div>
      </nav>

      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ValueDriversSection />
        <DashboardSection />
        <TimelineSection />
        <SocialProofSection />
        <CTASection />
      </main>

      <footer className="border-t border-white/5 bg-[#050505] py-8 text-center text-sm text-zinc-600">
        © {new Date().getFullYear()} Loft Incorporadoras — Infraestrutura multibanco de crédito
        imobiliário.
      </footer>
    </div>
  );
}
