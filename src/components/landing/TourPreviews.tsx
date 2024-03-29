import { Tours } from '@/app/lib/types';
import Video from '@/components/Video';

const TourPreviews = ({tours}: {tours: Tours}) => {
    return (
        <div className=''>
            Tours

            <div className='w-full sm:px-[15%]'>
                <Video src="https://www.youtube.com/embed/H7-ayoJKZ_Q"
                    title="change-this"
                />
            </div>

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

export default TourPreviews;