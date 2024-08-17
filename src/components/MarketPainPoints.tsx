import React from 'react';
import { AlertCircle } from 'lucide-react';

interface PainPointProps {
  title: string;
  description: string;
}

const PainPoint: React.FC<PainPointProps> = ({ title, description }) => (
  <div className="flex items-start mb-4">
    <AlertCircle className="text-teal-500 mr-3 flex-shrink-0" size={24} />
    <div>
      <h3 className="font-semibold text-teal-600">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const MarketPainPointsSlide = () => (
  <div className="bg-white p-8 h-screen flex flex-col">
    <h2 className="text-3xl font-bold mb-6 text-teal-600">市場痛點</h2>
    <div className="flex-1 flex flex-col justify-center">
      <PainPoint 
        title="人力資源不足"
        description="中小企業需專注於核心業務，無暇擴展數位銷售與客服，影響服務質量和客戶滿意度。"
      />
      <PainPoint 
        title="服務質量不一"
        description="員工缺乏足夠的專業知識，導致服務水平參差不齊，影響品牌信譽。"
      />
      <PainPoint 
        title="AI知識門檻高"
        description="許多企業想要使用AI提高效率，但缺乏相關知識和資源，往往投入過高成本卻無法獲得預期效果。"
      />
      <PainPoint 
        title="數據和知識共享困難"
        description="各行各業的專業know-how和數據通常分散且難以整合，限制了AI模型的準確性和實用性。"
      />
    </div>
  </div>
);

export default MarketPainPointsSlide;