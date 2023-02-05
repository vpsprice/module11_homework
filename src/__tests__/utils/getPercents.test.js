import { getPercents } from "../../utils/getPercents.js";

describe("tests for getPercents function", () => {
    const positiveValues = [77.7, 0.5, 100, 30];

    const negativeValues = [-77.7, -0.5, -100, -30];
    const string = "one hundred";
    const emptyString = "";

    it("should operate correctly with positive numbers", () => {
        expect(getPercents(positiveValues[3], positiveValues[2])).toBe(30);
        expect(getPercents(positiveValues[3], positiveValues[1])).toBe(0.15);
        expect(getPercents(positiveValues[0], positiveValues[3])).toBe(23.31);
        expect(getPercents(positiveValues[2], positiveValues[2])).toBe(100);
    });

    it("should operate correctly with negative numbers", () => {
        expect(getPercents(negativeValues[3], negativeValues[2])).toBe(30);
        expect(getPercents(negativeValues[3], negativeValues[1])).toBe(0.15);
        expect(getPercents(positiveValues[0], negativeValues[3])).toBe(-23.31);
        expect(getPercents(negativeValues[2], positiveValues[2])).toBe(-100);
    });

    it("should return NaN or 0 or Infinity with incorrect inputs", () => {
        expect(getPercents(emptyString, positiveValues[2])).toBe(0);
        expect(getPercents(string, positiveValues[2])).toBe(NaN);
        expect(getPercents(emptyString, string)).toBe(NaN);
        expect(getPercents(emptyString, emptyString)).toBe(0);
    });
    
    it("Infinity case", () => {
        expect(getPercents(positiveValues[2], Infinity)).toBe(Infinity);
        expect(getPercents(Infinity, positiveValues[2])).toBe(Infinity);
        expect(getPercents(Infinity, negativeValues[0])).toBe(-Infinity);
    });
});