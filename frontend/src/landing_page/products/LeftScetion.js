import React from 'react'
 function LeftScetion({imageURL,productName,productDescription,tryDemo,learnMore,googlrPlay,appStore}) {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src={imageURL}/>
                </div>
                
                <div className='col-6 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>TryDemo</a>
                    <a href={learnMore} style={{marginLeft:"25%"}}>Learn More</a>

                    </div>
                    <div className='mt-3'>
                        <a href={googlrPlay}><img src='https://zerodha.com/static/images/google-play-badge.svg'></img></a>
                    <a href={appStore}><img src='https://zerodha.com/static/images/appstore-badge.svg' style={{marginLeft:"10%"}}></img></a>

                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
 }
 
 export default LeftScetion;