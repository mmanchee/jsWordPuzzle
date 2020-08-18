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

$(document).ready(function() {
  $(".word-puzzle").click(function(event) {
    const sent1 = $("input#sentence1").val();

    const puzzle = wordScramble(sent1);

    $("#result").text(puzzle);

    event.preventDefault();
  })
});