import React from 'react';
import { Milestone, Target, Globe, Layers } from 'lucide-react';

interface PlanStageProps {
  icon: React.ElementType;
  title: string;
  timeframe: string;
  goals: string[];
}

const PlanStage: React.FC<PlanStageProps> = ({ icon: Icon, title, timeframe, goals }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-6">
    <div className="flex items-center mb-3">
      <Icon className="text-blue-500 mr-3" size={24} />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-sm text-blue-600 mb-2">{timeframe}</p>
    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
      {goals.map((goal, index) => (
        <li key={index}>{goal}</li>
      ))}
    </ul>
  </div>
);

const FutureDevelopmentPlan = () => (
  <div className="bg-gray-100 p-8 h-screen flex flex-col">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <Target className="mr-2" size={28} />
      未來發展規劃
    </h2>
    <div className="flex-1 overflow-y-auto">
      <PlanStage 
        icon={Milestone}
        title="短期目標"
        timeframe="1-2年內"
        goals={[
          "完善SalesGPT核心功能，提高AI模型準確度達到90%以上",
          "擴大用戶基礎，實現1000家中小企業客戶的目標",
          "建立穩定的收入流，達到月營收500萬新台幣",
          "優化用戶體驗，提高客戶滿意度和留存率"
        ]}
      />
      <PlanStage 
        icon={Target}
        title="中期目標"
        timeframe="3-5年內"
        goals={[
          "拓展至東南亞市場，成為區域內領先的AI銷售解決方案提供商",
          "開發針對特定行業的專業版SalesGPT，如零售、金融、醫療等",
          "建立SalesGPT開發者生態系統，允許第三方開發擴展功能",
          "實現年營收突破3億新台幣，並達到盈利"
        ]}
      />
      <PlanStage 
        icon={Globe}
        title="長期願景"
        timeframe="5年以上"
        goals={[
          "成為全球領先的AI驅動商業智能平台",
          "擴展產品線，涵蓋從銷售到客戶服務的全面AI解決方案",
          "在主要國際市場建立強大的品牌知名度",
          "推動AI在商業應用中的創新，成為行業標準制定者"
        ]}
      />
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <Layers className="text-blue-500 mr-2" size={20} />
          擴展策略
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>通過戰略合作夥伴關係加速市場滲透</li>
          <li>持續投資研發，保持技術領先優勢</li>
          <li>採用模塊化設計，便於快速適應不同市場需求</li>
          <li>建立強大的客戶成功團隊，確保客戶價值實現</li>
          <li>積極參與行業活動和標準制定，提升品牌影響力</li>
        </ul>
      </div>
    </div>
  </div>
);

export default FutureDevelopmentPlan;