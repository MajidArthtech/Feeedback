
import React, { useState } from 'react';
import './../Componets/MaxfirstPage.css';
import SecondPage from './SecondPagePopup/Second';
import {GrNext} from 'react-icons/gr';
import {FaSearchDollar} from'react-icons/fa';
import {FaIdCard} from 'react-icons/fa';
import {AiOutlineScan} from 'react-icons/ai';
import {GiSandsOfTime} from 'react-icons/gi';
import {AiOutlinePercentage} from  'react-icons/ai'


function FirstPage() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState (false);
    const [show2, setShow2] = useState ( false);
    const [show3, setShow3] = useState (false);

    const showHandler = () => {
        setShow (!show);
    }

    const showHandler1 = () =>{
        setShow1 (!show1);
    }

    const showHandler2 = () =>{
        setShow2 (!show2);
    }

    const showHandler3 = () =>{
        setShow3 (!show3);
    }
    return (
        <>
        <div className='main-1'>
             <div className='container'>
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
                    <th className='th-qty'><tr>QTY <input type="number" className='inp-1' name='quantity'
                     placeholder='1' min="1" max="10" /> </tr></th>
                </div>
                <button className='btn-1' id='buttonDiv' onClick={showHandler}> Buy 2 for AED 35</button>
                {show && <SecondPage /> } 
                <hr className='hr-1' />
            </div>  


            <div className='container'>
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
                    <th className='th-qty'><tr>QTY <input type="number" className='inp-1' name='quantity'
                     placeholder='1' min="1" max="10" /> </tr></th>
                </div>
                <button className='btn-1' id='buttonDiv' onClick={showHandler1}> Buy 2 for AED 35</button>
                {show1 && <SecondPage /> } 
                <hr className='hr-1' />
            </div>  


            <div className='container'>
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
                    <th className='th-qty'><tr>QTY <input type="number" className='inp-1' name='quantity'
                     placeholder='1' min="1" max="10" /> </tr></th>
                </div>
                <button className='btn-1' id='buttonDiv' onClick={showHandler2}> Buy 2 for AED 35</button>
                {show2 && <SecondPage /> } 
                <hr className='hr-1' />
            </div>  

            <div className='container'>
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
                    <th className='th-qty'><tr>QTY <input type="number" className='inp-1' name='quantity'
                     placeholder='1' min="1" max="10" /> </tr></th>
                </div>
                <button className='btn-1' id='buttonDiv' onClick={showHandler3}> Buy 2 for AED 35</button>
                {show3 && <SecondPage /> } 
                <hr className='hr-1' />
            </div>  

            <div className='main-bottom'>
            <div className='container'>
                <div className='bottom-div-1'>
                    <th className='th-bottom'> <tr> Items </tr> </th>
                    <th className='th-bottom-1'> <tr> SAVINGS (AED) </tr></th>
                    <th className='th-bottom-1'> <tr> TO PAY (AED) </tr> </th>
                </div>
                <div className='arrow-icon'>
                    <h1> <GrNext className='next-arrow'/> </h1>
                </div>
                <div>
                    <th className='th-rate-1'> <tr> 5 </tr> </th>
                    <th className='th-rate-2'> <tr> 80  </tr> </th>
                    <th className='th-rate-3'> <tr> 400 </tr> </th>
                </div>
                <button className='shop-btn'>Shop for AED 600 more to get 30% off on total </button>

                <div className='icons'>
                    <div className='icon-1'>
                    <h1 className='icon__1' > <FaSearchDollar/> </h1> 
                    <h3 className='icon-text'>Item Lookup </h3>
                    </div>

                    <div className='icon-2'>
                        <h1 className='icon__2'> <FaIdCard/> </h1> 
                        <h3 className='icon-text'> Gift Card</h3>
                    </div>

                    <div className='scan-icon'>
                        <h1 className='scan-bg'> <AiOutlineScan/> </h1>
                        <h3 className='scan-text'> Scan Item  </h3>
                    </div>

                    <div className='icon-3'>
                        <h1 className='icon__3'> <GiSandsOfTime/> </h1> 
                        <h3 className='icon-text-3'> Suspend </h3>
                    </div>

                    <div className='icon-4'>
                        <h1 className='icon__4'> <AiOutlinePercentage/> </h1>
                        <h3 className='icon-text-4' > Offers </h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}
export default FirstPage;