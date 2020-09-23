var subtract = require("../../../controllers/operations/subtract")

test("when past to values on add function should be add both values", () => {
    var result = subtract(10,6)
    expect(result).toBe(parseFloat(4).toFixed(2))
})