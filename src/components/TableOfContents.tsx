import React from 'react';
import { List, ChevronRight } from 'lucide-react';

const TableOfContents = () => (
  <div className="bg-gray-100 p-8 h-screen flex flex-col">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <List className="mr-2" size={28} />
      目錄
    </h2>
    <div className="flex-1 bg-white rounded-lg shadow-md p-6 overflow-y-auto">
      <ul className="space-y-4">
        {[
          "1. 執行摘要",
          "2. 公司簡介",
          "3. 市場痛點分析",
          "4. SalesGPT 解決方案概述",
          "5. 技術創新",
          "6. 研發計畫架構與實施方法",
          "7. 甘特圖",
          "8. 預定查核點和查核點報告",
          "9. 量化效益及計算方式",
          "10. 競爭優勢分析",
          "11. 團隊介紹",
          "12. 財務預測",
          "13. 風險評估與因應對策",
          "14. 未來發展規劃",
          "15. 項目總結與結論"
        ].map((item, index) => (
          <li key={index} className="flex items-center text-gray-700 hover:text-teal-600 transition-colors duration-150">
            <ChevronRight className="mr-2" size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default TableOfContents;