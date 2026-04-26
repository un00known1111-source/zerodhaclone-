import React from 'react'

function Pricing() {
    return ( 
        <div className='container p-2'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>

                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col p-2 border'>
                            <img src='https://zerodha.com/static/images/pricing-eq.svg' style={{width:"50%"}}></img>
                            <p> Free account
opening</p>
                        </div>
                        <div className='col p-2 border'>
                            <img src='https://zerodha.com/static/images/other-trades.svg'style={{width:"50%"}}></img>
                            <p>Free account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;