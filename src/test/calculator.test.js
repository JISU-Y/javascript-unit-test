const Calculator = require("../calculator.js")

// test('add', ()=>{
//     // test code
// })

// 관련있는 테스트 묶음

describe("Calculator", () => {
  // 각 테스트 전에 init 작업을 중복적으로하기 싫을때
  // 한번에 해주자.
  let cal
  beforeEach(() => {
    cal = new Calculator()
  })

  it("inits with 0", () => {
    // const cal = new Calculator() // 각각의 테스트마다 obj 생성해야함 (각각 테스트는 독립적)
    expect(cal.value).toBe(0)
  })

  it("sets", () => {
    cal.set(9)
    expect(cal.value).toBe(9)
  })

  it("clear", () => {
    cal.set(9)
    cal.clear()
    expect(cal.value).toBe(0)
  })

  it("add should throw an error if value is greater than 100", () => {
    expect(() => {
      cal.add(101) // error가 발생되는 것을 예상하는 코드
    }).toThrow("Value cannot be greater than 100")
  })

  // 서로 연관있는 테스트들은 describe로 묶음!
  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0)
      expect(cal.value).toBe(NaN)
    })

    it("1 / 0 === Infinity", () => {
      cal.set(1)
      cal.divide(0)
      expect(cal.value).toBe(Infinity)
    })

    it("4 / 4 === 1", () => {
      cal.set(4)
      cal.divide(4)
      expect(cal.value).toBe(1)
    })
  })
})
