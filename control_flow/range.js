let a = "You did a great job" // 90 to 100
// class_score >= 90 && class_score <= 100

let b = "You can do better" // 70 - 89
// class_score >= 70 && class_score <= 89
// class_score > 69 && class_score < 90

let c = "You should try harder" // 55 - 69
// class_score >= 55 && class_score <= 69
let d = "What is this" // 40 - 54
// class_score >= 40 && class_score <= 54
let e = "We don't do that here"// > 40
// class_score >= 0 && class_score <= 40



let class_score = 20;

if (class_score >= 90 && class_score <= 100 ){
  console.log(`${a}`);
}

else if (class_score >= 70 && class_score <= 89) {
  console.log(`${b}`);
}

else if (class_score >= 55 && class_score <= 69) {
  console.log(`${c}`);
}

else if (class_score >= 40 && class_score <= 54) {
  console.log(`${d}`);
}

else if (class_score >= 0 && class_score <= 40) {
  console.log(`${e}`);
}

else {
  console.log(`Please enter a number between 0 and 100`);
}


// range <, =, ==, <=, >=, &&, || !=, !