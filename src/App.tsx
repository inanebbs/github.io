import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
import TableOfContents from './components/TableOfContents';
import ExecutiveSummary from './components/ExecutiveSummary';
import CompanyProfileSlide from './components/CompanyProfile';
import MarketPainPoints from './components/MarketPainPoints';
import SolutionOverview from './components/SolutionOverview';
import TechnicalInnovation from './components/TechnicalInnovation';
import ResearchPlan from './components/ResearchPlan';
import GanttChart from './components/GanttChart';
import Checkpoints from './components/Checkpoints';
import QuantitativeBenefits from './components/QuantitativeBenefits';
import SimplifiedReportOverview from './components/SimplifiedReportOverview';
import CompetitiveAdvantage from './components/CompetitiveAdvantage';
import TeamIntroduction from './components/TeamIntroduction';
import FinancialForecast from './components/FinancialForecast';
import RiskAssessment from './components/RiskAssessment';
import FutureDevelopment from './components/FutureDevelopment';
import ProjectSummary from './components/ProjectSummary';
import ThankYouPage from './components/ThankYouPage';

import './App.css';
import CoverSlide from './components/CoverSlide';

const sections = [
  { title: "封面", component: CoverSlide },
  { title: "目錄", component: TableOfContents },
  { title: "執行摘要", component: ExecutiveSummary },
  { title: "公司簡介", component: CompanyProfileSlide },
  { title: "市場痛點", component: MarketPainPoints },
  { title: "SalesGPT 解決方案", component: SolutionOverview },
  { title: "技術創新", component: TechnicalInnovation },
  { title: "研發計畫", component: ResearchPlan },
  { title: "甘特圖", component: GanttChart },
  { title: "查核點", component: Checkpoints },
  { title: "量化效益", component: QuantitativeBenefits },
  { title: "報告書內容", component: SimplifiedReportOverview },
  { title: "競爭優勢", component: CompetitiveAdvantage },
  { title: "團隊介紹", component: TeamIntroduction },
  { title: "財務預測", component: FinancialForecast },
  { title: "風險評估", component: RiskAssessment },
  { title: "未來發展", component: FutureDevelopment },
  { title: "項目總結", component: ProjectSummary },
  { title: "感謝", component: ThankYouPage }
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);

  const nextSection = () => {
    setActiveSection((prev) => (prev + 1) % sections.length);
  };

  const prevSection = () => {
    setActiveSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  const ActiveComponent = sections[activeSection].component;

  return (
    <div className="app">
      <header className="header">
        <h1>SalesGPT 簡報</h1>
        <div className="navigation">
          <button onClick={prevSection} className="nav-button">
            <ChevronLeft />
          </button>
          <span>{sections[activeSection].title}</span>
          <button onClick={nextSection} className="nav-button">
            <ChevronRight />
          </button>
        </div>
      </header>
      <main className="main-content">
        <ActiveComponent />
      </main>
    </div>
  );
};

export default App;