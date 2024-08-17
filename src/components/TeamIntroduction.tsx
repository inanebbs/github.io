import React from 'react';
import { Users, Award, BookOpen, Code } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  title: string;
  education: string;
  experience: string;
  contribution: string;
}

const TeamMember = ({ name, title, education, experience, contribution }: TeamMemberProps) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-6">
    <h3 className="text-lg font-semibold text-teal-600 mb-2">{name}</h3>
    <p className="text-gray-700 font-medium mb-2">{title}</p>
    <div className="flex items-start mb-2">
      <BookOpen className="text-teal-500 mr-2 mt-1 flex-shrink-0" size={16} />
      <p className="text-sm text-gray-600">{education}</p>
    </div>
    <div className="flex items-start mb-2">
      <Award className="text-teal-500 mr-2 mt-1 flex-shrink-0" size={16} />
      <p className="text-sm text-gray-600">{experience}</p>
    </div>
    <div className="flex items-start">
      <Code className="text-teal-500 mr-2 mt-1 flex-shrink-0" size={16} />
      <p className="text-sm text-gray-600">{contribution}</p>
    </div>
  </div>
);

const TeamIntroduction = () => (
  <div className="bg-gray-100 p-8 h-screen flex flex-col">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
      <Users className="mr-2" size={28} />
      團隊介紹
    </h2>
    <div className="flex-1 overflow-y-auto">
      <TeamMember 
        name="何彥勳"
        title="執行長 / 計畫主持人"
        education="交通大學資訊科學與工程所（博士肄業）"
        experience="10年軟體開發經驗，曾獲多項創新獎項，主導過多個大型系統開發專案"
        contribution="負責項目整體規劃、技術戰略制定和團隊管理"
      />
      <TeamMember 
        name="陳暐韜"
        title="技術長"
        education="交通大學資訊科學與工程所（博士肄業）"
        experience="專精於深度學習架構設計、Serverless雲端系統和LangChain技術整合"
        contribution="負責核心AI技術開發、系統架構設計和技術團隊領導"
      />
      <TeamMember 
        name="何詩婷"
        title="視覺設計師"
        education="靜宜大學資訊傳播所"
        experience="曾擔任茂為歐買尬數位科技特效師，具有豐富的UI/UX設計經驗"
        contribution="負責產品界面設計、用戶體驗優化和品牌視覺識別"
      />
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">團隊優勢</h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
          <li>跨學科背景，涵蓋AI技術、軟體開發和設計領域</li>
          <li>豐富的創業和產品開發經驗，曾獲多項創新獎項</li>
          <li>深厚的行業知識，了解中小企業的需求和痛點</li>
          <li>強大的技術實力，特別是在AI和雲計算領域</li>
          <li>良好的團隊協作能力，確保項目高效執行</li>
        </ul>
      </div>
    </div>
  </div>
);

export default TeamIntroduction;