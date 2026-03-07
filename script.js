const form = document.getElementById("tweetForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const brand = document.getElementById("brand").value;
const industry = document.getElementById("industry").value;
const objective = document.getElementById("objective").value;
const about = document.getElementById("about").value;

const output = document.getElementById("outputText");

output.innerText = "Generating tweets...";

setTimeout(() => {

let voiceSummary = `
Brand Voice Summary
• Friendly and engaging tone
• Target audience: social media users interested in ${industry}
• Content focuses on ${about}
• Goal is ${objective} through relatable posts
`;

let tweets = `
Generated Tweets

1. ${brand} makes ${industry} better every day. Try it today!

2. Life is easier with ${brand}. Experience the difference.

3. If you love ${industry}, you'll love what ${brand} has for you.

4. A little bit of ${brand} can brighten your entire day.

5. Why settle for less when ${brand} delivers the best?

6. ${brand} + great service = happy customers.

7. Your next favorite ${industry} experience starts with ${brand}.

8. Trending today: people loving ${brand}!

9. Innovation, quality, and trust – that's ${brand}.

10. Discover something amazing with ${brand}.
`;

output.innerText = voiceSummary + "\n" + tweets;

},1000);

});