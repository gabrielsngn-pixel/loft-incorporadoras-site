import {
  ArrowRight, Landmark, BarChart3, Cpu, MessageCircle,
  FileText, Check, Zap, AlertTriangle, ChevronRight, ChevronLeft,
  ShieldCheck, ArrowUpRight, Activity, Quote, Building2,
  TrendingUp, ChevronDown, DollarSign, Target, Globe,
  Users, Rocket, Lock, PieChart, Bell, Calculator, Layers
} from 'lucide-react';

// ─── TOKENS ──────────────────────────────────────────────────────────────────
const C = {
  orange: '#FF6600',
  orangeL: '#FF8533',
  orangeDim: 'rgba(255,102,0,0.10)',
  orangeGlow: 'rgba(255,102,0,0.22)',
  orangeBorder: 'rgba(255,102,0,0.25)',
  bg: '#080808',
  s1: '#0f0f0f',
  s2: '#141414',
  s3: '#191919',
  border: '#1e1e1e',
  borderB: '#282828',
  t1: '#F2F2F2',
  t2: '#888888',
  t3: '#444444',
};

const S = { // shared inline style helpers
  serif: { fontFamily: 'Georgia, "Times New Roman", serif' },
  mono: { fontFamily: '"SF Mono", "Fira Code", monospace' },
};

// ─── BACKGROUND GRID ─────────────────────────────────────────────────────────
const Grid = ({ opacity = 1 }) => (
  <div style={{
    position: 'absolute', inset: 0, pointerEvents: 'none',
    backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
    backgroundSize: '48px 48px',
    maskImage: 'radial-gradient(ellipse 90% 60% at 50% 0%, black 20%, transparent 100%)',
    WebkitMaskImage: 'radial-gradient(ellipse 90% 60% at 50% 0%, black 20%, transparent 100%)',
    opacity,
  }} />
);

const Glow = ({ style }) => (
  <div style={{ position: 'absolute', borderRadius: '50%', background: C.orange, filter: 'blur(130px)', opacity: 0.10, pointerEvents: 'none', ...style }} />
);

const Tag = ({ children, style = {} }) => (
  <div style={{
    display: 'inline-block', fontSize: 10, fontWeight: 800,
    letterSpacing: '0.13em', textTransform: 'uppercase',
    color: C.orange, background: C.orangeDim,
    border: `1px solid ${C.orangeBorder}`,
    padding: '3px 10px', borderRadius: 4, ...style
  }}>{children}</div>
);

const Pill = ({ val, label }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 10,
    padding: '9px 18px', borderRadius: 100,
    border: `1px solid ${C.border}`, background: C.s2
  }}>
    <span style={{ fontSize: 22, fontWeight: 900, color: C.orange, ...S.serif }}>{val}</span>
    <span style={{ fontSize: 13, color: C.t2 }}>{label}</span>
  </div>
);

