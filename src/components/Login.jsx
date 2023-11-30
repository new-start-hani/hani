const Login = () => {
  const wrapinput100 =
    "w-full relative border-b-2 border-[rgba(255,255,255,0.24)] mb-[30px]";
  const ValidateInput = "relative";
  const input100 =
    "text-white leading-tight block w-full h-[45px] bg-transparent pr-[5px] pl-[38px] ";
  const contact100formcheckbox = "pl-[5px] pt-[5px] pb-[35px] flex";
  return (
    <div className="w-full my-0 mx-auto">
      <div
        className="w-full min-h-screen flex flex-wrap justify-center items-center p-4 "
        // style="background-image: url('images/bg-01.jpg');"
      >
        <div className="w-[500px] rounded-xl px-14 pt-14 pb-9 bg-[#505050]">
          <form className="w-full validate-form">
            <span className="text-6xl text-[#333333] flex justify-center items-center w-[120px] h-[120px] rounded-[50%] bg-[#fff] my-0 mx-auto">
              <i className="zmdi zmdi-landscape"></i>
            </span>

            <span className="text-[30px] text-[#fff] text-center block uppercase leading-[1.2] mt-[30px] mb-[30px]">
              Log in
            </span>

            <div
              className={wrapinput100 + ValidateInput}
              data-validate="Enter username"
            >
              <input
                className={input100}
                name="email"
                placeholder="email"
                type="email"
              ></input>
            </div>

            <div
              className={wrapinput100 + ValidateInput}
              data-validate="Enter password"
            >
              <input
                className={input100}
                type="password"
                name="pass"
                placeholder="Password"
              ></input>
            </div>

            <div className={contact100formcheckbox}>
              <input
                className=""
                id="ckb1"
                type="checkbox"
                name="remember-me"
              ></input>
              <label
                className="text-[13px] block relative pl-[26px] text-[#fff] cursor-pointer"
                for="ckb1"
              >
                Remember me
              </label>
            </div>

            <div className="w-[130px] h-[40px] leading-[40px] rounded-[50px] my-0 mx-auto text-center bg-[#fff] mb-[20px]">
              <button className="w-full" type="=submit">
                Login
              </button>
            </div>

            <div className="text-center p-t-90">
              <a href="#">sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
