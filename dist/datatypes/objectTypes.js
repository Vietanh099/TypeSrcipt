// Array
var arr = ["a", "b", "false"];
// Tuple
var arr2 = ["abc", 2, false];
// Nested Array
var arr3 = [["a", "b", "c"], ["a", "b", "c"]];
var arr4 = [["a", 1, true], ["b", 2, false]];
var arr5 = ["d", "e", "f"];
// Enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["FULFILLED"] = 2] = "FULFILLED";
})(STATUS || (STATUS = {}));
var trangthai = STATUS.FULFILLED;
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["CILENT_ERROR"] = 201] = "CILENT_ERROR";
    CODE[CODE["SERVER_ERROR"] = 202] = "SERVER_ERROR";
})(CODE || (CODE = {}));
// Object
var pro1 = {
    name: 'viet_anh',
    age: 19
};
