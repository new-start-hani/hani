import { Food, Others, Sports, Travel } from "../Icon";

const liStyle =
  "flex h-full items-center cursor-pointer hover:border-b-2 hover:border-black";

const Category = () => {
  return (
    <div className="w-full bg-white text-2xl">
      <ul className="flex items-center h-20 px-8 gap-8 justify-start">
        <li className={liStyle}>전체</li>
        <li className={liStyle}>
          <img src="/images/game.png" alt="game" width={26} height={26} />
          GAME
        </li>
        <li className={liStyle}>
          <Sports />
          SPORTS
        </li>
        <li className={liStyle}>
          <img src="/images/music.png" alt="music" width={26} height={26} />
          MUSIC
        </li>
        <li className={liStyle}>
          <Food />
          FOOD
        </li>
        <li className={liStyle}>
          <Travel />
          TRAVEL
        </li>
        <li className={liStyle}>
          <Others />
          OTHERS
        </li>
      </ul>
    </div>
  );
};

export default Category;
