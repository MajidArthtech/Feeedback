import React from "react";
import './../SevenPage/Seven.css';
import {FiX} from 'react-icons/fi';
function Seven() {
  return (
    <>
    <div className="seven_page_main">
      <div className="container">
        <div className="seven_page_icon">
          <p className="seven-para-1">
           A notification has been sent to
            </p>
        <p className="seven_fix_icon">  <FiX/> </p>
        </div>

        <p className="seven-para-2">
        the manager for discount approval
        </p>
      </div>
    </div>
    </>
    
  );
}
export default Seven;