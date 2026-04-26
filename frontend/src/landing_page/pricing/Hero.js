import React, { memo } from 'react'
function Hero() {
    return (  
        <div className='container mt-5'>
            
            <div className='row mt-1 p-3 border-bottom  fs-5'>
                <h1 className='text-center fs-2  '>Charges</h1>
                <p className='text-center text-muted'>List of all charges and taxes</p>
                <div className='row mt-1 p-3'>
                    <div className='col-4 p-3'>
                        <img src='https://zerodha.com/static/images/pricing-eq.svg'></img>
                        <h1 className='fs-4'>Free equity delivery</h1>
                        <p className='text-muted fs-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                        


                    </div>
                    <div className='col-4 p-3'>
                        <img src="https://zerodha.com/static/images/other-trades.svg"></img>
                        <h1 className='fs-4'>Intraday and F&O trades</h1>
                        <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className='col-4 p-3'>
                        <img src='https://zerodha.com/static/images/pricing-eq.svg'></img>
                            <h1 className='fs-4'>Free direct MF</h1>
                            <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Hero;