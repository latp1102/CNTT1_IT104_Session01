const check = (a) => {
    if(typeof a !== 'number' || isNaN(a)){
        return `${a} ko phai la so`;
    }
    return a % 2 === 0 ? `${a} la so chẵn` : `${a} la so le`;
};

console.log(check(10));
console.log(check(11));
console.log(check("hello"));


