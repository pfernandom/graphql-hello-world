var should = require("should");  

describe("Checking if the user is created correctly", function(){  
    it("should create the user with the correct name", function(){
        debugger
		
		var query = '{ hello }';

		graphql(schema, query).then(result => {

		  // Prints
		  // {
		  //   data: { hello: "world" }
		  // }
		  console.log(result);

		});
		
        var tom = "tom"
        tom.should.be.equal("tom");
    });
});