import React from "react";
import  "./Check.css";

import Aux from "../../hoc/Auxiliary";
const Check = () => {
  return (
    <Aux>
      <div class="success-checkmark">
        <div class="check-icon">
          <span class="icon-line line-tip"></span>
          <span class="icon-line line-long"></span>
          <div class="icon-circle"></div>
          <div class="icon-fix"></div>
        </div>
      </div>
      <center>
        <p>Order Placed SuccessFully</p>
      </center>
    </Aux>
  );
};

export default Check;
