import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Landmark, BarChart3, Cpu, MessageCircle, 
  FileText, Check, Zap, AlertTriangle, ChevronRight,
  ShieldCheck, ArrowUpRight, Activity
} from 'lucide-react';

// --- STYLES & UTILS ---
const bgDark = "bg-[#0a0a0a]";
const bgCard = "bg-[#141414]";
const borderSubtle = "border-[#262626]";
const textMuted = "text-[#a3a3a3]";

// --- COMPONENT: BACKGROUND GRID ---
const BackgroundGrid = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-500 opacity-20 blur-[100px]" />
  </div>
);

// --- 1. NAVBAR ---
const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="text-white font-black text-3xl tracking-tighter flex items-center">
          loft <span className="text-orange-500 ml-1">|</span>
        </div>
        <div className="h-6 w-px bg-white/10 mx-2" />
        <div className="text-[10px] text-[#a3a3a3] font-bold uppercase tracking-widest leading-tight">
          Canal<br/>Incorporações
        </div>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#a3a3a3]">
        <a href="#" className="hover:text-white transition-colors">Infraestrutura</a>
        <a href="#" className="hover:text-white transition-colors">Ecossistema</a>
        <a href="#" className="hover:text-white transition-colors">Resultados</a>
        <a href="#" className="hover:text-white transition-colors">Como Funciona</a>
      </div>

      <button className="bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-all shadow-[0_0_20px_rgba(255,102,0,0.2)]">
        Falar com especialista
      </button>
    </div>
  </nav>
);

