import { useForm } from "react-hook-form";

const Register = () => {
  const { register, submitHandler, watch } = useForm();

  const wrapInputStyle =
    "w-full relative border-b-2 border-[rgba(255,255,255,0.24)] mb-[30px]";

  const inputStyle =
    "text-white leading-tight block w-full h-[45px] bg-transparent pr-[5px] pl-[38px] ";

  return (
    <>
      <form className="w-full divide-solid" onSubmit={submitHandler}>
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
          <input
            placeholder="gender"
            className={inputStyle}
            {...register("gender", {
              requried: "required",
              min: 1,
            })}
            min={1}
            type="checkbox"
          />
        </div>
        <select>
          <option></option>
        </select>
        <div>
          <input></input>
        </div>
        <div className={wrapInputStyle}>
          <input className={inputStyle} />
        </div>
        <div>
          <button
            className="w-[130px] h-[40px] bg-white rounded-[50px]"
            type="submit"
          >
            register
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
