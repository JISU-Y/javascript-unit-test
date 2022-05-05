const check = require("../check")

describe("check", () => {
  let onSuccess
  let onFail

  beforeEach(() => {
    onSuccess = jest.fn() // mock 함수
    onFail = jest.fn()
  })

  it("should call onSuccuess when predicate is true", () => {
    check(() => true, onSuccess, onFail)

    expect(onSuccess.mock.calls.length).toBe(1) // onSuccess 함수 호출이 1번은 되어야 한다
    expect(onSuccess.mock.calls.length).toBe(1) // onSuccess 함수 호출이 1번이라도 호출되면 안된다.
  })
})
