import React, { useState } from 'react';
import { 
  Briefcase, 
  Cpu, 
  TrendingUp, 
  Target, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Globe, 
  Database, 
  Layers, 
  Zap,
  CheckCircle2,
  BarChart3,
  Sparkles,
  HeartHandshake,
  Users,
  GraduationCap,
  ScrollText,
  BrainCircuit,
  Building
} from 'lucide-react';

// --- DADOS DO CURRÍCULO ---
const profileData = {
  name: "Regis Heverton Reis",
  headline: "Head de Tecnologia | Head de PMO | Governan\u00e7a de TI | Gest\u00e3o de Portf\u00f3lio | Opera\u00e7\u00f5es de Tecnologia | Transforma\u00e7\u00e3o Organizacional",
  titles: [
    {
      title: "Head de Tecnologia",
      description: "Responsável por liderar a área de TI, garantindo que sistemas, infraestrutura e equipes suportem o crescimento do negócio, com foco em eficiência, segurança e estabilidade."
    },
    {
      title: "Head de PMO",
      description: "Responsável por estruturar e liderar o escritório de projetos, garantindo que as iniciativas estratégicas sejam entregues com controle e previsibilidade, com foco em organização de prioridades, governança e execução."
    },
    {
      title: "Governança de TI",
      description: "Responsável por estabelecer práticas de organização e controle, garantindo o alinhamento da tecnologia com o negócio, com foco em processos, indicadores, riscos, compliance e tomada de decisão estruturada."
    },
    {
      title: "Gestão de Portfólio",
      description: "Responsável por priorizar e organizar projetos e iniciativas, garantindo que os recursos sejam direcionados para o que realmente gera resultado, com foco em impacto estratégico e geração de valor."
    },
    {
      title: "Operações",
      description: "Responsável pela gestão do dia a dia da tecnologia, garantindo que sistemas, suporte e serviços funcionem ininterruptamente, com foco em estabilidade, performance e continuidade para o negócio."
    },
    {
      title: "Transformação Organizacional",
      description: "Responsável por reestruturar processos, tecnologia e modelo de operação, garantindo o aumento da eficiência e maturidade, com foco na capacidade de escala e crescimento da empresa."
    },
    {
      title: "Visão Multisetorial",
      description: "Capacidade de atuar de forma fluida em diferentes indústrias, garantindo a rápida adaptação de governança e tecnologia, com foco em trazer as melhores práticas do mercado global para gerar vantagem competitiva."
    }
  ],
  humanFactors: [
    {
      title: "Desenvolvimento de Equipes",
      icon: Users,
      description: "Capacidade de nutrir e mentorar talentos, garantindo o crescimento contínuo do time, com foco na formação de profissionais autônomos, engajados e de alta capacidade de resolução."
    },
    {
      title: "Comunicação Executiva",
      icon: HeartHandshake,
      description: "Habilidade de conectar a diretoria à operação, garantindo alinhamento transparente entre estratégia e execução, com foco na clareza de expectativas e eliminação de ruídos."
    },
    {
      title: "Alta Performance Sustentável",
      icon: Target,
      description: "Estruturação de um ambiente psicologicamente seguro, garantindo entregas consistentes e de alto nível, com foco no equilíbrio, motivação e retenção de talentos a longo prazo."
    }
  ],
  peoplePractices: [
    "One-on-One (1:1)", 
    "Cultura de Feedback Contínuo", 
    "Plano de Desenvolvimento (PDI)", 
    "Mentoria e Empoderamento", 
    "Gestão de Clima e Engajamento",
    "Resolução de Conflitos"
  ],
  contact: {
    email: "rhrreis@gmail.com",
    phone: "(32) 99173-9993",
    linkedin: "linkedin.com/in/regis-reis",
    location: "São Paulo – SP / Juiz de Fora - MG"
  },
  stats: [
    { label: "Anos de Experiência", value: "20+" },
    { label: "Projetos Implantados", value: "1000+" },
    { label: "Projetos Simultâneos", value: "40+" },
    { label: "Profissionais Liderados", value: "25+" }
  ],
  skills: {
    management: [
      { name: "Gestão de PMO Corporativo", level: 95 },
      { name: "Gestão de Portfólio Estratégico", level: 95 },
      { name: "Governança de Projetos", level: 95 },
      { name: "Gestão de Delivery & Sustentação", level: 90 },
      { name: "Estruturação Organizacional", level: 90 }
    ],
    tech: ["TOTVS RM", "Fluig", "ERP Mega", "Oracle JD Edwards", "SAP", "Power BI", "SQL Server", "GitHub Codex / Copilot", "Supabase", "React (Conceitos)"],
    methodologies: ["PMBOK", "ITIL", "Scrum", "Kanban", "OKR", "AGF (Próprio)"]
  },
  certifications: [
    "Gestão de Projetos baseada no PMI",
    "ITIL Foundations",
    "Scrum & Kanban",
    "Governança de TI",
    "Gestão de Serviços de TI",
    "Certificação em metodologia TOTVS de implantação de sistemas",
    "Capacitação ERP JD Edwards",
    "Capacitação TOTVS RM",
    "Capacitação Fluig BPM"
  ],
  aiStudies: [
    "Engenharia de Prompts (GPT)",
    "Uso corporativo de IA aplicada à gestão e produtividade",
    "Inteligência Artificial aplicada à gestão de projetos",
    "Estruturação de documentação e suporte à engenharia de soluções"
  ],
  education: [
    {
      course: "Sistemas de Informação",
      institution: "UNIPAC – Centro Universitário Presidente Antônio Carlos",
      period: "1998 - 2000"
    },
    {
      course: "Ensino Técnico, Processamento de Dados",
      institution: "Escola Técnica Pio XII",
      period: "1998 - 2001"
    }
  ],
  experiences: [
    {
      id: 1,
      company: "Baumgratz Code",
      role: "HEAD de PMO, Portfólio & TI",
      period: "nov de 2024 - o momento",
      location: "Juiz de Fora, MG",
      award: "CONCEPÇÃO DA AGF",
      summary: "Head executivo responsável pela estruturação da operação de tecnologia, implantação do PMO corporativo e governança integrada de portfólio, delivery, sustentação e produtos. Atuação direta com a diretoria na definição de estratégia tecnológica, capacidade operacional, priorização de iniciativas e modelo de execução, conectando tecnologia aos objetivos de negócio.",
      responsibilities: [
        "Estruturação do PMO corporativo e governança de projetos e portfólio.",
        "Definição de modelo operacional, papéis, fluxos e capacidade produtiva.",
        "Gestão de portfólio estratégico com priorização baseada em impacto e valor.",
        "Liderança de equipe multidisciplinar (~25 profissionais).",
        "Gestão simultânea de ~40 iniciativas entre projetos, sustentação e evolução.",
        "Implantação de ritos executivos, KPIs, SLAs, OKR, indicadores e gestão de riscos.",
        "Aplicação da metodologia TOTVS na condução de projetos, governança, riscos e qualidade.",
        "Organização das operações de delivery e sustentação, elevando eficiência e previsibilidade.",
        "Estruturação da área de produtos, backlog estratégico e apoio ao roadmap.",
        "Interface com áreas de negócio, traduzindo demandas em iniciativas estruturadas.",
        "Atuação no comercial técnico (escopo, estimativas, viabilidade e pipeline).",
        "Aplicação de IA na gestão de requisitos, backlog, documentação e produtividade.",
        "Criação do ADAPTIVE GATE FRAMEWORK, modelo proprietário de governança de portfólio."
      ],
      results: [
        "Aumento da previsibilidade, controle e qualidade das entregas.",
        "Evolução da maturidade de gestão e governança tecnológica.",
        "Ganho de produtividade e eficiência operacional.",
        "Maior alinhamento entre tecnologia, produtos e estratégia corporativa.",
        "Fortalecimento da disciplina de execução e tomada de decisão baseada em dados."
      ]
    },
    {
      id: 2,
      company: "INC Empreendimentos",
      role: "Head de Tecnologia",
      period: "dez de 2022 - nov de 2024",
      location: "Juiz de Fora, MG",
      summary: "Head responsável pela liderança estratégica da área de Tecnologia e implantação da governança corporativa de projetos, com atuação direta junto à diretoria na definição de direcionamento tecnológico, priorização de iniciativas e planejamento de investimentos.",
      responsibilities: [
        "Estruturação e liderança da área de Tecnologia (infraestrutura, segurança, sistemas e suporte).",
        "Implantação do PMO corporativo e governança de projetos e portfólio.",
        "Planejamento e gestão de orçamento (Capex/Opex), com foco em eficiência e otimização de custos.",
        "Definição de políticas de segurança, LGPD, backup e continuidade (DRP).",
        "Gestão de fornecedores estratégicos, contratos, auditorias e compliance.",
        "Liderança de projetos de modernização tecnológica (ERP, BPM, BI e HCM).",
        "Estruturação de processos, padronização operacional e aumento de maturidade organizacional.",
        "Implementação de indicadores, KPIs, SLAs e gestão de performance da operação."
      ],
      results: [
        "Estruturação e profissionalização da área de tecnologia.",
        "Redução de custos operacionais e otimização de contratos.",
        "Aumento da eficiência e integração entre áreas corporativas.",
        "Evolução da maturidade de governança e controle tecnológico.",
        "Melhoria da estabilidade, segurança e performance da operação.",
        "Preparação da área de TI para auditorias externas e compliance."
      ]
    },
    {
      id: 3,
      company: "INC Empreendimentos",
      role: "Head de PMO e Governança",
      period: "ago de 2021 - dez de 2022",
      location: "Juiz de Fora, MG",
      summary: "Responsável pela implantação do PMO corporativo e estruturação da governança de projetos e portfólio. Atuação focada na criação de modelo de gestão orientado a previsibilidade, controle, eficiência e alinhamento entre tecnologia e objetivos de negócio. Evolução interna decorrente da consolidação do PMO corporativo.",
      responsibilities: [
        "Implantação do PMO corporativo e definição da metodologia de gestão de projetos.",
        "Estruturação da governança de portfólio, com critérios de priorização baseados em impacto, risco e valor.",
        "Organização do backlog estratégico e alinhamento entre demandas e direcionadores corporativos.",
        "Definição de modelo de governança com ritos executivos, KPIs, SLAs, OKRs e gestão de riscos.",
        "Apoio à diretoria na tomada de decisão, priorização de investimentos e direcionamento estratégico."
      ],
      results: [
        "Estruturação do PMO corporativo do zero.",
        "Organização e priorização do portfólio estratégico.",
        "Aumento da previsibilidade, controle e transparência das iniciativas.",
        "Evolução da maturidade de governança e gestão de projetos."
      ]
    },
    {
      id: 4,
      company: "INC Empreendimentos",
      role: "Coordenador de Sistemas e Transformação de Processos",
      period: "jan de 2018 - ago de 2021",
      location: "Juiz de Fora, MG",
      summary: "Responsável pela coordenação da sustentação e evolução de sistemas corporativos, com atuação na integração entre tecnologia e áreas de negócio e apoio à melhoria contínua dos processos organizacionais. Posição estratégica de entrada na organização.",
      responsibilities: [
        "Coordenação da sustentação e evolução do ERP Mega Construção e CRMs corporativos.",
        "Condução de projetos de melhorias, integrações, automações e modernização de processos.",
        "Implantação e governança de plataformas de assinatura eletrônica (DocuSign e Adobe Sign).",
        "Mapeamento, documentação e revisão de processos críticos administrativos, financeiros e comerciais."
      ],
      results: [
        "Estabilização e aumento da confiabilidade dos sistemas corporativos.",
        "Redução de retrabalho e inconsistências operacionais.",
        "Evolução da maturidade de processos e governança de sistemas.",
        "Estruturação da base operacional que suportou a evolução para liderança da área de tecnologia."
      ]
    },
    {
      id: 5,
      company: "SS Business",
      role: "Gerente de Projetos e Implantação",
      period: "dez de 2014 - nov de 2018",
      location: "Rio de Janeiro e Região",
      summary: "Responsável pela condução de projetos de implantação de sistemas ERP e WMS em clientes corporativos, atuando na integração entre tecnologia, operação e processos de negócio em ambientes logísticos e de distribuição.",
      responsibilities: [
        "Gestão end-to-end de projetos de implantação (planejamento, execução, estabilização e entrega).",
        "Coordenação de equipes multidisciplinares (técnicas e funcionais).",
        "Interface com clientes e stakeholders, garantindo alinhamento e comunicação executiva.",
        "Tradução de necessidades de negócio em requisitos funcionais e técnicos.",
        "Condução de integrações entre sistemas corporativos e operações logísticas."
      ],
      results: [
        "Implantação bem-sucedida de sistemas ERP e WMS em múltiplos clientes corporativos.",
        "Aumento da eficiência operacional e melhoria de processos logísticos e de distribuição.",
        "Redução de falhas operacionais e maior estabilidade pós-implantação.",
        "Entregas consistentes dentro de prazo, escopo e qualidade."
      ]
    },
    {
      id: 6,
      company: "Delage",
      role: "Gerente de Projetos e Implantação",
      period: "jun de 2013 - set de 2014",
      location: "Rio de Janeiro e Região",
      summary: "Condução de projetos de implantação de sistemas ERP e WMS em clientes de grande porte, atuando em múltiplos projetos simultâneos de média e alta complexidade, com foco em execução disciplinada.",
      responsibilities: [
        "Gestão end-to-end de 11 projetos de implantação ERP (Delage RX) e WMS.",
        "Definição de escopo, cronogramas, recursos, riscos e critérios de sucesso.",
        "Coordenação de equipes multidisciplinares e interface com stakeholders.",
        "Condução de testes integrados, homologações, validação funcional e go-live.",
        "Atuação em ambientes de alta criticidade operacional e pressão por entrega."
      ],
      results: [
        "Entrega de 11 projetos com aderência a prazo, escopo e qualidade.",
        "Redução consistente de falhas operacionais e aumento de produtividade logística.",
        "Melhoria da acuracidade de estoque e eficiência de inventários.",
        "Aumento da estabilidade pós-go-live e redução de incidentes."
      ]
    },
    {
      id: 7,
      company: "Mercantil Farmed",
      role: "Gerente de TI e Projetos",
      period: "jul de 2010 - abr de 2013",
      location: "São Paulo",
      summary: "Responsável pela gestão da área de Tecnologia da Informação, abrangendo infraestrutura, sistemas, suporte e projetos, com atuação direta na modernização do ambiente tecnológico e integração entre TI e operação.",
      responsibilities: [
        "Gestão completa da operação de TI (infraestrutura, sistemas, suporte e segurança).",
        "Condução da integração WMS (Delage RX) com SAP para operação da Sanofi/Medley.",
        "Planejamento e execução da migração de Data Center, incluindo infraestrutura e redes.",
        "Gestão de equipes de suporte e operação, com foco em disponibilidade e performance."
      ],
      results: [
        "Modernização da infraestrutura tecnológica, elevando estabilidade e segurança.",
        "Integração de sistemas críticos, aumentando eficiência logística e operacional.",
        "Melhoria da eficiência operacional em áreas administrativas e logísticas."
      ]
    },
    {
      id: 8,
      company: "Sedna Consulting",
      role: "Coordenador de Projetos ERP | Consultor ERP",
      period: "jun de 2007 - jul de 2010",
      location: "São Paulo",
      summary: "Iniciou como Consultor ERP (Distribuição, Logística e Processos) e evoluiu para Coordenador de Projetos ERP Oracle JD Edwards. Atuou na integração entre tecnologia, processos e áreas de negócio em ambientes corporativos de médio e grande porte.",
      responsibilities: [
        "Coordenação de projetos de implantação, melhorias e sustentação do ERP JD Edwards.",
        "Liderança de equipes de consultores N1, N2 e N3, garantindo qualidade e ritmo de entrega.",
        "Implementação de práticas de governança e padronização baseadas em ITIL.",
        "Parametrização e ajustes sistêmicos alinhados às necessidades do negócio (como Consultor)."
      ],
      results: [
        "Aumento da confiabilidade das operações fiscais, contábeis e logísticas.",
        "Estabilização de operações críticas e maior aderência ao negócio.",
        "Evolução da maturidade de processos e governança de sistemas."
      ]
    },
    {
      id: 9,
      company: "EDS, an HP Company",
      role: "Consultor ERP JDEDWARDS Distribuição e Logística",
      period: "jun de 2006 - jun de 2007",
      location: "São Paulo e Região",
      summary: "Atuação como consultor funcional de Distribuição e Logística no Oracle/JDEdwards, apoiando operações corporativas de grande porte em regime de outsourcing.",
      responsibilities: [
        "Suporte funcional Nível 2 em módulos essenciais (Compras, Vendas, Estoque, WMS, Fiscal, Financeiro, Contabilidade).",
        "Suporte às equipes de homologação, testes integrados e correções.",
        "Mapeamento e documentação de processos críticos e desenvolvimento de ferramentas de SLA."
      ],
      results: [
        "Aumento da confiabilidade dos processos críticos através de ajustes funcionais.",
        "Redução de falhas e inconsistências em módulos críticos do JDEdwards.",
        "Evolução da governança de atendimento com ferramentas e controles de SLA."
      ]
    },
    {
      id: 10,
      company: "Mercantil Farmed Ltda",
      role: "Analista de negócios em TI",
      period: "out de 2003 - mai de 2006",
      location: "São Paulo",
      summary: "Atuação como analista responsável pela implantação, sustentação e evolução do ERP Delage RX e apoio funcional ao Oracle/JDEdwards.",
      responsibilities: [
        "Implantação completa de múltiplos módulos (Compras, Vendas, Estoque, WMS, Transportes, Fiscal, etc).",
        "Treinamento de usuários-chave e equipes operacionais.",
        "Suporte Nível 1 e 2 para áreas operacionais, administrativas e financeiras."
      ],
      results: [
        "Suporte direto à operação farmacêutica, assegurando precisão de estoque e integridade de dados.",
        "Redução de erros operacionais através de mapeamento e revisão de processos."
      ]
    },
    {
      id: 11,
      company: "Delage Consultoria & Sistemas",
      role: "Analista de negócios em TI",
      period: "jan de 2001 - jun de 2003",
      location: "Juiz de Fora e Região",
      summary: "Atuação em implantação, treinamento, sustentação e evolução do ERP Disbby (Delage RX), cobrindo processos administrativos, financeiros, fiscais e logísticos.",
      responsibilities: [
        "Implantação de módulos críticos (Estoque, WMS, Fiscal, Financeiro).",
        "Treinamento de usuários finais e elaboração de documentação técnica/funcional.",
        "Apoio direto às operações logísticas com foco em precisão e eficiência."
      ],
      results: [
        "Implantação completa do ERP Disbby elevando a eficiência operacional dos clientes.",
        "Aumento da precisão em estoque, vendas, compras, fiscal e financeiro.",
        "Melhoria da maturidade operacional por meio de documentação e treinamentos."
      ]
    }
  ]
};

