import React, { useEffect } from "react";

const Callback = (props) => {

  useEffect(() => {

    if (/access_token|id_token|error/.test(props.location.hash)) {
      props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }

  }, [props.location, props.auth]);

  return <h1>Loading...</h1>;
};

export default Callback;