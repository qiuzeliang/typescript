let hello : string = 'hello typescript'
document.querySelectorAll('.app')[0].innerHTML = hello
console.log(hello)

let arr : number[] = [1, 2, 3]
let arr1 : Array<number | string> = [1, "2"]
let tuple : [number, string] = [0, "1"]

let add = (x: number, y: number) :number => x + y
let compute : (x: number, y: number) => number

compute = (a, b) => a + b

let obj : {x: number, y: number} = {x:1, y:2}

let s1 : symbol = Symbol()
let s2 = Symbol()

let un : undefined = undefined
let un2 : null = null

// void
let noReture = () => {}