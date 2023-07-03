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


// Functions

let sayHi = () => {
  console.log("hi, welcome!")
}

// sayHi = "hi"

let funcReturnString = (): string => {
  console.log("hi")
  return "kevin"
}

let multiple = (num: number): number => {
  return num * 2
}

let multiple2 = (num: number): number => {
  return num * 2
}

let multiple3 = (num: number): void => {
  // return num * 2
  // Do something but don't return
}

let sum = (num1: number, num2: number, another?:number) => {
  return num1 + num2
}

sum(2,3, 7)


// Type Aliases

type UserType = {
  username: string;
  age: number;
  phone?: string;
}

let betterFunc =(user:UserType) => {
  console.log(user.username)
} 


type myFunc = (a:number, b:string) => void

let write: myFunc = (num, str) => {
  console.log(num + " times " + str)
}

type UserType2 = {
  username: string;
  age: number;
  phone?:string;
  theme: "dark" | "light"
}

const userWithTheme: UserType2 = {
  username: "hh",
  age: 12,
  //theme: "pink"
  theme: "dark"
}

// INTERFACES

interface IUser {
  username: string;
  email:string;
  age:number;
}

interface IEmployee extends IUser{
  employeeId:number,
}

const emp: IEmployee = {
  username:"tom",
  email:"tom@gmail.com",
  age:18,
  employeeId:1
}

const cli: IUser = {
  username:"tom",
  email:"tom@gmail.com",
  age:18,
}

// GENERICS

interface IAuthor {
  id:number,
  userName: string
}

interface ICategory {
  id:number,
  title: string,
}

interface IPost {
  id:number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[]
}

interface IPostBetter<T> {
  id:number;
  title: string;
  desc: string;
  extra: T[]
}

const testMe: IPostBetter<String> = {
  id: 1,
  title:"post title",
  desc: "post desc",
  extra: ["str", "str3"]
}

interface IPostEvenBetter<T extends object> {
  id:number;
  title: string;
  desc: string;
  extra: T[]
}

const testMe2: IPostEvenBetter<IAuthor> = {
  id: 1,
  title:"post title",
  desc: "post desc",
  extra: [{id:1, userName:"kevin"}]
}

const testMe3: IPostEvenBetter<ICategory> = {
  id: 1,
  title:"post title",
  desc: "post desc",
  extra: [{id:1, title:"kevin"}]
}
