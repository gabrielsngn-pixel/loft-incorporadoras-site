import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Zap, BarChart3, Clock, ShieldCheck, 
  Home, FileText, Cpu, Landmark, DollarSign, 
  Search, Compass, FileCheck, MessageCircle, AlertTriangle
} from 'lucide-react';

// --- BACKGROUND GRID COMPONENT ---
const BackgroundGrid = () => (
  <div className="absolute inset-0 pointer-events-none z-0" style={{ 
    backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
    backgroundSize: '4rem 4rem'
  }}>
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]" />
  </div>
);

// --- 1. HERO SECTION ---
const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] pt-32 pb-20 flex items-center bg-[#0a0a0a] overflow-hidden">
      <BackgroundGrid />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Copy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            A infraestrutura dominante do crédito imobiliário
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            VGV vendido não é caixa. <span className="text-orange-500">E isso está custando caro.</span>
          </h1>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-5 flex items-start gap-4">
            <AlertTriangle className="text-orange-500 shrink-0 mt-1" size={24} />
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              Cada semana de repasse atrasado custa à sua incorporadora entre <strong>0,5% e 1% do VGV</strong> em custo financeiro. 
              Numa obra de <strong>R$50M</strong>, isso é <strong className="text-orange-400">R$250–500K evitáveis por mês.</strong>
            </p>
          </div>

          <p className="text-lg text-zinc-400 max-w-lg">
            A Loft transforma VGV em caixa <strong className="text-white">35% mais rápido</strong> — conectando vendas, documentos, bancos e capital em uma única infraestrutura.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 bg-orange-500 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">
              <Zap size={20} /> Destravar caixa agora
            </motion.button>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
              <BarChart3 size={20} /> Simular operação
            </motion.button>
          </div>
        </motion.div>

        {/* Right UI Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Main Dashboard Card */}
          <div className="bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative z-10">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">Loft OS • Sistema Ativo</span>
              </div>
              <span className="text-xs text-zinc-500">23/03/2026 • 14:38</span>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Value Area */}
              <div>
                <div className="text-xs font-medium text-zinc-500 uppercase mb-1">Operação Ativa</div>
                <div className="text-4xl font-bold text-white mb-1">R$ 12.8M</div>
                <div className="text-sm text-zinc-400">Construtora Atlântico • Rio de Janeiro</div>
              </div>

              {/* Progress */}
              <div className="space-y-4">
                <div className="text-xs font-medium text-zinc-500 uppercase">Progresso do repasse</div>
                <div className="relative">
                  <div className="absolute top-3 left-0 w-full h-1 bg-zinc-800 rounded-full" />
                  <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} transition={{ duration: 1.5, delay: 0.5 }} className="absolute top-3 left-0 h-1 bg-orange-500 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                  
                  <div className="relative flex justify-between">
                    {['Contrato', 'Documentação', 'Análise Loft', 'Banco', 'Caixa'].map((step, i) => (
                      <div key={step} className="flex flex-col items-center gap-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${i < 4 ? 'bg-orange-500 text-white' : 'bg-zinc-800 text-zinc-500 border border-zinc-700'}`}>
                           {i < 4 ? '✓' : ''}
                        </div>
                        <span className="text-[10px] text-zinc-400 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Approvals */}
              <div className="space-y-3">
                <div className="text-xs font-medium text-zinc-500 uppercase mb-2">Aprovações Paralelas</div>
                {[
                  { bank: 'Caixa Econômica', rate: '10.2% a.a.', status: 'Aprovado', color: 'bg-green-500/20 text-green-400' },
                  { bank: 'Bradesco', rate: '10.5% a.a.', status: 'Aprovado', color: 'bg-green-500/20 text-green-400' },
                  { bank: 'Itaú', rate: '10.8% a.a.', status: 'Em análise', color: 'bg-orange-500/20 text-orange-400' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.status === 'Aprovado' ? 'bg-green-500' : 'bg-orange-500'}`} />
                      <span className="text-sm font-medium text-zinc-300">{item.bank}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-zinc-400">{item.rate}</span>
                      <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider ${item.color}`}>{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="col-span-1 border border-orange-500/30 bg-orange-500/5 rounded-lg p-3">
                  <div className="text-[10px] text-orange-500 uppercase font-bold mb-1">Capital Recuperado</div>
                  <div className="text-lg font-bold text-white">+R$ 2.4M</div>
                  <div className="text-[10px] text-zinc-500">vs. processo tradicional</div>
                </div>
                <div className="border border-white/5 bg-white/5 rounded-lg p-3 flex flex-col justify-center">
                  <div className="text-[10px] text-zinc-500 uppercase mb-1">Tempo Total</div>
                  <div className="text-sm font-bold text-white">15 dias</div>
                </div>
                <div className="border border-white/5 bg-white/5 rounded-lg p-3 flex flex-col justify-center">
                  <div className="text-[10px] text-zinc-500 uppercase mb-1">Taxa Final</div>
                  <div className="text-sm font-bold text-green-400">10.2% a.a.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating 'Vs Mercado' Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-8 top-16 bg-white rounded-xl p-5 shadow-2xl z-20 border border-zinc-200"
          >
            <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-4">VS. Mercado</div>
            <div className="flex items-end gap-6 h-24">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 bg-orange-500 rounded-t-sm h-[30%]" />
                <span className="text-xs font-bold text-zinc-800">Loft<br/><span className="text-orange-500">15d</span></span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 bg-zinc-200 rounded-t-sm h-full" />
                <span className="text-xs font-bold text-zinc-400">Mercado<br/>45d</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

// --- 2. ARCHITECTURE FLOW (Image 1) ---
const ArchitectureSection = () => {
  const steps = [
    { icon: Home, title: "Venda", items: ["VGV contratado", "Comprador qualificado", "Contrato assinado"], active: false },
    { icon: FileText, title: "Documentação", items: ["Leitura por IA", "AI Force + Loft Check", "Dossiê automático"], active: false },
    { icon: Cpu, title: "Loft OS", items: ["Motor multibanco", "Roteamento inteligente", "Score otimizado"], active: true },
    { icon: Landmark, title: "Bancos", items: ["6+ instituições", "Competição de taxas", "Aprovação 98%"], active: false },
    { icon: DollarSign, title: "Caixa", items: ["Liberação em 15 dias", "-3 p.p. custo", "VGV realizado"], active: false },
  ];

  return (
    <section className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-4">Arquitetura</div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Assessoria não é serviço.<br/><span className="text-orange-500">É infraestrutura.</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Um sistema operacional que processa vendas e devolve capital — eliminando cada gargalo entre contrato e caixa.
          </p>
        </div>

        <div className="relative">
          {/* Main horizontal line */}
          <div className="absolute top-12 left-0 w-full h-0.5 bg-zinc-800 z-0" />
          <motion.div initial={{ width: 0 }} whileInView={{ width: "50%" }} transition={{ duration: 1.5 }} className="absolute top-12 left-0 h-0.5 bg-orange-500 z-0" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300 relative
                  ${step.active ? 'bg-orange-500 border-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.4)] scale-110' : 'bg-[#111] border-white/10 text-orange-500'}`}
                >
                  <step.icon size={32} className={step.active ? 'text-white' : ''} />
                  {step.active && (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute -top-2 -right-2 w-6 h-6 bg-white text-orange-500 rounded-full flex items-center justify-center">
                      <Zap size={12} />
                    </motion.div>
                  )}
                </div>
                
                <h3 className={`font-bold mb-4 ${step.active ? 'text-orange-500' : 'text-white'}`}>{step.title}</h3>
                
                <div className={`w-full p-4 rounded-xl border flex flex-col gap-2 text-sm
                  ${step.active ? 'bg-[#1a110a] border-orange-500/30' : 'bg-[#111] border-white/10'}`}>
                  {step.items.map((item, i) => (
                    <span key={i} className={step.active ? 'text-orange-200 font-medium' : 'text-zinc-500'}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 3. ECOSYSTEM TABS (Image 3) ---
const EcosystemSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, icon: Landmark, title: "Plataforma Multibanco", sub: "Um cadastro. Todos os bancos.", content: { tag: "CORE", title: "Plataforma Multibanco", stat: "98%", statDesc: "aprovação média", desc: "Um único cadastro conecta sua operação a todos os grandes bancos simultaneamente. Mais competição de taxas, maior aprovação e velocidade que nenhum banco isolado consegue oferecer.", checks: ["Um único cadastro", "Conexão com todos os grandes bancos", "Maximização de aprovação"] } },
    { id: 1, icon: BarChart3, title: "Portal do Parceiro", sub: "Dashboard completo do funil.", content: { tag: "GESTAO", title: "Portal do Parceiro", stat: "100%", statDesc: "visibilidade", desc: "Acompanhe todo o pipeline de repasse em tempo real. Saiba exatamente onde cada contrato está travado e tome decisões baseadas em dados atualizados instantaneamente.", checks: ["Visão de funil ponta a ponta", "Relatórios customizados", "Alertas de gargalos"] } },
    { id: 2, icon: Cpu, title: "Simulador Inteligente", sub: "Converta no topo do funil.", content: { tag: "VENDAS", title: "Simulador Integrado", stat: "3x", statDesc: "mais conversão", desc: "Integre nosso motor diretamente no site do seu empreendimento. O cliente simula e você recebe o lead já qualificado e com a rota de crédito desenhada.", checks: ["White-label para seu site", "Captura de leads quentes", "Simulação real (não estimativa)"] } },
    { id: 3, icon: MessageCircle, title: "Assistente via WhatsApp", sub: "Simulação em segundos.", content: { tag: "AGILIDADE", title: "Assistente WhatsApp", stat: "15s", statDesc: "tempo de resposta", desc: "Seu corretor não precisa abrir o computador. Basta enviar os dados no WhatsApp e nossa inteligência devolve a aprovação e comparação de taxas na hora.", checks: ["Disponível 24/7", "Comparativo multibanco na hora", "Zero fricção para o corretor"] } },
    { id: 4, icon: FileCheck, title: "AI Force", sub: "Zero erro humano.", content: { tag: "TECNOLOGIA", title: "AI Force Extraction", stat: "0%", statDesc: "erro de digitação", desc: "Extração automatizada de dados de mais de 10 tipos de documentos (CNH, Matrícula, IPTU). O que levava horas agora leva segundos, sem refação.", checks: ["Leitura OCR avançada", "Validação cruzada de dados", "Adequação automática aos padrões bancários"] } },
  ];

  return (
    <section className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-4 p-5 rounded-xl border text-left transition-all duration-300
                  ${activeTab === tab.id ? 'bg-orange-500 border-orange-400 shadow-lg' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
              >
                <tab.icon size={24} className={activeTab === tab.id ? 'text-white' : 'text-orange-500'} />
                <div>
                  <div className={`font-bold ${activeTab === tab.id ? 'text-white' : 'text-zinc-200'}`}>{tab.title}</div>
                  <div className={`text-xs ${activeTab === tab.id ? 'text-orange-200' : 'text-zinc-500'}`}>{tab.sub}</div>
                </div>
                <ArrowRight size={16} className={`ml-auto ${activeTab === tab.id ? 'text-white' : 'hidden'}`} />
              </button>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#111] border border-white/10 rounded-2xl p-10 h-full flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                    {React.createElement(tabs[activeTab].icon, { size: 32 })}
                  </div>
                  <div>
                    <span className="bg-orange-500/20 text-orange-500 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{tabs[activeTab].content.tag}</span>
                    <h3 className="text-3xl font-bold text-white mt-1">{tabs[activeTab].content.title}</h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-max mb-8">
                  <span className="text-2xl font-bold text-orange-500">{tabs[activeTab].content.stat}</span>
                  <span className="text-sm text-zinc-400">{tabs[activeTab].content.statDesc}</span>
                </div>

                <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
                  {tabs[activeTab].content.desc}
                </p>

                <div className="mt-auto space-y-4">
                  {tabs[activeTab].content.checks.map((check, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <span className="text-orange-500 text-xs">✓</span>
                      </div>
                      <span className="text-zinc-300">{check}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 4. NUMBERS / METRICS (Image 4) ---
const NumbersSection = () => {
  const metrics = [
    { icon: BarChart3, val: "+1.2M", label: "transações processadas", sub: "Em toda a plataforma", type: "dark" },
    { icon: DollarSign, val: "+R$10B", label: "em crédito originado", sub: "Volume total acumulado", type: "orange" },
    { icon: FileText, val: "+450K", label: "contratos sob gestão", sub: "Ativos na plataforma", type: "dark" },
    { icon: Compass, val: "26", label: "estados de atuação", sub: "Presença nacional", type: "dark" },
    { icon: Zap, val: "35%", label: "de crescimento", sub: "Ano a ano (YoY)", type: "dark" },
    { icon: Clock, val: "15 DIAS", label: "tempo médio de repasse", sub: "vs. semanas no mercado", type: "orange" },
  ];

  return (
    <section className="py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-4">Escala & Autoridade</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Os números de quem<br/><span className="text-orange-500">lidera a categoria</span>
            </h2>
          </div>
          <p className="text-lg text-zinc-400 max-w-md lg:ml-auto">
            Não existe intermediador com esses números. A Loft é a infraestrutura dominante do crédito imobiliário brasileiro — e os dados provam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl flex flex-col justify-center min-h-[220px] transition-transform hover:-translate-y-2
                ${m.type === 'orange' ? 'bg-orange-500 text-white shadow-[0_0_40px_rgba(249,115,22,0.3)]' : 'bg-[#111] border border-white/10 text-white'}`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 
                ${m.type === 'orange' ? 'bg-white/20' : 'bg-white/5 text-orange-500 border border-white/5'}`}>
                <m.icon size={20} />
              </div>
              <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight">{m.val}</div>
              <div className="font-bold mb-1">{m.label}</div>
              <div className={m.type === 'orange' ? 'text-orange-200 text-sm' : 'text-zinc-500 text-sm'}>{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 5. HOW IT WORKS (Image 5) ---
const TimelineSection = () => {
  const timeline = [
    { num: "01", icon: Search, title: "Diagnóstico do empreendimento", desc: "Análise completa do status do empreendimento, documentação existente e potencial de aprovação bancária." },
    { num: "02", icon: Compass, title: "Estratégia de crédito", desc: "Definição da melhor rota financeira, seleção dos bancos parceiros ideais e estruturação das condições." },
    { num: "03", icon: FileCheck, title: "Preparação para repasse", desc: "Regularização documental, vistoria das unidades e adequação de todas as exigências bancárias." },
    { num: "04", icon: Landmark, title: "Aprovação multibanco", desc: "Envio simultâneo a múltiplos bancos, gestão ativa do processo e acompanhamento de cada aprovação." },
    { num: "05", icon: DollarSign, title: "Caixa na conta mais rápido", desc: "Liquidação do repasse e entrada de caixa para a incorporadora em tempo recorde — média de 15 dias." },
  ];

  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <BackgroundGrid />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-4">Como Funciona</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Do diagnóstico ao caixa <span className="text-orange-500">em 5 etapas</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            Um processo estruturado que elimina gargalos e maximiza a velocidade de conversão de VGV em liquidez real.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 relative">
          <div className="hidden md:block absolute top-[50px] left-10 w-[80%] h-px bg-zinc-800" />
          
          {timeline.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="flex-1 flex flex-col items-center md:items-start text-center md:text-left relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center relative mb-6 shrink-0 shadow-xl">
                <item.icon size={32} className="text-orange-500" />
                <div className="absolute -top-1 -right-1 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                  {item.num}
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- APP WRAPPER & NAVBAR ---
export default function App() {
  return (
    <div className="font-sans bg-[#050505] min-h-screen text-zinc-50 selection:bg-orange-500/30">
      
      {/* Navbar (Image 2 style) */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Fake Loft Logo */}
            <div className="text-white font-black text-3xl tracking-tighter flex items-center gap-1">
               loft <div className="w-1 h-8 bg-white/20 ml-2" />
            </div>
            <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest leading-tight">
              Canal<br/>Incorporações
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Infraestrutura</a>
            <a href="#" className="hover:text-white transition-colors">Ecossistema</a>
            <a href="#" className="hover:text-white transition-colors">Resultados</a>
            <a href="#" className="hover:text-white transition-colors">Como Funciona</a>
            <a href="#" className="hover:text-white transition-colors">Sobre a Loft</a>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded text-sm transition-colors shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            Falar com especialista
          </button>
        </div>
      </nav>

      <main>
        <HeroSection />
        <ArchitectureSection />
        <EcosystemSection />
        <NumbersSection />
        <TimelineSection />
      </main>

      <footer className="bg-[#050505] py-12 border-t border-white/5 text-center">
         <div className="text-white font-black text-2xl tracking-tighter mb-4">loft</div>
         <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Loft Canal Incorporações. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
