// Використовуємо for in для виокремлювання певних елементів об.єкту

const books = {
  author: {
    author1: "Бріттані Барнетт",
    author2: "Шарлотта Макконагі",
    author3: "Люко Дашвар",
    author4: "Софія Андрухович",
    author5: "Джоан Роулінг",
  },
  title: {
    title1: "Стук опівночі",
    title2: "Міграції",
    title3: "ГАЛЯБЕЗГОЛОВИ",
    title4: "Амадока",
    title5: "Смутна кров",
  },
};

for (const titleKey in books.title) {
  console.log("Only name of book :", titleKey);

  console.log(books.title[titleKey]);
}

// Fail Version

// const books = {
//   author: {
//     author1: "Бріттані Барнетт",
//     author2: "Шарлотта Макконагі",
//     author3: "Люко Дашвар",
//     author4: "Софія Андрухович",
//     author5: "Джоан Роулінг",
//   },
//   title: {
//     title1: "Стук опівночі",
//     title2: "Міграції",
//     title3: "ГАЛЯБЕЗГОЛОВИ",
//     title4: "Амадока",
//     title5: "Смутна кров",
//   },
// };

// for (const titleKey in books) {
//   console.log("Only name of book :", titleKey);

//   console.log(books[titleKey]);
// }
