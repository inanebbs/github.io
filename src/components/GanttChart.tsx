import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronRight } from 'lucide-react';

const months = ['8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'];

interface GanttBarProps {
  start: number;
  duration: number;
  label: string;
  color: string;
  subTasks?: GanttBarProps[]; // 將 subTasks 設為可選屬性
}

const GanttBar: React.FC<GanttBarProps> = ({ start, duration, label, color, subTasks }) => {
  const [expanded, setExpanded] = useState(true);  // 將初始狀態設為 true
  const startMonth = start - 1;
  const width = `${duration * 10}%`;

  return (
    <div className="mb-1">
      <div className="relative h-8 flex items-center cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div 
          className={`absolute h-6 ${color}`} 
          style={{ left: `${startMonth * 10}%`, width: width }}
        ></div>
        <span className="absolute left-2 text-sm font-semibold text-gray-700 z-10">{label}</span>
        {subTasks && (
          <span className="absolute right-2 text-gray-600 z-10">
            {expanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
      </div>
      {subTasks && subTasks.map((task, index) => (
        <div key={index} className={expanded ? "block" : "hidden"}>
          <GanttBar {...task} />
        </div>
      ))}
    </div>
  );
};

const SimplifiedGanttChart = () => {
  const tasks = [
    {
      start: 1, duration: 5, label: "A. SalesGPT AI 業務模組", color: "bg-blue-200",
      subTasks: [
        { start: 1, duration: 2, label: "A1. 網站資料自動爬取", color: "bg-blue-100" },
        { start: 3, duration: 2, label: "A2. 懸浮視窗開發", color: "bg-blue-100" },
        { start: 3, duration: 3, label: "A3. RAG 服務開發", color: "bg-blue-100" },
        { start: 5, duration: 1, label: "A4. 功能部署與測試", color: "bg-blue-100" },
      ]
    },
    {
      start: 4, duration: 5, label: "B. SaaS 服務平台建設", color: "bg-green-200",
      subTasks: [
        { start: 4, duration: 3, label: "B1. 平台架構設計", color: "bg-green-100" },
        { start: 6, duration: 3, label: "B2. SaaS 功能開發", color: "bg-green-100" },
        { start: 8, duration: 1, label: "B3. 平台部署與測試", color: "bg-green-100" },
      ]
    },
    {
      start: 9, duration: 2, label: "C. 行業專精 AI 訓練", color: "bg-orange-200",
      subTasks: [
        { start: 9, duration: 2, label: "C1. 行業數據收集與整理", color: "bg-orange-100" },
        { start: 9, duration: 2, label: "C2. AI 模型行業特化訓練", color: "bg-orange-100" },
        { start: 10, duration: 1, label: "C3. 模型精度測試與改進", color: "bg-orange-100" },
      ]
    },
  ];

  return (
    <div className="bg-white p-8 h-screen flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
        <Calendar className="mr-2" size={24} />
        研發計畫甘特圖 (2024年8月 - 2025年5月)
      </h2>
      <div className="flex-1 overflow-y-auto">
        <div className="mb-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex justify-between mb-2">
            {months.map((month, index) => (
              <div key={index} className="flex-1 text-center text-xs font-semibold text-gray-600">{month}</div>
            ))}
          </div>
          {tasks.map((task, index) => (
            <GanttBar key={index} {...task} />
          ))}
        </div>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center mb-2">
            <Calendar className="mr-2" size={18} />
            關鍵里程碑
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>2024年12月底：完成 SalesGPT AI 業務模組開發</li>
            <li>2025年3月底：SaaS 服務平台上線</li>
            <li>2025年5月底：完成行業專精 AI 模型訓練和優化</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimplifiedGanttChart;