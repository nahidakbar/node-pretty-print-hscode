"use strict";

/**
 * HS code is best represented without dots and labels for processing.
 * However, that representaton is hard to read.
 * 
 * @param {string} code HS code. 
 * @param {boolean} [showLabel=false] HS category label. e.g. heading, subheading, chapter etc.
 * @param {boolean} [isItem=false] Is this a product category item? I.e., does it have tariffs? 
 */

module.exports = function (code) {
  var showLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isItem = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var hscode = code.replace(/[^0-9]/g, '');
  switch (hscode.length) {
    case 0:
      return (showLabel ? 'Section ' : '') + code;
    case 1:
    case 2:
      return (showLabel ? 'Chapter ' : '') + hscode;
    case 3:
    case 4:
      return (showLabel ? 'Heading ' : '') + hscode;
    case 5:
    case 6:
      return (showLabel ? isItem ? 'Item ' : 'Subheading ' : '') + hscode.substr(0, 4) + '.' + hscode.substr(4);
    default:
      return (showLabel ? isItem ? 'Item ' : 'Subheading ' : '') + hscode.substr(0, 4) + '.' + hscode.substr(4, 2) + '.' + hscode.substr(6);
  }
};