"use strict";

/**
 * HS code is best represented without dots and labels for processing.
 * However, that representation is hard to read.
 *
 * @typedef {object} PrettyPrintHsCodeOptions
 * @property {boolean} [showLabel=false] Prefix the HS category label, e.g. Chapter or Heading.
 * @property {boolean} [isItem=false] Use Item instead of Subheading for 5+ digit codes.
 */

/**
 * Pretty print an HS code.
 *
 * @param {string} code HS code. Non-digit separators are ignored for numeric codes.
 * @param {boolean | PrettyPrintHsCodeOptions} [options=false] Show labels, or options.
 * @param {boolean} [isItem=false] Use Item instead of Subheading when using the legacy boolean API.
 * @returns {string}
 */
function prettyPrintHsCode(code, options = false, isItem = false) {
  if (typeof code !== "string") {
    throw new TypeError("code must be a string");
  }

  const { showLabel, isItem: resolvedIsItem } = normalizeOptions(options, isItem);
  const hsCode = code.replace(/\D/g, "");

  switch (hsCode.length) {
    case 0:
      return `${showLabel ? "Section " : ""}${code}`;
    case 1:
    case 2:
      return `${showLabel ? "Chapter " : ""}${hsCode}`;
    case 3:
    case 4:
      return `${showLabel ? "Heading " : ""}${hsCode}`;
    case 5:
    case 6:
      return `${label(showLabel, resolvedIsItem)}${hsCode.slice(0, 4)}.${hsCode.slice(4)}`;
    default:
      return `${label(showLabel, resolvedIsItem)}${hsCode.slice(0, 4)}.${hsCode.slice(4, 6)}.${hsCode.slice(6)}`;
  }
}

/**
 * @param {boolean | PrettyPrintHsCodeOptions} options
 * @param {boolean} isItem
 * @returns {{ showLabel: boolean, isItem: boolean }}
 */
function normalizeOptions(options, isItem) {
  if (typeof options === "boolean") {
    if (typeof isItem !== "boolean") {
      throw new TypeError("isItem must be a boolean");
    }

    return { showLabel: options, isItem };
  }

  if (options && typeof options === "object") {
    return {
      showLabel: options.showLabel === true,
      isItem: options.isItem === true,
    };
  }

  throw new TypeError("options must be a boolean or an options object");
}

/**
 * @param {boolean} showLabel
 * @param {boolean} isItem
 * @returns {string}
 */
function label(showLabel, isItem) {
  if (!showLabel) {
    return "";
  }

  return isItem ? "Item " : "Subheading ";
}

module.exports = prettyPrintHsCode;
module.exports.prettyPrintHsCode = prettyPrintHsCode;
