function greet(name = "Guest") {
    console.log(`Hello ${name}`);
    
}

function createUser(name, age = 10, role = "user"){
    return {
        name: name,
        age: age,
        role: role
    };
}

console.log(createUser("Dev"));
console.log(createUser("Nguyen Van A", 25, "admin"));