const CheckRow = ({ items }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
    {items.map((c, i) => (
      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: C.orangeDim, border: `1px solid ${C.orangeBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Check size={11} strokeWidth={3} color={C.orange} />
        </div>
        <span style={{ fontSize: 14, color: C.t1 }}>{c}</span>
      </div>
    ))}
  </div>
);

// ─── NAVBAR ──────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      background: scrolled ? 'rgba(8,8,8,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: `1px solid ${scrolled ? C.border : 'transparent'}`,
      transition: 'all 0.35s ease', padding: '0 40px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 72 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontWeight: 900, fontSize: 28, color: '#fff', letterSpacing: '-1px', ...S.serif }}>
            loft<span style={{ color: C.orange }}>.</span>
          </span>
          <div style={{ width: 1, height: 28, background: C.borderB }} />
          <span style={{ fontSize: 10, color: C.t2, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1.5 }}>
            Canal<br />Incorporações
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {['Plataforma', 'Soluções', 'Parceria', 'Resultados'].map(item => (
            <a key={item} href="#" style={{ color: C.t2, fontSize: 13, fontWeight: 600, textDecoration: 'none', letterSpacing: '0.02em', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = C.t2}>{item}</a>
          ))}
          <button style={{
            background: C.orange, color: '#fff', border: 'none',
            padding: '10px 22px', borderRadius: 8, fontSize: 13, fontWeight: 700,
            cursor: 'pointer', boxShadow: `0 0 28px ${C.orangeGlow}`, letterSpacing: '0.01em'
          }}>Falar com especialista</button>
        </div>
      </div>
    </nav>
  );
};

// ─── 1. HERO ─────────────────────────────────────────────────────────────────
const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section style={{ position: 'relative', minHeight: '100vh', background: C.bg, display: 'flex', alignItems: 'center', paddingTop: 100, overflow: 'hidden' }}>
      <Grid />
      <Glow style={{ width: 700, height: 500, top: -150, left: '50%', transform: 'translateX(-50%)' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>

          {/* COPY */}
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>

            <motion.div variants={fadeUp}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', borderRadius: 100, border: `1px solid ${C.orangeBorder}`, background: C.orangeDim }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.orange, boxShadow: `0 0 8px ${C.orange}` }} />
                <span style={{ fontSize: 11, fontWeight: 800, color: C.orange, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Infraestrutura de crédito</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h1 style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.02, color: '#fff', margin: 0, letterSpacing: '-2px', ...S.serif }}>
                VGV vendido<br />
                <span style={{ color: C.orange }}>não é caixa.</span>
              </h1>
              <h2 style={{ fontSize: 40, fontWeight: 700, color: C.t2, margin: '10px 0 0', letterSpacing: '-1px', ...S.serif }}>
                E isso está custando caro.
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} style={{ background: 'rgba(255,60,0,0.05)', border: `1px solid rgba(255,102,0,0.16)`, borderRadius: 12, padding: '14px 18px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <AlertTriangle size={17} color={C.orange} style={{ flexShrink: 0, marginTop: 3 }} />
              <p style={{ margin: 0, fontSize: 14, color: '#bbb', lineHeight: 1.75 }}>
                Cada semana de atraso no repasse custa entre <strong style={{ color: '#fff' }}>0,5% e 1% do VGV</strong>. Em R$50M: <strong style={{ color: C.orange }}>R$250–500K por mês travados.</strong>
              </p>
            </motion.div>

            <motion.p variants={fadeUp} style={{ margin: 0, fontSize: 17, color: C.t2, lineHeight: 1.8 }}>
              Assessoria não é serviço. <strong style={{ color: '#fff' }}>É infraestrutura.</strong> A Loft é a camada de inteligência entre sua venda e o banco — transformando VGV em caixa <strong style={{ color: '#fff' }}>35% mais rápido.</strong>
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 12 }}>
              <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 28px', background: C.orange, color: '#fff', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: 'pointer', boxShadow: `0 8px 40px ${C.orangeGlow}` }}>
                <Zap size={17} /> Destravar caixa agora
              </button>
              <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 22px', background: 'transparent', color: '#fff', border: `1px solid ${C.borderB}`, borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>
                Como funciona <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: 32, paddingTop: 12, borderTop: `1px solid ${C.border}` }}>
              {[{ v: '+R$10B', l: 'originados' }, { v: '98%', l: 'aprovação' }, { v: '15 dias', l: 'repasse médio' }].map(s => (
                <div key={s.v}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', ...S.serif }}>{s.v}</div>
                  <div style={{ fontSize: 11, color: C.t2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* COCKPIT */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} style={{ position: 'relative' }}>
            <div style={{ background: C.s1, border: `1px solid ${C.border}`, borderRadius: 20, overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)' }}>
              {/* bar */}
              <div style={{ height: 42, background: '#0b0b0b', borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', padding: '0 16px', gap: 8 }}>
                {['#ff4444','#ffbb00','#00cc44'].map((c,i) => <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
                <span style={{ flex: 1, textAlign: 'center', fontSize: 11, color: '#3a3a3a', fontWeight: 600, ...S.mono }}>loft OS — Cockpit ao vivo</span>
                <span style={{ fontSize: 10, color: C.orange, fontWeight: 700 }}>● LIVE</span>
              </div>
              {/* KPI row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: `1px solid ${C.border}` }}>
                {[{ l: 'VGV em Repasse', v: 'R$28.4M', d: '+12%', up: true }, { l: 'Aprovados', v: '94.8%', d: '+3.2%', up: true }, { l: 'Tempo Médio', v: '14 dias', d: '-41%', up: false }].map((k, i) => (
                  <div key={i} style={{ padding: '18px 20px', borderRight: i < 2 ? `1px solid ${C.border}` : 'none' }}>
                    <div style={{ fontSize: 10, color: C.t2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 5 }}>{k.l}</div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', ...S.serif }}>{k.v}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: k.up ? '#00cc66' : C.orange, marginTop: 3 }}>{k.d} vs. antes</div>
                  </div>
                ))}
              </div>
              {/* Pipeline */}
              <div style={{ padding: '22px 20px' }}>
                <div style={{ fontSize: 10, color: C.t2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>Pipeline de Repasse</div>
                {[
                  { l: 'Análise de crédito', p: 100, done: true },
                  { l: 'Validação documental', p: 100, done: true },
                  { l: 'Aprovação multibanco', p: 100, done: true },
                  { l: 'Assinatura digital', p: 74, active: true },
                  { l: 'Liberação de caixa', p: 30 },
                ].map((s, i) => (
                  <div key={i} style={{ marginBottom: 13 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                      <span style={{ fontSize: 12, color: s.done ? '#555' : s.active ? '#fff' : '#3a3a3a', fontWeight: s.active ? 700 : 500 }}>
                        {s.done && <Check size={11} style={{ display: 'inline', marginRight: 5, color: '#2a8a4a' }} />}{s.l}
                      </span>
                      <span style={{ fontSize: 11, color: s.active ? C.orange : '#3a3a3a', fontWeight: 700 }}>{s.p}%</span>
                    </div>
                    <div style={{ height: 4, background: '#1a1a1a', borderRadius: 99, overflow: 'hidden' }}>
                      <motion.div initial={{ width: 0 }} animate={{ width: `${s.p}%` }} transition={{ duration: 1.1, delay: 0.7 + i * 0.1, ease: [0.22,1,0.36,1] }}
                        style={{ height: '100%', borderRadius: 99, background: s.done ? '#2a2a2a' : s.active ? `linear-gradient(90deg,${C.orange},${C.orangeL})` : '#1e1e1e', boxShadow: s.active ? `0 0 10px ${C.orangeGlow}` : 'none' }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: '10px 20px', background: '#0a0a0a', borderTop: `1px solid ${C.border}`, display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 11, color: '#333' }}>Empreendimento: Alphaville III</span>
                <span style={{ fontSize: 11, color: '#333' }}>Atualizado há 2 min</span>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5, duration: 0.5 }}
              style={{ position: 'absolute', bottom: -20, right: -20, background: '#fff', borderRadius: 12, padding: '11px 16px', boxShadow: '0 20px 60px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#edf7f1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp size={18} color="#00aa44" />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: '#111', letterSpacing: '-0.3px' }}>R$2.1M liberados</div>
                <div style={{ fontSize: 11, color: '#888' }}>Helbor Spazio — hoje, 14h32</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── 2. BRIDGE — PONTE VENDA → CAPITAL ───────────────────────────────────────
const Bridge = () => (
  <section style={{ padding: '100px 40px', background: C.s1, borderTop: `1px solid ${C.border}`, position: 'relative', overflow: 'hidden' }}>
    <Glow style={{ width: 600, height: 300, bottom: -100, left: '50%', transform: 'translateX(-50%)' }} />
    <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 10 }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 72 }}>
        <Tag style={{ marginBottom: 16 }}>A lógica da infraestrutura</Tag>
        <h2 style={{ fontSize: 50, fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-1.5px', ...S.serif }}>
          Assessoria não é serviço,<br /><span style={{ color: C.orange }}>é infraestrutura.</span>
        </h2>
        <p style={{ fontSize: 17, color: C.t2, marginTop: 18, lineHeight: 1.75 }}>
          A evolução da conexão entre vendas e capital.
        </p>
      </motion.div>

      {/* Bridge diagram */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 0, alignItems: 'stretch' }}>

        {/* LEFT PILLAR — Venda */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ background: C.s2, border: `1px solid ${C.border}`, borderRadius: '20px 0 0 20px', padding: '40px 36px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          <div style={{ width: 52, height: 52, background: C.orangeDim, border: `1px solid ${C.orangeBorder}`, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Building2 size={26} color={C.orange} strokeWidth={1.5} />
          </div>
          <div>
            <div style={{ fontSize: 11, color: C.t2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Ponto de partida</div>
            <h3 style={{ fontSize: 28, fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-0.8px', ...S.serif }}>Venda de Imóveis</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
            {['Contrato assinado', 'Documentação do comprador', 'Dados do imóvel'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.t3, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: C.t2 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'auto', padding: '12px 16px', background: C.border, borderRadius: 10, width: '100%' }}>
            <div style={{ fontSize: 11, color: C.t2, marginBottom: 3 }}>VGV vendido</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: '#fff', ...S.serif }}>R$ 50M</div>
            <div style={{ fontSize: 12, color: '#e44', marginTop: 2 }}>↗ Ainda não é caixa</div>
          </div>
        </motion.div>

        {/* CENTER — Loft OS */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
          style={{ background: C.orange, padding: '40px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, minWidth: 240, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.12), transparent 60%)', borderRadius: 0 }} />
          <div style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Loft OS</div>
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,0.3)' }}>
            <span style={{ fontSize: 22, fontWeight: 900, color: '#fff', ...S.serif }}>loft</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 4 }}>Camada de Inteligência</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>Entre a venda e o banco</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', marginTop: 8 }}>
            {['AI Force', 'Multibanco', 'Loft Check', 'Operação assistida'].map((m, i) => (
              <div key={i} style={{ background: 'rgba(0,0,0,0.18)', borderRadius: 8, padding: '8px 12px', fontSize: 12, fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Check size={11} strokeWidth={3} color="rgba(255,255,255,0.8)" />{m}
              </div>
            ))}
          </div>
          {/* Animated flow arrows */}
          <div style={{ position: 'absolute', left: -12, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[0.3, 0.6, 0.9].map((d, i) => (
              <motion.div key={i} animate={{ x: [0, 8, 0], opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, delay: d, repeat: Infinity }}>
                <ArrowRight size={14} color={C.orange} />
              </motion.div>
            ))}
          </div>
          <div style={{ position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[0.2, 0.5, 0.8].map((d, i) => (
              <motion.div key={i} animate={{ x: [0, 8, 0], opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, delay: d, repeat: Infinity }}>
                <ArrowRight size={14} color={C.orange} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT PILLAR — Capital */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ background: C.s2, border: `1px solid ${C.border}`, borderRadius: '0 20px 20px 0', padding: '40px 36px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
          <div style={{ width: 52, height: 52, background: 'rgba(0,200,100,0.08)', border: '1px solid rgba(0,200,100,0.2)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Landmark size={26} color="#00cc66" strokeWidth={1.5} />
          </div>
          <div>
            <div style={{ fontSize: 11, color: C.t2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Destino</div>
            <h3 style={{ fontSize: 28, fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-0.8px', ...S.serif }}>Capital Bancário</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
            {['Análise multibanco simultânea', 'Aprovação otimizada', 'Contrato de financiamento'].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2a8a4a', flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: C.t2 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'auto', padding: '12px 16px', background: 'rgba(0,200,100,0.06)', border: '1px solid rgba(0,200,100,0.15)', borderRadius: 10, width: '100%' }}>
            <div style={{ fontSize: 11, color: '#2a8a4a', marginBottom: 3 }}>Caixa realizado</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: '#fff', ...S.serif }}>R$ 50M</div>
            <div style={{ fontSize: 12, color: '#00cc66', marginTop: 2 }}>↗ Em 15 dias, não 45+</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bullets */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 32 }}>
        {[
          { icon: Layers, title: 'Remoção sistemática de barreiras operacionais', desc: 'Cada fricção no processo custa dinheiro. Eliminamos todas.' },
          { icon: Cpu, title: 'Camada de inteligência entre venda e banco', desc: 'Não somos despachantes. Somos o sistema operacional do repasse.' },
          { icon: Target, title: 'Foco total na jornada do parceiro e do cliente', desc: 'Sua incorporadora fecha mais. Seu comprador tem aprovação mais rápida.' },
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            style={{ background: C.s2, border: `1px solid ${C.border}`, borderRadius: 14, padding: '24px 22px', display: 'flex', gap: 16 }}>
            <item.icon size={20} color={C.orange} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 6, lineHeight: 1.4 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: C.t2, lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── 3. HORIZONTAL SCROLL SOLUTIONS ─────────────────────────────────────────
const solutions = [
  {
    id: 'multibanco', tag: 'CORE', icon: Landmark,
    title: 'Plataforma Multibanco', sub: 'O Hub de Crédito do Brasil',
    headline: 'Um cadastro. Todos os bancos. Aprovação máxima.',
    desc: 'Um único input é roteado simultaneamente para Caixa, Itaú, Bradesco, Santander, Inter e BRB. A inteligência de roteamento identifica o melhor banco para cada perfil, maximizando aprovação e minimizando taxa.',
    metric: '98%', metricLabel: 'taxa de aprovação média',
    checks: ['Roteamento inteligente por perfil de risco', 'Negociação de spread automatizada', 'Cobertura total dos grandes bancos', 'Conectividade simultânea — não sequencial'],
    accent: C.orange,
    visual: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {['Itaú', 'Bradesco', 'Santander', 'Caixa', 'Inter', 'BRB'].map((b, i) => (
          <motion.div key={b} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
            style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', background: C.s3, border: `1px solid ${C.border}`, borderRadius: 10 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00cc66', boxShadow: '0 0 6px #00cc66' }} />
            <span style={{ fontSize: 13, fontWeight: 700, color: '#ccc', flex: 1 }}>{b}</span>
            <span style={{ fontSize: 11, color: '#00cc66', fontWeight: 700 }}>Conectado</span>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 'portal', tag: 'GESTÃO', icon: BarChart3,
    title: 'Portal do Parceiro', sub: 'Cockpit de Gestão em Tempo Real',
    headline: 'Transparência total. Zero caixa preta.',
    desc: 'Dashboard inteligente com visibilidade completa sobre o funil de crédito. Status de cada proposta, alertas de pendências, indicadores de performance e métricas de conversão — tudo em um único painel executivo.',
    metric: '100%', metricLabel: 'visibilidade do pipeline',
    checks: ['Status em tempo real por contrato', 'Alertas automáticos de pendências', 'Métricas de conversão por empreendimento', 'Gestão centralizada elimina "caixa preta"'],
    accent: '#6366f1',
    visual: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {[{ l: 'Em análise', v: 28, c: C.orange }, { l: 'Aprovados', v: 19, c: '#00cc66' }, { l: 'Pendentes', v: 6, c: '#ffaa00' }, { l: 'Concluídos', v: 47, c: '#6366f1' }].map((k, i) => (
            <div key={i} style={{ padding: '14px', background: C.s3, border: `1px solid ${C.border}`, borderRadius: 10 }}>
              <div style={{ fontSize: 10, color: C.t2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{k.l}</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: k.c, ...S.serif }}>{k.v}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '14px 16px', background: C.s3, border: `1px solid ${C.border}`, borderRadius: 10 }}>
          <div style={{ fontSize: 11, color: C.t2, marginBottom: 10, fontWeight: 600 }}>Taxa de conversão — últimos 30 dias</div>
          <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: 48 }}>
            {[60, 72, 68, 82, 78, 91, 88].map((v, i) => (
              <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${v}%` }} transition={{ delay: i * 0.05, duration: 0.5 }}
                style={{ flex: 1, background: i === 6 ? C.orange : C.border, borderRadius: '3px 3px 0 0', minHeight: 4 }} />
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'simulador', tag: 'CONVERSÃO', icon: Calculator,
    title: 'Simulador Personalizado', sub: 'Conversão no Topo do Funil',
    headline: 'Visitantes viram leads qualificados com dados reais.',
    desc: 'Simulador integrado diretamente ao site do parceiro. Compradores simulam condições reais de financiamento com dados multibanco em tempo real — transformando intenção em decisão de compra mais rápida.',
    metric: '+38%', metricLabel: 'conversão de leads',
    checks: ['Integração nativa ao site do parceiro', 'Simulação com taxas reais multibanco', 'Dados de capacidade de compra em tempo real', 'Aceleração da decisão do comprador'],
    accent: '#0ea5e9',
    visual: () => (
      <div style={{ background: C.s3, border: `1px solid ${C.border}`, borderRadius: 14, padding: '20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 11, color: C.t2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Simulação de Financiamento</div>
        {[
          { l: 'Valor do imóvel', v: 'R$ 650.000', bar: 65 },
          { l: 'Entrada (20%)', v: 'R$ 130.000', bar: 20 },
          { l: 'Prazo', v: '360 meses', bar: 75 },
        ].map((f, i) => (
          <div key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: C.t2 }}>{f.l}</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#fff' }}>{f.v}</span>
            </div>
            <div style={{ height: 4, background: C.border, borderRadius: 99, overflow: 'hidden' }}>
              <div style={{ width: `${f.bar}%`, height: '100%', background: '#0ea5e9', borderRadius: 99 }} />
            </div>
          </div>
        ))}
        <div style={{ marginTop: 4, padding: '14px', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: 10 }}>
          <div style={{ fontSize: 11, color: '#0ea5e9', fontWeight: 700, marginBottom: 4 }}>Melhor oferta encontrada</div>
          <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', ...S.serif }}>R$ 3.847 <span style={{ fontSize: 13, fontWeight: 500 }}>/mês</span></div>
          <div style={{ fontSize: 11, color: C.t2, marginTop: 2 }}>Caixa — 8.9% a.a. · 360 meses</div>
        </div>
      </div>
    )
  },
  {
    id: 'whatsapp', tag: 'OPS', icon: MessageCircle,
    title: 'Assistente Loft', sub: 'Financiamento na velocidade do chat',
    headline: 'Toda a inteligência Loft na palma da mão.',
    desc: 'Simulações completas em menos de 15 segundos via WhatsApp. Respostas instantâneas com comparativo de taxas multibanco. O assistente guia compradores e corretores em cada etapa, 24/7.',
    metric: '24/7', metricLabel: 'disponibilidade',
    checks: ['Simulação completa em <15 segundos', 'Comparativo multibanco instantâneo', 'Coleta documental pelo WhatsApp', 'Escalada inteligente para time Loft'],
    accent: '#25d366',
    visual: () => (
      <div style={{ background: '#0e1a13', border: '1px solid #1a3a22', borderRadius: 16, padding: '16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 12, borderBottom: '1px solid #1a3a22' }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: C.orange, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 900, color: '#fff', ...S.serif }}>L</span>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Loft ●</div>
            <div style={{ fontSize: 11, color: '#25d366' }}>online</div>
          </div>
        </div>
        {[
          { msg: 'Simule financiamento: R$650k, entrada 20%, 360m', from: 'user' },
          { msg: 'Simulação pronta! Melhor taxa: Caixa 8.9% a.a.\n→ Parcela: R$3.847/mês\n→ Aprovação: 94% de chance', from: 'loft' },
          { msg: 'Comparativo multibanco disponível. Envio agora?', from: 'loft' },
        ].map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{ maxWidth: '82%', padding: '10px 13px', borderRadius: m.from === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px', background: m.from === 'user' ? '#1a4a28' : '#1e1e1e', fontSize: 12, color: '#ddd', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{m.msg}</div>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'aiforce', tag: 'IA', icon: Cpu,
    title: 'AI Force', sub: 'O Leitor de Documentos Automático',
    headline: 'Zero erro humano. Documentação em segundos.',
    desc: 'Extração automática de dados de +10 tipos de documentos: CNH, matrícula, IPTU, comprovantes. Eliminação total do erro manual e adequação instantânea às regras de cada banco.',
    metric: '0%', metricLabel: 'erro de digitação',
    checks: ['Extração de +10 tipos de documentos', 'Validação cruzada automática', 'Adequação às regras de cada banco', 'Processamento de Matrícula, CNH e IPTU'],
    accent: '#a855f7',
    visual: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          { doc: 'CNH — João Silva', status: 'Extraído', ok: true, fields: 'Nome · CPF · Validade' },
          { doc: 'Matrícula #28.451', status: 'Validado', ok: true, fields: 'Área · Proprietário · Ônus' },
          { doc: 'IPTU 2024', status: 'Processando...', ok: false, fields: 'Endereço · Valor venal' },
        ].map((d, i) => (
          <div key={i} style={{ padding: '14px 16px', background: C.s3, border: `1px solid ${d.ok ? 'rgba(168,85,247,0.2)' : C.border}`, borderRadius: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#ddd' }}>{d.doc}</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: d.ok ? '#a855f7' : C.orange }}>{d.status}</span>
            </div>
            <div style={{ fontSize: 11, color: C.t3 }}>{d.fields}</div>
          </div>
        ))}
        <div style={{ padding: '12px 16px', background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.15)', borderRadius: 10, display: 'flex', gap: 10, alignItems: 'center' }}>
          <Cpu size={16} color="#a855f7" />
          <span style={{ fontSize: 12, color: '#a855f7', fontWeight: 700 }}>3 documentos processados em 4.2s — 0 erros</span>
        </div>
      </div>
    )
  },
  {
    id: 'loftcheck', tag: 'COMPLIANCE', icon: ShieldCheck,
    title: 'Loft Check', sub: 'Checklist Automático de Documentos',
    headline: 'Diagnóstico em segundos. Zero retrabalho.',
    desc: 'Validação instantânea da pasta de documentação baseada nas regras de cada banco. Identificação proativa de inconsistências antes que se tornem atrasos no repasse.',
    metric: '-40%', metricLabel: 'reprovações documentais',
    checks: ['Validação baseada em regras por banco', 'Diagnóstico da pasta mãe em segundos', 'Alerta de risco por unidade', 'Garantia de zero idas e vindas'],
    accent: '#f59e0b',
    visual: () => (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          { item: 'CPF do comprador', status: 'OK', ok: true },
          { item: 'Matrícula atualizada', status: 'OK', ok: true },
          { item: 'Comprovante de renda', status: 'OK', ok: true },
          { item: 'Certidão de casamento', status: 'PENDENTE', ok: false, alert: true },
          { item: 'IPTU — últimos 2 anos', status: 'OK', ok: true },
          { item: 'Contrato de compra e venda', status: 'OK', ok: true },
        ].map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: d.alert ? 'rgba(245,158,11,0.06)' : C.s3, border: `1px solid ${d.alert ? 'rgba(245,158,11,0.25)' : C.border}`, borderRadius: 10 }}>
            <div style={{ width: 20, height: 20, borderRadius: '50%', background: d.ok ? 'rgba(0,200,100,0.1)' : 'rgba(245,158,11,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {d.ok ? <Check size={10} strokeWidth={3} color="#00cc66" /> : <AlertTriangle size={10} color="#f59e0b" />}
            </div>
            <span style={{ fontSize: 12, color: d.alert ? '#f59e0b' : '#aaa', flex: 1 }}>{d.item}</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: d.ok ? '#2a8a4a' : '#f59e0b' }}>{d.status}</span>
          </div>
        ))}
      </div>
    )
  },
];

