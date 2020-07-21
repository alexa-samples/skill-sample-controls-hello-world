const { ControlHandler, SkillTester, waitForDebugger, TestInput } = require("ask-sdk-controls");
const { expect } = require("chai");
const { suite, test } = require("mocha");
const { HelloManager } = require("..");

waitForDebugger();

suite("all", () => {
    test("launch", async () => {
        const tester = new SkillTester(new ControlHandler(new HelloManager()));
        const testResponseObj = await tester.testTurn("U: __", TestInput.launchRequest(), "A: Hello, world.");
        expect(testResponseObj.response.shouldEndSession).equals(true);
    });

    test("HelloIntent", async () => {
        const tester = new SkillTester(new ControlHandler(new HelloManager()));
        const testResponseObj = await tester.testTurn("U: Hi", TestInput.of('HelloIntent'), "A: Hello, world.");
        expect(testResponseObj.response.shouldEndSession).equals(true);
    });
});
