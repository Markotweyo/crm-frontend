import React from 'react'
import './App.css';

import { DefaultLayout } from './layout/DefaultLayout';
import { AddTicket } from './pages/newTicket/addTicket.page';
//import {Dashboard} from './pages/dashboard/Dashboard.page'

//import { Entry } from './pages/entry/Entry.page';


function App() {
  return (
    <div className="App">
      
      {/*<Entry />*/}
      <DefaultLayout>
        {/*<Dashboard/>*/}
        <AddTicket/>
      </DefaultLayout>
    </div>
  );
}

export default App;
