import * as E from "fp-ts/lib/Either";
import * as TE from "fp-ts/lib/TaskEither";
import * as T from "fp-ts/lib/Task";
import * as O from "fp-ts/lib/Option";

console.log("### option ###");

// from constructor
const noneValue = O.none;
const someVlaue = O.some("value");

// to retrive the value from option
console.log(O.toUndefined(noneValue)); // undefined
console.log(O.toUndefined(someVlaue)); // "value"

console.log(O.toNullable(noneValue)); // null
console.log(O.toNullable(someVlaue)); // "value"

console.log("using getOrElse")
// defualt type should be same as type of some
console.log(O.getOrElse(()=> "default")(noneValue)); // null
console.log(O.getOrElse( () => "defualt") (someVlaue)); // "value"
// if another type is needed
console.log(O.getOrElseW(() => 3)(noneValue));
// using match to get the value
const optionValue1 = O.match(
	() => "empty",
  (s:string) => "there is some value"
);
console.log(optionValue1);
 
console.log( "other ways to construct the files");
// from nullable (from any variable)
const v1 = O.fromNullable(null);
const v2 = O.fromNullable("value");

// from predicate
const isEven = (number ) => number %2 === 0 ;
const v3 = O.fromPredicate(isEven)(3); // Option.None
const v4 = O.fromPredicate(isEven)(4); // Option.Some(4)

// from Either
const leftEither = E.left("whatever");
const rightEither = E.right("value");

const v6 = O.fromEither(leftEither); // option.None
const v7 = O.fromNullable(rightEither); // option.Some("value")

//get the value from the option
const v8 = O.none;
const v9 = O.of("value");

// Either
console.log("building eitherA");
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
