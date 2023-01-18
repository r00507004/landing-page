import React from "react";
import featureImg from '../images/icon.png';

const Features: React.FC = () => {
  return (
    <div className="flex flex-row mt-32">

      <div className="flex flex-col flex-1 p-4 bg-white rounded-lg shadow-lg">
        <div className="text-lg font-bold">機能</div>
        <div className="text-base mt-4">ここには機能説明文が入ります。</div>
        <div className="flex justify-center items-end w-full h-full mt-4">
          <img src={featureImg} className="object-contain h-full w-full max-h-48 p-4 bg-gray-100"/>
        </div>
      </div>

      <div className="w-4"/>

      <div className="flex flex-col flex-1 p-4 bg-white rounded-lg shadow-lg">
        <div className="text-lg font-bold">機能</div>
        <div className="text-base mt-4">ここには機能説明文が入ります。</div>
        <div className="flex justify-center items-end w-full h-full mt-4">
          <img src={featureImg} className="object-contain h-full w-full max-h-48 p-4 bg-gray-100"/>
        </div>
      </div>

      <div className="w-4"/>

      <div className="flex flex-col flex-1 p-4 bg-white rounded-lg shadow-lg">
        <div className="text-lg font-bold">機能</div>
        <div className="text-base mt-4">ここには機能説明文が入ります。</div>
        <div className="flex justify-center items-end w-full h-full mt-4">
          <img src={featureImg} className="object-contain h-full w-full max-h-48 p-4 bg-gray-100"/>
        </div>
      </div>

      </div>
    );
};

export default Features;