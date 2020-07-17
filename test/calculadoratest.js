const assert = require("assert");
const { calcu } = require("../calculadora");

describe("pruebas de calculadora", function () {
  it("debe sumar dos numero ", function () {
    assert.equal(5, calcu.suma(2, 3));
  });
  it("debe restar dos numero ", function () {
    assert.equal(4, calcu.resta(8, 4));
  });
});
