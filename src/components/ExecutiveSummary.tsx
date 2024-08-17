import React from 'react';
import { FileText } from 'lucide-react';

interface SummaryPointProps {
  title: string;
  description: string;
}

const SummaryPoint: React.FC<SummaryPointProps> = ({ title, description }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-teal-600 mb-1">{title}</h3>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

const ExecutiveSummary = () => (
  <div className="bg-gray-100 p-8 h-screen flex flex-col">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <FileText className="mr-2" size={28} />
      執行摘要
    </h2>
    <div className="flex-1 bg-white rounded-lg shadow-md p-6 overflow-y-auto">
      <SummaryPoint 
        title="項目概述"
        description="SalesGPT 是一個創新的共享 AI 業務平台，旨在為中小企業提供智能化的銷售和客戶服務解決方案。"
      />
      <SummaryPoint 
        title="核心創新"
        description="整合 LLM 和 RAG 技術，創建知識共享生態系統，實現行業特化的 AI 模型訓練。"
      />
      <SummaryPoint 
        title="市場定位"
        description="針對中小企業的人力資源不足和 AI 應用門檻高等痛點，提供易用、高效的 AI 驅動銷售工具。"
      />
      <SummaryPoint 
        title="技術優勢"
        description="自動化網站資料爬取、懸浮視窗集成、SaaS 服務平台，以及行業專精 AI 訓練。"
      />
      <SummaryPoint 
        title="預期效益"
        description="預計在 2025 年 Q3 達到 3,750,000 元營收，顯著提升中小企業的銷售效率和服務質量。"
      />
      <SummaryPoint 
        title="團隊實力"
        description="由經驗豐富的 AI 技術專家和商業策略家組成，具備將創新理念轉化為市場成功的能力。"
      />
      <SummaryPoint 
        title="未來願景"
        description="成為全球領先的 AI 驅動商業智能平台，推動 AI 在商業應用中的創新，成為行業標準制定者。"
      />
    </div>
  </div>
);

export default ExecutiveSummary;    