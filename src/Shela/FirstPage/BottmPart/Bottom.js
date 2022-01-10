import React from 'react'
import './../BottmPart/Bottom.css'
import {GrNext} from 'react-icons/gr';

import {FaSearchDollar} from'react-icons/fa';
import {FaIdCard} from 'react-icons/fa';
import {AiOutlineScan} from 'react-icons/ai';
import {GiSandsOfTime} from 'react-icons/gi';
import {AiOutlinePercentage} from  'react-icons/ai'
function Bottom() {
    return (
        <>
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
                    <h1> <FaSearchDollar/> </h1> 
                    <h3 className='icon-text'>Item Lookup </h3>
                    </div>

                    <div className='icon-2'>
                        <h1> <FaIdCard/> </h1> 
                        <h3 className='icon-text'> Gift Card</h3>
                    </div>

                    <div className='scan-icon'>
                        <h1 className='scan-bg'> <AiOutlineScan/> </h1>
                        <h3 className='scan-text'> Scan Item  </h3>
                    </div>

                    <div className='icon-3'>
                        <h1> <GiSandsOfTime/> </h1> 
                        <h3 className='icon-text-3'> Suspend </h3>
                    </div>

                    <div className='icon-4'>
                        <h1> <AiOutlinePercentage/> </h1>
                        <h3 className='icon-text-4' > Offers </h3>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Bottom;
