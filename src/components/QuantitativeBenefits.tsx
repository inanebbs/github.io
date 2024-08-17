import React from 'react';
import { TrendingUp, DollarSign, Users, Briefcase, Award, FileText, PlusSquare } from 'lucide-react';
import { LucideIcon } from 'lucide-react';


interface BenefitProps {
  icon: React.ElementType;
  title: string;
  target: string;
  calculation: string;
  note?: string;
}

const SimpleBenefitCard: React.FC<BenefitProps> = ({ icon: Icon, title, target, calculation, note }) => (
  <div className="card mb-4">
    <div className="flex items-center mb-2">
      <Icon className="text-teal-500 mr-2" size={24} />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-teal-600 font-bold mb-2">目標：{target}</p>
    <p className="text-sm text-gray-700"><span className="font-semibold">計算方式：</span>{calculation}</p>
    {note && <p className="text-xs text-gray-500 mt-2">{note}</p>}
  </div>
);

interface BenefitCardProps {
  Icon: LucideIcon;
  title: string;
  target: string;
  calculation: string;
  note?: string;
}

const EnhancedBenefitCard: React.FC<BenefitCardProps> = ({ Icon, title, target, calculation, note }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-6">
    <div className="flex items-center mb-3">
      <Icon className="text-teal-500 mr-3" size={24} />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-teal-600 font-bold mb-2">目標：{target}</p>
    <div className="bg-gray-50 p-3 rounded">
      <p className="text-sm text-gray-700"><span className="font-semibold">計算方式：</span>{calculation}</p>
    </div>
    {note && <p className="text-xs text-gray-500 mt-2">{note}</p>}
  </div>
);

// const QuantitativeBenefits: React.FC = () => (
//   <div className="bg-white p-8 h-screen flex flex-col">
//     <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
//       <TrendingUp className="mr-2" size={28} />
//       量化效益及計算方式
//     </h2>
//     <div className="space-y-4">
//       <SimpleBenefitCard 
//         icon={DollarSign}
//         title="增加產值"
//         target="3,750,000 元"
//         calculation="基本訂閱（250家 × 500元/月）+ 進階訂閱（150家 × 2,000元/月）+ 國際市場擴展（50家 × 平均1,000元/月）= 475,000元/月。年化後為 5,700,000元，保守估計達成 3,750,000 元。"
//         note="基於2025年Q3的預計訂閱數據，考慮不同等級訂閱和國際市場擴展。"
//       />
//       <SimpleBenefitCard 
//         icon={Briefcase}
//         title="產出新產品或服務"
//         target="1 項"
//         calculation="開發並推出 SalesGPT 平台，提供即時產品銷售功能"
//         note="以平台正式上線並開始服務客戶為計算標準"
//       />
//       <SimpleBenefitCard 
//         icon={FileText}
//         title="衍生商品或服務數"
//         target="2 項"
//         calculation="1. 基於 SalesGPT 平台數據的專業行業分析報告服務  2. 個性化銷售策略建議服務"
//         note="每項衍生服務需有明確的服務內容和定價策略"
//       />
//       <SimpleBenefitCard 
//         icon={DollarSign}
//         title="額外投入研發費用"
//         target="100 仟元"
//         calculation="計劃期間內，通過自籌資金增加的研發投入總額"
//         note="不包括原始 SBIR 計劃預算內的研發費用"
//       />
//       <SimpleBenefitCard 
//         icon={DollarSign}
//         title="促成投資額"
//         target="400 仟元"
//         calculation="通過 SalesGPT 平台的成功推出，吸引內外部投資者對平台進行投資"
//         note="包括可能的風險投資、天使投資等各類外部資金"
//       />
//       <SimpleBenefitCard 
//         icon={Users}
//         title="增加就業人數"
//         target="1 人"
//         calculation="因應平台開發和運營需求，額外招聘 1 名技術開發人員"
//         note="需簽署正式勞動合同並繳納社會保險"
//       />
//       <SimpleBenefitCard 
//         icon={Award}
//         title="申請發明專利"
//         target="1 件"
//         calculation="針對 SalesGPT 平台的核心技術申請 1 件發明專利"
//         note="以向國家知識產權局提交專利申請並取得受理通知書為準"
//       />
//     </div>
//   </div>
// );

const UpdatedQuantitativeBenefitsCalculation = () => (
  <div className="">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <TrendingUp className="mr-2" size={28} />
      量化效益及計算方式
    </h2>
    <div className="flex-1">
      <EnhancedBenefitCard 
        Icon={DollarSign}
        title="增加產值"
        target="3,750,000 元"
        calculation="基本訂閱（250家 × 500元/月）+ 進階訂閱（150家 × 2,000元/月）+ 國際市場擴展（50家 × 平均1,000元/月）= 475,000元/月。年化後為 5,700,000元，保守估計達成 3,750,000 元。"
        note="基於2025年Q3的預計訂閱數據，考慮不同等級訂閱和國際市場擴展。"
      />
      <EnhancedBenefitCard 
        Icon={Briefcase}
        title="產出新產品或服務"
        target="1 項"
        calculation="開發並推出 SalesGPT 平台，提供即時產品銷售功能"
        note="以平台正式上線並開始服務客戶為計算標準"
      />
      <EnhancedBenefitCard 
        Icon={FileText}
        title="衍生商品或服務數"
        target="2 項"
        calculation="1. 基於 SalesGPT 平台數據的專業行業分析報告服務  2. 個性化銷售策略建議服務"
        note="每項衍生服務需有明確的服務內容和定價策略"
      />
      <EnhancedBenefitCard 
        Icon={PlusSquare}
        title="額外投入研發費用"
        target="100 仟元"
        calculation="計劃期間內，通過自籌資金增加的研發投入總額"
        note="不包括原始 SBIR 計劃預算內的研發費用"
      />
      <EnhancedBenefitCard 
        Icon={DollarSign}
        title="促成投資額"
        target="400 仟元"
        calculation="通過 SalesGPT 平台的成功推出，吸引內外部投資者對平台進行投資"
        note="包括可能的風險投資、天使投資等各類外部資金"
      />
      <EnhancedBenefitCard 
        Icon={Users}
        title="增加就業人數"
        target="1 人"
        calculation="因應平台開發和運營需求，額外招聘 1 名技術開發人員"
        note="需簽署正式勞動合同並繳納社會保險"
      />
      <EnhancedBenefitCard 
        Icon={Award}
        title="申請發明專利"
        target="1 件"
        calculation="針對 SalesGPT 平台的核心技術申請 1 件發明專利"
        note="以向國家知識產權局提交專利申請並取得受理通知書為準"
      />
    </div>
  </div>
);

export default UpdatedQuantitativeBenefitsCalculation;