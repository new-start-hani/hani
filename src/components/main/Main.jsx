import Category from "./Category";
import FeedItem from "../FeedItem";

const Main = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-100">
      <Category />
      <div className="w-[1000px] mx-auto">
        <div className="mt-2 w-full">
          <buttom className="flex justify-center bg-green-500 rounded-md text-white text-2xl font-bold w-full cursor-pointer">
            New Post
          </buttom>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-4">
          <FeedItem />
          <FeedItem />
          <FeedItem />
          <FeedItem />
        </div>
      </div>
    </div>
  );
};

export default Main;
