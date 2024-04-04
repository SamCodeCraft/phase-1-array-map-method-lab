const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Define the titleCased function
function titleCased() {
    
    let titleCasedTutorials = []; // Define an empty array to store the title-cased tutorial names

    
    for (let i = 0; i < tutorials.length; i++) {      // Iterate through each tutorial in the tutorials array
        // Split the current tutorial name into individual words
        let words = tutorials[i].split(' ');

        // Iterate through each word in the current tutorial name
        for (let j = 0; j < words.length; j++) {
            
            words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1); // Capitalize the first letter of each word
        }

        
        let titleCasedName = words.join(' '); // Join the words back together to form the title-cased tutorial name

        
        titleCasedTutorials.push(titleCasedName); // Add the title-cased tutorial name to the titleCasedTutorials array
    }

    // Return the array containing all the title-cased tutorial names
    return titleCasedTutorials;
}






