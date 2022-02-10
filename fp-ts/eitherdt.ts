import * as E from "fp-ts/lib/Either";
import * as TE from "fp-ts/lib/TaskEither";
import * as T from "fp-ts/lib/Task";
import * as O from "fp-ts/lib/Option";

const isEven = (number ) => number %2 === 0 ;
// Either
console.log("# building either #");

const lv = E.left("left value ");
const rv = E.right("right value");

console.log("## match ##")
const mtE = E.match((v)=> console.log("leftMatch " + v), (v)=> console.log("rightMatch " + v));
mtE(lv);
mtE(rv);

// from get or else
console.log("## getOrElse ##")
const vFromLE = E.getOrElse( () => "default given in getORElse")(lv);
console.log(vFromLE);
const vFromRE = E.getOrElse(()=> "default value for left either ")(rv);
console.log(vFromRE);


console.log("### fromNullable ###");
const lv1 = E.fromNullable("default value for either")(null); // same as E.left("default value of either");
const rv1 = E.fromNullable("default value")("some value"); // same as E.right("some value");




console.log("### from predicate ###");
// const isEven = (number ) => number %2 === 0 ;

type EvenNumber = number;
const isEvenTypeGaurd = (num:number):num is EvenNumber => num % 2 ===0;
const eitherBuilder = E.fromPredicate(
	isEven,
	(number) => `${number} is an odd number`
);
// Here when you use eitherBuilder you get something with the type Either<string, number>
const leftValue = eitherBuilder(3); // Either.left('3 is an odd number')
const rightValue = eitherBuilder(4); // Either.right(4)
//

//
console.log("### from options ###");

const optionNoneV1 = O.none;
const optionV2 = O.of("value");

//const leftv1 = E.fromOption("default value")(optionNoneV1);
// const rightv1 = E.fromOption("default value")(optionV2);


