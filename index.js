// 1. Scope

// function testScope() {
//     if (true) {
//         var x = 10; // funksiya doirasida
//         let y = 20; // if zo`nasida
//         const z = 30; // if zo`nasida
//     }
//     console.log(x); // 10
//     console.log(y); // Xato: y aniqlanmagan
//     console.log(z); // Xato: z aniqlanmagan
// }

// 2. hosting
// console.log(a); // undefined
// var a = 10;

// console.log(b); // Xato TDZ: `b` mavjud emas
// console.log(c); // Xato TDZ: `b` mavjud emas

// let b = 20;
// const c = 30;

// 3. elon qilish
// var x = 5;
// var x = 10; // mumkin

// let y = 5;
// let y = 10; // Xato: `y`  aniqlangan

// const z = 5;
// const z = 10; // Xato: ` aniqlangan

// 4. tayinlash
// var x = 5;
// x = 10; // mumkin

// let y = 5;
// y = 10; // mumkin

// const z = 5;
// z = 10; // Xato: `z` mumkin emas




// 3type lar 


// o`zimiz type berishda quydagcha 
// const x = 1 
// const number = Number(x)
// console.log(typeof number); // number chiqadi 
// const string = string(x)
// console.log(typeof string) // string chiqadi
// const truefalse = Boolean(x)
// console.log(typeof truefalse); // true chiqadi agar x o`zgaruvchimiz 0 bo`lganda false chiqardi



// bu yerda x va y o`zgaruvchisi number js tomonidan
// x ni string deb y ni numberdib bir biriga qo`shganda yonma yon 15 eme
//  96chiqadi va kata dasturlarda adashishimiz mumkin agar   
// const x ="9"
// let y = 6;
// console.log(x+y)
// x ni Number(x) qilganda 
// console.log(Number(x) + y) // bundey holda 15 natijamiz chiqadi 

// yana solishtirish operatorlari bilan ko`rsek
// const x= "1"; //string
// const y = 1; //number
// console.log(x == y)  // true bunda faqat qiymatlarni tekshiradi 1 va 1 teng dib
// console.log(x === y); // false sababi 3ta barobar qo`yganimizda qiymatlarimizni
// typesiniham tekshiradi biri string biri number bo`lgan bois falseni qaytaradi
 