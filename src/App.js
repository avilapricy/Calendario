import './App.css';
import Days from './components/Days';
import Header from './components/Header';
import styled from 'styled-components'
import React, { useEffect, useState } from 'react';
import moment from 'moment';
moment.locale('en', {
  week: {
    dow: 1
  }
})
const Container = styled.div`
  background: #E5E5E5;
  `

function App() {
  // const [state, setState] = useState({
  //   date: moment(),
  //   startWeek: moment().startOf('week'),
  //   endWeek: moment().endOf('week'),
  // });
  // const [days, setDays] = useState([]);

  // useEffect(() => {

  //   let condition = true;
  //   let newDays = [state.startWeek];
  //   let auxDate = state.startWeek.clone();
    
  //   for (let index = 0; index < 6; index++) {
  //     auxDate = auxDate.clone().add(1, 'day');
  //     console.log(auxDate);
  //     newDays.push(auxDate);
  //   }

  //   setDays(newDays);

  // },[state])

  // function Menos() {
  //   let newDate = state.date.subtract('1', 'week')
  //   setState({
  //     date: newDate,
  //     startWeek: newDate.clone().startOf('week') ,
  //     endWeek: newDate.clone().endOf('week')
  //   })
  // }

  // function Mais() {
  //   let newDate = state.date.add('1', 'week')
  //   setState({
  //     date: newDate,
  //     startWeek: newDate.clone().startOf('week') ,
  //     endWeek: newDate.clone().endOf('week')
  //   })
  // }

  // return (
  //   <div>
  //     <button onClick={Menos}>-</button>
  //     {state.startWeek.format('DD/MM')} - {state.endWeek.format('DD/MM')}
  //     <button onClick={Mais}>+</button>
  //     <ul>
  //       {
  //         days.map((day, index) => {

  //           return (
  //             <li>{day.format('DD')} {day.format('dddd')}</li>
  //           )
  //         })
  //       }
  //     </ul>
  //   </div>
  // )

  return (
    <Container>
      <Header/>
      <Days/>
   </Container>
   );
}

export default App;
