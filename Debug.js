//Debug.js: Functional Logic.

define([], function() {
  return function( Input ) {
	if ( Input.Debug === true ) {
		console.log( "Result: " + JSON.stringify( Input.Result ) );
		console.log( "Expected: " + JSON.stringify( Input.ExpectedOutput ) );
	}
  };
});
