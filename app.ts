let variable = "hello"

variable = "hi"

let age = 18

//age = "eighteen"

let ageWithType: number = 22;
//ageWithType = "hi"
ageWithType = 10

let testString : string;

testString = "hello"

let testBoolean: boolean;

testBoolean = false

let testStringOrNumber: string | number

testStringOrNumber = 10
testStringOrNumber = "hi"
//testStringOrNumber = []

// Array

let names = ["kevin", "liz", "ivy"]

// names.push(3)
names.push("mike")

let numbers = [11, 22, 33]

// numbers.push(true)
numbers.push(92)

let testStringArray : string[]

// testStringArray = [1,2,3]
testStringArray = ["one", 'two']

let testNumberArray : number[]

// testNumberArray = [true, 'hi', 23]

testNumberArray = [12, 55,33]

let testStringOrNumberArray : (string| number)[]

testStringOrNumberArray = [1, 'two', 3]

// Objects

let user = {
  username: 'john',
  age: 22,
  isAdmin: false
}

user.username = "jane",
// user.age = "eighteen"
user.age = 20
// user.isAdmin = 'no'
user.isAdmin = true

// user.phone = "+12345678"

let userObj: {
  username:string
  age:number
  isAdmin:boolean
}

userObj = {
  username: 'john',
  age: 23,
  isAdmin: false
}

let userObj2: {
  username:string
  age:number
  isAdmin:boolean
  phone?:string
}

userObj2 = {
  username: 'john',
  age: 23,
  isAdmin: false,
  phone:"+1234567"
}


// Any 

let testAny: any;

testAny = 12
testAny = "hello"
testAny = true
testAny = [true]
testAny = {}

let testAnyArray: any[];

testAnyArray = [1, "two", false, []]

