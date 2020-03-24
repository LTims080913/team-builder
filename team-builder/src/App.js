import React, {useState} from 'react';
import './App.css';
import Form from './Form';

const initialTeam = [
  { fname: 'Latosha', email: 'ltims@toocool.com', role: 'wife' },
  { fname: 'Hubby', email: 'jtims@toocool.com', role: 'husband' },
]

function App() {
  
  let [teamMemberList, setTeamMemberList] = useState(initialTeam);
  let [teamFormValues, setTeamFormValues] = useState({
    fname: '',
    email: '',
    role: ''
  })

  const onInputChange = event => {

    const inputThatChanged = event.target.name 
    const newValueForInput = event.target.value
    
    setTeamFormValues({
      ...teamFormValues,
      [inputThatChanged]: newValueForInput,
    })
  }

  const onAddTeamMember = event => {
    
    event.preventDefault()
    const newMember = {
    
      fname: teamFormValues.fname,
      email: teamFormValues.email,
      role: teamFormValues.role
    }
    setTeamMemberList([...teamMemberList, newMember])
  }
  console.log(teamMemberList)

  return (
    <div className="App">
      
      <Form 
      onInputChange={onInputChange}
      teamFormValues={teamFormValues}
      onAddTeamMember={onAddTeamMember}
      />
      
      
      <h1>Super Team!!!</h1>

      {
        teamMemberList.map( member => <div key={member.id}>{member.fname} {member.email} {member.role}</div>)
      }

    </div>
  );
}
  
export default App;
