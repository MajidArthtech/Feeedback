import React from 'react'
import './../Form6/Form6.css'
import {BsArrowLeftShort } from "react-icons/bs";

function Form6() {
    return (
        <div className='main'>
            <div className="black"> </div>

      <div className="icon">
        <button className="btn-1">  <BsArrowLeftShort /> Back </button>
        
        <h1 className="logo"> Logo <span>home</span> centre </h1>
      </div>
      <hr />
      <h1 className="Address-h1">Add Address Details </h1>
      <div className="container">
        <div className="personal-details">
          <th className="th-1"> <tr> Personal Details </tr> </th>
          <th className="th-2"> <tr> Contact Details </tr> </th>
          <th className="th-3"> <tr> Delivary Details </tr> </th>
        </div>   <hr />


        <form className="form-1">
          <label className='id-label'> Customer ID  </label>
          <input type="phone" className="input-1" placeholder="456543124" required />

          <label className='name-label'> Full Name  </label>
          <input type="text" className="input-2" placeholder="Mohammad Waseem " required />


          <div className='gender-div'>
          <label className='gender-label'>Gender</label> <br />
    <div className="checkboxes">
    <label><input id="male" type="radio" name="gender" value="male" className="hidden" required /><span> UNSPECIFIED </span></label>
    <label><input id="female" type="radio" name="gender" value="male" className="hidden" required /><span>MALE  </span></label>
    <label><input id="other" type="radio" name="gender" value="male" className="hidden" required /><span>FEMALE</span></label>
    </div>
          <div className='language-1'>
          <label className='language-label'> Language </label> <br />
          <select className='select-1'>
              <option value="English"> English </option>
              <option value="Hindi"> Hindi </option>
              <option value="Arabic"> Arabic </option>
          </select>
          </div>


          </div>
 

          <div className='customer-div'>
              <div>
              <label className='nationality-1'> Nationality  </label> <br />
          <select className='select-2'>
              <option value="Arab"> Arab </option>
              <option value="indian"> Indian </option>
          </select>
              </div>

              <div>
              <label className='vip-customer'> Vip Customer  </label> <br />
          <select className='select-3'>
              <option value="yes"> Yes </option>
              <option value="no">  No </option>
          </select>
              </div>
          </div>

          <button className="btn-2"> Next </button>

        </form>

            </div>
            <footer className="foot-1"></footer>
        </div>
    )
}

export default Form6;