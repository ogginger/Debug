//build.js: Configuration file for optimizing the function. 
/*
*/ 
({
    paths: {
	"log": "lib/log.min",
	"underscore": "lib/underscore.min"
    },
    exclude: [ "log", "underscore" ],
    name: "Debug",
    out: "debug.min.js"
})
