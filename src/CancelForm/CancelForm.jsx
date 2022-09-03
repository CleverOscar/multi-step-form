import React from 'react';
import './FormStyles.css'


export default function CancelForm(){
    return(
        <div className='CancelForm '>

            <p> Image goes Here</p>

            <div className='offerDescription'>
                <p className='boldFont before'>Before You Go...</p>
                <p className='boldFont help'>Would 50% OFF For 6  Months Help?</p>

                <p>We know things REALLY suck in the world right now - and many businesses and freelancers are struggling to stay afloat during this COVID-19 crisis</p>

                <p className='boldFont'>So if you could use the extra cushion, grab 50% off for 6 months.</p>

                <p>We hope you're staying safe and healthy!</p>

                <div className='offers'>
                    <button className='acceptOffer'>
                        50% Off for 6 months
                    </button>

                    <button className='cancelSub'>
                        No, thanks! I'll cancel!
                    </button>
                </div>

            </div>
        </div>
    )
}