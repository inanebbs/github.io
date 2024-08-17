import React from 'react';
import { Lightbulb, RefreshCw, Network, Key, TreePine, LucideIcon } from 'lucide-react';
const FeatureTable = () => (
  <div className="bg-white p-8 h-screen flex flex-col">
    <h2 className="text-3xl font-bold mb-8 text-teal-600">SalesGPT功能與技術創新</h2>
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-teal-100">
          <th className="border border-teal-300 p-2">主要功能</th>
          <th className="border border-teal-300 p-2">技術創新點</th>
          <th className="border border-teal-300 p-2">預期效果</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-teal-300 p-2">自動爬取網站資料</td>
          <td className="border border-teal-300 p-2">使用LangChain框架開發RAG服務</td>
          <td className="border border-teal-300 p-2">提高資料獲取效率和準確性</td>
        </tr>
        <tr>
          <td className="border border-teal-300 p-2">AI驅動的銷售助手</td>
          <td className="border border-teal-300 p-2">整合LLM和RAG技術</td>
          <td className="border border-teal-300 p-2">提供24/7的智能客戶服務</td>
        </tr>
        <tr>
          <td className="border border-teal-300 p-2">知識共享平台</td>
          <td className="border border-teal-300 p-2">基於SaaS的數據整合與共享機制</td>
          <td className="border border-teal-300 p-2">促進行業知識交流，提升AI模型性能</td>
        </tr>
        <tr>
          <td className="border border-teal-300 p-2">行業專精AI訓練</td>
          <td className="border border-teal-300 p-2">使用共享數據進行模型fine-tuning</td>
          <td className="border border-teal-300 p-2">提高AI對特定行業的理解和應用能力</td>
        </tr>
      </tbody>
    </table>
  </div>
);


const InnovationConcept = ({ Icon, title, description }: {
  Icon: LucideIcon;
  title: string;
  description: string;
}) => (
  <div className="flex items-start mb-6 bg-teal-50 p-4 rounded-lg">
    <Icon className="text-teal-500 mr-4 flex-shrink-0" size={32} />
    <div>
      <h3 className="font-semibold text-teal-600 text-lg mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const InnovationConceptsSlide = () => (
  <div className="bg-white p-8 h-screen flex flex-col">
    <h2 className="text-3xl font-bold mb-8 text-teal-600">SalesGPT創新概念</h2>
    <div className="flex-1 overflow-y-auto">
      <InnovationConcept 
        Icon={RefreshCw}
        title="知識循環生態系統"
        description="創建一個自我維持和不斷成長的生態系統，用戶貢獻的資料增加平台價值，反過來為所有用戶帶來持續的好處。"
      />
      <InnovationConcept 
        Icon={Network}
        title="去中心化AI培訓"
        description="通過用戶共享的行業特定知識和數據，實現分散式的AI模型優化，使每個行業都能受益於更智能、更精準的AI工具。"
      />
      <InnovationConcept 
        Icon={Key}
        title="知識換取服務模式"
        description="創新的商業模式，用戶通過分享專業知識和數據來換取免費或優惠的AI服務使用權，降低了使用門檻。"
      />
      <InnovationConcept 
        Icon={TreePine}
        title="行業知識森林"
        description="將各行業的專業知識視為一片知識森林，AI模型通過學習和整合這些知識，不斷成長和完善，形成一個豐富多樣的知識生態系統。"
      />
      <InnovationConcept 
        Icon={Lightbulb}
        title="智能銷售微觀手術"
        description="AI不僅提供大範圍的銷售策略，還能針對每個具體的銷售環節進行微觀優化，如同進行精密的'銷售手術'，精確提升轉化率。"
      />
    </div>
  </div>
);

export default FeatureTable;