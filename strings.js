//removes the punctuation from a given string and returns that string
function punctuationRemover(text){
    var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    return text.split('').filter(function(letter) {
      return punctuation.indexOf(letter) === -1;
    }).join('');
}

//removes all whitespace from a given string and returns that string
function removeWhitespace(text){
    return text.replace(/\s/g, "");
}