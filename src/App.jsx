import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight, Landmark, BarChart3, Cpu, MessageCircle,
  FileText, Check, Zap, AlertTriangle, ChevronRight, ChevronLeft,
  ShieldCheck, ArrowUpRight, Activity, Building2,
  TrendingUp, ChevronDown, DollarSign, Target,
  Users, Calculator, GitBranch, Layers, Radio
} from 'lucide-react';

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
const C = {
  orange: '#FF6600', orangeL: '#FF8533',
  orangeDim: 'rgba(255,102,0,0.08)', orangeGlow: 'rgba(255,102,0,0.20)',
  orangeBorder: 'rgba(255,102,0,0.22)',
  bg: '#060606', s1: '#0d0d0d', s2: '#121212', s3: '#171717',
  border: '#1c1c1c', borderB: '#252525',
  t1: '#EFEFEF', t2: '#787878', t3: '#3a3a3a',
  green: '#00C16A', greenDim: 'rgba(0,193,106,0.08)',
  red: '#E84040', redDim: 'rgba(232,64,64,0.08)',
};
const SF = { fontFamily: 'Georgia,"Times New Roman",serif' };
const Tag = ({ children, s = {} }) => (
  <div style={{ display:'inline-block', fontSize:10, fontWeight:800, letterSpacing:'0.13em',
    textTransform:'uppercase', color:C.orange, background:C.orangeDim,
    border:`1px solid ${C.orangeBorder}`, padding:'3px 10px', borderRadius:4, ...s }}>{children}</div>
);
const Glow = ({ style }) => (
  <div style={{ position:'absolute', borderRadius:'50%', background:C.orange,
    filter:'blur(140px)', opacity:0.09, pointerEvents:'none', ...style }} />
);
const Grid = () => (
  <div style={{ position:'absolute', inset:0, pointerEvents:'none',
    backgroundImage:`linear-gradient(${C.border} 1px,transparent 1px),linear-gradient(90deg,${C.border} 1px,transparent 1px)`,
    backgroundSize:'48px 48px',
    maskImage:'radial-gradient(ellipse 90% 55% at 50% 0%,black 20%,transparent 100%)',
    WebkitMaskImage:'radial-gradient(ellipse 90% 55% at 50% 0%,black 20%,transparent 100%)' }} />
);

