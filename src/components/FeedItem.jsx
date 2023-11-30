const FeedItem = () => {
  return (
    <div className="flex gap-5 p-8 bg-white rounded-lg relative">
      <div className="w-[80px] h-[80px] rounded-full bg-[#505050]"></div>
      <ul>
        <li>
          <span className="bg-gray-100 p-2 rounded-2xl text-neutral-600">
            GAME
          </span>
        </li>
        <li className="text-[25px] font-bold">namename</li>
        <li className="text-neutral-400">
          <span>123456</span>
          <span className="text-[12px]">(153)</span>
        </li>
      </ul>
      <div className="absolute right-[20px]">
        <span>2일전</span>
      </div>
    </div>
  );
};

export default FeedItem;
