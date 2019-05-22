"use strict";

class ArrayDivision {
  constructor({ arrayInput = [1, 2, 3, 4, 5], nValue = 2 } = {}) {
    this.evenParts = 0;
    this.resultArray = new Array();
    this.arrayInput = arrayInput;
    this.remainder = 0;
    this.nValue = nValue;

    this.setEvenParts();
    this.setRemainder();
  }

  setEvenParts() {
    // Find how many times the array length can be divided by the n value.
    // This lets us loop through the array to extract blocks of n value length.
    // Make sure we don't have NaN
    this.evenParts = parseInt(this.arrayInput.length / this.nValue)
      ? parseInt(this.arrayInput.length / this.nValue)
      : 0;
  }

  setRemainder() {
    // Modulus check to find the remainder.
    // Make sure we don't have NaN.
    this.remainder =
      this.arrayInput.length % this.nValue
        ? this.arrayInput.length % this.nValue
        : 0;
  }

  processInputArray() {
    // Make sure we have something to process.
    if (this.nValue > 0 && this.arrayInput.length > 0) {
      let resultCounter = 0;
      let indexStart = 0;

      // Get the even parts of the input array and push onto our results array.
      while (resultCounter < this.evenParts) {
        this.pushNewResult(
          this.arrayInput.slice(indexStart, indexStart + this.nValue)
        );
        resultCounter++;
        indexStart += this.nValue;
      }

      // Push final elements on to our results array.
      if (this.remainder > 0) {
        this.pushNewResult(
          this.arrayInput.slice(this.arrayInput.length - this.remainder)
        );
      }
    }

    return this.resultArray;
  }

  pushNewResult(newResult) {
    // Do we have an array to add?
    if (Array.isArray(newResult) === true) {
      // Is there something in the array?
      if (newResult.length > 0) {
        // Push new result onto our result array.
        this.resultArray.push(newResult);
      }
    }
  }
}

module.exports = ArrayDivision;
