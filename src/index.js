module.exports = function reverse(n) {
    let num = (String(n).split('')); //.reverse().join(''));
    if (num[0] == '-') { num.splice(0, 1); }

    return +(num.reverse().join(''));
}
