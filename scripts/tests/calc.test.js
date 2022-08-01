const {
    TestScheduler
} = require("jest");

const addition = require("../calc");
// const subtraction = require("../calc");


describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
        test("should return Error if no paramter", () => {
            expect(addition())
        });
        test("should return Error if string paramter", () => {
            expect(addition("hello", 20))
        })
    });
    describe("Subtraction function", () => {
        // test("should return the 10 for 30 - 20", () => {
        //     expect(subtraction(30, 20)).toBe(10);
        // })
    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
})