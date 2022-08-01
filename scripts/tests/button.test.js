/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    // document.body.innerHTML = "<p id='par'></p>";
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM test", () => {
    test("expects p contect to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exisit", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});