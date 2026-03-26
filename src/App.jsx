import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Landmark, BarChart3, Cpu, MessageCircle, 
  FileText, Check, Zap, AlertTriangle, ChevronRight,
  ShieldCheck, ArrowUpRight, Activity, Quote, Building2, TrendingUp
} from 'lucide-react';

// --- STYLES & UTILS ---
const bgDark = "bg-[#0a0a0a]";
const bgCard = "bg-[#141414]";
const borderSubtle = "border-[#262626]";

// --- COMPONENT: BACKGROUND GRID ---
const BackgroundGrid = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#ff6600] opacity-20 blur-[100px] will-change-transform" />
  </div>
);

// --- 1. NAVBAR ---
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#262626] px-6 py-4 will-change-transform">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="text-white font-black text-3xl tracking-tighter flex items-center">
          loft <span className="text-[#ff6600] ml-1">|</span>
        </div>
        <div className="h-6 w-px bg-white/10 mx-2" />
        <div className="text-[10px] text-[#a3a3a3] font-bold uppercase tracking-widest leading-tight">
          Canal<br/>Incorporações
        </div>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#a3a3a3]">
        <a href="#infra" className="hover:text-white transition-colors">Infraestrutura</a>
        <a href="#ecossistema" className="hover:text-white transition-colors">Ecossistema</a>
        <a href="#cases" className="hover:text-white transition-colors">Cases de Sucesso</a>
        <a href="#resultados" className="hover:text-white transition-colors">Resultados</a>
      </div>

      <button className="bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-all shadow-[0_0_20px_rgba(255,102,0,0.2)]">
        Falar com especialista
      </button>
    </div>
  </nav>
);

