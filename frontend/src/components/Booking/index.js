import './Booking.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewBooking } from '../../store/bookings'
import BookingResult from '../BookingResult'
function Booking({id}) {
  const user = useSelector(state=> state.session.user)
  const dispatch = useDispatch()
 

  const handleSubmit = async (e)=>{
      e.preventDefault()
      console.log("Hey")
      const newBooking = {
        startDate:"03/06/2021",
        endDate: "03/09/2021",
        spotId: 1,
        userId: 1
      }
    await dispatch(createNewBooking(newBooking))
     console.log("No")
    
    }
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
            <h1 className='textsize'>Your Bookings</h1>
            <h6 className='textsize'>booking functionality still not implemented (coming soon) for show only</h6>
      </div>
      <button onClick={handleSubmit}>Click ME FOR CREATE NEW BOOKING</button>
       <BookingResult
          img = "https://www.gannett-cdn.com/presto/2020/07/01/PSTC/a5165d8b-d3a0-4e1e-a6d6-de3ba077b145-Sartell_basketball_1.JPG"
          location="Basketball gym in Los Angeles"
          title="Equinox Gym"
          description="8 guests · 1 full court · 8 gatorades · 1 shared locker room · Wifi · Towels · Free parking · Shower"
                // star={`${parseFloat((Math.random(1)*5) + 1).toFixed(2)} *`}
          price={`$30 / day`}
          total={`$90 total`}
      />
      <BookingResult
          img = "https://www.gannett-cdn.com/presto/2020/07/01/PSTC/a5165d8b-d3a0-4e1e-a6d6-de3ba077b145-Sartell_basketball_1.JPG"
          location="Basketball gym in Los Angeles"
          title="Equinox Gym"
          description="8 guests · 1 full court · 8 gatorades · 1 shared locker room · Wifi · Towels · Free parking · Shower"
                // star={`${parseFloat((Math.random(1)*5) + 1).toFixed(2)} *`}
          price={`$30 / day`}
          total={`$90 total`}
      />
      <BookingResult
          img = "https://www.gannett-cdn.com/presto/2020/07/01/PSTC/a5165d8b-d3a0-4e1e-a6d6-de3ba077b145-Sartell_basketball_1.JPG"
          location="Basketball gym in Los Angeles"
          title="Equinox Gym"
          description="8 guests · 1 full court · 8 gatorades · 1 shared locker room · Wifi · Towels · Free parking · Shower"
                // star={`${parseFloat((Math.random(1)*5) + 1).toFixed(2)} *`}
          price={`$30 / day`}
          total={`$90 total`}
      />

      
    </div>
      )
}

export default Booking