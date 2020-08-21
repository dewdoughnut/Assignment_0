function genQuote() {
    let randNum = Math.floor(Math.random() * 9) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum];
    let tweetQuote = quotes[randNum].split(' ').join('%20');
    tweetQuote = tweetQuote.split('<br>').join('');
    tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
    $('.twitter-share-button').attr('href', tweetQuote);
  }
  
  //quote array
  let quotes = ["Blank", "\"Bigotry and racism are among the deadliest social ills plaguing the world today. But, unlike a team of costumed super-villains, they can’t be halted with a punch in the snoot, or a zap from a ray gun. The only way to destroy them is to expose them—to reveal them for the insidious evils they really are.\" - Stan Lee", "\" Do you think that God stays in heaven because he too lives in fear of what he has created?\" - Steve Buscemi - Spy Kids 2", "\"I was busy pushing bodies around as you well know and what would a note say, Dan? “Cat dead, details later\"- Herbert West - Reanimator", "\"We have such sights to show you\"- Pinhead - hellraiser", "\"WELCOME TO PRIME TIME, BITCH!\"- Freddy Krueger", "\"I'd buy that for a Dollar\"- Robocop", "\"I have come here to chew bubblegum and kick ass. and I'm all out of bubblegum\"- Nada - They Live", "\"Dreams save us. Dreams lift us up and transform us into something better. And on my soul, I swear that until my dream of a world where dignity, honor and justice are the reality we all share, I'll never stop fighting. Ever!\"- Superman - Action Comics #775", "\"With great power comes great responsibility\"- Uncle Ben",];


