import React from 'react';
import { FileText, Code, Server, Brain, BarChart, LucideIcon } from 'lucide-react';

interface ReportCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  keyPoints: string[];
}

const ReportCard: React.FC<ReportCardProps> = ({ Icon, title, description, keyPoints }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-6">
    <div className="flex items-center mb-3">
      <Icon className="text-blue-500 mr-3" size={24} />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 mb-3">{description}</p>
    <ul className="list-disc list-inside text-sm text-gray-700">
      {keyPoints.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const SimplifiedReportOverview = () => (
  <div >
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <FileText className="mr-2" size={28} />
      報告概述：SBIR 委員將收到的關鍵成果
    </h2>
    <div className="flex-1 overflow-y-auto">
      <ReportCard 
        Icon={Code}
        title="網站資料爬取技術開發報告"
        description="展示 AI 系統獲取和處理網絡數據的能力"
        keyPoints={[
          "自動化數據採集的效率和準確性",
          "處理大規模網絡數據的能力",
          "與 AI 模型的數據整合方案"
        ]}
      />
      <ReportCard 
        Icon={Server}
        title="AI 業務模組功能部署與測試報告"
        description="證明 AI 系統在實際業務環境中的可行性和效果"
        keyPoints={[
          "AI 系統的穩定性和可靠性",
          "與現有業務流程的整合程度",
          "實際使用場景中的性能表現"
        ]}
      />
      <ReportCard 
        Icon={Server}
        title="SaaS 功能開發報告"
        description="展示系統作為服務平台的完整性和商業潛力"
        keyPoints={[
          "平台的可擴展性和用戶管理能力",
          "數據安全和隱私保護措施",
          "SaaS 模式的商業可行性"
        ]}
      />
      <ReportCard 
        Icon={Brain}
        title="AI 模型行業特化訓練報告"
        description="展示 AI 模型適應特定行業需求的能力"
        keyPoints={[
          "行業特定知識的 AI 學習效果",
          "模型在特定領域的專業表現",
          "AI 系統的持續學習和適應能力"
        ]}
      />
      <ReportCard 
        Icon={BarChart}
        title="模型精度測試與改進報告"
        description="證明項目的持續優化能力和長期價值"
        keyPoints={[
          "AI 模型性能的量化提升",
          "實際應用中的效果改進",
          "持續優化的方法論和可持續性"
        ]}
      />
    </div>
  </div>
);

export default SimplifiedReportOverview;