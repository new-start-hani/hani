const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full my-0 mx-auto">
        <div className="w-full min-h-screen flex flex-wrap justify-center items-center p-4 ">
          <div className="w-[500px] rounded-xl px-14 pt-14 pb-9 border-4 border-[#505050]">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
