import React from 'react';
import { Target, Zap, Users } from 'lucide-react';

interface ProfileItemProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const ProfileItem: React.FC<ProfileItemProps> = ({ Icon, title, description }) => (
  <div className="flex items-start mb-4">
    <Icon className="text-teal-500 mr-3 flex-shrink-0" size={24} />
    <div>
      <h3 className="font-semibold text-teal-600">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const CompanyProfileSlide = () => (
  <div className="bg-white p-8 h-screen flex flex-col">
    <h2 className="text-3xl font-bold mb-6 text-teal-600">公司簡介</h2>
    <div className="flex-1 flex flex-col justify-center">
      <ProfileItem 
        Icon={Target}
        title="核心業務"
        description="專注於AI技術和系統開發，為中小企業提供數位轉型解決方案"
      />
      <ProfileItem 
        Icon={Zap}
        title="技術優勢"
        description="深度學習架構設計、Serverless雲端系統、LangChain技術整合"
      />
      <ProfileItem 
        Icon={Users}
        title="團隊實力"
        description="跨學科背景，具備AI開發經驗和行業知識，曾獲多項創新獎項"
      />
    </div>
  </div>
);

export default CompanyProfileSlide;