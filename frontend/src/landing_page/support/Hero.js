import React from 'react'
 function Hero() {
    return (  
        <section className="container-fluid" id='supportHero'>
            <div className=" p-5 mt-5 mb-5" id='Supportwrapper'>
                <h3>Support Portal</h3>
                <a href=''>Track Tickets</a>
                </div>
                <div className='row p-5  '>
                    <div className='col p-5 '>
                        <h1 className='fs-2'>Search for an answer or browse helptopics to create a ticket</h1>
                        <input placeholder='Eg.How do I activate F&O'>
                        </input>

                    </div>
                    <div className='col-6 p-5 '>
                        <h1 className='fs-2'>Featured</h1>
                        <ol>
                            <li>Current takeover and Deselling-january-2024</li>
                            <li>Latest intraday/leverage-MIS & CO</li>
                        </ol>
                    </div>
                </div>
        </section>
        
    );
 }
 
 export default Hero;
