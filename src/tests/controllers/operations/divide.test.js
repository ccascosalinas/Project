const divide = require("../../../controllers/operations/divide")

test("when past to values on divide function should be add both values", () =>{
    var result = divide(8,4)
    expect(result).toBe(parseFloat(2).toFixed(2))
})

test("when past to zero value in the denominator on divide function should be a error", () =>{
    var result = divide(8,0)
    expect(result).toBe("∞")
})