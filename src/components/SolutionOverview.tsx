import React from 'react';
import { Bot, Cloud, Brain, LucideIcon } from 'lucide-react';

interface SolutionPointProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const SolutionPoint = ({ Icon, title, description }: SolutionPointProps) => (
  <div className="flex items-start mb-6">
    <Icon className="text-teal-500 mr-4 flex-shrink-0" size={28} />
    <div>
      <h3 className="font-semibold text-teal-600 text-lg mb-1">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const SalesGPTSolutionSlide = () => (
  <div className="bg-white p-8 h-screen flex flex-col">
    <h2 className="text-3xl font-bold mb-8 text-teal-600">SalesGPT解決方案概述</h2>
    <div className="flex-1 flex flex-col justify-center">
      <SolutionPoint 
        Icon={Bot}
        title="全自動化銷售系統"
        description="開發可一鍵掛載的AI業務模組，自動爬取網站資料，提供懸浮視窗進行產品銷售，24/7無間斷處理客戶查詢。"
      />
      <SolutionPoint 
        Icon={Cloud}
        title="SaaS服務平台"
        description="提供基於訂閱的SaaS平台，用戶通過共享行業知識和專業know-how，換取免費使用AI業務服務，促進數據和知識共享。"
      />
      <SolutionPoint 
        Icon={Brain}
        title="行業專精AI訓練"
        description="利用共享平台上的數據和專業知識，針對各行業進行AI模型的訓練和優化，提升AI解決方案的效果和準確性。"
      />
    </div>
  </div>
);

export default SalesGPTSolutionSlide;