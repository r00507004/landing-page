import React from "react";

const Form: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-32 p-4 bg-white rounded-lg shadow-lg">
      <div className="text-lg font-bold">メールアドレスを登録</div>
      <div className="text-base mt-4">メールアドレスをご登録頂いた方に、最新情報をお届けします。</div>
      <input
        className="w-96 mt-4 px-4 py-2 border text-base"
        type="email"
        placeholder="メールアドレス入力"
        required
      />
      <button className="mt-4 px-8 py-2 text-lg text-white font-bold rounded-full bg-pink-500 hover:bg-pink-400">無料先行登録</button>
    </div>
  );
};

export default Form;