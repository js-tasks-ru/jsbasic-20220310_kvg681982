function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('1xBet'.toLowerCase()) || lowerStr.includes('xxx'.toLowerCase());
};
