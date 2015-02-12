describe("wordOrder", function() {

  it("puts a word into an array", function() {
    expect(wordOrder("this")).to.eql(["this"]);
  });

  it("does not push a word into uniqueWords if it is repeated", function() {
    expect(wordOrder("this this")).to.eql(["this"]);
  });

  it("only returns words that are unique", function(){
    expect(wordOrder("this this is that that")).to.eql(["this","is","that"]);
  });

  it("ignores case from user's input", function(){
    expect(wordOrder("This This Is THAt tHat")).to.eql(["this", "is", "that"]);
  });
});
