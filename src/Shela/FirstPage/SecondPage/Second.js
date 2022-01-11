import React from 'react'
import './../SecondPage/Second.css';
import {AiFillTags} from "react-icons/ai";
// import FirstPage from '../First';
function SecondPage() {
    return (
        <>
         <div className='main'>
             <div className='container'>
                <div className='div-1'>
                <th className='th-1'>
                    <tr> Pocket in Detail Jog Pants in Regular Fit  </tr>
                </th>
                <th className='side-total'>
                <tr> Total <span className='span-70'>70</span></tr>
                </th>
                </div>

                <div className='div-2'>
                    <th className='th-order-no'><tr>143512589</tr></th>
                    <th className='th-add'><tr>AED <span className='span-40'>50</span> </tr></th>
                    <th className='th-qty'><tr>QTY <input type="number" className='inp-1' placeholder='1' /> </tr></th>
                </div>
                <hr className='hr-1'/>
                <div className='tag'>
                    <div className='tag-icon'>
                        <h1 className='icon-heading'> <AiFillTags/> </h1>
                        <p className='price-para'> Price Override  </p>
                    </div>

                    <div className='tag-right-side'>
                        <th className='th-1'> Full Length Jog Pants in Regular Fit  </th>

                        <div className='side-div'>
                        <th className='th-order-no'><tr>143512589</tr></th>
                        <th className='th-add'><tr>AED <span className='span-40'>50</span> </tr></th>
                        <button className='btn-1'> Buy 2 for AED 50 </button>                    
                     </div>
                    </div>
                </div>
                <hr className='hr-1' />

                <div className='div-1'>
                <th className='th-1'>
                    <tr>Chequred Shirt with Long Sleeves </tr>
                </th>
                <th className='th-2'>
                <tr> Total <span className='span-70'>70</span></tr>
                </th>
                </div>

                <div className='div-2'>
                    <th className='th-order-no'><tr>143512589</tr></th>
                    <th className='th-add'><tr>AED <span className='span-40'>40</span> </tr></th>
                    <th className='th-qty'><tr>QTY <input type="number" className='inp-1' placeholder='2' /> </tr></th>
                </div>
                <hr className='hr-1' />
            </div>  
        </div>
        </>
       
           
    )
}
export default SecondPage;
