import React from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import "./Third.css";
import { FcManager } from "react-icons/fc";
import { ImBullhorn } from "react-icons/im";
import { AiFillTag } from "react-icons/ai";
import { MdOutlineAssignment } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
function Third() {
  return (
    <div className="hello">
      <div className="headerPart">
        <header className="head"> Select Discount or offer</header>
      </div>

      <div className="container">

        <div className="dot-icon">
          <h1 className="first-top-icon"> <BsThreeDots />  </h1>
        </div>

        <div className="Four-icon">
        <Link to="/Fourth" >
          <div className="first-icon">
            <div className="uper">
            <h1 className="about">  <FcAbout fill="red" /> </h1>
          </div>
            <h1 className="icon-heading-1"> <FcManager /> </h1>
            <p className="mgn-para"> Manager Special Price </p>
          </div>
          </Link>
           
          <Link to="/Fourth" >
          <div className="second-icon">
            <div className="uper"> 
            <h1 className="about">   <FcAbout />  </h1>
            </div>

            <h1 className="icon-heading-1"> <ImBullhorn /> </h1>
            <p className="mgn-para"> Advertisement Price </p>
          </div>
          </Link>

          <Link to="/Fourth" >
          <div className="third-icon">
            <h1 className="icon-heading-1"> <AiFillTag />
            </h1>
            <p className="mgn-para-3"> Incorrect Tag </p>
          </div>
          </Link> 
          
          <Link to="/Fourth" >
           <div className="fourth-icon">
            <h1 className="icon-heading-1">  <MdOutlineAssignment />
            </h1>
            <p className="mgn-para-3"> Incorrect Signage </p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Third;
