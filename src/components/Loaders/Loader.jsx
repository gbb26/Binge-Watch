import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Oval
      height="40"
      width="40"
      color="yellow"
      ariaLabel="circles-loading"
      wrapperClass="loader"
      visible={true}
    />
  );
};

export default Loader;
