import { Tours } from '@/app/lib/types';
import React from 'react'

const ToursPreview = ({tours}: {tours: Tours}) => {
    return (
        <div>
            Tours
            {
                tours.map(tour => 
                    <div>
                        <h4>{tour.date}</h4> 
                        <h4>{tour.place}</h4> 
                        <h4>{tour.city}</h4>                      
                    </div>

                )
            }
        </div>
    )
}

export default ToursPreview;