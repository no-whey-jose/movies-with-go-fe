const Layout = ({ title, children }) => {
  return (
    <>
      <div className="text-center">
        <h2>{title}</h2>
      </div>
      <hr />
      {children}
    </>
  );
};

export default Layout;
