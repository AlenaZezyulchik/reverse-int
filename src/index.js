module.exports = function reverse(n) {
    const str = String(n);
    const arr = str.split("");
    const reversedArr = arr.reverse();
    const newStr = reversedArr.join("");

    return parseInt(newStr);
}