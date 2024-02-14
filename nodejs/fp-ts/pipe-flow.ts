import {pipe} from 'fp-ts/lib/function'
import { flow } from 'fp-ts/lib/function'

function add1(x:number) {
	return x+1;
}

function multiply2(x:number){
	return x*2
}

console.log("### pipe ###")
// A -> (A->B) -> (B->C) -> (C->D)
var p1 = pipe(1,add1,multiply2);
console.log(p1);

//flow 
console.log("### flow ###");
var fn = flow(add1,multiply2);
const f1 = fn(1);
console.log(f1);


