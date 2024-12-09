// // #dYQNrBV
// let greeting: string = 'hello';
// let company: string = 'owu';
// let domain: string = 'com';
// let country: string = 'ua';
// let numberOne: number = 1;
// let numberTen: number = 10;
// let negativeNumber: number = -999;
// let someNumber: number = 123;
// let pi: number = 3.14;
// let euler: number = 2.7;
// let age: number = 16;
// let isTrue: boolean = true;
// let isFalse: boolean = false;
//
// // #6Qb97gsv
// const firstName: string = 'Yuriy';
// const middleName: string = 'Zinoviyouvuch';
// const lastName: string = 'Bilyk';
//
// const person = firstName + ' ' + middleName + ' ' + lastName;
//
// // #4N0y5tufA
// let a: number = 100;
// let b: string = '100';
// let c: boolean = true;
//
// // #ruUtWDUI
//
// const firstNamePerson: string = prompt('Enter your first name');
// const middleNamePerson: string = prompt('Enter your middle name');
// const lastNamePerson: string = prompt('Enter your last name');
//
// // #67kfznmiMl
// const arr:(string| boolean| number)[] = [1,2,3,4,5, true, 'hello', 'okten', 'false', 10];
//
//
// // #LARqoUj5I
// class Book{
//     constructor(public name:string, public pageCount:number, public gender:string) {
//         this.name = name;
//         this.pageCount = pageCount;
//         this.gender = gender;
//
//     }
// }
//
// const firstBook = new Book('Lord of the Rings', 500, 'novel');
// const secondBook = new Book('Hobbit', 400, 'novel');
// const thirdBook = new Book('Harry Potter', 600, 'fantasy');
// console.log(firstBook)
// console.log(secondBook)
// console.log(thirdBook)
//
// // #sA3Gg1sCp
//
// class Optins extends Book{
//     constructor(public title:string, public pageCount:number, public gender:string, public authors: {name:string, age:number}[]) {
//         super(title, pageCount, gender);
//     }
// }
// const book1 = new Optins("Good Omens", 432, 'fantasy', [
//     { name: "Neil Gaiman",age: 60},
//     { name: "Terry Pratchett", age: 66 }
// ])
// const book2 = new Optins("The Sword of Shannara", 726, 'fantasy', [
//     { name: "Terry Brooks", age: 78 },
//     { name: "Robert Kirsch", age: 72 }
// ])
// const book3 = new Optins("The Mongoliad", 512, 'fantasy', [
//     { name: "Neal Stephenson", age: 64 },
//     { name: "Greg Bear", age: 71 },
//     { name: "Mark Teppo", age: 55 }
// ])
// console.log(book1)
// console.log(book2)
// console.log(book3)
// #jCHFnEbdmFd
// class User {
//     constructor(public users: {name: string, userName: string, password: number}[]) {}
// }
//
// const arrUsers =  [
//     {name: 'Yuriy', userName: 'YU_R1', password: 123},
//     {name: 'Andriy', userName: 'Andy', password: 124},
//     {name: 'Martha', userName: 'Tysia', password: 125},
//     {name: 'Nazar', userName: 'Nazik', password: 126},
//     {name: 'Pavlo', userName: 'Pasha', password: 127},
//     {name: 'Ivan', userName: 'Vano', password: 128},
//     {name: 'Ivan', userName: 'Vano', password: 128},
//     {name: 'Oleksandr', userName: 'Sanya', password: 129},
//     {name: 'Mycola', userName: 'Kolyan', password: 130},
//     {name: 'Zinoviy', userName: 'Zenyk', password: 131}
// ];
// const arrayUsers = [arrUsers];
// console.log(arrayUsers);
// #coYydZuaeEB
// class Weekday {
//     constructor(
//         public dayName: string,
//         public morning: number,
//         public midDay: number,
//         public evening: number) {
//     }
// }
//
// const Weekdays = [
//     new Weekday("Monday", 5, 10, 1),
//     new Weekday("Tuesday", 5, 10, 1),
//     new Weekday("Wednesday", 5, 10, 1),
//     new Weekday("Thursday", 5, 10, 1),
//     new Weekday("Friday", 5, 10, 1),
//     new Weekday("Saturday", 5, 10, 1),
//     new Weekday("Sunday", 5, 10, 1),
// ];
// console.log(Weekdays);
// #bAUsaq6LI
// const z:number = -3;
// if (z !== 0){
//     console.log(true)
// }else {
//     console.log(false)
// }
// #3ckURgvs
// const time:number = 44;
//
// if (time <= 14 && time > 0){
//     console.log('first part')
// } else if(time >= 15 && time <= 30){
//     console.log('second part')
// }else if(time >= 31 && time <= 45){
//     console.log('third part')
// }else if (time >= 46 && time <= 60){
//     console.log('forth part')
// }
// #UMoNq4biWGe
// const day:number = 15
//
// if (day <= 10 && day > 0){
//     console.log('first decade')
// }else if (day > 10 && day <= 20){
//     console.log('second decade')
// }else if (day > 20 && day <= 31) {
//     console.log('third decade')
// }
//
// const dayNumber:number = 5;
//
// switch (dayNumber){
//     case 1:
//         console.log('Monday')
//         break
//     case 2:
//         console.log('Tuesday')
//         break
//     case 3:
//         console.log('Wednesday')
//         break
//     case 4:
//         console.log('Thursday')
//         break
//     case 5:
//         console.log('Friday')
//         break
//     case 6:
//         console.log('Saturday')
//         break
//     case 7:
//         console.log('Sunday')
//         break
// }
// #uwsz1RnTQJ1
// const firstNum:number = 10;
// const secondNum:number = 10;
//
// if (firstNum > secondNum){
//     console.log(firstNum)
// }else if (firstNum < secondNum){
//     console.log(secondNum)
// }else {
//     console.log('Numbers are equal')
// }
// #iBvqtjEm
// let x: null | undefined | number | string | boolean = null;
//
// if (x === undefined || x === null || x === 0 || x === "" || x === false || isNaN(x)) {
//     x = "default";
// }
//
// console.log(x);
// #awLXL6TBzg
// class Course {
//
//     constructor(
//         public title: string,
//         public monthDuration: number,
//     ) {}
// }
//
// let coursesAndDurationArray = [
//     new Course('Java Complex', 6),
//     new Course('Python Complex', 6),
//     new Course('QA Complex', 4),
//     new Course('FullStack', 7),
//     new Course('Frontend', 4),
// ];
//
// if (coursesAndDurationArray[0].monthDuration > 5){
//     console.log('super')
// }
// if (coursesAndDurationArray[1].monthDuration > 5){
//     console.log('super')
// }
// if (coursesAndDurationArray[2].monthDuration > 5){
//     console.log('super')
// }
// if (coursesAndDurationArray[3].monthDuration > 5){
//     console.log('super')
// }
// if (coursesAndDurationArray[4].monthDuration > 5){
//     console.log('super')
// }
// if (coursesAndDurationArray[5].monthDuration > 5){
//     console.log('super')
// }
// #y7crMeFwHcS
// for (i = 0; i < 10; i++){
//     let div: HTMLDivElement = document.createElement('div');
//     let title: HTMLHeadingElement = document.createElement('h1');
//     title.innerText = 'Hello';
//     div.appendChild(title);
//     document.body.appendChild(div);
// }
// #TYj7ncx
// for (i = 0; i < 10; i++){
//     let div: HTMLDivElement = document.createElement('div');
//     let title: HTMLHeadingElement = document.createElement('h1');
//     title.innerText = 'Hello';
//     div.appendChild(title);
//     document.body.appendChild(div);
// }
// // #uzkt71dp
// let i:number = 0;
// while (i < 20){
//     i++
//     let title: HTMLHeadingElement = document.createElement('h1');
//     title.textContent = 'Hello';
//     document.body.appendChild(title);
// }
// // #OeT7t3uUMFi
// let i:number = 0;
// while (i < 20){
//     i++
//     let title: HTMLHeadingElement = document.createElement('h1');
//     title.textContent = 'Hello';
//     document.body.appendChild(title);
// }
// #vLSZKMlO
// let listOfItems:string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// for (const elem of listOfItems){
//     const list: HTMLUListElement = document.createElement('ul');
//     const li: HTMLLIElement = document.createElement('li');
//     list.appendChild(li);
//     li.textContent = elem;
//     document.body.appendChild(list);
// }
// // #Hdjws7E
// class Product {
//     constructor(public title: string, public price: number, public image: string) {}
// }
//
//
// let products: Product[] = [
//     new Product('milk', 22, 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'),
//     new Product('juice', 27, 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'),
//     new Product('tomato', 47, 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'),
//     new Product('tea', 15, 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png')
// ];
//
// for (const item of products){
//     let div: HTMLDivElement = document.createElement('div');
//     let title: HTMLHeadingElement = document.createElement('h3');
//     let img: HTMLImageElement = document.createElement('img');
//     div.appendChild(title);
//     div.appendChild(img);
//     title.textContent = `${item.title}. - ${item.price}`;
//     document.body.appendChild(div);
// }
// // #4WrHwFTEop0
var User = /** @class */ (function () {
    function User(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    return User;
}());
var users = [
    new User('vasya', 31, false),
    new User('petya', 30, true),
    new User('kolya', 29, true),
    new User('olya', 28, false),
    new User('max', 30, true),
    new User('anya', 31, false),
    new User('oleg', 28, false),
    new User('andrey', 29, true),
    new User('masha', 30, true),
    new User('olya', 31, false),
    new User('max', 31, true)
];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user.status === true) {
        console.log(user);
    }
}
for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
    var user = users_2[_a];
    if (user.status === false) {
        console.log(user);
    }
}
for (var _b = 0, users_3 = users; _b < users_3.length; _b++) {
    var user = users_3[_b];
    if (user.age > 30) {
        console.log(user);
    }
}
