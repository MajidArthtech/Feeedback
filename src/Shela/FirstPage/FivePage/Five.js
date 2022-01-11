import React from 'react'
import './../FivePage/Five.css';
function Five() {
    return (
        <>
        <div className='header-five'>
            <h1 className='head-heading'> Price Override </h1>
        </div>
        <div className='container'>
            <div className='price-div'>
                <h1 className='first_item'>Chequred Shirt with Long Sleeves </h1>
                <h4 className='id_item'> 143512589 </h4>
                <h4 className='price_item' > Current Price : <span className='price_item-2'> 150 </span> </h4>
            </div>

            <div className='form_div_2'>
                <form className='price_form'>
                    <label className='price_label'> Override the Price (AED) </label> <br />
                    <input type="text" className='price_input' placeholder='154' required/> <br />

                    <button className='Price_btn'> Submit </button>
                </form>
            </div> 
        </div>
        </>
    )
}

export default Five;
