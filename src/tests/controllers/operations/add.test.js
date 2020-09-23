const add = require("../../../controllers/operations/add")

test("when past to values on add function should be add both values", () =>{
    //arrange 
    //act
    var result = add(1,2)
    //asert
    expect(result).toBe(parseFloat(3).toFixed(2))
})