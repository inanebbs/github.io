import React from 'react';
import { BarChart, Calendar } from 'lucide-react';

interface RDItemProps {
  title: string;
  weight: number;
  duration: string;
  children?: React.ReactNode;
}

const RDItem: React.FC<RDItemProps> = ({ title, weight, duration, children }) => (
  <div className="mb-4 pl-4 border-l-2 border-teal-500">
    <h3 className="text-lg font-semibold text-teal-600 flex items-center">
      <BarChart className="mr-2" size={20} />
      {title} <span className="ml-2 text-sm font-normal text-gray-500">({weight}%)</span>
    </h3>
    <p className="text-gray-700 flex items-center mt-1">
      <Calendar className="mr-2" size={16} />
      {duration}
    </p>
    {children && <div className="mt-2 pl-4">{children}</div>}
  </div>
);

const ResearchDevelopmentPlan = () => (
  
  <div>
    <h2 className="text-3xl font-bold mb-8 text-teal-600">研發計畫架構</h2>
    <div className="flex-1 overflow-y-auto">
      <RDItem title="A. SalesGPT AI 業務模組" weight={40} duration="2024年8月 - 2024年12月">
        <RDItem title="A1. 網站資料自動爬取技術開發" weight={10} duration="2個月" />
        <RDItem title="A2. 懸浮視窗開發與整合" weight={10} duration="2個月" />
        <RDItem title="A3. 使用 LangChain 框架開發 RAG 服務" weight={15} duration="3個月" />
        <RDItem title="A4. 功能部署與測試" weight={5} duration="1個月" />
      </RDItem>
      
      <RDItem title="B. SaaS 服務平台建設" weight={35} duration="2024年11月 - 2025年3月">
        <RDItem title="B1. 平台架構設計" weight={15} duration="3個月" />
        <RDItem title="B2. SaaS 功能開發" weight={15} duration="3個月" />
        <RDItem title="B3. 平台部署與測試" weight={5} duration="1個月" />
      </RDItem>
      
      <RDItem title="C. 行業專精 AI 訓練" weight={25} duration="2025年4月 - 2025年5月">
        <RDItem title="C1. 行業數據收集與整理" weight={10} duration="2個月" />
        <RDItem title="C2. AI 模型行業特化訓練" weight={10} duration="2個月" />
        <RDItem title="C3. 模型精度測試與改進" weight={5} duration="1個月" />
      </RDItem>
    </div>
  </div>
);

export default ResearchDevelopmentPlan;