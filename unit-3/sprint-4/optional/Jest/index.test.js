import { add, obj } from "./index.mjs";

test("2+3", function () {
  expect(add(2, 3)).toBe(5); //tobe is ===
});

test("obj test", () => {
  expect(obj()).toEqual({ name: "aman" }); //toEqual is ==
});

test("match", () => {
  let student = {
    name: "aman",
    age: 19,
  };
  let person = {
    name: "aman",
  };
  expect(student).toMatchObject(person);
});
