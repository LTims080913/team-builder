import React, {useState} from 'react';
import './App.css';
import Form from './Form'



function App() {
  
  const [teamMemberList, setTeamMemberList] = useState([]);
  
  return (
    <div className="App">
      <h1>This is where the magic happens!!!....STAY TUNED!</h1>
      <Form/>
    </div>
  );
}

export default App;
