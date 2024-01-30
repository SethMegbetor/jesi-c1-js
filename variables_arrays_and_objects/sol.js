const libray = [
  {
    title: "the gods are not to blame",
    author: "Leo Tolstoy",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "the red and the black",
    author: "Leo Tolstoy",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "ananse in the land of idiots",
    author: "Leo Tolstoy",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

console.log(libray[0].status.read);
libray[0].status.read = true;
libray[1].status.read = true;
libray[2].status.read = true;
console.log(libray[0].status.read)

// libray[0].title = "first book"
// console.log(libray[0].title)


const { title: firstBook } = libray[0];
console.log(firstBook);