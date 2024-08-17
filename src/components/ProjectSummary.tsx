import React from 'react';
import { Lightbulb, Network, TrendingUp, Users, Zap } from 'lucide-react';

interface SummaryPointProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const SummaryPoint: React.FC<SummaryPointProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex items-start">
    <Icon className="text-teal-500 mr-3 mt-1 flex-shrink-0" size={24} />
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const UpdatedProjectSummaryConclusion = () => (
  <div className="bg-gray-100 p-8 h-screen flex flex-col">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <Lightbulb className="mr-2" size={28} />
      項目總結與結論：創新服務平台
    </h2>
    <div className="flex-1 overflow-y-auto">
      <SummaryPoint 
        icon={Zap}
        title="創新技術整合"
        description="SalesGPT 通過整合最先進的 AI 技術（如 LLM 和 RAG）與行業特定知識，創造了一個獨特的共享 AI 業務平台。這種整合不僅提高了銷售效率，還為企業開闢了全新的服務模式。"
      />
      <SummaryPoint 
        icon={Network}
        title="知識創造與流通平台"
        description="作為一個創新的知識服務平台，SalesGPT 促進了行業知識的創造、流通和加值。通過匯集不同企業的專業知識，並通過 AI 技術進行優化和分發，我們建立了一個動態的知識生態系統。"
      />
      <SummaryPoint 
        icon={Users}
        title="需求導向的服務創新"
        description="SalesGPT 以中小企業的實際需求為導向，提供了一個經濟、高效的 AI 驅動銷售工具。這種創新服務模式不僅解決了人力資源不足等痛點，還推動了整個行業的數字化轉型。"
      />
      <SummaryPoint 
        icon={TrendingUp}
        title="驅動創新經營模式"
        description="通過 SalesGPT，我們為企業提供了一種全新的經營模式。企業不再僅僅是技術的使用者，而是成為了知識貢獻者和受益者，形成了一個互惠共贏的創新生態系統。"
      />
      <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 mt-6">
        <h3 className="text-lg font-semibold text-teal-700 mb-3">結論與前瞻性影響</h3>
        <p className="text-sm text-gray-700">
          SalesGPT 不僅是一個創新的 AI 銷售工具，更是一個推動產業發展的前瞻性知識服務平台。通過科技的創新運用，我們正在驅動新興服務業的興起，重塑企業的價值創造方式。隨著平台的發展，SalesGPT 有潛力成為推動台灣產業升級和數字化轉型的關鍵力量，為知識經濟時代的產業創新樹立新標準。我們相信，這種創新服務模式不僅將為企業帶來競爭優勢，還將為整個經濟生態系統注入新的活力，推動可持續的經濟增長和技術進步。
        </p>
      </div>
    </div>
  </div>
);

export default UpdatedProjectSummaryConclusion;