import { expect }  from "chai";
import request from "request";

describe("Colour Code Converter API", function() {
    describe("RGB to Hex conversion", function() {

        const url = "http://localhost:3002/rgbToHex?red=255&green=255&blue=255";
        it("returns status 200", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns the colour in hex", function(done) {
            request(url, function(error, response, body) {
                expect(body).to.equal("ffffff");
                done();
            });
        });
    });

    describe("Hex to RGB conversion", function() {

        const url = "http://localhost:3002/hexToRgb?hex=00ff00";
        it("returns status 200", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns the colour in RGB", function(done) {
            request(url, function(error, response, body) {
                expect(body).to.equal("[0,255,0]");
                done();
            });
        });
        
    });
});