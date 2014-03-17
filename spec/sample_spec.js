var List = require("../list")

describe("List", function(){

	describe("hasOwnProperty", function(){
		var list = new List()


		function checkOwnProperty(object, name){
			it(name, function(){
				expect(object.hasOwnProperty(name)).toEqual(true);
			});
		};

		checkOwnProperty(list,"node");

		// it("'node' ", function(){
		// 	expect(list.hasOwnProperty("node")).toEqual(true);
		// });

		// it("'last'", function(){
		// 	expect(list.hasOwnProperty("last")).toEqual(true);
		// });

		// it("'length'", function(){
		// 	expect(list.hasOwnProperty("length")).toEqual(true);
		// });
	});

	describe("constructor defaults", function(){
		var list = new List();

		it("should set node to `null`", function(){
			expect(list.node).toEqual(null)
		});

		it("should set last to `null`", function(){
			expect(list.last).toEqual(null)
		});

		it("should set length to `0`", function(){
			expect(list.length).toEqual(0)
		});
	});
});
