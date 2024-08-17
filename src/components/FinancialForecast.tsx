import React from 'react';
import { DollarSign, TrendingUp, PieChart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface FinancialMetricProps {
  icon: React.ElementType;
  title: string;
  value: string;
}

const FinancialMetric: React.FC<FinancialMetricProps> = ({ icon: Icon, title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
    <div className="flex items-center mb-2">
      <Icon className="text-teal-500 mr-2" size={20} />
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-2xl font-bold text-teal-600">{value}</p>
  </div>
);

const revenueData = [
  { name: '2024 Q4', revenue: 660000 },
  { name: '2025 Q1', revenue: 1350000 },
  { name: '2025 Q2', revenue: 2400000 },
  { name: '2025 Q3', revenue: 3750000 },
  { name: '2025 Q4', revenue: 5400000 },
];

const FinancialForecast = () => (
  <div className="bg-gray-100 p-8 h-screen flex flex-col">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <TrendingUp className="mr-2" size={28} />
      財務預測
    </h2>
    <div className="flex-1 overflow-y-auto">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <FinancialMetric 
          icon={DollarSign}
          title="預計年收入 (2025)"
          value="NT$ 12,900,000"
        />
        <FinancialMetric 
          icon={PieChart}
          title="毛利率"
          value="70%"
        />
        <FinancialMetric 
          icon={TrendingUp}
          title="預期損益平衡點"
          value="2025 Q2"
        />
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">收入預測</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#4FD1C5" name="季度收入" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">成本結構</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">固定成本</h4>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>研發人員薪資</li>
              <li>辦公室租金</li>
              <li>基礎設施維護費用</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-2">變動成本</h4>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>雲端服務費用</li>
              <li>客戶支援成本</li>
              <li>銷售佣金</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FinancialForecast;