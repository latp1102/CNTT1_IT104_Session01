const a = 5;
const arr = [1,2,3];

a = 10;
arr.push(4);
console.log("gia tri cua a", a);
console.log("gia tri cua arr", arr);
// lỗi vì const không cho phép gán lại giá trị mới cho biên a = 10 lỗi