import Category from "./Category";
import FeedItem from "../FeedItem";

const Main = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-100">
      <Category />
      <div className="w-[1000px] mx-auto">
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
