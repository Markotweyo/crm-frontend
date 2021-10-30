import React from 'react'
import './App.css';

import { DefaultLayout } from './layout/DefaultLayout';
import { AddTicket } from './pages/newTicket/addTicket.page';
import {Dashboard} from './pages/dashboard/Dashboard.page'
import { Entry } from './pages/entry/Entry.page';
import TicketLists  from './pages/Ticketlist/TicketLists'


function App() {
  return (
    <div className="App">
      
     
      <DefaultLayout>
      <TicketLists/>
      </DefaultLayout>
    </div>
  );
}

export default App;
