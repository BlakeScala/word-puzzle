$(function() {
  $("form").submit(function(event) {
    var inputSentence = $("#sentence").val();
    var sentenceArray = inputSentence.split("");
    for (var count = 0; count < sentenceArray.length; count++) {
      if(sentenceArray[count] === "a" || sentenceArray[count] === "e" || sentenceArray[count] === "i" || sentenceArray[count] === "o" || sentenceArray[count] === "u") {
        sentenceArray[count] = '-';
      }
    }
    var outputSentence = sentenceArray.join("");
    $("p#output").text(outputSentence);
    event.preventDefault();
  });
});
