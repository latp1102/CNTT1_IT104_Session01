function insertArr(arr1, arr2, position){
    if(position < 0 || position > arr1.lenght){
        console.log("vị trí không hợp lệ");
        return;
    }
    const result = [
        ...arr1.slice(0, position),
        ...arr2,
        ...arr1.slice(position)
    ];
    console.log(result);
    return result;
}
insertArr([1,2,3,7,8], [4,5,6], 3);
insertArr(['a','b','e','f'], ['c','d'], 2);