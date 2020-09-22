let arr = [1,2,3];
arr.push(4)  //mutating function

arr = [...arr, 4]  //immutable (creating new array)

let obj = {
    name : 'John',
    age : 32
}

obj.age = 33; //mutate
obj = {...obj, age: 33} //immutable (create new object)

// redux = Immutable State Tree - single source of truth

