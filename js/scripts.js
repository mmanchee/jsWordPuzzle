// Word Puzzle Aug 18th 2020
function wordScramble(sentence) {
  let sentArray = sentence.split("");
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < sentArray.length; i++) {
    for (let e = 0; e < vowels.length; e++) {
      if (vowels[e] === sentArray[i]) {
        sentArray[i] = "-";
      }
    }
  }
  sentence = sentArray.join("");
  
  return sentence;
}

// Roman Numeral
function numerals(input) {
  const numerals = ["I", "X", "C", "M"];
  const numerals5 = ["V", "L", "D", "Z"];
  let numbers = input.split("").reverse();
  let output = "";

  for (let i = 0; i < numbers.length; i++) {
    output = "";
    let num = parseInt(numbers[i]);
    if (num < 4) {
      for (let e = 1; e <= num; e++) {
        output = output + numerals[i];
      }
    } else if (num === 4) {
      output = numerals[i] + numerals5[i];
    } else if (num < 9) {
      output = output + numerals5[i];
      num = num - 5; 
      for (let e = 1; e <= num; e++) {
        output = output + numerals[i];
      }
    } else {
      output = numerals[i] + numerals[i + 1];
    }  
    numbers[i] = output; 
  }
  numbers = numbers.reverse();
  let result = numbers.join("");

  return result;
}

//Pig Latin
function isVowel(input){
  let word = input.join("");
  word = word + "way";
  return word;
}

function isConsonant(wordArray) {
  for (i = 0; i < wordArray.length; i++) {
    if (/[^aeiou]/i.test(wordArray[0])) {
      if (wordArray[0] == "q") {
        if (wordArray[1] == "u") {
          wordArray.push(wordArray[0]);
          wordArray.shift();
        }
      }
        wordArray.push(wordArray[0]);
        wordArray.shift();
    } else {
      let word = wordArray.join("");
      word = word + "ay"; 
      return word;
    }
  }
}

function pigLatin(input) {
  let inputArray = input.split(" ");
  for (let i = 0; i < inputArray.length; i++) {
    let letters = inputArray[i].split("");
    if (/[aeiou]/i.test(letters[0])) {
      inputArray[i] = isVowel(letters);
    } else if (/[a-z]/i.test(letters[0])) {
      inputArray[i] = isConsonant(letters);
    } else {
      inputArray[i] = inputArray[i];
    }
  }; 
  input = inputArray.join(" ");
  return input;
}

// JQuery
$(document).ready(function() {
  // Number of Vowels
  $("#form-input1").submit(function(event) {
    event.preventDefault();
    let input1 = $("input#input1").val();
    const array1 = input1.match(/[aeiou]/gi);
    let number1 = 0;

    if (array1 == null) {
      number1 = 0;
    } else {
      number1 = array1.length;
    };
    $("#result1").text(number1);
  });
  // Pig Latin
  $("#form-input2").submit(function(event) {
    event.preventDefault();
    let input2 = $("input#input2").val();
    let result2;

    if (input2 === "") {
      result2 = "Please enter something above.";
    } else {
      result2 = pigLatin(input2);
    }

    $("#result2").text(result2);
  });
  
  // Word Puzzle
  $("#form-input3").click(function(event) {
    const sent1 = $("input#input3").val();
    const puzzle = wordScramble(sent1);

    $("#result3").text(puzzle);

    event.preventDefault();
  });

  // Roman Numerals
  $("#form-input4").submit(function(event) {
      event.preventDefault();
    let input = $("input#input4").val();
    let roman;

    if (isNaN(input)) {
      roman = "Please enter a number.";
    } else {
      roman = numerals(input);
    }    
    $("#result4").text(roman);
  });
  
  // Word Play
  $("#form-input5").click(function(event) {
    event.preventDefault();
    const sent1 = $("input#input5").val();
    let words = sent1.split(" ");
    let newWords = [];

    words.forEach(function(word) {
      if (word.length >= 3) {
        newWords.push(word);
      }
    });

    const sent2 = newWords.reverse().join(" ");
    $("#result5").text(sent2);
  });


});
