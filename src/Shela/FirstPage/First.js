import React from 'react'
import './../FirstPage/First.css';


function FirstPage() {
    return (
        <>
        <div className='main'>
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
                    <th className='th-qty'><tr>QTY <input type="number" className='inp-1' placeholder='2' /> </tr></th>
                </div>
                <button className='btn-1'> Buy 2 for AED 35</button>  
                <hr className='hr-1' />
            </div>  
        </div>
    </>
    )
}
export default FirstPage;
