import React, { useState } from 'react';
import ChatBot from  'react-simple-chatbot';
import {Menu, Segment, Sidebar , MenuItem, Button} from "semantic-ui-react";
import {useCollapse} from 'react-collapsed';
import './App.css';
import { ThemeProvider } from 'styled-components';
function Collapsible() {
  
 
  const theme = {
    innerWidth: '50px',
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};


  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
  <div className="collapsible">
      <div className="header" {...getToggleProps()}>
          {isExpanded ? 'Collapse' : 'Sidebar'}
      </div>
      <div {...getCollapseProps()}>
          <div className="content">
          <Sidebar>
            <Menu>
            <MenuItem>
              DashBoard
              </MenuItem>
              
              <MenuItem>
              <Collapsible1/>
              </MenuItem>
              <MenuItem>
              Features
              </MenuItem>
            </Menu>
          </Sidebar>
    
          </div>
      </div>
  </div>
  );
}
function Collapsible1() {
  const steps = [

    {

      id: "Greet",

      message: "Hello, Welcome to our shop",

      trigger: "Done",

    },

    {

      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",

    },

    {

      id: "waiting1",

      user: true,

      trigger: "Name",

    },

    {

      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues",

    },

    {

      id: "issues",

      options: [

        {

          value: "React",

          label: "React",

          trigger: "React",

        },

        { value: "Angular", label: "Angular", trigger: "Angular" },

      ],

    },

    {

      id: "React",

      message:

        "Thanks for letting your React issue, Our team will resolve your issue ASAP",

      end: true,

    },

    {

      id: "Angular",

      message:

        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

      end: true,

    },

  ]; 
  const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};
 
// Set some properties of the bot

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
  <div className="collapsible">
      <div className="header" {...getToggleProps()}>
          {isExpanded ? 'Close' : 'Message'}
      </div>
      <div {...getCollapseProps()}>
          <div className="content">
          
          <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Chat Service"
                    steps={steps}
                  
 
                />
            </ThemeProvider>
    
          </div>
      </div>
  </div>
  );
}
function App() {
  
  
  
    return(
      
        
 <Collapsible/>
 
  );
 
}
export default App; 