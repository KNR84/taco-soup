// var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for(var i = 0; i < harryPotterTitles.length; i++){
    console.log(`Harry Potter ${harryPotterTitles[i]}`);
  }

//   output reminder string interpolation is used to add code inside of a string. Use the parenthesis and backticks STOP FORGETING THIS!

//   Harry Potter and the Sorcerer's Stone
//   Harry Potter and the Chamber of Secrets
//   Harry Potter and the Prisoner of Azkaban
//   Harry Potter and the Goblet of Fire
//   Harry Potter and the Order of the Phoenix
//   Harry Potter and the Half-Blood Prince
//   Harry Potter and the Deathly Hallows

//student grades part 1
var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]

for (var i = 0; i < grades.length; i++) {

    if (grades[i] <= 69) {
        console.log("You got an F")
    }

    else if (grades[i] <= 76 && grades[i] >= 70) {
        console.log("You got an D")
    }
    else if (grades[i] <= 84 && grades[i] >= 77) {
        console.log("You got an C")
    }

    else if (grades[i] <= 92 && grades[i] >= 84) {
        console.log("You got an B")
    }

    else if (grades[i] >= 93) {
        console.log("You got an A")
    }
}
//output
// You got an B
// You got an B
// You got an D
// You got an F
// You got an F
// You got an B
// You got an C
// You got an B
// You got an F
// You got an B
// You got an D
// You got an B
// You got an C
// You got an A
// You got an A
// You got an D
// You got an B

//student grades part 2














//Two, Four, Six, Eight - Who do we appreciate?! CHEER
let cheerString = ""

for (let i = 2; i <= 8; i += 2) {
    cheerString += `${i} `

}
cheerString += "Who do we appreciate?!"
console.log(cheerString)


//interupting cow
var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let sentence = ""

for (let i = 0; i < sentenceArray.length; i++) {

    if ((i % 3) === 0 && i !== 0) {
        sentence += `MOOOOOOOOOOO ${sentenceArray[i]} `
    }
    else {

        sentence += `${sentenceArray[i]} `
    }
}

console.log(sentence)

// The Beatles
// Given the following object...

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
// Output the following values to the terminal.

// ${name} was in the Beatles from ${year} to ${year}. He was born in ${year}. He contributed heavily to the ${albumName} Album.

// Please note that these values are not correct. They're just placeholders that you will need to correctly fill out. 


for(let i=0; i < 4; i++){
    let string =`${beatles.members[i].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[i].birth}. He contributed heavily to the ${beatles.albums[i]} Album.`

    if(beatles.members[i].death){
        string += `They died in ${beatles.members[i].death}`
    }
    console.log(string)
    console.log()
}