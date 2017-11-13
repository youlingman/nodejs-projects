function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return;
    operation();
    return (function() {
        return repeat(operation, --num);
    });
}

function trampoline(fn) {
    // You probably want to implement a trampoline!
    while(fn && typeof fn === 'function') {
        fn = fn();
    }
}

module.exports = function (operation, num) {
    // You probably want to call your trampoline here!
    // return repeat(operation, num)
    return trampoline(function () {
        return repeat(operation, num)
    })
};