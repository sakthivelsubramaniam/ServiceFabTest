import { useState } from 'react';

const FormComp2 = () => {


const containerCss= {
    color: "white",
    backgroundColor: "#321e50",
    display:"grid",
    gridTemplateRows: "20px 20px 20px 20px",
    gap: "5px"
};

const [emp,setEmp] = useState({});


 const handleChange =(e) => {

    const name = e.target.name;
    const value = e.target.value;
    setEmp({ ...emp,[name]:value});

 }

 const handleSubmit = (event) => {
    event.preventDefault();

    var val1 = displayFrm();
       alert(`The name you entered was: ${val1} `)
  }

 const fun1 =() => {

    return "sakthivel" 
 }

 const displayFrm = () => {

    var dispString = "";

    for (let key in emp) {
      dispString += "  " + emp[key];
        
    };

    return dispString;
  }

const display = displayFrm();

return (
    <>
    <h3>Form Comp 2</h3>
        
        <form onSubmit={handleSubmit} style={containerCss}> 
       
            <label>Enter your name:
                <input name="Name" type="text" value={emp.Name} onChange={handleChange}
                />
            </label>
            
            <label> Enter the Job Description:
                <textarea name="JobDesc" value={emp.JobDesc} onChange={handleChange} /> 
            </label>
            <div>
                <input type="submit" ></input>
            </div>
        </form>

        <div style={{ height: "100px" }} >
           <label>display Area</label> <br></br>
           {fun1()}
        </div>
    </>
)
}

export default FormComp2;