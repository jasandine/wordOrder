var wordOrder = function(string) {

  var words = string.toLowerCase().split(" ");
  var uniqueWords = [];

  words.forEach(function(word) {
    if ( uniqueWords.indexOf(word) === -1 ) {
      uniqueWords.push(word);
    }
  });

  return uniqueWords;
}
