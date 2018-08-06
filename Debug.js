//Debug.js: Functional Logic.

define([
	"log",
	"underscore"
], function(
	log,
	_
) {
  return function( Input ) {
	if ( Input.Debug === true ) {
		if ( 
			_.has( Input, "Comparator" ) &&
			_.has( Input.Comparator, "Object" ) &&
			Input.Comparator.Object === true
		) {
			log("Result: " + JSON.stringify( Input.Result ));
			log("Expected: " + JSON.stringify( Input.ExpectedOutput ));
		} else {
			log( "Result: " + Input.Result );
			log( "Expected: " + Input.ExpectedOutput );
		}
	}
  };
});
