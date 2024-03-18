const Alert = (props) => {
  const { classname, message } = props;
  return (
    <div className={"alert " + classname} role="alert">
      {message}
    </div>
  );
};

export default Alert;
