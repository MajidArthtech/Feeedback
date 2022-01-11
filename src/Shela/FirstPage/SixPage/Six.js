import React from "react";
import './../SixPage/Six.css';
import {FiX} from 'react-icons/fi';
function Six() {
  return (
    <>
    <div className="six_page_main">
      <div className="container">
        <div className="six_page_icon">
          <p className="six-para-1">
            Discount approval request has been
            </p>
        <p className="six_fix_icon">  <FiX/> </p>
        </div>

        <p className="six-para-2">
        Confirmed by the manager
        </p>
      </div>
    </div>
    </>
    
  );
}

export default Six;