// --- 2. HERO SECTION ---
const HeroSection = () => (
  <section className={`relative min-h-screen pt-32 pb-20 flex items-center ${bgDark}`}>
    <BackgroundGrid />
    <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#ff6600]/30 bg-[#ff6600]/10 text-[#ff6600] text-[11px] font-bold tracking-widest uppercase">
          <Activity size={14} className="animate-pulse" />
          A infraestrutura dominante do crédito
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
          VGV vendido não é caixa.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6600] to-[#ff8533]">
            E isso custa caro.
          </span>
        </h1>

        <div className="bg-[#ff6600]/5 border border-[#ff6600]/20 rounded-xl p-5 flex items-start gap-4 max-w-xl">
          <AlertTriangle className="text-[#ff6600] shrink-0 mt-0.5" size={20} />
          <p className="text-zinc-300 text-sm leading-relaxed">
            Semanas de atraso custam à incorporadora entre <strong>0,5% e 1% do VGV</strong> em custo financeiro. 
            Numa obra de R$50M, são <strong className="text-[#ff6600]">R$250–500K perdidos por mês.</strong>
          </p>
        </div>

        <p className="text-lg text-[#a3a3a3] max-w-lg">
          A Loft transforma VGV em caixa <strong className="text-white">35% mais rápido</strong>. Conectamos vendas, documentos, bancos e capital em um único ecossistema operacional.
        </p>

        <div className="flex gap-4 pt-2">
          <button className="px-8 py-4 bg-[#ff6600] text-white rounded-lg font-bold flex items-center gap-2 hover:bg-[#e65c00] transition-colors">
            <Zap size={18} /> Destravar caixa agora
          </button>
        </div>
      </motion.div>

      {/* Abstract Tech Visual */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative h-[500px] w-full hidden lg:block">
        <div className="absolute inset-0 bg-[#141414] rounded-2xl border border-[#262626] shadow-2xl overflow-hidden flex flex-col">
          {/* Header Mockup */}
          <div className="h-12 border-b border-[#262626] bg-[#1a1a1a] flex items-center px-4 gap-2">
            <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-[#ff4444]" /><div className="w-2.5 h-2.5 rounded-full bg-[#ffbb00]" /><div className="w-2.5 h-2.5 rounded-full bg-[#00cc44]" /></div>
            <div className="mx-auto bg-[#111] border border-[#262626] rounded-md px-24 py-1 text-[10px] text-[#555]">loft.com.br/os</div>
          </div>
          {/* Body Mockup */}
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
            
            {/* Animated Progress Bars */}
            <div className="space-y-4 flex-1">
               {['Análise de Crédito', 'Aprovação Multibanco', 'Assinatura', 'Liberação de Caixa'].map((step, i) => (
                 <div key={step} className="space-y-2">
                   <div className="flex justify-between text-xs font-medium text-[#a3a3a3]">
                     <span>{step}</span>
                     <span className={i === 3 ? "text-[#ff6600]" : ""}>{i === 3 ? "Em andamento" : "Concluído"}</span>
                   </div>
                   <div className="h-2 w-full bg-[#1a1a1a] rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: i === 3 ? "60%" : "100%" }}
                       transition={{ duration: 1.5, delay: 0.5 + (i * 0.2) }}
                       className={`h-full ${i === 3 ? 'bg-[#ff6600] relative' : 'bg-[#333]'}`}
                     >
                       {i === 3 && <div className="absolute top-0 right-0 w-8 h-full bg-white/30 animate-pulse" />}
                     </motion.div>
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

// --- 3. PIXEL-PERFECT ECOSYSTEM TABS (Based on the new uploaded image) ---
const EcosystemTabs = () => {
  const [activeId, setActiveId] = useState('aiforce');

  const tabs = [
    {
      id: 'multibanco',
      icon: Landmark,
      title: "Plataforma Multibanco",
      subtitle: "Um cadastro. Todos os bancos.",
      tag: "CORE",
      pillVal: "98%", pillText: "aprovação média",
      contentTitle: "Plataforma Multibanco",
      desc: "Um único cadastro conecta sua operação a todos os grandes bancos simultaneamente. Mais competição de taxas, maior aprovação e velocidade que nenhum banco isolado consegue oferecer.",
      checks: ["Um único cadastro com distribuição inteligente", "Conexão simultânea com Itaú, Bradesco, Caixa e mais", "Maximização matemática de aprovação"]
    },
    {
      id: 'portal',
      icon: BarChart3,
      title: "Portal do Parceiro",
      subtitle: "Dashboard completo do funil.",
      tag: "GESTÃO",
      pillVal: "100%", pillText: "de visibilidade",
      contentTitle: "Cockpit de Gestão em Tempo Real",
      desc: "Transparência total e controle absoluto sobre todo o funil de crédito. Dashboard inteligente com indicadores de performance e status de cada proposta, eliminando a 'caixa preta' do repasse.",
      checks: ["Visão consolidada do VGV em esteira", "Alertas automáticos de pendências documentais", "Métricas de conversão por empreendimento"]
    },
    {
      id: 'simulador',
      icon: Cpu,
      title: "Simulador Inteligente",
      subtitle: "Converta no topo do funil.",
      tag: "VENDAS",
      pillVal: "3x", pillText: "mais conversão",
      contentTitle: "Simulador Personalizado",
      desc: "Experiência integrada diretamente ao site do parceiro. Transforme visitantes em leads altamente qualificados entregando simulações reais e precisas que aceleram a decisão de compra.",
      checks: ["Captura de dados no momento de maior intenção", "Integração via API com seu CRM nativo", "Cálculo de taxas atualizado em tempo real"]
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      title: "Assistente via WhatsApp",
      subtitle: "Simulação em segundos.",
      tag: "AGILIDADE",
      pillVal: "15s", pillText: "para resposta",
      contentTitle: "Financiamento na velocidade do chat",
      desc: "Toda a inteligência da Loft disponível 24/7 na palma da mão do seu corretor. Simulações completas e respostas instantâneas com comparativo de taxas multibanco direto no WhatsApp.",
      checks: ["Autonomia total para o time de corretores", "Geração de PDFs comparativos na hora", "Zero necessidade de acessar portais complexos"]
    },
    {
      id: 'aiforce',
      icon: FileText,
      title: "AI Force",
      subtitle: "Zero erro humano.",
      tag: "TECNOLOGIA",
      pillVal: "0%", pillText: "erro de digitação",
      contentTitle: "AI Force Extraction",
      desc: "Extração automatizada de dados de mais de 10 tipos de documentos (CNH, Matrícula, IPTU). O que levava horas agora leva segundos, sem refação.",
      checks: ["Leitura OCR avançada", "Validação cruzada de dados", "Adequação automática aos padrões bancários"]
    }
  ];

  return (
    <section className={`py-32 ${bgDark}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-[#ff6600] text-[11px] font-bold tracking-widest uppercase mb-4">Arquitetura modular</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            O Sistema Operacional do Repasse
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Column: Tab List */}
          <div className="lg:w-[35%] flex flex-col gap-2.5">
            {tabs.map((tab) => {
              const isActive = activeId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  className={`flex items-center text-left p-5 rounded-xl border transition-all duration-200 group
                    ${isActive 
                      ? 'bg-[#ff6600] border-[#ff6600] shadow-[0_4px_20px_rgba(255,102,0,0.3)]' 
                      : 'bg-[#141414] border-[#262626] hover:border-[#404040]'}`}
                >
                  <div className={`mr-4 transition-colors ${isActive ? 'text-white' : 'text-[#ff6600]'}`}>
                    <tab.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className={`font-bold text-[15px] mb-0.5 ${isActive ? 'text-white' : 'text-[#e5e5e5]'}`}>
                      {tab.title}
                    </div>
                    <div className={`text-[13px] ${isActive ? 'text-white/80' : 'text-[#737373]'}`}>
                      {tab.subtitle}
                    </div>
                  </div>
                  {isActive && <ArrowRight size={18} className="text-white ml-2" />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Content */}
          <div className="lg:w-[65%]">
            <AnimatePresence mode="wait">
              {tabs.map((tab) => tab.id === activeId && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#141414] border border-[#262626] rounded-2xl p-10 h-full flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-8">
                    {/* Icon Box */}
                    <div className="w-[72px] h-[72px] rounded-2xl bg-[#ff6600] flex items-center justify-center shrink-0">
                      <tab.icon size={36} className="text-white" strokeWidth={1.5} />
                    </div>
                    
                    <div className="flex flex-col justify-center pt-1">
                      {/* Tag */}
                      <div className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold tracking-widest bg-[#2a1708] text-[#ff6600] uppercase mb-2 w-max">
                        {tab.tag}
                      </div>
                      <h3 className="text-3xl font-extrabold text-white">
                        {tab.contentTitle}
                      </h3>
                    </div>
                  </div>

                  {/* Highlight Pill */}
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#333] bg-[#1a1a1a] w-max mb-8">
                    <span className="text-[#ff6600] font-bold mr-2">{tab.pillVal}</span>
                    <span className="text-[#a3a3a3] text-sm">{tab.pillText}</span>
                  </div>

                  {/* Description */}
                  <p className="text-[17px] leading-relaxed text-[#a3a3a3] mb-10">
                    {tab.desc}
                  </p>

                  {/* Checklist */}
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

// --- 4. MULTIBANK HUB (Visualizing Slide 3) ---
const HubSection = () => {
  const banks = ['Itaú', 'Bradesco', 'Santander', 'Caixa', 'Inter', 'BRB'];
  
  return (
    <section className={`py-32 ${bgDark} relative overflow-hidden border-t border-[#262626]`}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Conectividade Total. <br/>Acesso Simultâneo.</h2>
          <p className="text-[#a3a3a3] text-lg">Um único input roteado de forma inteligente para todo o sistema financeiro.</p>
        </div>

        {/* Visual Hub */}
        <div className="relative h-[400px] flex items-center justify-center">
          {/* Center Loft Node */}
          <div className="absolute z-20 w-32 h-32 bg-gradient-to-br from-[#ff8533] to-[#cc5200] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,102,0,0.5)] border-[4px] border-[#1a1a1a]">
            <span className="text-white font-black text-3xl tracking-tighter">loft</span>
          </div>

          {/* Orbiting Banks */}
          {banks.map((bank, index) => {
            const angle = (index * 360) / banks.length;
            const radius = 160; // distance from center
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <React.Fragment key={bank}>
                {/* Connecting Lines */}
                <motion.div 
                  className="absolute z-0 w-full h-[2px] origin-left"
                  style={{
                    left: '50%', top: '50%',
                    width: radius,
                    transform: `rotate(${angle}deg)`,
                    background: 'linear-gradient(90deg, #ff6600 0%, transparent 100%)',
                    opacity: 0.3
                  }}
                />
                <motion.div
                  className="absolute z-0 w-[4px] h-[4px] bg-[#ff6600] rounded-full shadow-[0_0_10px_#ff6600]"
                  style={{ left: '50%', top: '50%' }}
                  animate={{ 
                    x: [0, Math.cos((angle * Math.PI) / 180) * radius], 
                    y: [0, Math.sin((angle * Math.PI) / 180) * radius],
                    opacity: [1, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3, ease: "linear" }}
                />

                {/* Bank Nodes */}
                <motion.div
                  className="absolute z-10 flex flex-col items-center justify-center bg-[#141414] border border-[#262626] rounded-xl w-[100px] h-[50px] shadow-lg"
                  style={{ 
                    left: `calc(50% + ${x}px - 50px)`, 
                    top: `calc(50% + ${y}px - 25px)` 
                  }}
                  whileHover={{ scale: 1.1, borderColor: '#ff6600' }}
                >
                  <span className="text-white text-xs font-bold">{bank}</span>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- 5. NUMBERS SECTION (Slide 2) ---
const NumbersSection = () => {
  const stats = [
    { val: "1.2M", label: "Transações", sub: "processadas" },
    { val: "+R$10B", label: "Originação", sub: "de crédito gerado", highlight: true },
    { val: "+450K", label: "Contratos", sub: "sob gestão" },
    { val: "26", label: "Estados", sub: "presença nacional" },
  ];

  return (
    <section className={`py-24 bg-[#141414] border-t border-b border-[#262626]`}>
      <div className="max-w-7xl mx-auto px-6">
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
      </div>
    </section>
  );
};

// --- 6. FINAL CTA ---
const CTASection = () => (
  <section className={`py-32 ${bgDark} relative overflow-hidden`}>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#ff6600]/10 via-[#0a0a0a] to-[#0a0a0a]" />
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
        Seu empreendimento não pode esperar o crédito andar.
      </h2>
      <p className="text-xl text-[#a3a3a3] mb-12 max-w-2xl mx-auto">
        Transformar VGV em caixa 35% mais rápido protege a margem, reduz o custo de capital e garante o seu lucro planejado.
      </p>
      <button className="px-10 py-5 bg-[#ff6600] text-white rounded-xl font-bold text-lg hover:bg-[#e65c00] transition-all shadow-[0_0_30px_rgba(255,102,0,0.3)] flex items-center justify-center gap-2 mx-auto">
        Agendar diagnóstico gratuito <ArrowUpRight size={20} />
      </button>
    </div>
  </section>
);

// --- MAIN APP ---
export default function App() {
  return (
    <div className="font-sans bg-[#0a0a0a] min-h-screen text-zinc-50 selection:bg-[#ff6600]/30 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <EcosystemTabs />
        <HubSection />
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
