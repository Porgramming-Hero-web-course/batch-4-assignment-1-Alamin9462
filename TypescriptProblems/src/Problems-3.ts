// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.  


const countWordOccurrences  = (s : string, w : string) =>{
    const convertLowerCaseSentence = s.toLowerCase();
    const convertLowerCaseWord = w.toLowerCase();
    

    return convertLowerCaseSentence.split('').filter((word :String )=> word === convertLowerCaseWord).length;
}


console.log(countWordOccurrences('Bangladesh is an small country, and this country high peopulation in liveing ', 'country'))