// ─── COUNT-UP HOOK ────────────────────────────────────────────────────────────
function useCountUp(target, duration = 1400, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf, startTime;
    const tick = (now) => {
      if (!startTime) startTime = now;
      const p = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return val;
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav style={{ position:'fixed', top:0, width:'100%', zIndex:100,
      background: scrolled ? 'rgba(6,6,6,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom:`1px solid ${scrolled ? C.border : 'transparent'}`,
      transition:'all 0.3s ease', padding:'0 40px' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center', height:70 }}>
        <div style={{ display:'flex', alignItems:'center', gap:14 }}>
          <span style={{ fontWeight:900, fontSize:27, color:'#fff', letterSpacing:'-1px', ...SF }}>
            loft<span style={{ color:C.orange }}>.</span>
          </span>
          <div style={{ width:1, height:26, background:C.borderB }} />
          <span style={{ fontSize:10, color:C.t2, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', lineHeight:1.5 }}>
            Canal<br/>Incorporações
          </span>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:32 }}>
          {['Plataforma','Ecossistema','Resultados','Parceria'].map(item => (
            <a key={item} href="#" style={{ color:C.t2, fontSize:13, fontWeight:600, textDecoration:'none', transition:'color 0.2s' }}
              onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color=C.t2}>{item}</a>
          ))}
          <button style={{ background:C.orange, color:'#fff', border:'none', padding:'9px 20px',
            borderRadius:8, fontSize:13, fontWeight:700, cursor:'pointer',
            boxShadow:`0 0 24px ${C.orangeGlow}` }}>Ativar plataforma</button>
        </div>
      </div>
    </nav>
  );
};

// ─── 1. HERO — REPOSITIONED AS INFRASTRUCTURE ────────────────────────────────
const Hero = () => {
  const fadeUp = {
    hidden: { opacity:0, y:22 },
    visible: { opacity:1, y:0, transition:{ duration:0.65, ease:[0.22,1,0.36,1] } }
  };

  // Animated pipeline status rows
  const events = [
    { label:'Contrato assinado — Helbor Spazio', status:'Entrada', color:C.t2 },
    { label:'AI Force — leitura documental', status:'Processando', color:'#FFB300' },
    { label:'Roteamento multibanco disparado', status:'6 bancos', color:C.orange },
    { label:'Aprovação — Caixa Econômica', status:'✓ Aprovado', color:C.green },
    { label:'Liberação de caixa', status:'R$2.1M', color:C.green },
  ];

  return (
    <section style={{ position:'relative', minHeight:'100vh', background:C.bg, display:'flex', alignItems:'center', paddingTop:100, overflow:'hidden' }}>
      <Grid />
      <Glow style={{ width:800, height:500, top:-180, left:'50%', transform:'translateX(-50%)' }} />

      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 40px', position:'relative', zIndex:10, width:'100%' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }}>

          {/* LEFT — PRODUCT-FIRST COPY */}
          <motion.div initial="hidden" animate="visible"
            variants={{ visible:{ transition:{ staggerChildren:0.11 } } }}
            style={{ display:'flex', flexDirection:'column', gap:24 }}>

            <motion.div variants={fadeUp}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'5px 14px',
                borderRadius:100, border:`1px solid ${C.orangeBorder}`, background:C.orangeDim }}>
                <div style={{ width:6, height:6, borderRadius:'50%', background:C.orange, boxShadow:`0 0 8px ${C.orange}` }} />
                <span style={{ fontSize:11, fontWeight:800, color:C.orange, letterSpacing:'0.12em', textTransform:'uppercase' }}>
                  Infraestrutura de crédito imobiliário
                </span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h1 style={{ fontSize:62, fontWeight:900, lineHeight:1.02, color:'#fff', margin:0, letterSpacing:'-2.5px', ...SF }}>
                Da venda ao banco,<br />
                <span style={{ color:C.orange }}>sem fricção.</span>
              </h1>
            </motion.div>

            <motion.p variants={fadeUp} style={{ margin:0, fontSize:18, color:C.t2, lineHeight:1.8, maxWidth:460 }}>
              A Loft é a <strong style={{ color:'#fff' }}>camada de inteligência</strong> entre incorporadoras e o sistema financeiro.
              Plataforma multibanco, automação documental e aprovação em escala — em um único sistema operacional.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display:'flex', gap:12 }}>
              <button style={{ display:'flex', alignItems:'center', gap:9, padding:'14px 28px',
                background:C.orange, color:'#fff', border:'none', borderRadius:10,
                fontSize:15, fontWeight:700, cursor:'pointer', boxShadow:`0 8px 40px ${C.orangeGlow}` }}>
                <Zap size={16} /> Ativar pipeline agora
              </button>
              <button style={{ display:'flex', alignItems:'center', gap:9, padding:'14px 22px',
                background:'transparent', color:'#fff', border:`1px solid ${C.borderB}`,
                borderRadius:10, fontSize:15, fontWeight:600, cursor:'pointer' }}>
                Ver a plataforma <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display:'flex', gap:28, paddingTop:12, borderTop:`1px solid ${C.border}` }}>
              {[{ v:'+R$10B', l:'originados' },{ v:'98%', l:'aprovação' },{ v:'15 dias', l:'repasse médio' }].map(s => (
                <div key={s.v}>
                  <div style={{ fontSize:21, fontWeight:900, color:'#fff', letterSpacing:'-0.5px', ...SF }}>{s.v}</div>
                  <div style={{ fontSize:11, color:C.t2, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em' }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — LIVE PIPELINE TERMINAL */}
          <motion.div initial={{ opacity:0, y:28 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.85, delay:0.35, ease:[0.22,1,0.36,1] }}
            style={{ position:'relative' }}>
            <div style={{ background:C.s1, border:`1px solid ${C.border}`, borderRadius:20, overflow:'hidden',
              boxShadow:'0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)' }}>

              {/* Window chrome */}
              <div style={{ height:42, background:'#0a0a0a', borderBottom:`1px solid ${C.border}`,
                display:'flex', alignItems:'center', padding:'0 16px', gap:8 }}>
                {['#ff4444','#ffbb00','#00cc44'].map((c,i) => <div key={i} style={{ width:10, height:10, borderRadius:'50%', background:c }} />)}
                <span style={{ flex:1, textAlign:'center', fontSize:11, color:C.t3, fontFamily:'monospace', fontWeight:600 }}>
                  loft OS — pipeline em tempo real
                </span>
                <span style={{ fontSize:10, color:C.orange, fontWeight:700 }}>● LIVE</span>
              </div>

              {/* KPI row */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', borderBottom:`1px solid ${C.border}` }}>
                {[
                  { l:'VGV ativo', v:'R$28.4M', d:'+12%', up:true },
                  { l:'Aprovação', v:'94.8%', d:'+3.2pp', up:true },
                  { l:'Tempo médio', v:'14 dias', d:'−41%', up:false },
                ].map((k,i) => (
                  <div key={i} style={{ padding:'16px 18px', borderRight:i<2?`1px solid ${C.border}`:'none' }}>
                    <div style={{ fontSize:10, color:C.t2, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:4 }}>{k.l}</div>
                    <div style={{ fontSize:20, fontWeight:900, color:'#fff', letterSpacing:'-0.5px', ...SF }}>{k.v}</div>
                    <div style={{ fontSize:11, fontWeight:700, color:k.up?C.green:C.orange, marginTop:2 }}>{k.d}</div>
                  </div>
                ))}
              </div>

              {/* Event log */}
              <div style={{ padding:'18px 20px' }}>
                <div style={{ fontSize:10, color:C.t2, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:14, fontFamily:'monospace' }}>
                  event log
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
                  {events.map((ev, i) => (
                    <motion.div key={i}
                      initial={{ opacity:0, x:-10 }} animate={{ opacity:1, x:0 }}
                      transition={{ delay:0.9 + i * 0.14 }}
                      style={{ display:'flex', alignItems:'center', justifyContent:'space-between',
                        padding:'9px 12px', background:C.s2, borderRadius:8,
                        border:`1px solid ${C.border}` }}>
                      <span style={{ fontSize:12, color:C.t2 }}>{ev.label}</span>
                      <span style={{ fontSize:11, fontWeight:700, color:ev.color, whiteSpace:'nowrap', marginLeft:12 }}>{ev.status}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div style={{ padding:'10px 20px', background:'#090909', borderTop:`1px solid ${C.border}`,
                display:'flex', justifyContent:'space-between' }}>
                <span style={{ fontSize:11, color:C.t3, fontFamily:'monospace' }}>empreendimento: Helbor Spazio III</span>
                <span style={{ fontSize:11, color:C.t3 }}>atualizado há 43s</span>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ delay:1.6 }}
              style={{ position:'absolute', bottom:-18, right:-18, background:'#fff', borderRadius:12,
                padding:'11px 16px', boxShadow:'0 20px 60px rgba(0,0,0,0.4)', display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:36, height:36, borderRadius:10, background:'#edf7f1', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <TrendingUp size={18} color="#00aa44" />
              </div>
              <div>
                <div style={{ fontSize:13, fontWeight:800, color:'#111', letterSpacing:'-0.3px' }}>R$2.1M liberados</div>
                <div style={{ fontSize:11, color:'#888' }}>Alphaville III — hoje, 14h32</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── 2. BEFORE / AFTER — TASK 1 ──────────────────────────────────────────────
const MetricBar = ({ label, before, after, unit, invert, started }) => {
  const beforeVal = useCountUp(before, 1200, started);
  const afterVal  = useCountUp(after,  1400, started);
  const max = Math.max(before, after);
  const beforePct = (before / max) * 100;
  const afterPct  = (after / max) * 100;
  const improved = invert ? after < before : after > before;
  const delta = invert
    ? `-${Math.round(((before - after) / before) * 100)}%`
    : `+${Math.round(((after - before) / before) * 100)}%`;

  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 160px 1fr', gap:0, alignItems:'center', padding:'18px 0', borderBottom:`1px solid ${C.border}` }}>
      {/* BEFORE */}
      <div style={{ paddingRight:24 }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
          <span style={{ fontSize:13, color:C.t2 }}>{label}</span>
          <span style={{ fontSize:16, fontWeight:900, color:'#fff', ...SF }}>{beforeVal}{unit}</span>
        </div>
        <div style={{ height:5, background:C.s3, borderRadius:99, overflow:'hidden' }}>
          <motion.div initial={{ width:0 }} animate={{ width: started ? `${beforePct}%` : 0 }}
            transition={{ duration:1.0, ease:[0.22,1,0.36,1] }}
            style={{ height:'100%', borderRadius:99, background:C.t3 }} />
        </div>
      </div>

      {/* CENTER DELTA */}
      <div style={{ textAlign:'center', padding:'0 12px' }}>
        <motion.div initial={{ scale:0, opacity:0 }} animate={ started ? { scale:1, opacity:1 } : {}}
          transition={{ delay:0.8, type:'spring', stiffness:300 }}
          style={{ display:'inline-block', padding:'4px 10px', borderRadius:6,
            background: improved ? 'rgba(0,193,106,0.12)' : C.orangeDim,
            border:`1px solid ${improved ? 'rgba(0,193,106,0.25)' : C.orangeBorder}`,
            fontSize:13, fontWeight:800,
            color: improved ? C.green : C.orange }}>
          {delta}
        </motion.div>
      </div>

      {/* AFTER */}
      <div style={{ paddingLeft:24 }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
          <span style={{ fontSize:13, color: improved ? C.green : C.orange }}>Com Loft</span>
          <span style={{ fontSize:16, fontWeight:900, color: improved ? C.green : C.orange, ...SF }}>{afterVal}{unit}</span>
        </div>
        <div style={{ height:5, background:C.s3, borderRadius:99, overflow:'hidden' }}>
          <motion.div initial={{ width:0 }} animate={{ width: started ? `${afterPct}%` : 0 }}
            transition={{ duration:1.2, delay:0.2, ease:[0.22,1,0.36,1] }}
            style={{ height:'100%', borderRadius:99,
              background: improved ? C.green : C.orange,
              boxShadow: improved ? `0 0 8px rgba(0,193,106,0.4)` : `0 0 8px ${C.orangeGlow}` }} />
        </div>
      </div>
    </div>
  );
};

const BeforeAfter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:'-80px' });

  const metrics = [
    { label:'Taxa de aprovação', before:68, after:98, unit:'%', invert:false },
    { label:'Tempo de repasse', before:45, after:14, unit:' dias', invert:true },
    { label:'Custo financeiro', before:100, after:67, unit:' p.p.', invert:true },
    { label:'Retrabalho documental', before:100, after:5, unit:'%', invert:true },
    { label:'Contratos simultâneos', before:12, after:47, unit:'', invert:false },
  ];

  return (
    <section style={{ padding:'120px 40px', background:C.s1, borderTop:`1px solid ${C.border}`, position:'relative', overflow:'hidden' }}>
      <Glow style={{ width:600, height:300, top:'50%', left:'50%', transform:'translate(-50%,-50%)' }} />
      <div ref={ref} style={{ maxWidth:1100, margin:'0 auto', position:'relative', zIndex:10 }}>
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ textAlign:'center', marginBottom:60 }}>
          <Tag s={{ marginBottom:16 }}>Impacto mensurável</Tag>
          <h2 style={{ fontSize:50, fontWeight:900, color:'#fff', margin:0, letterSpacing:'-1.5px', ...SF }}>
            O que muda quando você<br /><span style={{ color:C.orange }}>roda na infraestrutura Loft</span>
          </h2>
          <p style={{ fontSize:16, color:C.t2, marginTop:14, lineHeight:1.75 }}>
            Comparativo real entre operação convencional e operação na plataforma.
          </p>
        </motion.div>

        {/* Table header */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 160px 1fr', gap:0, marginBottom:4 }}>
          <div style={{ paddingRight:24, paddingBottom:14, borderBottom:`1px solid ${C.borderB}` }}>
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              <div style={{ width:8, height:8, borderRadius:2, background:C.t3 }} />
              <span style={{ fontSize:12, fontWeight:700, color:C.t2, textTransform:'uppercase', letterSpacing:'0.1em' }}>Sem Loft</span>
            </div>
          </div>
          <div style={{ borderBottom:`1px solid ${C.borderB}` }} />
          <div style={{ paddingLeft:24, paddingBottom:14, borderBottom:`1px solid ${C.borderB}` }}>
            <div style={{ display:'flex', alignItems:'center', gap:8 }}>
              <div style={{ width:8, height:8, borderRadius:2, background:C.orange }} />
              <span style={{ fontSize:12, fontWeight:700, color:C.orange, textTransform:'uppercase', letterSpacing:'0.1em' }}>Com Loft OS</span>
            </div>
          </div>
        </div>

        {metrics.map((m, i) => <MetricBar key={i} {...m} started={inView} />)}

        {/* Summary callout */}
        <motion.div initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.4 }}
          style={{ marginTop:40, padding:'28px 32px', background:C.orangeDim,
            border:`1px solid ${C.orangeBorder}`, borderRadius:16,
            display:'flex', justifyContent:'space-between', alignItems:'center', gap:32 }}>
          {[
            { val:'+44pp', label:'na taxa de aprovação' },
            { val:'3×', label:'mais contratos simultâneos' },
            { val:'−31 dias', label:'no ciclo de repasse' },
            { val:'−33%', label:'no custo financeiro' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign:'center' }}>
              <div style={{ fontSize:34, fontWeight:900, color:C.orange, letterSpacing:'-1.5px', ...SF, lineHeight:1 }}>{s.val}</div>
              <div style={{ fontSize:12, color:C.t2, marginTop:5, fontWeight:600 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ─── 3. ORBITAL ECOSYSTEM — TASK 2 ───────────────────────────────────────────
const modules = [
  { id:'multibanco', icon:Landmark,   label:'Plataforma\nMultibanco', angle:0,   desc:'6+ bancos em roteamento simultâneo. Score otimizado por perfil.' },
  { id:'portal',    icon:BarChart3,   label:'Portal do\nParceiro',    angle:60,  desc:'Cockpit em tempo real. Funil, métricas e alertas automáticos.' },
  { id:'simulador', icon:Calculator, label:'Simulador\nInteligente',  angle:120, desc:'Capacidade de compra com taxas reais. Conversão no topo do funil.' },
  { id:'aiforce',   icon:Cpu,        label:'AI Force',                angle:180, desc:'+10 tipos de documento. OCR + validação cruzada. Zero retrabalho.' },
  { id:'check',     icon:ShieldCheck,label:'Loft\nCheck',             angle:240, desc:'Checklist automático por regras bancárias. Diagnóstico em segundos.' },
  { id:'assistant', icon:MessageCircle,label:'Assistente\nWhatsApp', angle:300, desc:'Simulação completa em 15s. Comparativo multibanco instantâneo.' },
];

const OrbitalEcosystem = () => {
  const [active, setActive] = useState(null);
  const R = Math.min(220, window.innerWidth < 1200 ? 160 : 220); // orbit radius

  return (
    <section id="ecossistema" style={{ padding:'120px 40px', background:C.bg, borderTop:`1px solid ${C.border}`, position:'relative', overflow:'hidden' }}>
      <Glow style={{ width:700, height:700, top:'50%', left:'50%', transform:'translate(-50%,-50%)' }} />

      <div style={{ maxWidth:1280, margin:'0 auto', position:'relative', zIndex:10 }}>
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ textAlign:'center', marginBottom:72 }}>
          <Tag s={{ marginBottom:16 }}>Sistema modular</Tag>
          <h2 style={{ fontSize:52, fontWeight:900, color:'#fff', margin:0, letterSpacing:'-1.5px', ...SF }}>
            Loft OS — o núcleo do repasse
          </h2>
          <p style={{ fontSize:16, color:C.t2, marginTop:14, maxWidth:480, margin:'14px auto 0', lineHeight:1.75 }}>
            Uma única infraestrutura conectando toda a jornada do crédito. Clique em cada um para explorar.
          </p>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }}>

          {/* ORB DIAGRAM */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', position:'relative', height:'min(520px, 70vw)' }}>

            {/* Orbit ring */}
            <div style={{ position:'absolute', width:R*2+10, height:R*2+10, borderRadius:'50%',
              border:`1px solid rgba(255,102,0,0.08)`, top:'50%', left:'50%',
              transform:'translate(-50%,-50%)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', width:R*2-60, height:R*2-60, borderRadius:'50%',
              border:`1px dashed rgba(255,102,0,0.05)`, top:'50%', left:'50%',
              transform:'translate(-50%,-50%)', pointerEvents:'none' }} />

            {/* Animated orbit ring pulse */}
            <motion.div
              animate={{ rotate:360 }}
              transition={{ duration:40, repeat:Infinity, ease:'linear' }}
              style={{ position:'absolute', width:R*2+10, height:R*2+10, borderRadius:'50%',
                border:`1px solid transparent`,
                backgroundImage:`conic-gradient(${C.orange} 0deg, transparent 60deg, transparent 360deg)`,
                WebkitMask:'radial-gradient(transparent calc(50% - 1px), black calc(50% - 1px) calc(50%), transparent calc(50%))',
                mask:'radial-gradient(transparent calc(50% - 1px), black calc(50% - 1px) calc(50%), transparent calc(50%))',
                top:'50%', left:'50%', transform:'translate(-50%,-50%)', opacity:0.4, pointerEvents:'none' }}
            />

            {/* Center nucleus */}
            <motion.div
              whileHover={{ scale:1.05 }}
              style={{ position:'absolute', zIndex:20, width:108, height:108,
                background:`radial-gradient(circle at 38% 32%, ${C.orangeL}, ${C.orange})`,
                borderRadius:'50%', display:'flex', flexDirection:'column',
                alignItems:'center', justifyContent:'center', cursor:'default',
                boxShadow:`
  0 0 0 14px ${C.orangeDim},
  0 0 0 32px rgba(255,102,0,0.05),
  0 0 80px ${C.orangeGlow},
  inset 0 0 20px rgba(255,255,255,0.08)
`,
                top:'50%', left:'50%', transform:'translate(-50%,-50%)' }}>
              <span style={{ fontSize:19, fontWeight:900, color:'#fff', ...SF, letterSpacing:'-0.5px' }}>loft</span>
              <span style={{ fontSize:8, color:'rgba(255,255,255,0.65)', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', marginTop:2 }}>OS</span>
            </motion.div>

            {/* Module nodes */}
            {modules.map((mod, i) => {
              const rad = (mod.angle * Math.PI) / 180;
              const x = Math.cos(rad) * R;
              const y = Math.sin(rad) * R;
              const isActive = active === mod.id;
              const Icon = mod.icon;

              return (
                <React.Fragment key={mod.id}>
                  {/* Connecting line — animated data pulse */}
                  <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', overflow:'visible' }}>
                    <line
                      x1="50%" y1="50%"
                      x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`}
                      stroke={isActive ? C.orange : 'rgba(255,102,0,0.12)'}
                      strokeWidth={isActive ? 1.5 : 1}
                      strokeDasharray="4 6"
                      style={{
  animation: 'dash 2s linear infinite'
}}
                      
                      style={{ transition:'all 0.3s' }}
                    />
                  </svg>

                  {/* Traveling dot */}
                  <motion.div
                    style={{ position:'absolute', width:4, height:4, borderRadius:'50%',
                      background:C.orange, top:'50%', left:'50%',
                      boxShadow:`0 0 6px ${C.orange}` }}
                    animate={{ x:[0, x], y:[0, y], opacity:[0.8,1,0] }}
                    transition={{ duration:2.2, repeat:Infinity, delay:i*0.35, ease:'easeInOut' }}
                  />

                  {/* Node button */}
                  <motion.div
                    initial={{ opacity:0, scale:0.7 }}
                    whileInView={{ opacity:1, scale:1 }}
                    viewport={{ once:true }}
                    transition={{ delay:i * 0.08 + 0.2, type:'spring', stiffness:200 }}
                    onClick={() => setActive(isActive ? null : mod.id)}
                    whileHover={{ scale:1.08 }}
                    whileTap={{ scale:0.95 }}
                    style={{
                      position:'absolute',
                      left:`calc(50% + ${x}px)`, top:`calc(50% + ${y}px)`,
                      transform:'translate(-50%,-50%)',
                      zIndex:10, cursor:'pointer',
                      display:'flex', flexDirection:'column', alignItems:'center', gap:8,
                    }}
                  >
                    <div style={{
                      width:60, height:60, borderRadius:16,
                      background: isActive ? C.orange : C.s2,
                      border:`1px solid ${isActive ? C.orange : C.borderB}`,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      boxShadow: isActive ? `0 0 20px ${C.orangeGlow}, 0 0 0 4px ${C.orangeDim}` : 'none',
                      transition:'all 0.25s',
                    }}>
                      <Icon size={24} color={isActive ? '#fff' : C.orange} strokeWidth={1.5} />
                    </div>
                    <div style={{ textAlign:'center', lineHeight:1.35 }}>
                      {mod.label.split('\n').map((ln, li) => (
                        <div key={li} style={{ fontSize:11, fontWeight:700,
                          color: isActive ? '#fff' : C.t2,
                          transition:'color 0.2s', whiteSpace:'nowrap' }}>{ln}</div>
                      ))}
                    </div>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>

          {/* RIGHT — DETAIL PANEL */}
          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div key={active}
                  initial={{ opacity:0, y:12 }}
                  animate={{ opacity:1, y:0 }}
                  exit={{ opacity:0, y:-12 }}
                  transition={{ duration:0.22, ease:[0.22,1,0.36,1] }}
                  style={{ background:C.s2, border:`1px solid ${C.borderB}`, borderRadius:20,
                    padding:'36px', display:'flex', flexDirection:'column', gap:20 }}>
                  {(() => {
                    const mod = modules.find(m => m.id === active);
                    const Icon = mod.icon;
                    const extras = {
                      multibanco: { metric:'98%', ml:'aprovação', checks:['Um cadastro. Todos os bancos.','Roteamento inteligente por score','Taxas competitivas garantidas'] },
                      portal:     { metric:'100%', ml:'visibilidade', checks:['Funil em tempo real','Alertas de pendência automáticos','KPIs por empreendimento'] },
                      simulador:  { metric:'+38%', ml:'conversão', checks:['Integrado ao site do parceiro','Taxas reais multibanco','Acelera decisão de compra'] },
                      aiforce:    { metric:'0%', ml:'erro manual', checks:['Leitura de CNH, Matrícula, IPTU','Validação cruzada automática','Adequação bancária instantânea'] },
                      check:      { metric:'−40%', ml:'reprovações', checks:['Validação por regras de cada banco','Diagnóstico da pasta mãe','Zero idas e vindas'] },
                      assistant:  { metric:'< 15s', ml:'simulação', checks:['Comparativo multibanco via WhatsApp','Disponível 24/7','Escala inteligente para time Loft'] },
                    }[active];
                    return (
                      <>
                        <div style={{ display:'flex', gap:16, alignItems:'flex-start' }}>
                          <div style={{ width:60, height:60, borderRadius:16, background:C.orange,
                            display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                            <Icon size={28} color="#fff" strokeWidth={1.5} />
                          </div>
                          <div>
                            <Tag s={{ marginBottom:8 }}>{mod.id}</Tag>
                            <h3 style={{ fontSize:26, fontWeight:900, color:'#fff', margin:0, letterSpacing:'-0.6px', ...SF }}>
                              {mod.label.replace('\n',' ')}
                            </h3>
                          </div>
                        </div>

                        <div style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'8px 16px',
                          borderRadius:100, border:`1px solid ${C.border}`, background:C.s1, width:'fit-content' }}>
                          <span style={{ fontSize:22, fontWeight:900, color:C.orange, ...SF }}>{extras.metric}</span>
                          <span style={{ fontSize:13, color:C.t2 }}>{extras.ml}</span>
                        </div>

                        <p style={{ margin:0, fontSize:15, color:C.t2, lineHeight:1.85 }}>{mod.desc}</p>

                        <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                          {extras.checks.map((c, i) => (
                            <div key={i} style={{ display:'flex', alignItems:'center', gap:12 }}>
                              <div style={{ width:20, height:20, borderRadius:'50%', background:C.orangeDim,
                                border:`1px solid ${C.orangeBorder}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                                <Check size={10} strokeWidth={3} color={C.orange} />
                              </div>
                              <span style={{ fontSize:14, color:C.t1 }}>{c}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              ) : (
                <motion.div key="empty"
                  initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                  style={{ display:'flex', flexDirection:'column', gap:14 }}>
                  <h3 style={{ fontSize:28, fontWeight:900, color:'#fff', ...SF, margin:0, letterSpacing:'-0.5px' }}>
                    Seis módulos.<br />Um sistema operacional.
                  </h3>
                  <p style={{ margin:0, fontSize:15, color:C.t2, lineHeight:1.85 }}>
                    Cada módulo do Loft OS resolve uma camada do problema de crédito imobiliário.
                    Juntos, eliminam a fricção entre a venda e o capital bancário.
                  </p>
                  <div style={{ display:'flex', flexDirection:'column', gap:8, marginTop:8 }}>
                    {modules.map((mod, i) => {
                      const Icon = mod.icon;
                      return (
                        <button key={i} onClick={() => setActive(mod.id)}
                          style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 16px',
                            background:C.s2, border:`1px solid ${C.border}`, borderRadius:10, cursor:'pointer',
                            transition:'border-color 0.2s', textAlign:'left' }}
                          onMouseEnter={e => e.currentTarget.style.borderColor = C.borderB}
                          onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                          <Icon size={16} color={C.orange} strokeWidth={1.5} style={{ flexShrink:0 }} />
                          <span style={{ fontSize:13, fontWeight:700, color:C.t1 }}>{mod.label.replace('\n',' ')}</span>
                          <ChevronRight size={14} color={C.t3} style={{ marginLeft:'auto' }} />
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── 4. BRIDGE SECTION ───────────────────────────────────────────────────────
const Bridge = () => {
  const steps = [
    { icon:Building2,  label:'Venda',          sub:'Contrato assinado',           color:C.t2 },
    { icon:FileText,   label:'Documentação',   sub:'AI Force + Loft Check',       color:C.t2 },
    { icon:Cpu,        label:'Loft OS',        sub:'Motor multibanco · Score',    color:C.orange, highlight:true },
    { icon:Landmark,   label:'Bancos',         sub:'6+ instituições · 98% aprov.', color:C.t2 },
    { icon:DollarSign, label:'Caixa',          sub:'Liberação em 15 dias',        color:C.green },
  ];
  return (
    <section style={{ padding:'80px 40px', background:C.bg, borderTop:`1px solid ${C.border}` }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
 <div style={{ position:'absolute', height:2, left:'8%', right:'8%', top:34,
    background:`linear-gradient(90deg,${C.border},${C.orange} 50%,${C.green})`, zIndex:0 }} />
  {steps.map((s, i) => {
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <React.Fragment key={i}>
                <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }} transition={{ delay:i*0.1 }}
                  style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10,
                    zIndex:1, flex:1 }}>
                  <div style={{ width:68, height:68, borderRadius:18,
                    background: s.highlight ? C.orange : C.s2,
                    border:`1px solid ${s.highlight ? C.orange : C.borderB}`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    boxShadow: s.highlight ? `0 0 28px ${C.orangeGlow}` : 'none' }}>
                    <Icon size={28} color={s.highlight ? '#fff' : s.color} strokeWidth={1.5} />
                  </div>
                  <div style={{ textAlign:'center' }}>
                    <div style={{ fontSize:13, fontWeight:800, color: s.highlight ? C.orange : '#fff' }}>{s.label}</div>
                    <div style={{ fontSize:11, color:C.t2, marginTop:3, lineHeight:1.4 }}>{s.sub}</div>
                  </div>
                </motion.div>
                {i < steps.length - 1 && <div style={{ width:24, flexShrink:0 }} />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ─── 5. SCALE SECTION ────────────────────────────────────────────────────────
const ScaleSection = () => {
  const dots = [
    {x:38,y:22},{x:52,y:30},{x:60,y:38},{x:45,y:45},{x:35,y:55},{x:50,y:58},
    {x:62,y:52},{x:70,y:40},{x:42,y:68},{x:55,y:72},{x:30,y:40},{x:65,y:65},
    {x:48,y:80},{x:58,y:85},{x:40,y:33},{x:72,y:55},
  ];
  return (
    <section id="resultados" style={{ padding:'120px 40px', background:C.s1, borderTop:`1px solid ${C.border}`, position:'relative', overflow:'hidden' }}>
      <Glow style={{ width:500, height:500, right:-80, top:'50%', transform:'translateY(-50%)' }} />
      <div style={{ maxWidth:1280, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center', position:'relative', zIndex:10 }}>
        <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
          <Tag s={{ marginBottom:16 }}>Escala nacional</Tag>
          <h2 style={{ fontSize:48, fontWeight:900, color:'#fff', margin:0, letterSpacing:'-1.5px', ...SF, lineHeight:1.1 }}>
            Maior intermediadora<br />de financiamento<br />imobiliário do Brasil
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginTop:32 }}>
            {[
              { v:'1,2M', l:'transações processadas', hl:false },
              { v:'26',   l:'estados com presença', hl:false },
              { v:'+R$10B', l:'em originação de crédito', hl:true },
              { v:'+450K', l:'contratos sob gestão', hl:false },
              { v:'35%', l:'crescimento em 2025', hl:true, span:true },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.08 }}
                style={{ padding:'18px', borderRadius:14, gridColumn: s.span ? 'span 2' : 'auto',
                  background: s.hl ? C.orangeDim : C.s2,
                  border:`1px solid ${s.hl ? C.orangeBorder : C.border}`,
                  display: s.span ? 'flex' : 'block', alignItems:'center', gap:16 }}>
                <div style={{ fontSize: s.span ? 42 : 34, fontWeight:900, color:s.hl?C.orange:'#fff', ...SF, letterSpacing:'-1.5px', lineHeight:1 }}>{s.v}</div>
                <div style={{ fontSize:12, color:s.hl?C.orange:C.t2, marginTop:s.span?0:5, fontWeight:600, lineHeight:1.4 }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map */}
        <motion.div initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
          style={{ position:'relative', height:420, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 60% at 50% 50%,rgba(255,102,0,0.05),transparent)', borderRadius:'50%' }} />
          <svg viewBox="0 0 300 340" style={{ width:'80%', height:'80%', position:'absolute' }}>
            <ellipse cx="150" cy="160" rx="110" ry="140" fill="rgba(255,102,0,0.03)" stroke="rgba(255,102,0,0.12)" strokeWidth="1"/>
          </svg>
          <div style={{ position:'absolute', inset:0 }}>
            {dots.map((d,i) => (
              <motion.div key={i}
                initial={{ opacity:0, scale:0 }}
                whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }}
                transition={{ delay:i*0.05 }}
                style={{ position:'absolute', left:`${d.x}%`, top:`${d.y}%`,
                  width: i%4===0?10:6, height: i%4===0?10:6,
                  borderRadius:'50%', transform:'translate(-50%,-50%)',
                  background: i%4===0 ? C.orange : 'rgba(255,102,0,0.35)',
                  boxShadow: i%4===0 ? `0 0 12px ${C.orange}` : 'none' }} />
            ))}
          </div>
          <div style={{ position:'absolute', bottom:16, right:16, background:C.s1,
            border:`1px solid ${C.border}`, borderRadius:10, padding:'10px 14px' }}>
            <div style={{ fontSize:10, color:C.t2, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em' }}>Cobertura</div>
            <div style={{ fontSize:18, fontWeight:900, color:'#fff', ...SF }}>26 estados</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── 6. PARTNERSHIP FLOW SECTION ─────────────────────────────────────────────
const PartnershipSection = () => {
  const [activeIdx, setActiveIdx] = useState(null);
  const nodes = [
    { icon:Landmark,    label:'Plataforma\nMultibanco',     details:['Um único cadastro','Acesso simultâneo a todos os bancos','Motor de roteamento inteligente'] },
    { icon:FileText,    label:'Documentação\nAutomatizada', details:['AI Force + Loft Check','Leitura de +10 tipos de documentos','Dossiê automático sem retrabalho'] },
    { icon:Cpu,         label:'Loft OS',                   details:['Motor multibanco','Roteamento inteligente por score','Adequação bancária automática'], isLoft:true },
    { icon:Landmark,    label:'Bancos\nParceiros',          details:['6+ instituições conectadas','Competição de taxas em tempo real','Aprovação média de 98%'] },
    { icon:DollarSign,  label:'Caixa\nRealizado',           details:['Liberação em 15 dias','−3 p.p. no custo financeiro','VGV convertido em resultado'] },
  ];
  return (
    <section id="parceria" style={{ padding:'120px 40px', background:C.s1, borderTop:`1px solid ${C.border}`, position:'relative', overflow:'hidden' }}>
      <Glow style={{ width:700, height:300, top:'30%', left:'50%', transform:'translateX(-50%)' }} />
      <div style={{ maxWidth:1280, margin:'0 auto', position:'relative', zIndex:10 }}>
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ textAlign:'center', marginBottom:80 }}>
          <Tag s={{ marginBottom:16 }}>Por que fechar com a Loft</Tag>
          <h2 style={{ fontSize:52, fontWeight:900, color:'#fff', margin:0, letterSpacing:'-1.5px', ...SF }}>
            Cada etapa coberta.<br /><span style={{ color:C.orange }}>Nenhuma fricção no meio.</span>
          </h2>
          <p style={{ fontSize:16, color:C.t2, marginTop:14, maxWidth:480, margin:'14px auto 0', lineHeight:1.75 }}>
            Velocidade e previsibilidade como diferenciais. Giro de capital acelerado e menor risco de distrato.
          </p>
        </motion.div>

        {/* Flow */}
        <div style={{ position:'relative' }}>
          <div style={{ position:'absolute', top:34, left:'10%', right:'10%', height:2,
            background:`linear-gradient(90deg,${C.border},${C.orange} 40%,${C.orange} 60%,${C.border})`, zIndex:0 }} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:0, position:'relative', zIndex:1 }}>
            {nodes.map((node, i) => {
              const Icon = node.icon;
              const isActive = activeIdx === i;
              return (
                <motion.div key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }} transition={{ delay:i*0.1 }}
                  style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:0 }}>
                  <motion.div onClick={() => setActiveIdx(isActive ? null : i)}
                    whileHover={{ scale:1.06 }} whileTap={{ scale:0.96 }}
                    style={{ width:70, height:70, borderRadius:18, cursor:'pointer',
                      background: node.isLoft ? C.orange : C.s2,
                      border:`1px solid ${node.isLoft ? C.orange : isActive ? C.orange : C.borderB}`,
                      display:'flex', alignItems:'center', justifyContent:'center',
                      boxShadow: node.isLoft ? `0 0 0 6px ${C.orangeDim},0 0 32px ${C.orangeGlow}` : isActive ? `0 0 0 4px ${C.orangeDim}` : 'none',
                      transition:'all 0.25s', position:'relative' }}>
                    <Icon size={28} color={node.isLoft ? '#fff' : isActive ? C.orange : C.t2} strokeWidth={1.5} />
                    {isActive && !node.isLoft && (
                      <div style={{ position:'absolute', top:-4, right:-4, width:10, height:10, borderRadius:'50%',
                        background:C.orange, border:`2px solid ${C.s1}` }} />
                    )}
                  </motion.div>
                  <div style={{ width:2, height:18, background:node.isLoft ? C.orange : C.borderB }} />
                  <div style={{ textAlign:'center', padding:'8px 6px',
                    background:node.isLoft ? C.orangeDim : 'transparent',
                    border:node.isLoft ? `1px solid ${C.orangeBorder}` : '1px solid transparent',
                    borderRadius:8 }}>
                    {node.label.split('\n').map((ln,li) => (
                      <div key={li} style={{ fontSize:11, fontWeight:node.isLoft?800:700,
                        color: node.isLoft ? C.orange : isActive ? '#fff' : C.t2,
                        lineHeight:1.4, transition:'color 0.2s' }}>{ln}</div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detail cards */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:0, marginTop:16 }}>
            {nodes.map((node, i) => (
              <div key={i} style={{ padding:'0 8px' }}>
                <AnimatePresence>
                  {activeIdx === i && (
                    <motion.div
                      initial={{ opacity:0, y:-8, scaleY:0.9 }} animate={{ opacity:1, y:0, scaleY:1 }}
                      exit={{ opacity:0, y:-8, scaleY:0.9 }}
                      transition={{ duration:0.22, ease:[0.22,1,0.36,1] }}
                      style={{ background:node.isLoft ? 'rgba(255,102,0,0.08)' : C.s2,
                        border:`1px solid ${node.isLoft ? C.orangeBorder : C.borderB}`,
                        borderRadius:12, padding:'16px 14px',
                        display:'flex', flexDirection:'column', gap:9, transformOrigin:'top center' }}>
                      {node.details.map((d,di) => (
                        <div key={di} style={{ display:'flex', alignItems:'flex-start', gap:9 }}>
                          <div style={{ width:17, height:17, borderRadius:'50%', flexShrink:0, marginTop:1,
                            background:node.isLoft ? 'rgba(255,255,255,0.12)' : C.orangeDim,
                            border:`1px solid ${node.isLoft ? 'rgba(255,255,255,0.2)' : C.orangeBorder}`,
                            display:'flex', alignItems:'center', justifyContent:'center' }}>
                            <Check size={8} strokeWidth={3} color={node.isLoft ? '#fff' : C.orange} />
                          </div>
                          <span style={{ fontSize:12, color:node.isLoft ? 'rgba(255,255,255,0.8)' : C.t1, lineHeight:1.5 }}>{d}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          {activeIdx === null && (
            <p style={{ textAlign:'center', fontSize:12, color:C.t3, marginTop:24, letterSpacing:'0.02em' }}>
              Clique em qualquer etapa para ver os detalhes
            </p>
          )}
        </div>

        {/* Metric strip */}
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ delay:0.3 }}
          style={{ marginTop:64, display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
          {[
            { icon:TrendingUp, metric:'35%', ml:'mais ágil', title:'Velocidade e previsibilidade', desc:'Esteira 35% mais rápida que o mercado e maior taxa de aprovação.' },
            { icon:DollarSign, metric:'−3pp', ml:'no custo', title:'Giro de capital acelerado', desc:'Custo financeiro reduzido. Lucro planejado = lucro realizado.' },
            { icon:ShieldCheck, metric:'98%', ml:'aprovação', title:'Menor risco de distrato', desc:'Aprovação rápida reduz a janela de exposição ao risco de desistência.' },
          ].map((item, i) => (
            <div key={i} style={{ background:C.s2, border:`1px solid ${C.border}`, borderRadius:16,
              padding:'26px 22px', display:'flex', flexDirection:'column', gap:14,
              transition:'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.borderB}
              onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <div style={{ width:42, height:42, borderRadius:11, background:C.orangeDim,
                  border:`1px solid ${C.orangeBorder}`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <item.icon size={18} color={C.orange} strokeWidth={1.5} />
                </div>
                <div style={{ textAlign:'right' }}>
                  <div style={{ fontSize:26, fontWeight:900, color:C.orange, letterSpacing:'-1px', lineHeight:1, ...SF }}>{item.metric}</div>
                  <div style={{ fontSize:10, color:C.t2, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.08em' }}>{item.ml}</div>
                </div>
              </div>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:'#fff', marginBottom:5 }}>{item.title}</div>
                <div style={{ fontSize:13, color:C.t2, lineHeight:1.65 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ─── 7. FAQ ───────────────────────────────────────────────────────────────────
const FAQ = () => {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q:'Quanto custa a plataforma?', a:'A Loft opera em modelo de resultado — sem mensalidade, sem taxa de setup. A remuneração é atrelada ao sucesso do repasse. Fale com um especialista para estruturar o modelo ideal para o seu volume.' },
    { q:'Com quais bancos a Loft opera?', a:'Caixa Econômica Federal, Itaú, Bradesco, Santander, Inter e BRB — com expansão contínua. Um único cadastro acessa todos simultaneamente.' },
    { q:'Em quanto tempo vejo resultado?', a:'Incorporadoras que ativam a plataforma reduzem o ciclo de repasse em 35% nos primeiros 60 dias. O impacto no fluxo de caixa é imediato.' },
    { q:'A Loft substitui meu time de crédito?', a:'Não substitui — amplifica. A automação elimina o retrabalho operacional, liberando seu time para fechar contratos. Especialistas Loft cobrem reversão de crédito negado.' },
    { q:'Precisa de integração complexa?', a:'Não. A plataforma ativa em menos de 48h. Sem integração de sistemas, sem custo de TI. O onboarding é guiado pela equipe Loft do início ao primeiro repasse.' },
  ];
  return (
    <section style={{ padding:'120px 40px', background:C.bg, borderTop:`1px solid ${C.border}` }}>
      <div style={{ maxWidth:800, margin:'0 auto' }}>
        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ textAlign:'center', marginBottom:56 }}>
          <Tag s={{ marginBottom:14 }}>Perguntas frequentes</Tag>
          <h2 style={{ fontSize:46, fontWeight:900, color:'#fff', margin:0, letterSpacing:'-1.5px', ...SF }}>Respostas diretas</h2>
        </motion.div>
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          {faqs.map((f, i) => (
            <motion.div key={i} initial={{ opacity:0, y:10 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay:i*0.06 }}
              style={{ background:C.s1, border:`1px solid ${open===i ? C.borderB : C.border}`,
                borderRadius:12, overflow:'hidden', transition:'border-color 0.2s' }}>
              <button onClick={() => setOpen(open===i ? null : i)}
                style={{ width:'100%', padding:'20px 24px', display:'flex', justifyContent:'space-between',
                  alignItems:'center', background:'none', border:'none', cursor:'pointer' }}>
                <span style={{ fontSize:15, fontWeight:700, color:'#fff', textAlign:'left' }}>{f.q}</span>
                <motion.div animate={{ rotate:open===i ? 180 : 0 }} transition={{ duration:0.2 }}>
                  <ChevronDown size={18} color={C.t2} />
                </motion.div>
              </button>
              <AnimatePresence>
                {open===i && (
                  <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }}
                    exit={{ height:0, opacity:0 }} transition={{ duration:0.25 }} style={{ overflow:'hidden' }}>
                    <p style={{ margin:0, padding:'0 24px 20px', fontSize:14, color:C.t2, lineHeight:1.85 }}>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── 8. CTA — PRODUCT-DRIVEN (TASK 4) ────────────────────────────────────────
const CTA = () => {
  const [hover, setHover] = useState(false);
  return (
    <section style={{ padding:'140px 40px', background:C.s1, borderTop:`1px solid ${C.border}`, position:'relative', overflow:'hidden' }}>
      {/* Animated grid */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:`linear-gradient(${C.border} 1px,transparent 1px),linear-gradient(90deg,${C.border} 1px,transparent 1px)`,
        backgroundSize:'48px 48px', opacity:0.5 }} />
      <Glow style={{ width:900, height:600, bottom:-250, left:'50%', transform:'translateX(-50%)' }} />

      <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
        style={{ maxWidth:760, margin:'0 auto', textAlign:'center', position:'relative', zIndex:10,
          display:'flex', flexDirection:'column', alignItems:'center', gap:22 }}>

        <Tag>Ative a infraestrutura agora</Tag>

        <h2 style={{ fontSize:58, fontWeight:900, color:'#fff', margin:0, lineHeight:1.02, letterSpacing:'-2px', ...SF }}>
          Seu pipeline de crédito<br />
          <span style={{ color:C.orange }}>não deveria esperar.</span>
        </h2>

        <p style={{ fontSize:17, color:C.t2, margin:0, lineHeight:1.8, maxWidth:480 }}>
          Ative a plataforma em menos de 48h. Primeiro repasse acelerado em até 30 dias.
          Sem integração complexa. Sem custo inicial.
        </p>

        {/* Primary CTA */}
        <motion.button
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          whileTap={{ scale:0.97 }}
          style={{ display:'flex', alignItems:'center', gap:10, padding:'17px 38px',
            background:C.orange, color:'#fff', border:'none', borderRadius:12,
            fontSize:16, fontWeight:800, cursor:'pointer', letterSpacing:'0.01em',
            boxShadow:`0 12px 48px ${C.orangeGlow}` }}>
          <Activity size={18} />
          Simular minha operação
          <motion.div animate={{ x: hover ? 4 : 0 }} transition={{ duration:0.2 }}>
            <ArrowUpRight size={18} />
          </motion.div>
        </motion.button>

        {/* Micro-proof row */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14, width:'100%', maxWidth:560, marginTop:4 }}>
          {[
            { icon:Zap,       val:'48h',        label:'para ativar' },
            { icon:Check,     val:'0',          label:'custo inicial' },
            { icon:Activity,  val:'30 dias',    label:'primeiro resultado' },
          ].map((item, i) => (
            <div key={i} style={{ padding:'14px 16px', background:'rgba(255,255,255,0.03)',
              border:`1px solid ${C.border}`, borderRadius:10,
              display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
              <item.icon size={16} color={C.orange} strokeWidth={2} />
              <div style={{ fontSize:18, fontWeight:900, color:'#fff', ...SF, letterSpacing:'-0.5px' }}>{item.val}</div>
              <div style={{ fontSize:11, color:C.t2, fontWeight:600 }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <button style={{ display:'flex', alignItems:'center', gap:8, padding:'12px 24px',
          background:'transparent', color:C.t2, border:`1px solid ${C.border}`, borderRadius:10,
          fontSize:14, fontWeight:600, cursor:'pointer', transition:'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor=C.borderB; }}
          onMouseLeave={e => { e.currentTarget.style.color=C.t2; e.currentTarget.style.borderColor=C.border; }}>
          Falar com especialista <ArrowRight size={15} />
        </button>
      </motion.div>
    </section>
  );
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{ background:'#040404', borderTop:`1px solid ${C.border}`, padding:'34px 40px' }}>
    <div style={{ maxWidth:1280, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <span style={{ fontWeight:900, fontSize:22, color:'#fff', letterSpacing:'-1px', ...SF }}>
          loft<span style={{ color:C.orange }}>.</span>
        </span>
        <span style={{ fontSize:10, color:C.t3, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em' }}>
          Canal Incorporações
        </span>
      </div>
      <p style={{ fontSize:12, color:C.t3, margin:0 }}>
        © {new Date().getFullYear()} Loft Canal Incorporações. Infraestrutura de crédito imobiliário.
      </p>
    </div>
  </footer>
);

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ fontFamily:'-apple-system,"Helvetica Neue",sans-serif', background:C.bg,
      color:C.t1, lineHeight:1.5, WebkitFontSmoothing:'antialiased', MozOsxFontSmoothing:'grayscale' }}>
      <Navbar />
      <Hero />
      <Bridge />
      <BeforeAfter />
      <OrbitalEcosystem />
      <ScaleSection />
      <PartnershipSection />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
