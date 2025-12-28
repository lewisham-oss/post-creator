import React, { useState } from 'react';
import {
  TrendingUp,
  Quote,
  Download,
  Share2,
  Layers,
  BarChart3,
  Bell,
  CheckCircle2,
  Bookmark,
  MoreHorizontal,
  Layout,
  Image as ImageIcon,
  Palette,
  Briefcase,
  Grid,
  Hexagon,
  Newspaper,
  Type,
  Heart,
  Code,
  Coffee,
  Dumbbell,
  Music,
  Globe,
  Building,
  Zap,
  Film,
  ShoppingBag,
  Palette as ArtIcon,
  GraduationCap,
  Smartphone,
  Car,
  Home
} from 'lucide-react';

const PostCreator = () => {
  const [activeTemplate, setActiveTemplate] = useState('stat');
  const [industry, setIndustry] = useState('finance'); // Default industry
  const [theme, setTheme] = useState('dark');
  const [bgPattern, setBgPattern] = useState('solid');
  const [showLogo, setShowLogo] = useState(true);
  const [alignment, setAlignment] = useState('left');

  // Industry configurations
  const industries = {
    finance: {
      name: 'Finance',
      icon: TrendingUp,
      color: 'emerald',
      defaultContent: {
        headline: 'Market Reaches All-Time High',
        subheadline: 'S&P 500 breaks newly established resistance levels driven by tech sector growth.',
        statValue: '+12.4%',
        statLabel: 'YTD Growth',
        author: 'Warren Buffett',
        quote: "The stock market is designed to transfer money from the active to the patient.",
        points: ['Diversify your portfolio', 'Focus on long-term value', 'Ignore short-term noise'],
        tagline: '@InvestSmartDaily',
        category: 'Market Update',
        chartData: [65, 40, 75, 55, 90]
      }
    },
    tech: {
      name: 'Technology',
      icon: Smartphone,
      color: 'blue',
      defaultContent: {
        headline: 'AI Breakthrough Announced',
        subheadline: 'New neural network architecture achieves human-level reasoning in specific domains.',
        statValue: '3.2x',
        statLabel: 'Performance Boost',
        author: 'Elon Musk',
        quote: "AI will be the best or worst thing ever for humanity.",
        points: ['Edge computing is the future', 'Privacy-first design', 'Open source accelerates innovation'],
        tagline: '@TechInsider',
        category: 'AI Research',
        chartData: [45, 60, 80, 40, 95]
      }
    },
    health: {
      name: 'Health & Fitness',
      icon: Heart,
      color: 'rose',
      defaultContent: {
        headline: 'New Study: Morning Exercise',
        subheadline: 'Research shows 30 minutes of morning exercise boosts metabolism by 40% throughout the day.',
        statValue: '98%',
        statLabel: 'Success Rate',
        author: 'Dr. Jane Wilson',
        quote: "Your body can stand almost anything. It's your mind you have to convince.",
        points: ['Hydrate before coffee', 'Consistency beats intensity', 'Sleep is non-negotiable'],
        tagline: '@FitLifeCoaching',
        category: 'Wellness',
        chartData: [70, 85, 60, 90, 75]
      }
    },
    education: {
      name: 'Education',
      icon: GraduationCap,
      color: 'indigo',
      defaultContent: {
        headline: 'Learning Methods Evolve',
        subheadline: 'Gamified learning platforms show 60% higher retention rates than traditional methods.',
        statValue: 'A+',
        statLabel: 'Student Rating',
        author: 'Maria Montessori',
        quote: "Education is a natural process carried out by the child and is not acquired by listening to words.",
        points: ['Personalized learning paths', 'Project-based assessment', 'Lifelong learning mindset'],
        tagline: '@EduInnovators',
        category: 'Pedagogy',
        chartData: [55, 70, 85, 65, 95]
      }
    },
    creative: {
      name: 'Creative Arts',
      icon: ArtIcon,
      color: 'purple',
      defaultContent: {
        headline: 'Digital Art Revolution',
        subheadline: 'NFT and digital canvas platforms are democratizing art creation and ownership.',
        statValue: '24K',
        statLabel: 'Art Pieces Sold',
        author: 'Banksy',
        quote: "Art should comfort the disturbed and disturb the comfortable.",
        points: ['Embrace creative constraints', 'Process over perfection', 'Authenticity sells'],
        tagline: '@CreativeMinds',
        category: 'Art News',
        chartData: [30, 50, 70, 90, 80]
      }
    },
    food: {
      name: 'Food & Beverage',
      icon: Coffee,
      color: 'amber',
      defaultContent: {
        headline: 'Sustainable Farming Trends',
        subheadline: 'Vertical farming reduces water usage by 95% while increasing yield per square foot.',
        statValue: '4.8★',
        statLabel: 'Customer Rating',
        author: 'Gordon Ramsay',
        quote: "Fresh ingredients don't lie.",
        points: ['Source locally', 'Seasonal menus', 'Zero-waste kitchen'],
        tagline: '@FoodieJournal',
        category: 'Sustainability',
        chartData: [80, 65, 90, 75, 85]
      }
    },
    travel: {
      name: 'Travel',
      icon: Globe,
      color: 'cyan',
      defaultContent: {
        headline: 'Hidden Gems of 2024',
        subheadline: 'Undiscovered destinations offering authentic experiences without the tourist crowds.',
        statValue: '1.2M',
        statLabel: 'Travelers Inspired',
        author: 'Anthony Bourdain',
        quote: "Travel isn't always pretty. It isn't always comfortable. But it's worth it.",
        points: ['Travel slow', 'Learn basic phrases', 'Support local economy'],
        tagline: '@WanderlustGuide',
        category: 'Destinations',
        chartData: [40, 60, 75, 55, 90]
      }
    }
  };

  // Theme configurations - now dynamically adapts to industry
  const getThemes = (industryColor) => {
    const colorMap = {
      emerald: { light: 'emerald', dark: 'emerald' },
      blue: { light: 'blue', dark: 'sky' },
      rose: { light: 'rose', dark: 'pink' },
      indigo: { light: 'indigo', dark: 'violet' },
      purple: { light: 'purple', dark: 'fuchsia' },
      amber: { light: 'amber', dark: 'orange' },
      cyan: { light: 'cyan', dark: 'teal' }
    };

    const color = colorMap[industryColor] || colorMap.emerald;

    return {
      dark: {
        name: 'Modern Dark',
        bg: 'bg-slate-950',
        cardBg: 'bg-slate-900',
        text: 'text-white',
        accent: `text-${color.dark}-400`,
        accentBg: `bg-${color.dark}-500/10`,
        border: 'border-slate-800',
        subtext: 'text-slate-400',
        shadow: 'shadow-2xl shadow-black/50',
        mesh: `radial-gradient(circle at 0% 0%, rgba(var(--color-${color.dark}-rgb), 0.1) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(var(--color-${color.dark}-rgb), 0.1) 0%, transparent 50%)`
      },
      light: {
        name: 'Clean Light',
        bg: 'bg-slate-50',
        cardBg: 'bg-white',
        text: 'text-slate-900',
        accent: `text-${color.light}-600`,
        accentBg: `bg-${color.light}-50`,
        border: 'border-slate-200',
        subtext: 'text-slate-500',
        shadow: 'shadow-xl shadow-slate-200/50',
        mesh: `radial-gradient(circle at 100% 0%, rgba(var(--color-${color.light}-rgb), 0.1) 0%, transparent 40%), radial-gradient(circle at 0% 100%, rgba(var(--color-${color.light}-rgb), 0.05) 0%, transparent 40%)`
      },
      navy: {
        name: 'Professional',
        bg: 'bg-[#0f172a]',
        cardBg: 'bg-[#1e293b]',
        text: 'text-white',
        accent: `text-${color.dark}-300`,
        accentBg: `bg-${color.dark}-500/20`,
        border: 'border-slate-800',
        subtext: 'text-slate-300',
        shadow: 'shadow-2xl shadow-blue-900/20',
        mesh: `radial-gradient(circle at 50% 0%, rgba(var(--color-${color.dark}-rgb), 0.15) 0%, transparent 60%)`
      }
    };
  };

  const currentIndustry = industries[industry];
  const currentThemes = getThemes(currentIndustry.color);
  const currentTheme = currentThemes[theme];

  const [content, setContent] = useState(currentIndustry.defaultContent);

  // Update content when industry changes
  React.useEffect(() => {
    setContent(currentIndustry.defaultContent);
  }, [industry]);

  // Helper to update content state
  const updateContent = (key, value) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  const updatePoint = (index, value) => {
    const newPoints = [...content.points];
    newPoints[index] = value;
    setContent(prev => ({ ...prev, points: newPoints }));
  };

  // --- BACKGROUND RENDERER ---
  const BackgroundLayer = () => {
    const commonClasses = "absolute inset-0 pointer-events-none z-0";

    if (bgPattern === 'mesh') {
      return <div className={commonClasses} style={{ background: currentTheme.mesh }}></div>;
    }

    if (bgPattern === 'grid') {
      return (
          <div className={`${commonClasses} opacity-[0.03]`}
               style={{
                 backgroundImage: `linear-gradient(${currentTheme.text === 'text-white' ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${currentTheme.text === 'text-white' ? '#fff' : '#000'} 1px, transparent 1px)`,
                 backgroundSize: '20px 20px'
               }}>
          </div>
      );
    }

    if (bgPattern === 'dots') {
      return (
          <div className={`${commonClasses} opacity-[0.05]`}
               style={{
                 backgroundImage: `radial-gradient(${currentTheme.text === 'text-white' ? '#fff' : '#000'} 1px, transparent 1px)`,
                 backgroundSize: '16px 16px'
               }}>
          </div>
      );
    }

    return null;
  };

  // --- COMPONENT PARTS ---
  const HeaderElement = ({ icon: Icon, align = 'left' }) => {
    const IndustryIcon = currentIndustry.icon;

    return (
        <div className={`flex justify-between items-start mb-6 z-10 relative ${align === 'center' ? 'w-full' : ''}`}>
          {showLogo ? (
              <div className={`flex items-center gap-2 ${currentTheme.subtext} text-sm font-medium tracking-wider uppercase`}>
                <div className={`p-2 rounded-lg ${currentTheme.accentBg} ${currentTheme.accent}`}>
                  <IndustryIcon size={18} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className={`text-[10px] ${currentTheme.subtext}`}>The</span>
                  <span className={`font-bold text-sm ${currentTheme.text}`}>{currentIndustry.name}Hub</span>
                </div>
              </div>
          ) : (
              <div className={`p-1.5 rounded-md ${currentTheme.accentBg} ${currentTheme.accent}`}>
                <Icon size={16} />
              </div>
          )}

          <div className={`flex items-center gap-2 ${currentTheme.subtext}`}>
            <span className="text-[10px] font-mono opacity-50">DEC 28</span>
            <MoreHorizontal size={20} />
          </div>
        </div>
    );
  };

  const FooterElement = () => (
      <div className={`mt-auto pt-6 flex justify-between items-center border-t ${currentTheme.border} z-10 relative`}>
        <span className={`text-xs font-semibold tracking-wide ${currentTheme.subtext}`}>{content.tagline}</span>
        <div className="flex gap-3">
          <Bookmark size={18} className={currentTheme.subtext} />
          <Share2 size={18} className={currentTheme.subtext} />
        </div>
      </div>
  );

  // --- TEMPLATES ---
  const StatTemplate = () => (
      <div className={`h-full flex flex-col p-8 ${currentTheme.cardBg} border ${currentTheme.border} ${currentTheme.shadow} relative overflow-hidden transition-all duration-300`}>
        <BackgroundLayer />
        <HeaderElement icon={TrendingUp} />

        <div className={`flex-1 flex flex-col justify-center z-10 relative ${alignment === 'center' ? 'text-center items-center' : ''}`}>
          <h3 className={`text-lg font-medium ${currentTheme.subtext} mb-2`}>{content.statLabel}</h3>
          <div className={`text-7xl font-bold tracking-tight mb-4 ${currentTheme.accent}`}>
            {content.statValue}
          </div>
          <div className={`flex items-center gap-2 ${currentTheme.text} ${alignment === 'center' ? 'justify-center' : ''}`}>
           <span className={`px-2 py-0.5 rounded text-xs font-bold ${theme === 'light' ? `${currentTheme.accentBg.replace('/50', '/100')} ${currentTheme.accent.replace('600', '700')}` : `${currentTheme.accentBg} ${currentTheme.accent.replace('400', '300')}`} flex items-center gap-1`}>
             <TrendingUp size={12} /> Positive
           </span>
            <span className="text-sm opacity-60">vs last quarter</span>
          </div>
        </div>

        <div className={`mb-6 z-10 relative ${alignment === 'center' ? 'text-center' : ''}`}>
          <h2 className={`text-2xl font-bold mb-2 leading-snug ${currentTheme.text}`}>
            {content.headline}
          </h2>
          <p className={`text-sm leading-relaxed ${currentTheme.subtext}`}>
            {content.subheadline}
          </p>
        </div>

        <FooterElement />
      </div>
  );

  const QuoteTemplate = () => (
      <div className={`h-full flex flex-col p-8 ${currentTheme.cardBg} border ${currentTheme.border} ${currentTheme.shadow} relative overflow-hidden transition-all duration-300`}>
        <BackgroundLayer />
        <div className={`absolute top-10 right-8 text-8xl font-serif opacity-5 ${currentTheme.accent}`}>"</div>

        <HeaderElement icon={Quote} />

        <div className={`flex-1 flex flex-col justify-center relative z-10 ${alignment === 'center' ? 'text-center items-center' : ''}`}>
          <blockquote className={`text-3xl font-serif leading-tight mb-8 ${currentTheme.text}`}>
            "{content.quote}"
          </blockquote>
          <div className={`flex items-center gap-3 ${alignment === 'center' ? 'flex-col' : ''}`}>
            <div className={`w-12 h-12 rounded-full ${currentTheme.accentBg} flex items-center justify-center ${currentTheme.accent} font-bold text-xl border-2 ${currentTheme.border}`}>
              {content.author.charAt(0)}
            </div>
            <div className={alignment === 'center' ? 'text-center' : ''}>
              <div className={`font-bold ${currentTheme.text}`}>{content.author}</div>
              <div className={`text-xs ${currentTheme.subtext}`}>{currentIndustry.name} Expert</div>
            </div>
          </div>
        </div>

        <FooterElement />
      </div>
  );

  const InsightListTemplate = () => (
      <div className={`h-full flex flex-col p-8 ${currentTheme.cardBg} border ${currentTheme.border} ${currentTheme.shadow} relative overflow-hidden transition-all duration-300`}>
        <BackgroundLayer />
        <HeaderElement icon={Layers} />

        <div className="flex-1 z-10 relative">
          <h2 className={`text-2xl font-bold mb-6 ${currentTheme.text} ${alignment === 'center' ? 'text-center' : ''}`}>
            Key Insights
          </h2>
          <div className="space-y-4">
            {content.points.map((point, idx) => (
                <div key={idx} className={`p-4 rounded-xl ${currentTheme.bg} border ${currentTheme.border} flex items-start gap-3 transition-transform hover:translate-x-1`}>
                  <CheckCircle2 className={`mt-0.5 shrink-0 ${currentTheme.accent}`} size={18} />
                  <span className={`text-sm font-medium ${currentTheme.text}`}>{point}</span>
                </div>
            ))}
          </div>
        </div>

        <FooterElement />
      </div>
  );

  const NotificationTemplate = () => (
      <div className={`h-full flex flex-col justify-between p-8 ${currentTheme.cardBg} border ${currentTheme.border} ${currentTheme.shadow} relative overflow-hidden transition-all duration-300`}>
        <BackgroundLayer />
        <HeaderElement icon={Bell} align="center" />

        <div className="flex-1 flex flex-col items-center justify-center text-center z-10 relative">
          <div className={`w-24 h-24 rounded-full ${currentTheme.accentBg} flex items-center justify-center mb-6 relative border-4 ${currentTheme.bg}`}>
            <div className={`absolute inset-0 rounded-full ${currentTheme.accentBg} animate-ping opacity-20`}></div>
            <Bell className={currentTheme.accent} size={48} />
          </div>

          <h2 className={`text-3xl font-bold mb-3 ${currentTheme.text}`}>
            {currentIndustry.name} Update
          </h2>
          <p className={`mb-8 max-w-xs ${currentTheme.subtext} leading-relaxed`}>
            {industry === 'finance' ? 'New market opportunity detected' :
                industry === 'tech' ? 'Software update available' :
                    industry === 'health' ? 'Wellness milestone achieved' :
                        'Important update available'}
          </p>

          <div className={`px-8 py-4 rounded-xl ${currentTheme.bg} border ${currentTheme.border} ${currentTheme.text} font-mono font-bold text-2xl shadow-lg`}>
            {content.statValue}
          </div>
        </div>

        <FooterElement />
      </div>
  );

  const ChartTemplate = () => (
      <div className={`h-full flex flex-col p-8 ${currentTheme.cardBg} border ${currentTheme.border} ${currentTheme.shadow} relative overflow-hidden transition-all duration-300`}>
        <BackgroundLayer />
        <HeaderElement icon={BarChart3} />

        <div className="flex-1 flex flex-col z-10 relative">
          <h2 className={`text-2xl font-bold mb-2 ${currentTheme.text}`}>{currentIndustry.name} Trends</h2>
          <p className={`text-sm ${currentTheme.subtext} mb-8`}>{industry === 'finance' ? 'Market performance this week' : 'Performance metrics this week'}</p>

          <div className="flex-1 flex items-end justify-between gap-2 pb-4 px-2">
            {content.chartData.map((height, i) => (
                <div key={i} className="flex flex-col items-center gap-2 w-full group">
                  <div className={`text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity ${currentTheme.accent}`}>
                    {height}%
                  </div>
                  <div
                      className={`w-full rounded-t-sm transition-all duration-500 ${i === 4 ? currentTheme.accentBg.replace('/10','/80').replace('/20','/80') : currentTheme.bg} border-t border-x ${currentTheme.border}`}
                      style={{ height: `${height}%` }}
                  ></div>
                  <div className={`text-[10px] uppercase font-bold ${currentTheme.subtext}`}>
                    {['Mon','Tue','Wed','Thu','Fri'][i]}
                  </div>
                </div>
            ))}
          </div>
        </div>
        <FooterElement />
      </div>
  );

  const NewsTemplate = () => (
      <div className={`h-full flex flex-col ${currentTheme.cardBg} border ${currentTheme.border} ${currentTheme.shadow} relative overflow-hidden transition-all duration-300`}>
        <div className={`h-2/5 ${currentTheme.bg} relative flex items-center justify-center overflow-hidden`}>
          <div className={`absolute inset-0 opacity-30`}
               style={{
                 backgroundImage: `radial-gradient(circle at 50% 50%, ${currentTheme.text === 'text-white' ? '#fff' : '#000'} 1px, transparent 1px)`,
                 backgroundSize: '24px 24px'
               }}>
          </div>
          <currentIndustry.icon size={48} className={`opacity-20 ${currentTheme.text}`} />
          <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${currentTheme.accentBg} ${currentTheme.accent}`}>
            {content.category}
          </div>
        </div>

        <div className="p-8 flex-1 flex flex-col relative z-10">
          <HeaderElement icon={Newspaper} />

          <div className="flex-1">
            <h2 className={`text-2xl font-bold mb-4 leading-tight ${currentTheme.text}`}>
              {content.headline}
            </h2>
            <p className={`text-sm leading-relaxed ${currentTheme.subtext}`}>
              {content.subheadline}
            </p>
            <div className={`mt-6 pt-6 border-t ${currentTheme.border} flex items-center gap-3`}>
              <div className={`w-8 h-8 rounded-full ${currentTheme.bg} border ${currentTheme.border}`}></div>
              <span className={`text-xs font-bold ${currentTheme.text}`}>{currentIndustry.name} Team</span>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <span className={`text-xs font-semibold tracking-wide ${currentTheme.subtext}`}>{content.tagline}</span>
            <Bookmark size={18} className={currentTheme.subtext} />
          </div>
        </div>
      </div>
  );

  const renderTemplate = () => {
    switch (activeTemplate) {
      case 'stat': return <StatTemplate />;
      case 'quote': return <QuoteTemplate />;
      case 'list': return <InsightListTemplate />;
      case 'alert': return <NotificationTemplate />;
      case 'chart': return <ChartTemplate />;
      case 'news': return <NewsTemplate />;
      default: return <StatTemplate />;
    }
  };

  return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 p-2 rounded-lg text-white shadow-lg shadow-blue-500/30">
              <Layout size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none">Design<span className="text-blue-600">Studio</span></h1>
              <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Multi-Industry Creator</p>
            </div>
          </div>
          <button
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-bold shadow-lg shadow-slate-900/20"
              onClick={() => alert("Image exported!")}
          >
            <Download size={16} /> Export
          </button>
        </nav>

        <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">

          {/* Editor Sidebar */}
          <div className="w-full lg:w-[420px] bg-white border-r border-slate-200 overflow-y-auto p-6 shadow-sm z-20 shrink-0">
            <div className="space-y-8 pb-12">

              {/* Industry Selector */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Building size={14} className="text-slate-400" />
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Industry</label>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(industries).map(([key, ind]) => {
                    const Icon = ind.icon;
                    return (
                        <button
                            key={key}
                            onClick={() => setIndustry(key)}
                            className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border text-xs font-medium transition-all ${
                                industry === key
                                    ? `border-${ind.color}-500 bg-${ind.color}-50 text-${ind.color}-700 ring-2 ring-${ind.color}-500/20`
                                    : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-white'
                            }`}
                        >
                          <Icon size={20} strokeWidth={1.5} /> {ind.name}
                        </button>
                    );
                  })}
                </div>
              </section>

              {/* Template Selector */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Layout size={14} className="text-slate-400" />
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Layout Type</label>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'stat', icon: TrendingUp, label: 'Stat' },
                    { id: 'quote', icon: Quote, label: 'Quote' },
                    { id: 'list', icon: Layers, label: 'List' },
                    { id: 'alert', icon: Bell, label: 'Alert' },
                    { id: 'chart', icon: BarChart3, label: 'Chart' },
                    { id: 'news', icon: Newspaper, label: 'News' }
                  ].map((t) => (
                      <button
                          key={t.id}
                          onClick={() => setActiveTemplate(t.id)}
                          className={`flex flex-col items-center justify-center gap-2 p-3 rounded-xl border text-xs font-medium transition-all ${
                              activeTemplate === t.id
                                  ? 'border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-500/20'
                                  : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-white'
                          }`}
                      >
                        <t.icon size={20} strokeWidth={1.5} /> {t.label}
                      </button>
                  ))}
                </div>
              </section>

              {/* Theme Selector */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Palette size={14} className="text-slate-400" />
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Color Theme</label>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(currentThemes).map(([key, t]) => (
                      <button
                          key={key}
                          onClick={() => setTheme(key)}
                          className={`flex items-center gap-3 p-2 rounded-lg text-sm font-medium border transition-all text-left group ${
                              theme === key ? 'border-blue-500 ring-1 ring-blue-500' : 'border-slate-200 hover:border-slate-300'
                          }`}
                      >
                        <div className={`w-8 h-8 rounded-md shadow-sm border border-black/10 flex items-center justify-center ${t.cardBg}`}>
                          <div className={`w-3 h-3 rounded-full ${t.accentBg.replace('/10', '').replace('/20', '').replace('/50', '')}`}></div>
                        </div>
                        <span className="text-slate-600 group-hover:text-slate-900">{t.name}</span>
                      </button>
                  ))}
                </div>
              </section>

              {/* Background & Style */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <ImageIcon size={14} className="text-slate-400" />
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Background & Style</label>
                </div>
                <div className="flex gap-2 mb-4">
                  {[
                    { id: 'solid', icon: Hexagon, label: 'Solid' },
                    { id: 'mesh', icon: ImageIcon, label: 'Mesh' },
                    { id: 'grid', icon: Grid, label: 'Grid' },
                    { id: 'dots', icon: MoreHorizontal, label: 'Dots' },
                  ].map(p => (
                      <button
                          key={p.id}
                          onClick={() => setBgPattern(p.id)}
                          className={`flex-1 py-2 flex items-center justify-center rounded-md border text-xs font-medium transition-colors ${
                              bgPattern === p.id ? 'bg-slate-800 text-white border-slate-800' : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                          }`}
                          title={p.label}
                      >
                        <p.icon size={14} />
                      </button>
                  ))}
                </div>

                {/* Branding Toggle */}
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-xs font-medium text-slate-600">Show Brand Logo</span>
                  <button
                      onClick={() => setShowLogo(!showLogo)}
                      className={`w-10 h-5 rounded-full relative transition-colors ${showLogo ? 'bg-blue-500' : 'bg-slate-300'}`}
                  >
                    <div className={`absolute top-1 bottom-1 w-3 h-3 bg-white rounded-full transition-all ${showLogo ? 'left-6' : 'left-1'}`}></div>
                  </button>
                </div>

                {/* Alignment Toggle */}
                <div className="flex items-center justify-between p-3 mt-2 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-xs font-medium text-slate-600">Text Alignment</span>
                  <div className="flex bg-white rounded border border-slate-200 p-0.5">
                    <button
                        onClick={() => setAlignment('left')}
                        className={`p-1 rounded ${alignment === 'left' ? 'bg-slate-100 text-slate-900' : 'text-slate-400'}`}
                    >
                      <div className="w-3 h-3 border-l-2 border-current"></div>
                    </button>
                    <button
                        onClick={() => setAlignment('center')}
                        className={`p-1 rounded ${alignment === 'center' ? 'bg-slate-100 text-slate-900' : 'text-slate-400'}`}
                    >
                      <div className="w-3 h-3 border-x-2 border-transparent border-b-2 border-current mx-auto"></div>
                    </button>
                  </div>
                </div>
              </section>

              {/* Content Editor */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <Type size={14} className="text-slate-400" />
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Content</label>
                </div>
                <div className="space-y-4">

                  {/* Dynamic Inputs */}
                  {(activeTemplate === 'stat' || activeTemplate === 'alert') && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 mb-1">HIGHLIGHT VALUE</label>
                          <input
                              type="text"
                              value={content.statValue}
                              onChange={(e) => updateContent('statValue', e.target.value)}
                              className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition-all"
                          />
                        </div>
                        {activeTemplate === 'stat' && (
                            <div>
                              <label className="block text-[10px] font-bold text-slate-400 mb-1">LABEL</label>
                              <input
                                  type="text"
                                  value={content.statLabel}
                                  onChange={(e) => updateContent('statLabel', e.target.value)}
                                  className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition-all"
                              />
                            </div>
                        )}
                      </div>
                  )}

                  {activeTemplate === 'quote' && (
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 mb-1">QUOTE</label>
                          <textarea
                              rows={4}
                              value={content.quote}
                              onChange={(e) => updateContent('quote', e.target.value)}
                              className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm resize-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 mb-1">AUTHOR</label>
                          <input
                              type="text"
                              value={content.author}
                              onChange={(e) => updateContent('author', e.target.value)}
                              className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition-all"
                          />
                        </div>
                      </div>
                  )}

                  {activeTemplate === 'list' && (
                      <div className="space-y-2">
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">KEY POINTS</label>
                        {content.points.map((point, idx) => (
                            <input
                                key={idx}
                                type="text"
                                value={point}
                                onChange={(e) => updatePoint(idx, e.target.value)}
                                className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition-all"
                            />
                        ))}
                      </div>
                  )}

                  {activeTemplate === 'news' && (
                      <div>
                        <label className="block text-[10px] font-bold text-slate-400 mb-1">CATEGORY TAG</label>
                        <input
                            type="text"
                            value={content.category}
                            onChange={(e) => updateContent('category', e.target.value)}
                            className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition-all"
                        />
                      </div>
                  )}

                  {/* Common Inputs */}
                  {activeTemplate !== 'quote' && activeTemplate !== 'list' && (
                      <>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-400 mb-1">HEADLINE</label>
                          <input
                              type="text"
                              value={content.headline}
                              onChange={(e) => updateContent('headline', e.target.value)}
                              className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition-all"
                          />
                        </div>
                        {activeTemplate !== 'alert' && activeTemplate !== 'chart' && (
                            <div>
                              <label className="block text-[10px] font-bold text-slate-400 mb-1">BODY TEXT</label>
                              <textarea
                                  rows={3}
                                  value={content.subheadline}
                                  onChange={(e) => updateContent('subheadline', e.target.value)}
                                  className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm resize-none transition-all"
                              />
                            </div>
                        )}
                      </>
                  )}

                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 mb-1">HANDLE / TAGLINE</label>
                    <input
                        type="text"
                        value={content.tagline}
                        onChange={(e) => updateContent('tagline', e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition-all"
                    />
                  </div>

                </div>
              </section>
            </div>
          </div>

          {/* Live Preview Area */}
          <div className="flex-1 bg-slate-100 flex flex-col items-center justify-center p-8 lg:p-12 overflow-y-auto relative">

            {/* Background Pattern for Preview Area */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="flex items-center gap-2 mb-6 text-slate-400 text-xs font-bold uppercase tracking-widest z-10">
              <div className={`flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200`}>
                <currentIndustry.icon size={14} className={`text-${currentIndustry.color}-600`} />
                {currentIndustry.name} • Live Preview
              </div>
            </div>

            {/* The Canvas */}
            <div className="relative shadow-2xl rounded-sm transition-all duration-500 ease-in-out transform hover:scale-[1.01] z-10" style={{ width: '400px', height: '500px' }}>
              {renderTemplate()}
            </div>

            <div className="mt-8 flex gap-4">
              <div className="px-4 py-2 bg-white rounded-full text-xs font-bold text-slate-500 shadow-sm border border-slate-200">
                Aspect Ratio: 4:5
              </div>
              <div className="px-4 py-2 bg-white rounded-full text-xs font-bold text-slate-500 shadow-sm border border-slate-200">
                Industry: {currentIndustry.name}
              </div>
            </div>
          </div>

        </main>
      </div>
  );
};

export default PostCreator;