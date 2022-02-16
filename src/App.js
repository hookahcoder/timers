import { useEffect, useState } from 'react';
import './App.css'

function App() {

  function ms(t) {
    let year,
      month,
      day,
      hour,
      minute,
      second;

    second = Math.floor(t / 1000);
    minute = Math.floor(second / 60);
    second = second % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    month = Math.floor(day / 30);
    day = day % 30;
    year = Math.floor(month / 12);
    month = month % 12;

    return { year, month, day, hour, minute, second };
  }


  let [selection, setSelection] = useState('coding');
  let [difference, setDifference] = useState();

  useEffect(() => {
    let database = {
      'coding': '07/10/2021',
      'work': '09/10/2020',
      'english': '03/27/2021',
      'travel': '11/28/2021',
    }
    
    let timeDifference = ms(Math.abs(new Date(database[selection]) - new Date()))
    if (timeDifference.year) {
      setDifference(timeDifference.year + ' y ' + timeDifference.month + ' m ' + timeDifference.day + ' d')
    } else {
      setDifference(timeDifference.month + ' m ' + timeDifference.day + ' d')
    }
  }, [selection])

  return (
    <div className='centered'>
      <h1>{selection}: {difference}</h1>
      <button onClick={() => setSelection('coding')}>coding</button>
      <button onClick={() => setSelection('english')}>english</button>
      <button onClick={() => setSelection('travel')}>travel</button>
      <button onClick={() => setSelection('work')}>work</button>
    </div>
  )
}

export default App;
