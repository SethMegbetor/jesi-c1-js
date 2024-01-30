let fname = "spider";
let lname = "hussle";
let hobby = "chatting";

const person = {
  first_name: fname,
  last_name: lname,
  my_hobby: hobby,
  password: "hello world",
};

console.log(person);

// rename keys/properties

delete person.first_name;

person.first_name_change = fname;

console.log(person);

const updatedToPerson = {
  ...person,
  new_password: person.password,
};

console.log(updatedToPerson);

delete updatedToPerson.password
