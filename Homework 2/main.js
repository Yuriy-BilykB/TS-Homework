// #I2XsG6f
// function calcAreaRectangle(a:Num, b:Num):Num {
//     return a * b
// }
// // // #ETGAxbEn8l
// function calcAreaCircle(r:Num):Num{
//     return  Math.PI * r * r
// }
//
// // #Mbiz5K4yFe7
// function calcSideCylinder(r:Num, h:Num):Num{
//     return  2 * Math.PI * r * h
// }
// function calcAreaCylinder(r:Num, h:Num):Num{
//     return calcSideCylinder(r, h) + calcAreaCircle(r) * 2
// }
// // #SIdMd0hQ
// const someArr:Num[] = [1,2,3,4,5,6,7,8,9,10]
// function printArr(arr:Num[]):void{
//     for (let el of arr){
//         console.log(el)
//     }
// }
// printArr(someArr)
// #59g0IsA
// function printText(text:Str):void {
//     const paragraph:HTMLParagraphElement = document.createElement("p");
//     paragraph.textContent = text
//     document.body.appendChild(paragraph);
// }
// printText('Hello World')
// #hOL6126
// function printText(text:Str):void {
//     const list:HTMLUListElement = document.createElement("ul")
//     const item:HTMLLIElement = document.createElement("li")
//     document.body.appendChild(list)
//     list.appendChild(item)
//     item.textContent = text
// }
// printText('Hello')
// #0Kxco1edSN
// function printText(text:Str, number:Num):void {
//     const list:HTMLUListElement = document.createElement("ul")
//     document.body.appendChild(list)
//     for (let i:number = 0; i < number; i++){
//         const item:HTMLLIElement = document.createElement("li")
//         item.textContent = text
//         list.appendChild(item)
//     }
// }
// printText('Hello', 5)
// #gEFoxMMO
// const arr: (Str | Num | boolean)[] = [1, 2, false, true, 'Yura'];
// function printText(arr: (Str | Num | Boolean)[]) {
//     const list:HTMLUListElement = document.createElement("ul")
//     document.body.appendChild(list)
//     for (let el of arr){
//         const item:HTMLLIElement = document.createElement("li")
//         item.textContent = el.toString();
//         list.appendChild(item)
//     }
// }
// printText(arr)
// #bovDJDTIjt
// const arrUsers:{id:Num, name:Str, age:Num}[] = [
//     {id: 1, name: 'Andriy', age: 28},
//     {id: 2, name: 'Yura', age: 20},
//     {id: 3, name: 'Nazar', age: 10}
// ];
// function printUsersArr(arr: {id: Num, name: Str, age: Num}[]): void {
//     console.log(arr)
//     for (let el of arr){
//         const block:HTMLDivElement = document.createElement("div");
//         const list:HTMLUListElement = document.createElement("ul")
//         document.body.appendChild(block)
//         block.appendChild(list);
//         const item:HTMLLIElement = document.createElement("li")
//         item.textContent = `${el.id} ${el.name} ${el.age}`
//         list.appendChild(item)
//     }
// }
// printUsersArr(arrUsers);
// #pghbnSB
// const arrNumbers:Num[] = [5,2,3,4,8,9,6];
// function findMinNumber(arr:Num[]):Num {
//     let minNum:Num = arr[0];
//         for (let i:Num = 1; i < arr.length; i++){
//             if (minNum > arr[i]){
//                 minNum = arr[i]
//             }
//     }
//     return minNum
// }
// console.log(findMinNumber(arrNumbers))
// #EKRNVPM
// const arrNumbers:Num[] = [5,2,3,4,8,9,6];
// function calcAllSum(arr:Num[]):Num {
//     let minNum:Num = 0;
//     for (const num of arr){
//         minNum += num
//     }
//     return minNum
// }
// console.log(calcAllSum(arrNumbers))
// #kpsbSQCt2Lf
// function swap(arr:Num[],index1:Num,index2:Num):Num[] {
//        let a:Num = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = a;
//         return arr
// }
//
// console.log(swap([11,22,33,44],0,1))
// #mkGDenYnNjn
// function exchange(sumUAH:Num,currencyValues:{currency:Str, value:Num}[],exchangeCurrency:Str):Number {
//     let exchangeRate:number;
//     for (let i:number = 0; i < currencyValues.length; i++) {
//         if (currencyValues[i].currency === exchangeCurrency) {
//             exchangeRate = currencyValues[i].value;
//         }
//     }
//         return sumUAH / exchangeRate;
// }
//
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'EUR'))
// #I2XsG6f
// const calcAreaRectangle = (a: Num, b: Num): Num => a * b;
// console.log(calcAreaRectangle(5, 5));
//
// // // #ETGAxbEn8l
// const calcAreaCircle = (r: Num): Num => Math.PI * r * r;
// console.log(calcAreaCircle(5));
//
// // // #Mbiz5K4yFe7
// const calcAreaCylindr = (r: Num, h: Num): Num => {
//    return  2 * r * Math.PI + calcAreaCircle(r) * 2
// };
// // #SIdMd0hQ
// const newArr: Num[] = [1,2,3,4,5,6,7,8,9];
// const printAllElements = (arr: Num[]): void => {
//    for (let i of arr){
//       console.log(i)
//    }
// };
// printAllElements(newArr)
// // #59g0IsA
// const createParagraph = (arg:Str):void => {
//     const paragraph:HTMLParagraphElement = document.createElement("p");
//     document.body.appendChild(paragraph);
//     paragraph.textContent = arg;
// };
// createParagraph('Hi')
// #hOL6126
// const createList = (text: Str):void => {
//         const list:HTMLUListElement = document.createElement("ul")
//         document.body.appendChild(list)
//         const item:HTMLLIElement = document.createElement("li")
//         item.textContent = text
//         list.appendChild(item)
// }
// createList('Hello')
// #0Kxco1edSN
// const createList = (text: Str, amount:Num): void => {
//    for (let i:Num = 0; i < amount; i++){
//        const list:HTMLUListElement = document.createElement("ul")
//        document.body.appendChild(list)
//        const item:HTMLLIElement = document.createElement("li")
//        item.textContent = text
//        list.appendChild(item)
//    }
// }
// createList('Hello', 5)
// #gEFoxMMO
// const mixArr:(Num | Str | boolean)[] = [1, 'Yura', false, 5, true]
// const buildList = (arr:(Num | Str | boolean)[]):void => {
//     const list:HTMLUListElement = document.createElement("ul")
//     document.body.appendChild(list)
//    for (const el of arr){
//        const item:HTMLLIElement = document.createElement("li")
//        item.textContent = String(el)
//        list.appendChild(item)
//    }
// }
// buildList(mixArr)
// #bovDJDTIjt
// const arrUsers:{id:Num, name: Str, age: Num}[] = [
//     {id: 1, name: 'Andriy', age: 28},
//     {id: 2, name: 'Yura', age: 20},
//     {id: 3, name: 'Nazar', age: 10}
// ];
// const printObjectsValues = (arr:{id:Num, name: Str, age: Num}[]):void => {
//     const block:HTMLDivElement = document.createElement("div");
//     const list:HTMLUListElement = document.createElement("ul")
//     document.body.appendChild(block)
//     block.appendChild(list);
//     for (let el of arr){
//         const item:HTMLLIElement = document.createElement("li")
//         item.textContent = `${el.id} ${el.name} ${el.age}`
//         list.appendChild(item)
//     }
// }
// printObjectsValues(arrUsers);
//
// // #pghbnSB
// const someArr:Num[] = [5,2,3,8,9,10,15];
// const findMinNum = (arr:Num[] ):Num => {
//    let minNum:Num = arr[0]
//    for (let i:Num = 1; i < arr.length; i++){
//       if (minNum > arr[i]){
//          minNum = arr[i]
//       }
//    }
//    return minNum
// }
// console.log(findMinNum(someArr))
// #EKRNVPM
// const someArr:Num[] = [5,2,3,8,9,10,15];
// const sum = (arr:Num[]):Num => {
//    let a:Num = 0
//    for (const el of arr){
//       a += el
//    }
//    return a
// }
// console.log(sum(someArr))
// #kpsbSQCt2Lf
// const swap = (arr:Num[],index1:Num,index2:Num):Num[] => {
//        let a:Num = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = a;
//         return arr
// }
// console.log(swap([11,22,33,44],0,1))
// #mkGDenYnNjn
// const exchange = (sumUAH: Num,currencyValues:{currency: Str,value:Num}[],exchangeCurrency: Str):Num => {
//       for (const el of  currencyValues){
//          if (el.currency === exchangeCurrency ){
//            return  sumUAH / el.value
//          }
//       }
// };
// console.log(exchange(10000, [{currency:'USD',value:40},{currency:'EUR',value:42}], 'USD'))
// #dFeorS3m7u
// const calcLength = (str:Str):Num => {
//    const arr: Str[] = str.split('');
//     const newArr = [];
//     for (let el of arr){
//         if (el !== ' '){
//             newArr.push(el)
//         }
//     }
//     return newArr.length
// };
// console.log(calcLength('hello world'));
// console.log(calcLength('lorem ipsum'));
// console.log(calcLength('javascript is cool'));
// #8lld9HMxXWB
// const makeUpperCase = (str:Str):Str => {
//    return  str.toUpperCase()
// };
// console.log(makeUpperCase('hello world'))
// console.log(makeUpperCase('lorem ipsum'));
// console.log(makeUpperCase('javascript is cool'));
// #ClDsAm7xba7
// const makeLowerCase = (str:Str):Str => {
//    return  str.toLowerCase()
// };
// console.log(makeLowerCase('HELLO WORLD'))
// console.log(makeLowerCase('LOREM IPSUM'));
// console.log(makeLowerCase('JAVASCRIPT IS COOL'));
// #0b89BkYZwu
// const clearStrSpaces = (str:Str):Str => {
//     return str.trim()
// }
// console.log(clearStrSpaces(' dirty string   '));
// #bfoJuse4ZzP
// const strToArray = (str:Str):Str[] => str.split(' ');
// console.log(strToArray('Ревуть воли як ясла повні'));
// #Rbr5kEQ
// const elToStr = (arr:Num[]):Str[] => {
//   return arr.map((el:Num) => el + '')
// };
// console.log(elToStr([10,8,-7,55,987,-1011,0,1050,0]));
// #5hqyKTfmc
// const sortNums = (nums:Num[],direction:Str):Num[] => {
//         if (direction === 'ascending'){
//             nums.sort(function(a:Num, b:Num):Num{return a - b});
//         }else if (direction === 'descending'){
//             nums.sort(function(a:Num, b:Num):Num{return b - a});
//         }
//         return nums
// };
// console.log(sortNums([3,11,21], 'ascending'));
// console.log(sortNums([3,11,21], 'descending'));
// #yo06d74c1C
// let coursesAndDurationArray:{title:Str,monthDuration:Num }[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.sort(function(a:{title:Str,monthDuration:Num }, b:{title:Str,monthDuration:Num }):Num {
//     return b.monthDuration - a.monthDuration;
// });
// console.log(coursesAndDurationArray);
// const filteredUsers:{title:Str,monthDuration:Num }[] = coursesAndDurationArray.filter(user => user.monthDuration > 5);
// console.log(filteredUsers)
// coursesAndDurationArray.map((value:{title:Str,monthDuration:Num}, index:Num):void => {
//     value.id = index + 1 ;
// });
// console.log(coursesAndDurationArray)
// #bolvdlhP
// type Card = {
//     cardSuit: Str;
//     number: Str;
//     color: Str;
// };
// const cardSuits: Str[] = ['spade', 'diamond', 'heart', 'club'];
// const CardNumbers: Str[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
// const cards: Card[] = [];
// for (const suit of cardSuits) {
//     for (const number of CardNumbers) {
//         const card: Card = { cardSuit: suit, number: number, color: '' };
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black';
//         }
//         cards.push(card);
//     }
// }
// console.log(cards);
// console.log(cards.find(card => card.cardSuit === 'spade' && card.number === 'ace'));
// const allSixCards = cards.filter((value) => value.number === '6');
// console.log(allSixCards);
// const allRedCards = cards.filter((value) => value.color === 'red');
// console.log(allRedCards);
// const allDiamondCards = cards.filter((value) => value.cardSuit === 'diamond');
// console.log(allDiamondCards);
// const allClubCard = cards.filter(card => card.cardSuit === 'club' && (
//     card.number === '9' || card.number === '10' ||
//     card.number === 'jack' || card.number === 'queen' ||
//     card.number === 'king' || card.number === 'ace'
// ));
// console.log(allClubCard);
// #EP5I1UUzAX
// type Card = {
//     cardSuit: Str;
//     number: Str;
//     color: Str;
// };
// type GroupedCards = {
//     spades: Card[];
//     diamonds: Card[];
//     hearts: Card[];
//     clubs: Card[];
// };
// const packageCards = cards.reduce<GroupedCards>((previousValue, currentValue) => {
//     if (currentValue.cardSuit === 'spade'){
//         previousValue.spades.push(currentValue)
//     }
//     if (currentValue.cardSuit === 'diamond'){
//         previousValue.diamonds.push(currentValue)
//     }
//     if (currentValue.cardSuit === 'heart'){
//         previousValue.hearts.push(currentValue)
//     }
//     if (currentValue.cardSuit === 'club'){
//         previousValue.clubs.push(currentValue)
//     }
//     return previousValue
// }, {spades:[], diamonds:[], hearts:[], clubs:[]});
// console.log(packageCards)
// #4LJn7zBx
// let coursesArray:{title: Str, monthDuration: Num, hourDuration: Num, modules:Str[]}[] = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// coursesArray.forEach((obj:{title: Str, monthDuration: Num, hourDuration: Num, modules:Str[]}):void => {
//     // console.log(obj.modules.includes('sass'))
//     for (const el of obj.modules){
//         if (el === 'sass'){
//             console.log(obj)
//         }
//     }
// })
// coursesArray.forEach((obj:{title: Str, monthDuration: Num, hourDuration: Num, modules:Str[]}):void => {
//     // console.log(obj.modules.includes('sass'))
//     for (const el of obj.modules){
//         if (el === 'docker'){
//             console.log(obj)
//         }
//     }
// })
