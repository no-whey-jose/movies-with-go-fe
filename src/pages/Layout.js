const Layout = ({ title, children }) => {
  return (
    <>
      <div className="text-center">
        <h2>{title}</h2>
        <hr />
        {children}
      </div>
    </>
  );
};

export default Layout;
