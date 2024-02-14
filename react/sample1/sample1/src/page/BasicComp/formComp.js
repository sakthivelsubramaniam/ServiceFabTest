import { useState } from 'react';

const FormComp = () => {


const containerCss= {
    backgroundColor: "#321e50",
    display:"grid",
    gridTemplateColumns: "200px 200px 200px"
};

const [textarea, setTextarea] = useState( "Init Text area content");
const [name, setName] = useState("");


 const handleTextAreaChange = (event) => {
    // displays the value of element from which event originates
    setTextarea(event.target.value)
  }

 const handleTextChange =(event) => {
    setName(event.target.value)
 }

 const handleSubmit = (event) => {
    event.preventDefault();

    alert(`The name you entered was: ${name} -- ${textarea}`)
  }

return (
    <div style={containerCss}> 
        <h1>Form Comp</h1>
        <span>Description is : {textarea}</span>        
        <span>Name is  : {name}</span>        
        <form onSubmit={handleSubmit}> 
       
            <label> Enter the Description:
                <textarea value={textarea} onChange={handleTextAreaChange} /> 
            </label>
           
             <br></br>

            <label>Enter your name:
                <input type="text" value={name} onChange={handleTextChange}
                />
            </label>
             <br></br>

            <input type="submit" ></input>

        </form>
    </div>
)
}

export default FormComp;