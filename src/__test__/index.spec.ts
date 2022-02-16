import { add } from '../index'
test("Index add fun", () => {
  const result = add(1, 2)
  console.log(result)
  expect(result).toBe(3)
})