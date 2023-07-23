import React from 'react';
import './App.css';
import NavbarComp from './components/NavbarComp';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';



function App() {
  const steps = [
    {
      id: 'Great',
      message: 'Hello, Welcome to SpikeFam. How can I help you today?',
      trigger: 'help'
    },
    
    {
      id: 'help',
      options: [
        { id: '1' ,value: 1, label: 'About Us' },
        { id: '2',value: 2, label: 'Yearly Tournaments' },
        { id: '3',value: 3, label: 'Team Registration' },
        { id: '4',value: 4, label: 'Contacts' },
        { id: '5',value: 5, label: 'Registion' },
      ]
    },
    {
      id: '1',
      message: 'Great job handling your react issue',
      end: true,
      
    },
    {
      id: '2',
      message: 'Great job handling your angular issue',
      end: true
    }
  ];
    
  const theme = {
    background: 'white',
    fontFamily: 'Lato',
    headerBgColor: '#F2AD46',
    headerFontSize: '20px',
    botBubbleColor: 'black',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: 'black',
    userFontColor: 'white',
  };
  const config = {
    botAvatar: "/person.png",
    floating: true,
    
  };
  
  return (
    
    <div>
      <div className="App">
        <ThemeProvider theme={theme}>
          <ChatBot

              headerTitle="SpikeFam Assitant"
              steps={steps}
              {...config}
          />
        </ThemeProvider>
        <NavbarComp />
        
      </div>
    </div>
    
  );
}

export default App;
