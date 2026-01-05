import { BsCalendar } from 'react-icons/bs';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../style/datepicker.css';


const CheckIn = () => {

  const [startDate, setStartDate] = useState(false);

  return (
    <div className='relative flex items-center justify-end h-full'>

      <label className="sr-only" htmlFor="checkin-date">Check in date</label>
      <div className='absolute z-10 pr-8' aria-hidden="true">
        <div><BsCalendar className='text-accent text-base' /> </div>
      </div>

      <DatePicker
        className='w-full h-full focus:outline-none focus:ring-2 focus:ring-accent focus:rounded-sm transition-shadow'
        selected={startDate}
        placeholderText='Check in'
        id="checkin-date"
        name="checkin-date"
        onChange={(date) => setStartDate(date)}
      />

    </div>
  );
};

export default CheckIn;
