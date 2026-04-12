import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

const PortfolioApp = lazy(() => import('./PortfolioApp.jsx'));

const shellProfile = {
  name: 'Regis Heverton Reis',
  tags: ['Head de PMO', 'Portfólio', 'Tecnologia', 'Delivery', 'Sustentação'],
  headline:
    'Head de Tecnologia | Head de PMO | Governan\u00e7a de TI | Gest\u00e3o de Portf\u00f3lio | Opera\u00e7\u00f5es de Tecnologia | Transforma\u00e7\u00e3o Organizacional',
  subtitle:
    'Transformando complexidade em previsibilidade operacional através de Governança, IA e Liderança Estratégica.',
};

function HeroShell() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/15 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-900/10 blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12 text-center lg:text-left flex flex-col items-start justify-center min-h-[70vh]">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
              <Zap className="w-4 h-4" /> Executivo de Tecnologia & Operações
            </div>
            <div className="flex flex-wrap gap-2 mb-5 max-w-4xl">
              {shellProfile.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-200 text-xs md:text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
              {shellProfile.name}
            </h1>
            <h2 className="text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 font-semibold max-w-5xl leading-relaxed">
              {shellProfile.headline}
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed">
              {shellProfile.subtitle}
            </p>

            <div className="mt-8 max-w-md">
              <div className="h-2 rounded-full bg-slate-800 border border-slate-700 overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-to-r from-blue-500 to-teal-400 animate-[shell-load_1s_ease-in-out_infinite]"></div>
              </div>
              <p className="mt-3 text-sm text-slate-400">
                Carregando experiência, resultados e competências.
              </p>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default function App() {
  const [shouldLoadPortfolio, setShouldLoadPortfolio] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShouldLoadPortfolio(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  if (!shouldLoadPortfolio) {
    return <HeroShell />;
  }

  return (
    <Suspense fallback={<HeroShell />}>
      <PortfolioApp />
    </Suspense>
  );
}