const SolutionsCarousel = () => {
  const [active, setActive] = useState(0);
  const sol = solutions[active];
  const AccentIcon = sol.icon;

  return (
    <section id="solucoes" style={{ padding: '120px 0 120px', background: C.s1, borderTop: `1px solid ${C.border}`, overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px', marginBottom: 52 }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Tag style={{ marginBottom: 14 }}>Sistema modular</Tag>
          <h2 style={{ fontSize: 52, fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-1.5px', ...S.serif }}>
            O ecossistema completo<br />do repasse
          </h2>
          <p style={{ fontSize: 16, color: C.t2, marginTop: 14, lineHeight: 1.75, maxWidth: 560 }}>
            Seis módulos integrados. Uma única infraestrutura. Do cadastro ao caixa — sem fricção, sem retrabalho.
          </p>
        </motion.div>
      </div>

      {/* Tab strip — horizontal scroll */}
      <div style={{ padding: '0 40px', marginBottom: 40, overflowX: 'auto', display: 'flex', gap: 10, scrollbarWidth: 'none', maxWidth: 1280, margin: '0 auto 40px' }}>
        {solutions.map((s, i) => {
          const Icon = s.icon;
          const isAct = i === active;
          return (
            <button key={s.id} onClick={() => setActive(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '12px 20px', borderRadius: 12, cursor: 'pointer', flexShrink: 0,
                background: isAct ? C.orange : C.s2,
                border: `1px solid ${isAct ? C.orange : C.border}`,
                transition: 'all 0.2s',
                boxShadow: isAct ? `0 4px 20px ${C.orangeGlow}` : 'none'
              }}>
              <Icon size={16} strokeWidth={1.5} color={isAct ? '#fff' : C.orange} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: isAct ? '#fff' : C.t1, whiteSpace: 'nowrap' }}>{s.title}</div>
                <div style={{ fontSize: 11, color: isAct ? 'rgba(255,255,255,0.7)' : C.t2, whiteSpace: 'nowrap' }}>{s.sub}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Content panel */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={sol.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}
          >
            {/* LEFT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{ width: 68, height: 68, borderRadius: 18, background: sol.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 8px 30px ${sol.accent}44` }}>
                  <AccentIcon size={32} color="#fff" strokeWidth={1.5} />
                </div>
                <div>
                  <Tag style={{ marginBottom: 8 }}>{sol.tag}</Tag>
                  <h3 style={{ fontSize: 32, fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-0.8px', ...S.serif, lineHeight: 1.1 }}>{sol.headline}</h3>
                </div>
              </div>

              <Pill val={sol.metric} label={sol.metricLabel} />

              <p style={{ margin: 0, fontSize: 16, color: C.t2, lineHeight: 1.85 }}>{sol.desc}</p>

              <CheckRow items={sol.checks} />

              {/* Nav */}
              <div style={{ display: 'flex', gap: 10, paddingTop: 8 }}>
                <button onClick={() => setActive(Math.max(0, active - 1))} disabled={active === 0}
                  style={{ width: 40, height: 40, borderRadius: 10, border: `1px solid ${C.border}`, background: C.s2, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: active === 0 ? 'not-allowed' : 'pointer', opacity: active === 0 ? 0.3 : 1 }}>
                  <ChevronLeft size={18} color="#fff" />
                </button>
                <button onClick={() => setActive(Math.min(solutions.length - 1, active + 1))} disabled={active === solutions.length - 1}
                  style={{ width: 40, height: 40, borderRadius: 10, border: `1px solid ${C.border}`, background: C.s2, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: active === solutions.length - 1 ? 'not-allowed' : 'pointer', opacity: active === solutions.length - 1 ? 0.3 : 1 }}>
                  <ChevronRight size={18} color="#fff" />
                </button>
                <span style={{ fontSize: 12, color: C.t2, alignSelf: 'center', marginLeft: 4 }}>{active + 1} / {solutions.length}</span>
              </div>
            </div>

            {/* RIGHT — Visual */}
            <div style={{ background: C.s2, border: `1px solid ${C.border}`, borderRadius: 20, padding: '28px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
              <div style={{ fontSize: 11, color: C.t2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 18 }}>{sol.title} — Preview</div>
              {sol.visual()}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// ─── 4. NUMBERS + MAP ────────────────────────────────────────────────────────
const ScaleSection = () => {
  const stats = [
    { v: '1,2M', l: 'transações processadas' },
    { v: '26', l: 'estados com presença nacional' },
    { v: '+R$10B', l: 'em originação de crédito', hl: true },
    { v: '+450K', l: 'contratos sob gestão' },
    { v: '35%', l: 'de crescimento em 2025', hl: true },
  ];

  // Brazil map dots
  const dots = [
    { x: 38, y: 22 }, { x: 52, y: 30 }, { x: 60, y: 38 }, { x: 45, y: 45 },
    { x: 35, y: 55 }, { x: 50, y: 58 }, { x: 62, y: 52 }, { x: 70, y: 40 },
    { x: 42, y: 68 }, { x: 55, y: 72 }, { x: 30, y: 40 }, { x: 65, y: 65 },
    { x: 48, y: 80 }, { x: 58, y: 85 }, { x: 40, y: 33 }, { x: 72, y: 55 },
  ];

  return (
    <section id="resultados" style={{ padding: '120px 40px', background: C.bg, borderTop: `1px solid ${C.border}`, position: 'relative', overflow: 'hidden' }}>
      <Glow style={{ width: 500, height: 500, right: -100, top: '50%', transform: 'translateY(-50%)' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

          {/* LEFT STATS */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div>
              <Tag style={{ marginBottom: 16 }}>Escala nacional</Tag>
              <h2 style={{ fontSize: 50, fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-1.5px', ...S.serif }}>
                Maior intermediadora<br />de financiamento<br />imobiliário do Brasil
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ padding: '20px 20px', background: s.hl ? C.orangeDim : C.s1, border: `1px solid ${s.hl ? C.orangeBorder : C.border}`, borderRadius: 14 }}>
                  <div style={{ fontSize: 38, fontWeight: 900, color: s.hl ? C.orange : '#fff', letterSpacing: '-1.5px', ...S.serif, lineHeight: 1 }}>{s.v}</div>
                  <div style={{ fontSize: 12, color: s.hl ? C.orange : C.t2, marginTop: 6, fontWeight: 600, lineHeight: 1.4 }}>{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Brazil Map */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ position: 'relative', height: 440, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Map bg glow */}
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,102,0,0.06), transparent)', borderRadius: '50%' }} />

            {/* SVG Brazil outline — simplified */}
            <svg viewBox="0 0 110 110" style={{ width: '85%', height: '85%', position: 'absolute' }}>
              <path d="M 28 18 Q 38 12 50 15 Q 65 12 76 20 Q 84 28 82 38 Q 88 42 85 52 Q 80 62 74 68 Q 70 76 65 82 Q 58 90 50 92 Q 42 90 36 82 Q 28 74 24 64 Q 18 54 20 44 Q 18 32 28 18 Z"
                fill="none" stroke={C.border} strokeWidth="0.8" />
              <path d="M 45 18 Q 52 14 60 17 Q 70 20 75 28 Q 80 36 78 46 Q 82 50 80 58 Q 76 66 70 72 Q 64 80 58 84 Q 52 86 46 82 Q 38 76 34 66 Q 28 56 30 46 Q 28 36 34 26 Q 38 20 45 18 Z"
                fill="rgba(255,102,0,0.04)" stroke="rgba(255,102,0,0.15)" strokeWidth="0.5" />
            </svg>

            {/* Dots */}
            {dots.map((d, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{
                  position: 'absolute',
                  left: `${d.x}%`, top: `${d.y}%`,
                  width: i % 4 === 0 ? 10 : 6, height: i % 4 === 0 ? 10 : 6,
                  borderRadius: '50%',
                  background: i % 4 === 0 ? C.orange : 'rgba(255,102,0,0.4)',
                  boxShadow: i % 4 === 0 ? `0 0 12px ${C.orange}` : 'none',
                  transform: 'translate(-50%,-50%)'
                }}
              />
            ))}

            {/* Connecting lines between major dots */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              {dots.filter((_, i) => i % 3 === 0).map((d, i, arr) => {
                const next = arr[(i + 1) % arr.length];
                return (
                  <motion.line key={i}
                    x1={`${d.x}%`} y1={`${d.y}%`} x2={`${next.x}%`} y2={`${next.y}%`}
                    stroke="rgba(255,102,0,0.12)" strokeWidth="0.8"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.8 }}
                  />
                );
              })}
            </svg>

            {/* Label */}
            <div style={{ position: 'absolute', bottom: 20, right: 20, background: C.s1, border: `1px solid ${C.border}`, borderRadius: 10, padding: '10px 14px' }}>
              <div style={{ fontSize: 10, color: C.t2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Cobertura</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: '#fff', ...S.serif }}>26 estados</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ─── 5. RAZÕES PARA PARCERIA — HORIZONTAL FLOW ───────────────────────────────
const PartnershipSection = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  const nodes = [
    {
      icon: Landmark,
      label: 'Plataforma\nMultibanco',
      isLoft: false,
      details: ['Um único cadastro', 'Acesso simultâneo a todos os grandes bancos', 'Motor de roteamento inteligente por perfil'],
    },
    {
      icon: FileText,
      label: 'Documentação\nAutomatizada',
      isLoft: false,
      details: ['AI Force + Loft Check', 'Leitura de +10 tipos de documentos', 'Dossiê automático sem retrabalho'],
    },
    {
      icon: Cpu,
      label: 'Loft OS',
      isLoft: true,
      details: ['Motor multibanco', 'Roteamento inteligente', 'Score otimizado por perfil'],
    },
    {
      icon: Landmark,
      label: 'Bancos\nParceiros',
      isLoft: false,
      details: ['6+ instituições conectadas', 'Competição de taxas em tempo real', 'Aprovação média de 98%'],
    },
    {
      icon: DollarSign,
      label: 'Caixa\nRealizado',
      isLoft: false,
      details: ['Liberação em 15 dias', '−3 p.p. no custo financeiro', 'VGV convertido em resultado'],
    },
  ];

  return (
    <section id="parceria" style={{ padding: '120px 40px', background: C.s1, borderTop: `1px solid ${C.border}`, position: 'relative', overflow: 'hidden' }}>
      <Glow style={{ width: 700, height: 300, top: '30%', left: '50%', transform: 'translateX(-50%)' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 10 }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 80 }}>
          <Tag style={{ marginBottom: 16 }}>Razões para parceria</Tag>
          <h2 style={{ fontSize: 52, fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-1.5px', ...S.serif }}>
            Por que fechar com a Loft
          </h2>
          <p style={{ fontSize: 16, color: C.t2, marginTop: 14, maxWidth: 480, margin: '14px auto 0', lineHeight: 1.75 }}>
            Velocidade e previsibilidade como diferenciais competitivos.<br />
            Giro de capital acelerado e redução do risco de distrato.
          </p>
        </motion.div>

        {/* ── HORIZONTAL FLOW ── */}
        <div style={{ position: 'relative' }}>

          {/* Connector line behind everything */}
          <div style={{
            position: 'absolute', top: 36, left: '10%', right: '10%', height: 2,
            background: `linear-gradient(90deg, ${C.border}, ${C.orange} 40%, ${C.orange} 60%, ${C.border})`,
            zIndex: 0,
          }} />

          {/* Nodes row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, position: 'relative', zIndex: 1 }}>
            {nodes.map((node, i) => {
              const Icon = node.icon;
              const isActive = activeIdx === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}
                >
                  {/* Icon node */}
                  <motion.div
                    onClick={() => setActiveIdx(isActive ? null : i)}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      width: 72, height: 72, borderRadius: 20, cursor: 'pointer',
                      background: node.isLoft
                        ? C.orange
                        : isActive ? C.s2 : C.s2,
                      border: `1px solid ${node.isLoft ? C.orange : isActive ? C.orange : C.borderB}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: node.isLoft
                        ? `0 0 0 6px ${C.orangeDim}, 0 0 32px ${C.orangeGlow}`
                        : isActive ? `0 0 0 4px ${C.orangeDim}` : 'none',
                      transition: 'all 0.25s ease',
                      position: 'relative',
                    }}
                  >
                    <Icon size={28} color={node.isLoft ? '#fff' : isActive ? C.orange : C.t2} strokeWidth={1.5} />
                    {/* active dot indicator */}
                    {isActive && !node.isLoft && (
                      <div style={{
                        position: 'absolute', top: -4, right: -4,
                        width: 10, height: 10, borderRadius: '50%',
                        background: C.orange, border: `2px solid ${C.s1}`,
                      }} />
                    )}
                  </motion.div>

                  {/* Vertical stem down to label */}
                  <div style={{ width: 2, height: 20, background: node.isLoft ? C.orange : C.borderB }} />

                  {/* Label */}
                  <div style={{
                    textAlign: 'center', padding: '10px 8px',
                    background: node.isLoft ? C.orangeDim : 'transparent',
                    border: node.isLoft ? `1px solid ${C.orangeBorder}` : '1px solid transparent',
                    borderRadius: 10,
                  }}>
                    {node.label.split('\n').map((line, li) => (
                      <div key={li} style={{
                        fontSize: 12, fontWeight: node.isLoft ? 800 : 700,
                        color: node.isLoft ? C.orange : isActive ? '#fff' : C.t2,
                        letterSpacing: '0.01em', lineHeight: 1.4,
                        transition: 'color 0.2s',
                      }}>{line}</div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detail cards row — shown below active node */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, marginTop: 16 }}>
            {nodes.map((node, i) => (
              <div key={i} style={{ padding: '0 8px' }}>
                <AnimatePresence>
                  {activeIdx === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scaleY: 0.9 }}
                      animate={{ opacity: 1, y: 0, scaleY: 1 }}
                      exit={{ opacity: 0, y: -8, scaleY: 0.9 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        background: node.isLoft ? 'rgba(255,102,0,0.08)' : C.s2,
                        border: `1px solid ${node.isLoft ? C.orangeBorder : C.borderB}`,
                        borderRadius: 14, padding: '18px 16px',
                        display: 'flex', flexDirection: 'column', gap: 10,
                        transformOrigin: 'top center',
                      }}
                    >
                      {node.details.map((d, di) => (
                        <div key={di} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                          <div style={{
                            width: 18, height: 18, borderRadius: '50%', flexShrink: 0, marginTop: 1,
                            background: node.isLoft ? 'rgba(255,255,255,0.15)' : C.orangeDim,
                            border: `1px solid ${node.isLoft ? 'rgba(255,255,255,0.2)' : C.orangeBorder}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>
                            <Check size={9} strokeWidth={3} color={node.isLoft ? '#fff' : C.orange} />
                          </div>
                          <span style={{ fontSize: 12, color: node.isLoft ? 'rgba(255,255,255,0.85)' : C.t1, lineHeight: 1.55 }}>{d}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Hint if nothing selected */}
          {activeIdx === null && (
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ textAlign: 'center', fontSize: 13, color: C.t3, marginTop: 28, letterSpacing: '0.02em' }}
            >
              Clique em qualquer etapa para ver os detalhes
            </motion.p>
          )}
        </div>

        {/* ── BOTTOM METRICS STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
        >
          {[
            { icon: TrendingUp, metric: '35%', metricLabel: 'mais ágil', title: 'Velocidade e previsibilidade', desc: 'Esteira 35% mais rápida que o mercado e maior taxa de aprovação.' },
            { icon: DollarSign, metric: '−3 p.p.', metricLabel: 'no custo', title: 'Giro de capital acelerado', desc: 'Redução do custo financeiro da obra. Lucro planejado = lucro realizado.' },
            { icon: ShieldCheck, metric: '98%', metricLabel: 'aprovação', title: 'Menor risco de distrato', desc: 'Aprovação rápida reduz a janela de exposição ao risco de desistência.' },
          ].map((item, i) => (
            <div key={i} style={{
              background: C.s2, border: `1px solid ${C.border}`, borderRadius: 16,
              padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16,
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = C.borderB}
              onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: C.orangeDim, border: `1px solid ${C.orangeBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <item.icon size={20} color={C.orange} strokeWidth={1.5} />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: C.orange, letterSpacing: '-1px', lineHeight: 1, ...S.serif }}>{item.metric}</div>
                  <div style={{ fontSize: 11, color: C.t2, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.metricLabel}</div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: C.t2, lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ─── 6. FAQ ──────────────────────────────────────────────────────────────────
const FAQ = () => {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: 'Quanto custa a plataforma?', a: 'A Loft opera em modelo de resultado — sem mensalidade, sem taxa de setup. A remuneração é atrelada ao sucesso do repasse. Fale com um especialista para estruturar o modelo ideal para o seu volume.' },
    { q: 'Com quais bancos a Loft opera?', a: 'Caixa Econômica Federal, Itaú, Bradesco, Santander, Inter e BRB — com expansão contínua da rede. Um único cadastro acessa todos simultaneamente.' },
    { q: 'Em quanto tempo vejo resultado?', a: 'Incorporadoras que ativam a plataforma reduzem o ciclo de repasse em 35% já nos primeiros 60 dias. O impacto no fluxo de caixa é imediato.' },
    { q: 'A Loft substitui meu time de crédito?', a: 'Não substitui — amplifica. A automação elimina o retrabalho operacional, liberando seu time para fechar contratos e manter relações. Especialistas Loft cobrem reversão de crédito negado.' },
    { q: 'Como funciona a integração com meu empreendimento?', a: 'Diagnóstico gratuito em 1 reunião. Mapeamos o pipeline atual, calculamos impacto potencial no caixa, e configuramos a plataforma para o seu empreendimento. Zero compromisso.' },
  ];

  return (
    <section style={{ padding: '120px 40px', background: C.s1, borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <Tag style={{ marginBottom: 14 }}>Perguntas frequentes</Tag>
          <h2 style={{ fontSize: 46, fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-1.5px', ...S.serif }}>Respostas diretas</h2>
        </motion.div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {faqs.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              style={{ background: C.s2, border: `1px solid ${open === i ? C.borderB : C.border}`, borderRadius: 12, overflow: 'hidden', transition: 'border-color 0.2s' }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#fff', textAlign: 'left' }}>{f.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}><ChevronDown size={18} color={C.t2} /></motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
                    <p style={{ margin: 0, padding: '0 24px 20px', fontSize: 14, color: C.t2, lineHeight: 1.85 }}>{f.a}</p>
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

// ─── 7. CTA ──────────────────────────────────────────────────────────────────
const CTA = () => (
  <section style={{ padding: '140px 40px', background: C.bg, borderTop: `1px solid ${C.border}`, position: 'relative', overflow: 'hidden' }}>
    <Grid opacity={0.6} />
    <Glow style={{ width: 800, height: 500, bottom: -200, left: '50%', transform: 'translateX(-50%)' }} />
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <Tag>O futuro da sua liquidez começa agora</Tag>
      <h2 style={{ fontSize: 60, fontWeight: 900, color: '#fff', margin: 0, lineHeight: 1.02, letterSpacing: '-2px', ...S.serif }}>
        Seu empreendimento não pode esperar o crédito andar.
      </h2>
      <p style={{ fontSize: 18, color: C.t2, margin: 0, lineHeight: 1.75, maxWidth: 500 }}>
        VGV em caixa 35% mais rápido protege a margem, reduz custo de capital e converte lucro planejado em lucro realizado.
      </p>
      <button style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 36px', background: C.orange, color: '#fff', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 800, cursor: 'pointer', boxShadow: `0 12px 48px ${C.orangeGlow}`, letterSpacing: '0.01em' }}>
        Agendar diagnóstico gratuito <ArrowUpRight size={20} />
      </button>
      <div style={{ display: 'flex', gap: 28, marginTop: 8 }}>
        {['Zero custo de setup', 'Resultado em 60 dias', 'Sem compromisso'].map(item => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <Check size={13} color={C.orange} strokeWidth={3} />
            <span style={{ fontSize: 13, color: C.t2, fontWeight: 600 }}>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

// ─── FOOTER ──────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{ background: '#050505', borderTop: `1px solid ${C.border}`, padding: '36px 40px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontWeight: 900, fontSize: 24, color: '#fff', letterSpacing: '-1px', ...S.serif }}>loft<span style={{ color: C.orange }}>.</span></span>
        <span style={{ fontSize: 10, color: C.t3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Canal Incorporações</span>
      </div>
      <p style={{ fontSize: 12, color: C.t3, margin: 0 }}>© {new Date().getFullYear()} Loft Canal Incorporações. Infraestrutura de crédito imobiliário.</p>
    </div>
  </footer>
);

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ fontFamily: '-apple-system,"Helvetica Neue",sans-serif', background: C.bg, color: C.t1, lineHeight: 1.5, WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}>
      <Navbar />
      <Hero />
      <Bridge />
      <SolutionsCarousel />
      <ScaleSection />
      <PartnershipSection />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
