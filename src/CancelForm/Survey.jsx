import react from 'react';
import './FormStyles.css'

export default function Survey() {
    return(
        <div className='CancelForm flex-col'>


           <div className='surveyDescription'>
                <p className='boldFont large'>We're sad to see you go... </p>
                <p>Can you tell us why you want to cancel your membership?</p>  
           </div>


            <form className='flex-col surveyList'>
                <div className='questions flex-row'>
                    <input type="checkbox" />
                    <p>Found a better solution</p>
                </div>
                <div className='questions flex-row'>
                    <input type="checkbox" />
                    <p>Found a better solution</p>
                </div>
               
            </form>
        </div>
    )
}