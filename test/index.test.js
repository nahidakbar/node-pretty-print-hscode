"use strict";

const assert = require("node:assert/strict");
const { describe, it } = require("node:test");

const prettyPrintHsCode = require("../src");

describe("prettyPrintHsCode", () => {
  it("handles sections", () => {
    assert.equal(prettyPrintHsCode("I"), "I");
    assert.equal(prettyPrintHsCode("I", true), "Section I");
    assert.equal(prettyPrintHsCode("I", { showLabel: true }), "Section I");
  });

  it("handles chapters", () => {
    assert.equal(prettyPrintHsCode("01"), "01");
    assert.equal(prettyPrintHsCode("01", true), "Chapter 01");
  });

  it("handles headings", () => {
    assert.equal(prettyPrintHsCode("0101"), "0101");
    assert.equal(prettyPrintHsCode("0101", true), "Heading 0101");
  });

  it("handles subheadings", () => {
    assert.equal(prettyPrintHsCode("010203"), "0102.03");
    assert.equal(prettyPrintHsCode("010203", true), "Subheading 0102.03");
    assert.equal(prettyPrintHsCode("010203", true, true), "Item 0102.03");
    assert.equal(prettyPrintHsCode("010203", { showLabel: true, isItem: true }), "Item 0102.03");
  });

  it("handles national-level extensions", () => {
    assert.equal(prettyPrintHsCode("01020304"), "0102.03.04");
    assert.equal(prettyPrintHsCode("01020304", true), "Subheading 0102.03.04");
    assert.equal(prettyPrintHsCode("01020304", true, true), "Item 0102.03.04");
  });

  it("ignores punctuation and whitespace in numeric codes", () => {
    assert.equal(prettyPrintHsCode("0102.03"), "0102.03");
    assert.equal(prettyPrintHsCode(" 0102 03 04 "), "0102.03.04");
  });

  it("rejects invalid argument types", () => {
    // @ts-expect-error Runtime validation rejects non-string codes.
    assert.throws(() => prettyPrintHsCode(101), /code must be a string/);
    // @ts-expect-error Runtime validation rejects non-boolean legacy options.
    assert.throws(() => prettyPrintHsCode("010203", "yes"), /options must be a boolean or an options object/);
    // @ts-expect-error Runtime validation rejects non-boolean legacy item flags.
    assert.throws(() => prettyPrintHsCode("010203", true, "yes"), /isItem must be a boolean/);
  });

  it("exposes a named CommonJS property", () => {
    assert.equal(prettyPrintHsCode.prettyPrintHsCode("010203"), "0102.03");
  });
});
