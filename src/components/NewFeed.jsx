import { useForm } from "react-hook-form";
import { FEED_CAUTION } from "../constants";
const FeedDetail = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <textarea
          rows={14}
          className="w-full p-4 border border-neutral-300 rounded-md outline-0 resize-none"
          placeholder="내용을 입력해주세요"
          {...register("content", {
            required: "required",
          })}
        ></textarea>
        <div className="p-4 bg-neutral-300 rounded">
          <ol className="p-4 text-sm text-gray-500 list-decimal">
            {FEED_CAUTION.map((el, i) => (
              <li className="mb-2" key={i}>
                {el}
              </li>
            ))}
          </ol>
        </div>
        <button
          className="w-full h-[40px] bg-[#505050] text-xl text-white rounded-md"
          type="submit"
        >
          UPLOAD
        </button>
      </form>
    </div>
  );
};

export default FeedDetail;
