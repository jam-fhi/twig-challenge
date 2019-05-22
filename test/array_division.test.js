const { expect } = require("chai");
const ArrayDivision = require("../array_division");

describe("The Array Divider Class will return a divided array based on input", () => {
  it("Will return the technical challenge specified output with default inputs", () => {
    const arrayDivider = new ArrayDivision();
    const defaultResults = arrayDivider.processInputArray();
    expect(defaultResults).to.deep.equals([[1, 2], [3, 4], [5]]);
  });

  it("Will return the technical challenge expected output with custom inputs", () => {
    const arrayDivider = new ArrayDivision({
      arrayInput: [1, 2, 3, 4, 5, 6, 7],
      nValue: 3
    });
    const customResults = arrayDivider.processInputArray();
    expect(customResults).to.deep.equals([[1, 2, 3], [4, 5, 6], [7]]);
  });

  it("Will correctly calculate the number of even parts with an input of 2 indexes and nvalue = 2", () => {
    const arrayDivider = new ArrayDivision();
    arrayDivider.arrayInput = [1, 2, 3, 4, 5, 6, 7];
    arrayDivider.nValue = 2;
    arrayDivider.setEvenParts();
    expect(arrayDivider.evenParts).to.equal(3);
  });

  it("Will correctly calculate the number of even parts with an input of 7 indexes and nvalue = 3", () => {
    const arrayDivider = new ArrayDivision();
    arrayDivider.arrayInput = [1, 2, 3, 4, 5, 6, 7];
    arrayDivider.nValue = 3;
    arrayDivider.setEvenParts();
    expect(arrayDivider.evenParts).to.equal(2);
  });

  it("Will correctly calculate the remainder with an input of 7 indexes and nvalue = 2", () => {
    const arrayDivider = new ArrayDivision();
    arrayDivider.arrayInput = [1, 2, 3, 4, 5, 6, 7];
    arrayDivider.nValue = 2;
    arrayDivider.setRemainder();
    expect(arrayDivider.remainder).to.equal(1);
  });

  it("Will correctly calculate the remainder with an input of 8 indexes and nvalue = 3", () => {
    const arrayDivider = new ArrayDivision();
    arrayDivider.arrayInput = [1, 2, 3, 4, 5, 6, 7, 8];
    arrayDivider.nValue = 3;
    arrayDivider.setRemainder();
    expect(arrayDivider.remainder).to.equal(2);
  });

  it("Will correctly an array element to the results array", () => {
    const arrayDivider = new ArrayDivision();
    expect(arrayDivider.resultArray.length).to.equal(0);
    arrayDivider.pushNewResult([1, 2]);
    expect(arrayDivider.resultArray.length).to.equal(1);
  });
});
