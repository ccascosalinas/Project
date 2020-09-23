const multiply = require("../../../controllers/operations/multiply")

test("when past to values on add function should be add both values", () =>{
    var result = multiply(4,3)
    expect(result).toBe(parseFloat(12).toFixed(2))
})