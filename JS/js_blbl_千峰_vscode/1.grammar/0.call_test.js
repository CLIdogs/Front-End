// 封装为函数
function iszs(num) {
    flag = true;
    for (var i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

// js函数支持递归
function jc(num) {
    if (num === 1 || num === 0) return 1;
    return num * jc(num - 1);
}

// 计算斐波那契数列: 1 1 2 3 5 8 13 ...
function fib(num) {
    if (num == 1 || num == 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

alert("外链式的js代码");
