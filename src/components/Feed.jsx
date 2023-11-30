import { useState, useEffect } from "react";
import FeedItem from "./FeedItem";
import { getFeedList } from "../apis/feed";

const Feed = () => {
  // const [feedList, setFeedList] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const res = await getFeedList();
  //     setFeedList(res.items);
  //   })();
  // }, []);
  return (
    <div>
      <div className="flex flex-col gap-2 divide-y-2 divide-dotted">
        <FeedItem />
      </div>
    </div>
  );
};

export default Feed;
