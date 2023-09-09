const customTrimLink = require("./main");

test("Return '' for '  '", () => {
    expect(customTrimLink("  ")).toBe("");
});

test("Return 'Hello world!' for ' Hello world!  '", () => {
    expect(customTrimLink(" Hello world!  ")).toBe("Hello world!");
});

test("Return ' Y o u  a r e  s t u p i d  '", () =>{
    expect(customTrimLink(" Y o u  a r e  s t u p i d  ")).toBe("Y o u  a r e  s t u p i d");
})