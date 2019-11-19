const { expect } = require("chai");
const { doSomething } = require("../app/utils");

describe("doSomething", () => {
  it("returns true", () => {
    expect(doSomething()).to.be.true;
  });
});
