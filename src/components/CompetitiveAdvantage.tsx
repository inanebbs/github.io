import React from 'react';
import { Shield, Check, X } from 'lucide-react';

interface CompetitorRowProps {
  name: string;
  features: boolean[];
}

const CompetitorRow: React.FC<CompetitorRowProps> = ({ name, features }) => (
  <tr>
    <td className="border px-4 py-2 font-semibold">{name}</td>
    {features.map((feature, index) => (
      <td key={index} className="border px-4 py-2 text-center">
        {feature ? <Check className="inline text-green-500" size={20} /> : <X className="inline text-red-500" size={20} />}
      </td>
    ))}
  </tr>
);

interface AdvantageCardProps {
  title: string;
  description: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
    <h3 className="text-lg font-semibold text-teal-600 mb-2">{title}</h3>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
);

const CompetitiveAdvantageAnalysis = () => (
  <div className="bg-gray-100 p-8 h-screen flex flex-col">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <Shield className="mr-2" size={28} />
      競爭優勢分析
    </h2>
    <div className="flex-1 overflow-y-auto">
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">與競爭對手比較</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">功能/公司</th>
              <th className="px-4 py-2">AI驅動</th>
              <th className="px-4 py-2">知識共享</th>
              <th className="px-4 py-2">行業特化</th>
              <th className="px-4 py-2">自動化銷售</th>
              <th className="px-4 py-2">適合中小企業</th>
            </tr>
          </thead>
          <tbody>
            <CompetitorRow name="SalesGPT" features={[true, true, true, true, true]} />
            <CompetitorRow name="Pipedrive" features={[false, false, false, true, true]} />
            <CompetitorRow name="Zoho CRM" features={[true, false, false, true, true]} />
            <CompetitorRow name="Freshsales" features={[true, false, false, true, true]} />
            <CompetitorRow name="Salesforce" features={[true, false, true, true, false]} />
          </tbody>
        </table>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-4">SalesGPT 的獨特優勢</h3>
      <AdvantageCard 
        title="知識循環生態系統"
        description="創建自我維持和不斷成長的生態系統，用戶貢獻的資料增加平台價值，反過來為所有用戶帶來持續的好處。"
      />
      <AdvantageCard 
        title="去中心化AI培訓"
        description="通過用戶共享的行業特定知識和數據，實現分散式的AI模型優化，使每個行業都能受益於更智能、更精準的AI工具。"
      />
      <AdvantageCard 
        title="知識換取服務模式"
        description="創新的商業模式，用戶通過分享專業知識和數據來換取免費或優惠的AI服務使用權，降低了使用門檻。"
      />
      <AdvantageCard 
        title="中小企業友好"
        description="專為中小企業設計的解決方案，提供易用性高、成本效益好的AI銷售工具，幫助他們在競爭中脫穎而出。"
      />
    </div>
  </div>
);

export default CompetitiveAdvantageAnalysis;