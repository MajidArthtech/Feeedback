import React from 'react'
import { Link } from "react-router-dom";
import './../SecondPagePopup/Second.css';
import {AiFillTags} from "react-icons/ai";
function SecondPage() {
    return (
        <>
         <div className='main'>
             <div className='container'>
                <div className='tag'>
                    <div className='tag-icon'>
                    <Link to="/thirdPage" > 
                      <h1 className='icon-heading'> <AiFillTags/> </h1> 
                    </Link>

                        <Link to="/Five" > 
                        <p className='price-para'> Price Override  </p>
                        </Link>
                    </div>
         
                    <div className='tag-right-side'>
                        <th className='tag-th'> Full Length Jog Pants in Regular Fit  </th>
                        <div className='side-div'>
                        <th className='tag-order-no'><tr>143512589</tr></th>
                        <th className='th-tag'><tr>AED <span className='span-40'>50</span> </tr></th>
                        <button className='tag-btn'> Buy 2 for AED 50 </button>                    
                     </div>
                    </div>
                </div>
            </div>  
        </div>
        </>    
    )
}
export default SecondPage;