// --- COMPONENTES ---

const StatCard = ({ icon: Icon, value, label }) => (
  <div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 group">
    <Icon className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
    <span className="text-3xl font-bold text-white mb-1">{value}</span>
    <span className="text-sm text-slate-400 text-center">{label}</span>
  </div>
);

const ProgressBar = ({ label, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-slate-300">{label}</span>
      <span className="text-sm text-blue-400">{percentage}%</span>
    </div>
    <div className="w-full bg-slate-700 rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-blue-500 to-teal-400 h-2 rounded-full transition-all duration-1000 ease-out" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const ExperienceTimelineItem = ({ exp }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pl-8 pb-8 group">
      {/* Linha do tempo */}
      <div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-slate-700 group-last:bg-transparent"></div>
      {/* Ponto */}
      <div className={`absolute left-0 top-2 w-6 h-6 rounded-full border-4 border-slate-900 z-10 transition-colors duration-300 ${isOpen ? 'bg-blue-500' : 'bg-slate-600 group-hover:bg-teal-400'}`}></div>
      
      <div 
        className={`bg-slate-800/40 border transition-all duration-300 rounded-xl p-6 cursor-pointer backdrop-blur-sm relative overflow-hidden ${isOpen ? 'border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)] bg-slate-800/60' : 'border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/50'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* SELO DE PREMIAÇÃO (EX: AGF) */}
        {exp.award && (
          <div className="absolute top-0 right-0 bg-gradient-to-bl from-amber-300 via-amber-500 to-orange-500 text-slate-950 text-[0.65rem] sm:text-xs font-extrabold px-3 py-1.5 sm:px-4 sm:py-2 rounded-bl-2xl shadow-[0_4px_15px_rgba(245,158,11,0.5)] flex items-center gap-1.5 uppercase tracking-wider z-20">
            <Award className="w-3.5 h-3.5 fill-slate-950" />
            {exp.award}
          </div>
        )}

        <div className={`flex justify-between items-start flex-wrap gap-4 ${exp.award ? 'pr-28 sm:pr-40' : ''}`}>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <p className="text-blue-400 font-bold flex items-center gap-1.5 text-sm sm:text-base">
                <Briefcase className="w-4 h-4" /> {exp.company}
              </p>
              <span className="hidden sm:inline text-slate-600">•</span>
              <p className="text-slate-400 font-medium flex items-center gap-1.5 text-sm">
                <MapPin className="w-3.5 h-3.5" /> {exp.location}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="px-3 py-1.5 bg-slate-900 rounded-full text-xs font-semibold text-slate-300 border border-slate-700 whitespace-nowrap">
              {exp.period}
            </span>
            <div className="p-1.5 rounded-full bg-slate-700/50 group-hover:bg-slate-600 transition-colors">
              {isOpen ? <ChevronUp className="w-4 h-4 text-white" /> : <ChevronDown className="w-4 h-4 text-white" />}
            </div>
          </div>
        </div>
        
        <p className="text-slate-300 mt-4 text-sm sm:text-[0.95rem] leading-relaxed font-light">
          {exp.summary}
        </p>

        {isOpen && (
          <div className="mt-6 pt-5 border-t border-slate-700/60 animate-in fade-in slide-in-from-top-2">
            
            {/* Responsabilidades */}
            {exp.responsibilities && exp.responsibilities.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-bold text-blue-300 mb-3 flex items-center gap-2 uppercase tracking-wide">
                  <Target className="w-4 h-4" /> Principais Responsabilidades
                </h4>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/70 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Resultados */}
            {exp.results && exp.results.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2 uppercase tracking-wide">
                  <TrendingUp className="w-4 h-4" /> Resultados Chave
                </h4>
                <ul className="space-y-2.5">
                  {exp.results.map((res, idx) => (
                    <li key={idx} className="text-sm text-emerald-100/80 flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Elementos de background decorativos */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/15 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-900/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* HEADER / HERO SECTION */}
        <header className="mb-12 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
              <Zap className="w-4 h-4" /> Executivo de Tecnologia & Operações
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
              {profileData.name}
            </h1>
            <h2 className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 font-semibold max-w-5xl leading-relaxed">
              {profileData.headline}
            </h2>
            <h2 className="mt-4 text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 font-medium max-w-3xl leading-relaxed">
              Transformando complexidade em previsibilidade operacional através de Governança, IA e Liderança Estratégica.
            </h2>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-8">
              <a href={`https://outlook.office.com/mail/deeplink/compose?to=${profileData.contact.email}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white bg-slate-900 px-4 py-2 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all shadow-sm">
                <Mail className="w-4 h-4 text-blue-400" /> {profileData.contact.email}
              </a>
              <span className="flex items-center gap-2 text-slate-300 bg-slate-900 px-4 py-2 rounded-lg border border-slate-700 cursor-default">
                <Phone className="w-4 h-4 text-blue-400" /> {profileData.contact.phone}
              </span>
              <span className="flex items-center gap-2 text-slate-300 bg-slate-900 px-4 py-2 rounded-lg border border-slate-700 cursor-default">
                <MapPin className="w-4 h-4 text-blue-400" /> SP / MG
              </span>
              <a href={`https://${profileData.contact.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white bg-blue-600/20 hover:bg-blue-600/30 px-4 py-2 rounded-lg border border-blue-500/40 transition-all shadow-sm">
                <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/3 grid grid-cols-2 gap-4">
             {profileData.stats.map((stat, idx) => (
                <StatCard key={idx} icon={BarChart3} value={stat.value} label={stat.label} />
             ))}
          </div>
        </header>

        {/* NAVEGAÇÃO DE ABAS */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center bg-slate-900/80 backdrop-blur border border-slate-800 p-1.5 rounded-xl gap-1">
            {[
              { id: 'overview', label: 'Visão Executiva' },
              { id: 'experience', label: 'Jornada Profissional' },
              { id: 'certifications', label: 'Qualificações & Formação' },
              { id: 'skills', label: 'Matriz de Competências' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-lg scale-105' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CONTEÚDO DAS ABAS */}
        <div className="min-h-[500px]">
          
          {/* TAB: VISÃO GERAL (DASHBOARD) */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Card Perfil Executivo */}
              <div className="col-span-1 md:col-span-2 bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">Perfil Executivo</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 text-[1.05rem]">
                  Executivo de Tecnologia com foco em governança, transformação e escala de operações. Com <strong className="text-blue-300 font-semibold">sólida atuação multisetorial</strong>, possuo a vantagem estratégica de adaptar rapidamente as melhores práticas de diferentes indústrias para a sua operação, conectando tecnologia à geração de valor, eficiência operacional e tomada de decisão. Experiência na organização de ambientes complexos e profissionalização de empresas em crescimento.
                </p>
                <div className="flex flex-wrap gap-3">
                  {profileData.titles.map((item, idx) => (
                    <div key={idx} className="relative group/tag">
                      <span className="px-4 py-2 inline-block bg-slate-800/80 border border-slate-600/60 rounded-xl text-sm font-medium text-slate-200 shadow-sm group-hover/tag:bg-slate-700 group-hover/tag:border-blue-500/50 group-hover/tag:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-help">
                        {item.title}
                      </span>
                      
                      {/* Tooltip Box Premium */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl opacity-0 invisible group-hover/tag:opacity-100 group-hover/tag:visible transition-all duration-300 z-50 pointer-events-none transform group-hover/tag:-translate-y-1">
                        <p className="text-xs text-slate-300 leading-relaxed text-left font-normal">
                          {item.description}
                        </p>
                        {/* Triângulo apontando para baixo */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-[6px] border-transparent border-t-slate-700"></div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[2px] border-[6px] border-transparent border-t-slate-900"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card AGF Framework */}
              <div className="col-span-1 bg-slate-900/40 border border-amber-500/40 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden group hover:border-amber-400/70 hover:bg-slate-900/60 transition-all shadow-[0_0_30px_rgba(245,158,11,0.15)] flex flex-col justify-center mt-2 md:mt-0">
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-amber-300 via-amber-500 to-orange-500 text-slate-950 text-[0.7rem] font-extrabold px-4 py-2 rounded-bl-2xl shadow-[0_4px_15px_rgba(245,158,11,0.5)] flex items-center gap-1.5 uppercase tracking-wider z-20">
                  <Award className="w-3.5 h-3.5 fill-slate-950" />
                  Metodologia Própria
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/15 rounded-full blur-2xl group-hover:bg-amber-500/25 transition-all"></div>
                <div className="flex items-center gap-4 mb-6 relative z-10 mt-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/40 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">
                    Metodologia AGF
                  </h3>
                </div>
                <p className="text-slate-300 text-[1.05rem] leading-relaxed relative z-10 mb-4">
                  Criador do <strong className="text-amber-300 font-bold drop-shadow-md">Adaptive Gate Framework</strong>.
                </p>
                <p className="text-sm text-slate-300 relative z-10 font-medium">
                  Governança de portfólio proprietária, estruturada para redução de ambiguidades e aumento de previsibilidade, unindo práticas de PMI, Metodologias Ágeis e OKRs.
                </p>
              </div>

              {/* Card MEGA DESTAQUE - Inovação & IA (Full Width Banner) */}
              <div className="col-span-1 md:col-span-3 relative group overflow-hidden rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_40px_rgba(99,102,241,0.25)] hover:shadow-[0_0_60px_rgba(99,102,241,0.4)] transition-all duration-500">
                <div className="bg-slate-950/95 backdrop-blur-xl p-8 md:p-12 rounded-[22px] relative z-10 h-full flex flex-col md:flex-row items-center md:justify-between gap-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-3xl rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
                  <div className="flex-1 relative z-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                      <Sparkles className="w-4 h-4 text-indigo-400" /> Diferencial Competitivo de Vanguarda
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 flex items-center gap-4">
                      Vantagem Competitiva com I.A.
                    </h3>
                    <p className="text-xl md:text-2xl text-indigo-100 leading-relaxed font-light">
                      <strong className="text-white font-bold">Diferencial prático e aplicado na utilização de Inteligência Artificial</strong> para gestão de projetos, estruturação refinada de backlog e <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-bold drop-shadow-sm">aumento exponencial da produtividade da engenharia</span>.
                    </p>
                  </div>
                  <div className="w-full md:w-auto flex justify-center relative z-20">
                    <div className="relative w-40 h-40 flex items-center justify-center">
                      <div className="absolute inset-0 border-t-2 border-l-2 border-indigo-500/80 rounded-full animate-[spin_3s_linear_infinite]"></div>
                      <div className="absolute inset-3 border-r-2 border-b-2 border-purple-500/80 rounded-full animate-[spin_4s_linear_infinite_reverse]"></div>
                      <div className="absolute inset-6 border-t-2 border-r-2 border-blue-400/80 rounded-full animate-[spin_5s_linear_infinite]"></div>
                      <div className="bg-indigo-950/80 p-5 rounded-full backdrop-blur-md border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                        <Cpu className="w-12 h-12 text-indigo-300 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SEÇÃO: GESTÃO HUMANIZADA & PILARES DE LIDERANÇA */}
              <div className="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-5 gap-6 mt-2">
                {/* Gestão Humanizada */}
                <div className="md:col-span-3 bg-gradient-to-br from-emerald-900/40 via-teal-900/20 to-slate-900/50 border border-emerald-500/30 p-8 md:p-10 rounded-3xl backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/20 transition-all duration-700 pointer-events-none"></div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase mb-6 tracking-wider">
                    <HeartHandshake className="w-4 h-4" /> O Fator Humano como Base
                  </div>
                  <h3 className="text-3xl font-extrabold text-white mb-5 flex items-center gap-3">
                    Gestão Humanizada & Liderança
                  </h3>
                  <p className="text-emerald-50 text-[1.1rem] leading-relaxed mb-8 font-light">
                    A verdadeira transformação tecnológica e operacional só acontece através das pessoas. Minha liderança é baseada em <strong className="text-emerald-300 font-semibold drop-shadow-sm">segurança psicológica, escuta ativa e desenvolvimento contínuo</strong>. Construo times de alta performance equilibrando disciplina e rigor operacional com respeito, empatia e comunicação transparente.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 relative z-10">
                    {profileData.humanFactors.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="relative group/tag">
                          <span className="px-4 py-2 inline-flex bg-slate-900/80 border border-emerald-800/60 rounded-xl text-sm font-medium text-emerald-200 items-center gap-2 shadow-sm group-hover/tag:bg-slate-800 group-hover/tag:border-emerald-500/50 group-hover/tag:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300 cursor-help">
                            <Icon className="w-4 h-4 text-emerald-400"/> {item.title}
                          </span>
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-slate-900 border border-emerald-900/80 rounded-xl shadow-[0_10px_30px_rgba(16,185,129,0.2)] opacity-0 invisible group-hover/tag:opacity-100 group-hover/tag:visible transition-all duration-300 z-50 pointer-events-none transform group-hover/tag:-translate-y-1">
                            <p className="text-xs text-slate-300 leading-relaxed text-left font-normal">
                              {item.description}
                            </p>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-[6px] border-transparent border-t-emerald-900/80"></div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[2px] border-[6px] border-transparent border-t-slate-900"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 pt-6 border-t border-emerald-800/40 relative z-10">
                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Users className="w-4 h-4" /> Práticas e Ritos de Gestão Aplicados
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      {profileData.peoplePractices.map((practice, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-emerald-950/60 border border-emerald-800/50 hover:border-emerald-500/60 hover:bg-emerald-900/40 transition-colors duration-300 rounded-lg text-[0.7rem] sm:text-xs font-semibold text-emerald-200/90 shadow-sm cursor-default">
                          {practice}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pilares Operacionais */}
                <div className="md:col-span-2 bg-slate-900/50 border border-slate-800 p-8 md:p-10 rounded-3xl backdrop-blur-sm flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-8">
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                    <h3 className="text-2xl font-bold text-white">Pilares de Execução</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/60 transition-all group">
                      <h4 className="text-white font-semibold mb-1.5 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                        Estruturação
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">Profissionalização da gestão e aumento de maturidade em contextos de crescimento acelerado ou desorganização.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/60 transition-all group">
                      <h4 className="text-white font-semibold mb-1.5 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 group-hover:scale-150 transition-transform"></div>
                        Previsibilidade
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">Implantação de modelos de governança para organizar a capacidade produtiva, reduzindo riscos e garantindo entregas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: EXPERIÊNCIA (TIMELINE) */}
          {activeTab === 'experience' && (
            <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-slate-900/50 border border-slate-800 p-6 sm:p-10 rounded-3xl backdrop-blur-sm mb-8">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                    <Globe className="w-7 h-7 text-blue-400" /> 
                    Trajetória Executiva
                  </h3>
                  <span className="hidden sm:inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg text-xs font-semibold">
                    {profileData.experiences.length} Posições de Impacto
                  </span>
                </div>
                
                <div className="mt-4">
                  {profileData.experiences.map(exp => (
                    <ExperienceTimelineItem key={exp.id} exp={exp} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: QUALIFICAÇÕES & FORMAÇÃO (NOVA) */}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Formação Acadêmica */}
              <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm h-full">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-blue-400" /> Formação Acadêmica
                </h3>
                <div className="space-y-6">
                  {profileData.education.map((edu, idx) => (
                    <div key={idx} className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-blue-500 before:rounded-full before:shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                      <h4 className="text-lg font-bold text-slate-100">{edu.course}</h4>
                      <p className="text-blue-300 text-sm font-semibold mt-1 flex items-center gap-2">
                        <Building className="w-3.5 h-3.5" /> {edu.institution}
                      </p>
                      <p className="text-slate-500 text-xs mt-2 font-medium bg-slate-900 inline-block px-2 py-1 rounded border border-slate-800">
                        {edu.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Estudos IA - Highlight Neon */}
              <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/20 border border-indigo-500/30 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-[60px] group-hover:bg-indigo-500/30 transition-all duration-700 pointer-events-none"></div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                  <BrainCircuit className="w-6 h-6 text-indigo-400" /> Especialização Tecnológica
                </h3>
                <div className="space-y-3 relative z-10">
                  {profileData.aiStudies.map((study, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/20 flex items-start gap-3 hover:border-indigo-400/50 transition-colors group/item">
                      <Sparkles className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0 group-hover/item:text-purple-300 transition-colors" />
                      <span className="text-indigo-100 text-sm font-medium">{study}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificações e Frameworks (Ocupa a largura toda na linha de baixo) */}
              <div className="md:col-span-2 bg-slate-900/50 border border-slate-800 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <ScrollText className="w-6 h-6 text-teal-400" /> Certificações, Capacitações & Governança
                </h3>
                <div className="flex flex-wrap gap-3">
                  {profileData.certifications.map((cert, idx) => (
                    <span key={idx} className="px-4 py-2.5 bg-slate-800 border border-slate-700/80 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white hover:border-slate-500 transition-all shadow-sm flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" /> {cert}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB: COMPETÊNCIAS (SKILLS) */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Gráfico de Barras: Gestão */}
              <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Layers className="w-5 h-5 text-teal-400" /> Competências de Gestão
                </h3>
                <div className="space-y-3">
                  {profileData.skills.management.map((skill, idx) => (
                    <ProgressBar key={idx} label={skill.name} percentage={skill.level} />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {/* Nuvem de Metodologias */}
                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-purple-400" /> Frameworks & Metodologias
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {profileData.skills.methodologies.map((item, idx) => (
                      <span key={idx} className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-xl text-sm font-medium text-purple-200 shadow-sm hover:bg-purple-500/20 transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nuvem de Tecnologia */}
                <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Database className="w-5 h-5 text-blue-400" /> Stack Tecnológico & Sistemas
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {profileData.skills.tech.map((item, idx) => (
                      <span key={idx} className="px-3.5 py-1.5 bg-slate-800/80 border border-slate-700 rounded-lg text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          )}

        </div>
        
        {/* FOOTER */}
        <footer className="mt-20 text-center border-t border-slate-800/50 pt-8 pb-4">
          <p className="text-slate-500 text-sm">
            © 2026 {profileData.name} • Executive Technology Portfolio
          </p>
        </footer>

      </div>
    </div>
  );
}
