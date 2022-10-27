import { expect } from "chai";
import { rgbToHex, hexToRgb } from "../app/converter.mjs";

describe("Colour Code Converter", function() {
    describe("RGB to Hex conversion", function() {
        it("converts the basic colours", function() {
            const redHex = rgbToHex(255, 0, 0);
            const greenHex = rgbToHex(0, 255, 0);
            const blueHex = rgbToHex(0, 0, 255);

            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff");
        });
    });

    describe("Hex to RGB conversion", function() {
        it("converts the basic colours", function() {
            const red = hexToRgb("ff0000");
            const green = hexToRgb("00ff00");
            const blue = hexToRgb("0000ff");
            
            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);
        });
    });
});