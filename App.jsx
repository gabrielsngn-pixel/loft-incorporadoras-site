import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart3, Zap, FileText, CheckCircle, Clock, ShieldCheck, Building, Building2, Landmark, Smartphone } from 'lucide-react';

// --- REUSABLE COMPONENTS ---

const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.01 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    {children}
  </motion.div>
);

// --- SECTIONS ---

// 1. HERO SECTION
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Animated Background Dashboard Elements */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-32 bg-orange-600/10 rounded-xl blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating Metric Card */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[15%] bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md hidden lg:block"
        >
          <div className="text-xs text-zinc-400 mb-1">VGV Convertido</div>
          <div className="text-xl font-bold text-orange-400">+ R$ 10 Bilhões</div>
        </motion.div>

        {/* Floating Approval Card */}
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[10%] bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md hidden lg:block"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            <span className="text-sm font-medium text-white">Aprovação em 15s</span>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6 tracking-wide">
            A infraestrutura definitiva para incorporadoras
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Transforme VGV em caixa com <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">previsibilidade e velocidade</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-400 mb-10 max-w-3xl mx-auto font-light">
            Tecnologia, operação e inteligência de crédito integradas em uma única plataforma multibanco.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-500 text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Falar com especialista <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              Ver como funciona
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 2. PROBLEM SECTION (Animated Pipeline Breaking)
const ProblemSection = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">O ciclo tradicional trava o seu capital</h2>
        </div>

        {/* Animated flow breaking */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
          {/* Path Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-800 -z-10 hidden md:block" />
          
          {['Burocracia Extrema', 'Demora na Aprovação', 'Capital Travado'].map((text, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 }}
              className="bg-zinc-900 border border-red-500/20 rounded-xl p-6 w-full md:w-1/3 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-red-500/5 animate-pulse" />
              <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-zinc-300">{text}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 3. SOLUTION (ECOSYSTEM DIAGRAM)
const SolutionSection = () => {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A central nervosa do crédito imobiliário</h2>
          <p className="text-xl text-zinc-400">Um único cadastro. Múltiplos bancos. Resposta instantânea.</p>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 h-[500px]">
          {/* Animated Connecting Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
             <motion.path 
                d="M 200 250 L 500 250" 
                stroke="rgba(249,115,22,0.3)" 
                strokeWidth="2" 
                fill="none" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
             />
             <motion.path 
                d="M 500 250 L 800 150 M 500 250 L 800 250 M 500 250 L 800 350" 
                stroke="rgba(249,115,22,0.3)" 
                strokeWidth="2" 
                fill="none" 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
             />
          </svg>

          {/* Dev Node */}
          <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="z-10 bg-zinc-900 border border-white/10 p-6 rounded-2xl flex flex-col items-center">
            <Building2 className="text-zinc-400 mb-3" size={40} />
            <span className="text-white font-medium">Incorporadora</span>
          </motion.div>

          {/* Platform Hub */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0px rgba(249,115,22,0)", "0 0 40px rgba(249,115,22,0.5)", "0 0 0px rgba(249,115,22,0)"] }} 
            transition={{ duration: 3, repeat: Infinity }}
            className="z-10 bg-gradient-to-br from-orange-500 to-orange-700 p-8 rounded-full border border-orange-400 shadow-2xl"
          >
            <Smartphone className="text-white" size={48} />
          </motion.div>

          {/* Banks Node */}
          <div className="z-10 flex flex-col gap-6">
            {['Itaú', 'Bradesco', 'Santander'].map((bank, i) => (
              <motion.div 
                key={bank}
                animate={{ x: [-5, 5, -5] }} 
                transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                className="bg-zinc-900 border border-white/10 px-8 py-4 rounded-xl flex items-center gap-3"
              >
                <Landmark className="text-zinc-400" size={24} />
                <span className="text-white font-medium">{bank}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. VALUE DRIVERS
const ValueDriversSection = () => {
  return (
    <section className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Tecnologia */}
          <GlassCard>
            <div className="h-12 w-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
              <FileText className="text-blue-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Force</h3>
            <p className="text-zinc-400 mb-6">Extração automática de dados de +10 tipos de documentos. Eliminação total de erro humano.</p>
            {/* Micro animation: scanning doc */}
            <div className="h-32 bg-black/50 rounded-lg border border-white/10 relative overflow-hidden flex items-center justify-center">
              <div className="w-16 h-20 bg-white/10 rounded border border-white/20 relative">
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" 
                />
              </div>
            </div>
          </GlassCard>

          {/* Card 2: Serviços */}
          <GlassCard>
            <div className="h-12 w-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <Smartphone className="text-green-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Assistente 24/7</h3>
            <p className="text-zinc-400 mb-6">Simulações completas em menos de 15 segundos via WhatsApp com comparativo multbanco.</p>
            {/* Micro animation: WhatsApp style chat */}
            <div className="h-32 bg-black/50 rounded-lg border border-white/10 p-4 flex flex-col gap-2 overflow-hidden">
              <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-zinc-800 self-start p-2 rounded-lg text-xs text-white">Simula pra mim?</motion.div>
              <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 }} className="bg-green-600/20 text-green-400 self-end p-2 rounded-lg text-xs border border-green-500/20">Aprovado! Taxa 8.8%</motion.div>
            </div>
          </GlassCard>

          {/* Card 3: Eficiência */}
          <GlassCard>
            <div className="h-12 w-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="text-orange-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Eficiência Financeira</h3>
            <p className="text-zinc-400 mb-6">Transforme VGV em caixa 35% mais rápido, protegendo a sua margem e acelerando o giro.</p>
            {/* Micro animation: Chart going up */}
            <div className="h-32 bg-black/50 rounded-lg border border-white/10 flex items-end gap-2 p-4 justify-center">
              {[40, 60, 45, 80, 100].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: "10%" }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="w-8 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-sm"
                />
              ))}
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};

