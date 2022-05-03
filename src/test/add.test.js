const add = require("../add.js")

test("adds 1 + 2 to equal 3", () => {
  // 테스트 코드 작성
  expect(add(1, 2)).toBe(3) // 실행되는 함수가 값이 정확히 3이 되어야 함
})
