import React from "react";

const Form: React.FC = () => {
  return (
    <div id="form" className="flex flex-col justify-center items-center mx-2 mt-32 p-8 bg-white rounded-lg shadow-lg">
      <div className="text-lg font-bold">メールアドレスを登録</div>
      <div className="text-base mt-4">メールアドレスをご登録頂いた方に、最新情報をお届けします。</div>
      <input
        className="max-w-[384px] w-full mt-4 px-4 py-2 border text-base"
        type="email"
        placeholder="メールアドレス入力"
        required
      />
      <button className="mt-4 px-8 py-2 text-lg text-white font-bold rounded-full bg-pink-500 hover:bg-pink-400">無料先行登録</button>
    </div>
  );
};

export default Form;