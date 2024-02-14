const InputComp = (Prop) => 
{

const containerCss= {
    backgroundColor: "#321e50",
    color:"White",
    display:"grid"

};

return (

    <>
    <div style={containerCss}>
        <h2>Input Container</h2>
        <label>Button <input type="button" value="button1"/></label><hr/>

        <p>Radio Button <br></br> 
        <label> <input type="radio" name="rdo1" value="RdVal1"/>option1</label><br/>
        <label><input type="radio" name="rdo1" value="RdVal2" defaultChecked="true"/>option2</label><br/>
        <label><input type="radio" name="rdo1" value="RdVal3"/>option3</label>
        </p>

        <hr/>

        <label>Check Box <input type="checkbox"  name="chk1" value="ChVal1"/></label><br/>
        <label> Color <input type="color" /></label><br/>
        <label> Dropdown List 
            <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime" >Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
        </label><hr/>

         {/* Date And time */}
        <label>Date Time</label><br></br>
        <label> Date <input type="date" /></label><br/>
        <label> Date Local <input type="datetime-local" /></label><br/>
        <label> Time <input type="time" /></label><br/>
        <label>  Month <input type="month" /></label><hr/>
         {/* Text Input */}
        <label>Text INput</label><br></br>
        <label>  text input <input type="text" value="inital text value" /></label><br/>
        <label>  email <input type="email" /></label><br/>
        <label>  Number <input type="number" /></label><br/>
        <label>  password <input type="password" /></label><br/>
        <label>  text Area <textarea  value="default text"/></label><hr/>
         {/* Files and Images */}
        <label>Files and Image</label><br></br>
        <label>  file <input type="file" /></label><br/>
        <label>  Image <input type="image" /></label><hr/>
        <label> progress <progress value={.45}></progress></label>
        <p></p>
     </div>
    </>
);


};

export default InputComp