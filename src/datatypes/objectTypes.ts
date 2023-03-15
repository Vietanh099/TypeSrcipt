// Array
const arr: Array<string> = ["a","b","false"];

// Tuple

const arr2 : [string,number,boolean] = ["abc",2,false]

// Nested Array

const arr3 : string[][] = [["a","b","c"],["a","b","c"]];

const arr4 : Array<[string,number,boolean]> = [["a",1,true],["b",2,false]]

const arr5 : string[] = ["d","e","f"]

// Enum
enum STATUS{PENDING,REJECTED,FULFILLED}

const trangthai : STATUS = STATUS.FULFILLED

enum CODE {SUCCESS = 200, CILENT_ERROR, SERVER_ERROR}

// Object

let pro1:{
    name:string,
    age: number
} = {
    name : 'viet_anh',
    age:19
}