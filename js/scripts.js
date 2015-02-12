var wordOrder = function(string) {

  var words = string.toLowerCase().split(" ");
  var uniqueWords = [];
  var uniqueWordOccurance = [];

  words.forEach(function(word) {
    if ( uniqueWords.indexOf(word) === -1 ) {
      uniqueWords.push(word);
      uniqueWordOccurance.push(1);
    } else {
      // console.log("Word: " + word);
      var position = uniqueWords.indexOf(word);
      // console.log("Word position: " + position);
      // console.log("Unique word occurance before: " + uniqueWordOccurance[position]);
      uniqueWordOccurance[position]++;
      // console.log("Unique word occurance after: " + uniqueWordOccurance[position]);
    }
  });

  return uniqueWords;
}