// --- 2. HERO SECTION ---
const HeroSection = () => {
  // Otimização: Variantes pré-definidas para evitar re-cálculos no render
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="infra" className={`relative min-h-screen pt-32 pb-20 flex items-center ${bgDark}`}>
      <BackgroundGrid />
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="space-y-8">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#ff6600]/30 bg-[#ff6600]/10 text-[#ff6600] text-[11px] font-bold tracking-widest uppercase">
            <Activity size={14} className="animate-pulse" />
            A infraestrutura dominante do crédito
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
            VGV vendido não é caixa.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6600] to-[#ff8533]">
              E isso custa caro.
            </span>
          </motion.h1>

          <motion.div variants={fadeUp} className="bg-[#ff6600]/5 border border-[#ff6600]/20 rounded-xl p-5 flex items-start gap-4 max-w-xl">
            <AlertTriangle className="text-[#ff6600] shrink-0 mt-0.5" size={20} />
            <p className="text-zinc-300 text-sm leading-relaxed">
              Semanas de atraso custam à incorporadora entre <strong>0,5% e 1% do VGV</strong> em custo financeiro. 
              Numa obra de R$50M, são <strong className="text-[#ff6600]">R$250–500K perdidos por mês.</strong>
            </p>
          </motion.div>

          <motion.p variants={fadeUp} className="text-lg text-[#a3a3a3] max-w-lg">
            A Loft transforma VGV em caixa <strong className="text-white">35% mais rápido</strong>. Conectamos vendas, documentos, bancos e capital em um único ecossistema operacional.
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-4 pt-2">
            <button className="px-8 py-4 bg-[#ff6600] text-white rounded-lg font-bold flex items-center gap-2 hover:bg-[#e65c00] transition-colors shadow-lg">
              <Zap size={18} /> Destravar caixa agora
            </button>
          </motion.div>
        </motion.div>

        {/* UI Mockup Otimizado */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} 
          className="relative h-[500px] w-full hidden lg:block"
        >
          <div className="absolute inset-0 bg-[#141414] rounded-2xl border border-[#262626] shadow-2xl overflow-hidden flex flex-col will-change-transform">
            <div className="h-12 border-b border-[#262626] bg-[#1a1a1a] flex items-center px-4 gap-2">
              <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#ff4444]" /><div className="w-2.5 h-2.5 rounded-full bg-[#ffbb00]" /><div className="w-2.5 h-2.5 rounded-full bg-[#00cc44]" /></div>
              <div className="mx-auto bg-[#111] border border-[#262626] rounded-md px-24 py-1 text-[10px] text-[#555]">loft.com.br/os</div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col gap-6 relative">
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[10px] text-[#ff6600] font-bold uppercase tracking-wider mb-1">Repasse Ativo</div>
                  <div className="text-3xl font-bold text-white">R$ 12.800.000</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Tempo Médio</div>
                  <div className="text-xl font-bold text-[#00cc44]">15 Dias</div>
                </div>
              </div>
              
              <div className="space-y-4 flex-1">
                 {['Análise de Crédito', 'Aprovação Multibanco', 'Assinatura', 'Liberação de Caixa'].map((step, i) => (
                   <div key={step} className="space-y-2">
                     <div className="flex justify-between text-xs font-medium text-[#a3a3a3]">
                       <span>{step}</span>
                       <span className={i === 3 ? "text-[#ff6600]" : ""}>{i === 3 ? "Em andamento" : "Concluído"}</span>
                     </div>
                     <div className="h-2 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ scaleX: 0 }}
                         animate={{ scaleX: i === 3 ? 0.6 : 1 }}
                         transition={{ duration: 1, delay: 0.8 + (i * 0.15), ease: "easeOut" }}
                         style={{ originX: 0 }}
                         className={`h-full ${i === 3 ? 'bg-[#ff6600] relative' : 'bg-[#333]'}`}
                       />
                     </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- 3. PIXEL-PERFECT ECOSYSTEM TABS ---
const EcosystemTabs = () => {
  const [activeId, setActiveId] = useState('aiforce');

  const tabs = [
    {
      id: 'multibanco', icon: Landmark, title: "Plataforma Multibanco", subtitle: "Um cadastro. Todos os bancos.", tag: "CORE", pillVal: "98%", pillText: "aprovação média",
      contentTitle: "Plataforma Multibanco", desc: "Um único cadastro conecta sua operação a todos os grandes bancos simultaneamente. Mais competição de taxas, maior aprovação e velocidade que nenhum banco isolado consegue oferecer.",
      checks: ["Distribuição inteligente", "Conexão simultânea multbanco", "Maximização matemática de aprovação"]
    },
    {
      id: 'portal', icon: BarChart3, title: "Portal do Parceiro", subtitle: "Dashboard completo do funil.", tag: "GESTÃO", pillVal: "100%", pillText: "de visibilidade",
      contentTitle: "Cockpit de Gestão", desc: "Transparência total sobre o funil de crédito. Dashboard inteligente com indicadores de performance e status de cada proposta, eliminando a 'caixa preta' do repasse.",
      checks: ["Visão consolidada do VGV", "Alertas de pendências documentais", "Métricas de conversão por projeto"]
    },
    {
      id: 'aiforce', icon: FileText, title: "AI Force", subtitle: "Zero erro humano.", tag: "TECNOLOGIA", pillVal: "0%", pillText: "erro de digitação",
      contentTitle: "AI Force Extraction", desc: "Extração automatizada de dados de mais de 10 tipos de documentos (CNH, Matrícula, IPTU). O que levava horas agora leva segundos, sem refação.",
      checks: ["Leitura OCR avançada", "Validação cruzada de dados", "Adequação aos padrões bancários"]
    }
  ];

  return (
    <section id="ecossistema" className={`py-32 ${bgDark}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="text-[#ff6600] text-[11px] font-bold tracking-widest uppercase mb-4">Arquitetura modular</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">O Sistema Operacional do Repasse</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-[35%] flex flex-col gap-2.5">
            {tabs.map((tab) => {
              const isActive = activeId === tab.id;
              return (
                <button
                  key={tab.id} onClick={() => setActiveId(tab.id)}
                  className={`flex items-center text-left p-5 rounded-xl border transition-all duration-200 group
                    ${isActive ? 'bg-[#ff6600] border-[#ff6600] shadow-[0_4px_20px_rgba(255,102,0,0.3)]' : 'bg-[#141414] border-[#262626] hover:border-[#404040]'}`}
                >
                  <div className={`mr-4 transition-colors ${isActive ? 'text-white' : 'text-[#ff6600]'}`}><tab.icon size={24} strokeWidth={1.5} /></div>
                  <div className="flex-1">
                    <div className={`font-bold text-[15px] mb-0.5 ${isActive ? 'text-white' : 'text-[#e5e5e5]'}`}>{tab.title}</div>
                    <div className={`text-[13px] ${isActive ? 'text-white/80' : 'text-[#737373]'}`}>{tab.subtitle}</div>
                  </div>
                  {isActive && <ArrowRight size={18} className="text-white ml-2" />}
                </button>
              );
            })}
          </div>

          <div className="lg:w-[65%]">
            <AnimatePresence mode="wait">
              {tabs.map((tab) => tab.id === activeId && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-[#141414] border border-[#262626] rounded-2xl p-10 h-full flex flex-col"
                >
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-[72px] h-[72px] rounded-2xl bg-[#ff6600] flex items-center justify-center shrink-0">
                      <tab.icon size={36} className="text-white" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col justify-center pt-1">
                      <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold tracking-widest bg-[#2a1708] text-[#ff6600] uppercase mb-2 w-max">{tab.tag}</div>
                      <h3 className="text-3xl font-extrabold text-white">{tab.contentTitle}</h3>
                    </div>
                  </div>

                  <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#333] bg-[#1a1a1a] w-max mb-8">
                    <span className="text-[#ff6600] font-bold mr-2">{tab.pillVal}</span>
                    <span className="text-[#a3a3a3] text-sm">{tab.pillText}</span>
                  </div>

                  <p className="text-[17px] leading-relaxed text-[#a3a3a3] mb-10">{tab.desc}</p>

                  <div className="space-y-4 mt-auto">
                    {tab.checks.map((check, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-[22px] h-[22px] rounded-full bg-[#2a1708] flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} strokeWidth={3} className="text-[#ff6600]" />
                        </div>
                        <span className="text-[#e5e5e5] text-[15px]">{check}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 4. MULTIBANK HUB (Otimizado) ---
const HubSection = () => {
  const banks = ['Itaú', 'Bradesco', 'Santander', 'Caixa', 'Inter', 'BRB'];
  
  return (
    <section className={`py-32 ${bgDark} relative overflow-hidden border-t border-[#262626]`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Conectividade Total. <br/>Acesso Simultâneo.</h2>
          <p className="text-[#a3a3a3] text-lg">Um único input roteado de forma inteligente para todo o sistema financeiro.</p>
        </div>

        <div className="relative h-[400px] flex items-center justify-center">
          <div className="absolute z-20 w-32 h-32 bg-gradient-to-br from-[#ff8533] to-[#cc5200] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,102,0,0.4)] border-[4px] border-[#1a1a1a]">
            <span className="text-white font-black text-3xl tracking-tighter">loft</span>
          </div>

          {banks.map((bank, index) => {
            const angle = (index * 360) / banks.length;
            const radius = 160;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <React.Fragment key={bank}>
                <div 
                  className="absolute z-0 w-full h-[2px] origin-left opacity-20"
                  style={{
                    left: '50%', top: '50%', width: radius, transform: `rotate(${angle}deg)`,
                    background: 'linear-gradient(90deg, #ff6600 0%, transparent 100%)'
                  }}
                />
                <motion.div
                  className="absolute z-0 w-[4px] h-[4px] bg-[#ff6600] rounded-full shadow-[0_0_8px_#ff6600] will-change-transform"
                  style={{ left: '50%', top: '50%' }}
                  animate={{ 
                    x: [0, Math.cos((angle * Math.PI) / 180) * radius], 
                    y: [0, Math.sin((angle * Math.PI) / 180) * radius],
                    opacity: [1, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3, ease: "linear" }}
                />

                <div
                  className="absolute z-10 flex flex-col items-center justify-center bg-[#141414] border border-[#262626] rounded-xl w-[100px] h-[50px] shadow-lg hover:border-[#ff6600] transition-colors cursor-default"
                  style={{ left: `calc(50% + ${x}px - 50px)`, top: `calc(50% + ${y}px - 25px)` }}
                >
                  <span className="text-white text-xs font-bold">{bank}</span>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

// --- 5. NEW: CASE STUDIES SECTION ---
const CaseStudiesSection = () => {
  const cases = [
    {
      company: "Construtora Atlântico",
      metric: "R$ 45M", metricLabel: "VGV Destravado",
      quote: "A previsibilidade que a Loft trouxe mudou o nosso fluxo de caixa. O repasse que levava 60 dias hoje acontece em 15.",
      icon: TrendingUp
    },
    {
      company: "Grupo Vértice",
      metric: "94%", metricLabel: "Taxa de Aprovação",
      quote: "Com o motor multibanco, paramos de perder vendas no fim da jornada. A inteligência de crédito salva nossos contratos.",
      icon: ShieldCheck
    },
    {
      company: "Nova Era Incorporações",
      metric: "-2.5%", metricLabel: "Custo Financeiro",
      quote: "Reduzimos drasticamente o custo da obra ao antecipar as chaves. A esteira digital tirou todo o peso operacional do nosso time.",
      icon: Building2
    }
  ];

  return (
    <section id="cases" className={`py-32 bg-[#111] relative border-t border-[#262626]`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 md:flex md:items-end justify-between"
        >
          <div>
            <div className="text-[#ff6600] text-[11px] font-bold tracking-widest uppercase mb-4">Resultados Reais</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">Quem já acelerou<br/>o repasse</h2>
          </div>
          <p className="text-[#a3a3a3] max-w-sm mt-4 md:mt-0">
            Incorporadoras líderes de mercado já utilizam nossa infraestrutura para maximizar o lucro de seus empreendimentos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#1a1a1a] border border-[#262626] rounded-2xl p-8 flex flex-col hover:border-[#ff6600]/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6600]/5 rounded-bl-full translate-x-10 -translate-y-10 group-hover:bg-[#ff6600]/10 transition-colors" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#262626] flex items-center justify-center text-white">
                  <item.icon size={20} />
                </div>
                <div className="font-bold text-white text-sm">{item.company}</div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-black text-[#ff6600]">{item.metric}</div>
                <div className="text-xs font-bold text-[#a3a3a3] uppercase tracking-wider mt-1">{item.metricLabel}</div>
              </div>

              <div className="mt-auto relative">
                <Quote size={24} className="text-[#333] absolute -top-2 -left-2 z-0" />
                <p className="text-[15px] text-[#e5e5e5] relative z-10 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 6. NUMBERS SECTION ---
const NumbersSection = () => {
  const stats = [
    { val: "1.2M", label: "Transações", sub: "processadas" },
    { val: "+R$10B", label: "Originação", sub: "de crédito gerado", highlight: true },
    { val: "+450K", label: "Contratos", sub: "sob gestão" },
    { val: "26", label: "Estados", sub: "presença nacional" },
  ];

  return (
    <section id="resultados" className={`py-24 bg-[#141414] border-t border-b border-[#262626]`}>
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#262626]">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <div className={`text-4xl md:text-5xl font-black tracking-tighter mb-2 ${stat.highlight ? 'text-[#ff6600]' : 'text-white'}`}>
                {stat.val}
              </div>
              <div className="text-[13px] font-bold text-[#e5e5e5] uppercase tracking-widest">{stat.label}</div>
              <div className="text-[12px] text-[#737373] mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// --- 7. FINAL CTA ---
const CTASection = () => (
  <section className={`py-32 ${bgDark} relative overflow-hidden`}>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#ff6600]/10 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none" />
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-6 text-center relative z-10"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
        Seu empreendimento não pode esperar o crédito andar.
      </h2>
      <p className="text-xl text-[#a3a3a3] mb-12 max-w-2xl mx-auto">
        Transformar VGV em caixa 35% mais rápido protege a margem, reduz o custo de capital e garante o seu lucro planejado.
      </p>
      <button className="px-10 py-5 bg-[#ff6600] text-white rounded-xl font-bold text-lg hover:bg-[#e65c00] transition-all shadow-[0_0_30px_rgba(255,102,0,0.3)] hover:shadow-[0_0_40px_rgba(255,102,0,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto">
        Agendar diagnóstico gratuito <ArrowUpRight size={20} />
      </button>
    </motion.div>
  </section>
);

// --- MAIN APP ---
export default function App() {
  return (
    <div className="font-sans bg-[#0a0a0a] min-h-screen text-zinc-50 selection:bg-[#ff6600]/30 selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <EcosystemTabs />
        <HubSection />
        <CaseStudiesSection />
        <NumbersSection />
        <CTASection />
      </main>
      <footer className="bg-[#0a0a0a] py-10 border-t border-[#262626] text-center">
         <div className="text-white font-black text-2xl tracking-tighter mb-2">loft</div>
         <p className="text-[#737373] text-[13px]">© {new Date().getFullYear()} Loft Canal Incorporações. Infraestrutura de crédito.</p>
      </footer>
    </div>
  );
}
