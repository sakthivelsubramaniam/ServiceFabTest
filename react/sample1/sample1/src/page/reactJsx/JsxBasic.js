import "../page.css";


const JsxBasic= () => {

// sample function
const sampleFn = () => {

    return "from inside Js Function";
}

// note braces 
const JsxSnippet = (
 <p> <h3> This is Jsx Snippet </h3> </p>

)

const x = 5;
const conditionalInJsx = <h3>{(x) < 10 ? "Hello conditional rendering" : "Goodbye"}</h3>;

// note: Parameter of the function is one object that is expanded.
const JsConditionalFn = ({checked,value}) => {
    
    if (checked) {
        return <li> true condition - {value} ✔</li>
    }
    return <li>false condition - {value}</li>
}

// returns null 
const JsxReturnNull = () => {

    return null;
}

return (
    <>
     <h1>Javascript Extensions</h1> 
     <div className="page-content">
        {/* calling the Javascript function within Jsx */}
       <p> <h3>Js Function in Jsx1</h3> { sampleFn()}</p> 

       {/* adding Jsx snippets*/}
       {JsxSnippet}

       {/* adding conditional expression in Jsx */}
       {conditionalInJsx}

       {/* adding conditional If in Jsx */}
       {/* note attributes in Jsx are passed as props */}
       <div>
        <h3>use of if statement</h3>
        <ol>
            <JsConditionalFn checked={true} value="value1"></JsConditionalFn>
            <JsConditionalFn checked={false} value="value2"></JsConditionalFn>
        </ol>
       </div>

        {/*returning null will not render anything */}
        <div>
            <h3> Function returns null, that renders nothing</h3>
            <JsxReturnNull />
        </div>
       
       <h3>end of component</h3>
     </div>
    </>

)

}

export default JsxBasic;