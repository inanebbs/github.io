import React from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

interface RiskItemProps {
  category: string;
  risk: string;
  mitigation: string;
}

const RiskItem: React.FC<RiskItemProps> = ({ category, risk, mitigation }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
    <h3 className="text-lg font-semibold text-red-600 mb-2">{category}</h3>
    <div className="flex items-start mb-2">
      <AlertTriangle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={18} />
      <p className="text-sm text-gray-700"><span className="font-medium">風險：</span>{risk}</p>
    </div>
    <div className="flex items-start">
      <ShieldCheck className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
      <p className="text-sm text-gray-700"><span className="font-medium">因應對策：</span>{mitigation}</p>
    </div>
  </div>
);

const RiskAssessmentMitigation = () => (
  <div className="bg-gray-100 p-8 h-screen flex flex-col">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <AlertTriangle className="mr-2" size={28} />
      風險評估與因應對策
    </h2>
    <div className="flex-1 overflow-y-auto">
      <RiskItem 
        category="技術風險"
        risk="AI模型精度不足，無法滿足不同行業的特定需求。"
        mitigation="持續收集和整合行業特定數據，進行定期的模型優化和微調。建立行業專家顧問團，提供專業指導。"
      />
      <RiskItem 
        category="市場風險"
        risk="市場接受度不如預期，導致用戶增長緩慢。"
        mitigation="加強市場教育，提供免費試用期和個性化演示。建立成功案例庫，展示實際應用效果。制定靈活的定價策略，降低採用門檻。"
      />
      <RiskItem 
        category="競爭風險"
        risk="大型科技公司進入市場，造成競爭壓力。"
        mitigation="專注於中小企業市場，提供更貼近其需求的解決方案。加速產品迭代，保持技術領先優勢。建立強大的用戶社區和生態系統。"
      />
      <RiskItem 
        category="資金風險"
        risk="開發和運營成本超出預期，影響現金流。"
        mitigation="制定詳細的財務計劃和預算控制措施。尋求多元化的融資渠道，包括風險投資和策略合作夥伴。實施階段性的開發計劃，控制成本。"
      />
      <RiskItem 
        category="法規風險"
        risk="數據隱私和AI應用相關法規變更，影響產品功能或市場拓展。"
        mitigation="與法律顧問密切合作，持續監控法規變化。設計靈活的系統架構，以快速適應法規要求。提前制定合規策略，確保產品始終符合最新法規。"
      />
    </div>
  </div>
);

export default RiskAssessmentMitigation;