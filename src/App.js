import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventLogs from './components/EventLogs';
import EventLogContextProvider from './contexts/EventLogContext';

function App() {
  return (
    <EventLogContextProvider>
      <EventLogs/>
    </EventLogContextProvider>
  );
}

export default App;
