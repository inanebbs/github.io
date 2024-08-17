import React from 'react';
import { ThumbsUp } from 'lucide-react';

const ThankYouPage = () => (
  <div className="bg-gray-100 p-8 h-screen flex flex-col items-center justify-center">
    <ThumbsUp className="text-teal-500 mb-6" size={64} />
    <h2 className="text-3xl font-bold mb-4 text-gray-800">感謝您的關注</h2>
    <p className="text-xl text-gray-600 mb-8 text-center max-w-2xl">
      我們感謝您抽出寶貴時間了解 SalesGPT 項目。我們期待有機會進一步討論這個創新的 AI 業務平台，以及它如何推動產業發展和創新。
    </p>
    <div className="text-lg text-teal-600 font-semibold">
      千腦資訊股份有限公司
    </div>
  </div>
);

export default ThankYouPage;