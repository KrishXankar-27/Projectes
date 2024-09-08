

const info = {
    student1: {
        name: "manami",
        age: 20,
        isStudy: "yes"
    },
    student2: {
        name: "sumon",
        age: 19,
        isStudy: "BMLT"
    },
    student3: {
        name: "nandini",
        age: 21,
        isStudy: "yes"
    },
    student4: {
        name: "Johan",
        age: 18,
        isStudy: "no"
    },
    student5: {
        name: "paratasha",
        age: 23,
        isStudy: "yes"
    }
}

for (let student in info) {
    if (info[student].age > 18) {
        console.log(info[student].name + " can vote");
    } else {
        console.log(info[student].name + " can't vote");
    }
}
