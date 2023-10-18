// // Array

// const pacients = [
//   {
//     index: 16,
//     name: "Thomas",
//     lastname: "Barburg",
//     email: "barburggggg123@ukr.net.com",
//     number: "+980 55 43 28 97 12",
//   },
//   {
//     index: 17,
//     name: "Abubakr",
//     lastname: "Khalib-ibn-Sumrak",
//     email: "tigerpower777@gmail.com",
//     adress: "str. Cirkle, number 92",
//     number: "+980 65 32 18 72",
//   },
//   {
//     index: 152,
//     name: "Arine",
//     lastname: "Mastle",
//     email: "mastle.a.a.@yahoo@mail.com",
//     adress: "ave. Superstars, number 14/577",
//     number: "+980 25 36 14 98",
//     fax: "ikr528937",
//   },
//   {
//     index: "none",
//     name: "Peter",
//     lastname: "Marker",
//     adress: "str. Thomson, number 4",
//     number: "+456 88 22 33 69 98",
//   },
//   {
//     index: 18,
//     name: "Tyron",
//     lastname: "Smith",
//     email: "macho@gmail.com",
//     adress: "str. Avengers, number 87/50",
//   },
//   {
//     index: 10999,
//     name: "Lakasay",
//     lastname: "Baobabe",
//     number: "error",
//   },
// ];

// for (let pacient of pacients) {
//   document.write(`
//     <div>
//     <h4>${pacient.name}<h4/>
//     <i>${pacient.index}</i>
//     <p>Adress pacient: ${pacient.adress ? pacient.adress : "No data"}</p>
//     <b>Contacts pacient: ${pacient.email ? pacient.email : pacient.number} - ${
//     pacient.fax || "Pacient dont have fax"
//   }</b>

//       <br >
//     </div>

//     `);
// }

// // Витягуємо ключи з об.єктів

// const keysmassive = [];

// for (const object of pacients) {
//   for (const key in object) {
//     keysmassive.push(key);
//   }
// }

// console.log(keysmassive);
