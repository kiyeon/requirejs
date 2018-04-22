var utils = require("../src/utils");
var chai = require("chai");
var expect = chai.expect;

describe("utils.nvl", function() {
    it("빈타입(null, undefined)", function() {
        expect(utils.nvl()).to.equal("");

        expect(utils.nvl(null)).to.equal("");

        var undef;
        expect(utils.nvl(undefined)).to.equal("");
        expect(utils.nvl(undef)).to.equal("");
    });

    it("숫자타입", function() {
        expect(utils.nvl(0)).to.equal(0);
        expect(utils.nvl(12345)).to.equal(12345);
        expect(utils.nvl(12.345)).to.equal(12.345);
    });

    it ("문자타입", function() {
        var str = "성명 나이 등등등";
        var str2 = new String("abc");
        expect(utils.nvl("abc")).to.equal("abc");
        expect(utils.nvl(str)).to.equal(str);
        expect(utils.nvl(str2)).to.equal(str2);
    });

    it ("불린타입", function() {
        expect(utils.nvl(true)).not.to.equal("");
        expect(utils.nvl(!!"aa")).not.to.equal("");
    });

    it ("배열타입", function() {
        var arr = [1,2,3];
        expect(utils.nvl(arr)).to.equal(arr);
        expect(utils.nvl(new Array(1,2,3,4))).not.to.equal("");
    });

    it("객체타입", function() {
        var obj = {a:1, b:2};
        expect(utils.nvl({}, "it's object.")).to.equal("it's object.");
        expect(utils.nvl(new Object())).to.equal("");
        expect(utils.nvl(obj)).to.equal(obj);
    });

    it("함수타입", function() {
        var func = function() { return "foo"; };
        expect(utils.nvl(func)).to.equal(func);
        expect(utils.nvl(function(){return "bar"}), "it's function").not.to.equal("");
    });
});