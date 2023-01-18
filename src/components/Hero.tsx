import React from "react";
import heroImg from '../images/icon.png';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-row mt-12">
      <div className="flex flex-col flex-1 mr-4">
        <div className="text-5xl font-bold">キャッチコピー</div>
        <div className="text-lg mt-8">ここにはリード文が入ります。</div>
        <div className="flex justify-center items-center w-full h-full">
          <button className="px-8 py-2 text-lg text-white font-bold rounded-full bg-pink-500 hover:bg-pink-400">無料先行登録</button>
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center ml-4">
        <img src={heroImg} className="object-contain h-full w-full max-h-64 p-4 bg-gray-100"/>
      </div>
    </div>
  );
};

export default Hero;