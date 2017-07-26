import Diff from './base';


export const htmlDiff = new Diff();
sentenceDiff.tokenize = function(value) {
  return value.split(/<[^>]*>/);
};

export function diffHTML(oldStr, newStr, callback) { return htmlDiff.diff(oldStr, newStr, callback); }
