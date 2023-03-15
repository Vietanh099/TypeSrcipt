// 1.Function return
function demoFunc() {
    return;
}
// 2. Function Parammeter
var showInfo = function (firstName, lastName, midName) {
    return "Ten sinh vien:" + firstName + "" + midName + "" + lastName;
};
// Hoisting
function sum(a, b) {
    return a + b;
}
// 3. Optional ?
// console.log(showInfo("Nguyễn", "Bảo", "Bằng"));
// 4. Function declaration
var func2 = function () {
};
var func3 = function () {
};
// 5.CallBack
function we17301_map(arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i]);
        temp.push(newItem);
    }
    return temp;
}
var numberArr = [5, 10, 15];
var result1 = we17301_map(numberArr, function (item) {
    return item * 3;
});
var showClass = function (name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    console.log("Sinh vi\u00EAn ".concat(name, " h\u1ECDc l\u1EDBp ").concat(classes.join(", ")));
};
showClass("Văn Anh", "Nodejs", "Typescript");
console.log(showClass);
