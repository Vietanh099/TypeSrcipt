// 1.Function return

function demoFunc(){
    return;
}

// 2. Function Parammeter

var showInfo = (firstName:string,lastName:string,midName:string) => {
    return "Ten sinh vien:" +firstName+""+ midName + "" + lastName;
}
// Hoisting
function sum(a:number, b:number) {
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
function we17301_map(arr:any[],callback?:(item:any)=>any){
    const temp = [];
    for(let i = 0; i< arr.length;i++){
        const newItem = callback(arr[i])
        temp.push(newItem)
    }
    return temp
}

const numberArr = [5,10,15]

const result1 = we17301_map(numberArr,(item)=>{
    return item *3
})



const showClass = function(name: string, ...classes: string[]) {
    console.log(`Sinh viên ${name} học lớp ${classes.join(", ")}`);

}


showClass("Văn Anh", "Nodejs", "Typescript")
console.log(showClass);
 
