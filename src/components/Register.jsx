import { useForm } from "react-hook-form";
import { postSignUp } from "../apis/register";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const handleSignupSubmit = handleSubmit(async (data) => {
    const res = await postSignUp(data);
    console.log(res);
  });
  const wrapInputStyle = "w-full relative mb-[30px]";

  const inputStyle =
    "text-white leading-tight block w-full h-[45px] border border-neutral-500 bg-transparent rounded-md pr-[5px] pl-4 outline-none ";
  const optionStyle = "bg-black";
  return (
    <>
      <div className="w-full my-0 mx-auto">
        <div className="w-full min-h-screen flex flex-wrap justify-center items-center p-4 ">
          <div className="w-[500px] rounded-xl px-14 pt-14 pb-9 bg-[#505050]">
            <form
              className="w-full bg-[#505050] divide-solid"
              onSubmit={handleSignupSubmit}
            >
              <span className="text-3xl text-white leading-tight text-center block my-8">
                Register
              </span>
              <div className={wrapInputStyle}>
                <input
                  className={inputStyle}
                  placeholder="Email"
                  {...register("email", {
                    required: "required",
                    pattern: {
                      value: /\S+@\S+.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  type="email"
                />
              </div>
              <div className={wrapInputStyle}>
                <input
                  placeholder="password"
                  className={inputStyle}
                  {...register("password", {
                    requried: "required",
                    minLength: {
                      value: 8,
                      message: "at least 8 character",
                    },
                  })}
                  type="password"
                />
              </div>
              <div className={wrapInputStyle}>
                <input
                  placeholder="confirmPassword"
                  className={inputStyle}
                  {...register("confirmPassword", {
                    requried: "required",
                    minLength: {
                      value: 8,
                      message: "at least 8 character",
                    },
                  })}
                  type="password"
                />
              </div>
              <div className={wrapInputStyle}>
                <input
                  placeholder="nickname"
                  className={inputStyle}
                  {...register("nickname", {
                    requried: "required",
                    minLength: {
                      value: 2,
                      message: "at least 2 character",
                    },
                    maxLength: {
                      value: 4,
                      message: "max 4 character",
                    },
                  })}
                />
              </div>
              <div className={wrapInputStyle}>
                <input
                  placeholder="age"
                  className={inputStyle}
                  {...register("age", {
                    requried: "required",
                    min: 1,
                  })}
                  min={1}
                  type="number"
                />
              </div>
              <div className={wrapInputStyle}>
                <select
                  placeholder="gender"
                  className={inputStyle}
                  {...register("gender", {
                    requried: "required",
                    min: 1,
                  })}
                  min={1}
                  type="checkbox"
                >
                  <option className={optionStyle} value="male">
                    Male
                  </option>
                  <option className={optionStyle} value="female">
                    Female
                  </option>
                </select>
              </div>
              <div className={wrapInputStyle}>
                <select
                  className={inputStyle}
                  {...register("hobby", {
                    requried: "required",
                  })}
                >
                  <option className={optionStyle} value="sports">
                    Sports
                  </option>
                  <option className={optionStyle} value="game">
                    Game
                  </option>
                  <option className={optionStyle} value="music">
                    Music
                  </option>
                  <option className={optionStyle} value="food">
                    Food
                  </option>
                  <option className={optionStyle} value="travel">
                    Travel
                  </option>
                </select>
              </div>
              <div className="flex justify-center">
                <button
                  className="w-[130px] h-[40px] bg-white rounded-[50px]"
                  type="submit"
                >
                  register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
