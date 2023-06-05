import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <Oval
        height={25}
        width={25}
        color="white"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="white"
        strokeWidth={5}
        strokeWidthSecondary={4}
      />
    </>
  );
};

export default Loader;
