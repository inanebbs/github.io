import React from 'react';
import { Brain } from 'lucide-react';

const CoverSlide = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
    <Brain size={120} className="text-teal-500 mb-8" />
    <h1 className="text-5xl font-bold mb-4 text-teal-600">SalesGPT</h1>
    <h2 className="text-2xl mb-8 text-teal-500">共享AI業務</h2>
    <div className="border-t border-teal-300 w-1/3 my-4"></div>
    <h3 className="text-xl mb-2 text-gray-700">千腦資訊股份有限公司</h3>
    <p className="text-md text-gray-600">SBIR計劃報告 | 2024年8月1日</p>
  </div>
);

export default CoverSlide;