var isLabelEligible = function isLabelEligible(labelText) {
  return !!labelText.match(/\b(?:blocked|needs)\b/);
};

var isLabelBranched = function isLabelEligible(labelText) {
  return !!labelText.match(/^branch:/);
};
