import React from "react";

const Form = (props) => {


    return (
        <form onSubmit={props.onAddTeamMember}>
            <label>Name:
                <input
                    onChange={props.onInputChange}
                    
                    name="fname"
                    type="text"
                />
            </label>

            <label>Email:
                <input 
                    onChange={props.onInputChange}
                    
                    name="email" 
                    type="text" 
                />
            </label>

            <label>Role:
                 <input 
                 onChange={props.onInputChange}
                 
                 name="role" 
                 type="text" />
            </label><br/>

            <input type='submit'/>
        </form>


    )
}

export default Form