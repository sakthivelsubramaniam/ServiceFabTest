const ChildComp = (Prop) => {

return (

    <>
        <p><span>Value of Prop:</span><span>Prop.SampleProp1</span></p>
        <br></br>
        <AnotherComp prop1={"another comp prop1 value"}
        prop2={"anoher comp prop2 value"} 
        ></AnotherComp>
    </>
);

};
export default ChildComp

function AnotherComp ({prop1,prop2}) {

return (

    <>
     <span>Prop1: </span> <span>{prop1}</span>
    <br></br>
     <span>Prop2: </span> <span>{prop2}</span>
    </>

)

}
