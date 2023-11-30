const FeedItem = ({ fullName }) => {
  return (
    <div className="flex gap-5 pt-2 relative">
      <div className="w-[80px] h-[80px] rounded-full bg-[#505050]"></div>
      <ul>
        <li className="text-[25px] font-bold">namename</li>
        <li className="text-neutral-400">decedecedece</li>
      </ul>
      <div className="absolute right-0">
        123456<span className="text-[12px]">(153)</span>
      </div>
    </div>
  );
};

export default FeedItem;
