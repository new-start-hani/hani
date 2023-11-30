const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full my-0 mx-auto">
        <div className="w-full min-h-screen flex flex-wrap justify-center items-center">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
