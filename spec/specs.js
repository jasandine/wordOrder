describe("wordOrder", function() {

  // it("puts a word into an array", function() {
  //   expect(wordOrder("this")).to.eql(["this"]);
  // });
  //
  // it("does not push a word into uniqueWords if it is repeated", function() {
  //   expect(wordOrder("this this")).to.eql(["this"]);
  // });
  //
  // it("only returns words that are unique", function(){
  //   expect(wordOrder("this this under")).to.eql(["this","under"]);
  // });
  //
  // it("ignores case from user's input", function(){
  //   expect(wordOrder("This This under UNDER")).to.eql(["this", "under"]);
  // });

  it("sorts unique words by how often they appear in said string", function(){
    expect(wordOrder("one two two three three three")).to.eql(["three", "two", "one"]);
  });
});
