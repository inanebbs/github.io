import React from 'react';
import { CheckCircle, FileText, AlertTriangle } from 'lucide-react';

interface CheckpointItemProps {
  date: string;
  content: string;
  deliverables: string;
}

const CheckpointItem: React.FC<CheckpointItemProps> = ({ date, content, deliverables }) => (
  <div className="mb-6 border-l-2 border-blue-300 pl-4">
    <div className="flex items-center mb-2">
      <CheckCircle className="text-blue-500 mr-2" size={20} />
      <span className="text-lg font-semibold text-gray-700">{date}</span>
    </div>
    <p className="text-gray-600 mb-2">{content}</p>
    <div className="bg-blue-50 p-2 rounded">
      <span className="text-sm font-semibold text-blue-700">預期成果：</span>
      <span className="text-sm text-gray-600">{deliverables}</span>
    </div>
  </div>
);

const CheckpointAndReportSlide = () => (
  <div className="bg-white p-8 h-screen flex flex-col">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <FileText className="mr-2" size={24} />
      預定查核點和查核點報告
    </h2>
    <div className="flex-1 overflow-y-auto">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">主要查核點</h3>
          <CheckpointItem 
            date="2024年9月30日"
            content="完成網站資料自動爬取技術開發"
            deliverables="網站資料爬取技術開發報告書*1"
          />
          <CheckpointItem 
            date="2024年12月31日"
            content="完成 SalesGPT AI 業務模組開發"
            deliverables="AI業務模組功能部署與測試報告書*1, demo影片*1"
          />
          <CheckpointItem 
            date="2025年3月31日"
            content="SaaS 服務平台上線"
            deliverables="SaaS功能開發報告書*1, SaaS平台部署與測試報告書*1"
          />
          <CheckpointItem 
            date="2025年5月31日"
            content="完成行業專精 AI 模型訓練和優化"
            deliverables="AI模型行業特化訓練報告*1, 模型精度測試與改進報告*1"
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">查核點報告指南</h3>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-gray-600 mb-4">每個查核點報告應包含以下內容：</p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              <li>當前進度概述</li>
              <li>已完成的主要任務和里程碑</li>
              <li>遇到的挑戰和解決方案</li>
              <li>下一階段的計劃和目標</li>
              <li>資源使用情況（人力、資金等）</li>
              <li>與預期目標的偏差分析（如果有）</li>
            </ul>
          </div>
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="flex items-center text-lg font-semibold text-yellow-700 mb-2">
              <AlertTriangle className="mr-2" size={20} />
              注意事項
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              <li>確保所有報告和文件準時提交</li>
              <li>報告應客觀反映項目狀況，包括成功和挑戰</li>
              <li>如有重大變更或偏差，需及時通知計劃管理單位</li>
              <li>保存所有相關文件和數據，以備後續審核</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CheckpointAndReportSlide;