// 5. LIVE DASHBOARD SECTION
const DashboardSection = () => {
  return (
    <section className="py-32 bg-[#050505] relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Controle absoluto em tempo real</h2>
          <p className="text-xl text-zinc-400">O cockpit que elimina a "caixa preta" do financiamento.</p>
        </div>

        {/* Product UI Mockup */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-white/10 bg-[#111] overflow-hidden shadow-2xl"
        >
          {/* Browser Header */}
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          {/* Dashboard Body */}
          <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-white font-semibold">Funil de Crédito</h4>
                  <p className="text-zinc-500 text-sm">Atualizado em tempo real</p>
                </div>
              </div>
              {/* Funnel Bars */}
              <div className="space-y-4">
                {[
                  { label: "Análise", val: "100%", width: "100%", color: "bg-blue-500" },
                  { label: "Aprovação", val: "85%", width: "85%", color: "bg-orange-500" },
                  { label: "Desembolso", val: "72%", width: "72%", color: "bg-green-500" }
                ].map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium text-zinc-400">
                      <span>{item.label}</span>
                      <span>{item.val}</span>
                    </div>
                    <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.width }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className={`h-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Sidebar Status */}
            <div className="bg-white/5 rounded-xl border border-white/5 p-6">
              <h4 className="text-white font-semibold mb-4">Status Recentes</h4>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle size={14} className="text-green-500" />
                    </div>
                    <div>
                      <div className="text-sm text-white font-medium">Contrato Assinado</div>
                      <div className="text-xs text-zinc-500">Unidade {400 + i} • Agora</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 6. PRE-HABITE-SE ACCELERATION
const TimelineSection = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">O Impacto no Bottom Line</h2>
          <p className="text-xl text-zinc-400">Ciclo 35% mais rápido comparado ao modelo tradicional.</p>
        </div>

        <div className="space-y-12 relative">
          {/* Traditional Flow */}
          <div>
            <div className="text-sm font-semibold text-zinc-500 mb-2 uppercase tracking-wider">Ciclo Tradicional</div>
            <div className="h-16 w-full bg-zinc-900 rounded-full flex overflow-hidden border border-white/5">
               <div className="w-[80%] bg-zinc-700/50 flex items-center px-6 text-zinc-400 text-sm border-r border-zinc-800">Custo de Capital Elevado / VGV to Cash Lento</div>
               <div className="w-[20%] bg-zinc-800 flex items-center px-6 text-zinc-500 text-sm">Lucro Realizado (Atrasado)</div>
            </div>
          </div>

          {/* Platform Flow */}
          <div>
            <div className="text-sm font-semibold text-orange-500 mb-2 uppercase tracking-wider">Infraestrutura Multibanco</div>
            <div className="h-16 w-full bg-zinc-900 rounded-full flex overflow-hidden border border-orange-500/20 shadow-[0_0_20px_rgba(249,115,22,0.1)]">
               <motion.div 
                 initial={{ width: "80%" }}
                 whileInView={{ width: "50%" }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="bg-gradient-to-r from-orange-600 to-orange-500 flex items-center px-6 text-white text-sm font-medium border-r border-orange-700"
               >
                 Custo Reduzido / 35% mais rápido
               </motion.div>
               <motion.div 
                 initial={{ width: "20%" }}
                 whileInView={{ width: "50%" }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="bg-green-600/20 flex items-center px-6 text-green-400 font-medium text-sm"
               >
                 Lucro Garantido (Antecipado)
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. SOCIAL PROOF
const SocialProofSection = () => {
  return (
    <section className="py-20 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "1.2M+", label: "Transações Processadas" },
            { value: "+R$ 10B", label: "Originação de Crédito" },
            { value: "+450 MIL", label: "Contratos sob Gestão" },
            { value: "35%", label: "Mais Ágil na Aprovação" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-400 font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 8. FINAL CTA
const CTASection = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Seu empreendimento não pode esperar o crédito andar.
        </h2>
        <p className="text-xl text-zinc-400 mb-12">
          O futuro da sua liquidez começa agora. Deixe a infraestrutura trabalhar para o seu crescimento.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-orange-500 text-white rounded-full font-bold text-xl hover:bg-orange-600 transition-colors shadow-[0_0_30px_rgba(249,115,22,0.5)]"
        >
          Agendar conversa de 15 minutos
        </motion.button>
      </div>
    </section>
  );
};

// MAIN APP CONTAINER
export default function App() {
  return (
    <div className="font-sans bg-[#050505] min-h-screen text-zinc-50 selection:bg-orange-500/30">
      {/* Optional: Add a smooth fixed navbar here */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-2xl tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
             <span className="text-black font-black">L</span>
          </div>
          Infra
        </div>
        <button className="text-sm font-medium bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-full">
          Portal do Parceiro
        </button>
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
      
      <footer className="py-8 text-center text-zinc-600 text-sm bg-[#050505]">
        © {new Date().getFullYear()} Plataforma Multibanco de Crédito. Todos os direitos reservados.
      </footer>
    </div>
  );
}