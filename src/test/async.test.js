const fetchProduct = require("../async")

describe("Async", () => {
  it("async", () => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 })
    })
  })
})
