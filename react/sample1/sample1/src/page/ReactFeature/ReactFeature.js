import ChildComp from "./childComp";

const empList= [
{name:"Sakthvel"   ,age:49, gender:'M'}  ,
{name:"Samriddhi"   ,age:10, gender:'M'}  ,
{name:"Kaveri"      ,age:47, gender:'M'}  ,
{name:"Sainathan"   ,age:79, gender:'M'}  ,
{name:"Kuloth"      ,age:46, gender:'M'}  ,
{name:"Sivasankari" ,age:51, gender:'M'}  ,
{name:"Saravanan"   ,age:56, gender:'M'}  ,
{name:"Mithran" ,age:27, gender:'M'}  
]

const EmpListComp = () => {

  return (
     <ul>
       {empList.map(item=> <li>{item.name}</li>)}
     </ul> 
  )
}

const FilteredEmpListComp = () => {

  const filteredList = empList.filter(item => item.age > 40 )
  return (
     <ul>
       {filteredList.map(item=> <li>{item.name}</li>)}
     </ul> 
  )
}

const ReactFeature=() => {

return (
<>
<h1>React Features</h1>
<div>
  <h3> React Feature - Prop Values</h3>
  <ChildComp SampleProp1="Prop Value1"></ChildComp>
</div>

<div>
  <h3> using array.map </h3>
   <EmpListComp></EmpListComp>
</div>

<div>
  <h3> using array.filter </h3>
   <FilteredEmpListComp></FilteredEmpListComp>
</div>
</>
)

}

export default ReactFeature