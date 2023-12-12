// Function to beautify OpenAI response
function beautifyResponse(rawText) {
  // Convert text to lowercase for easier manipulation
  let text = rawText.toLowerCase();

  // Replace common synonyms and contractions for smoother reading
  text = text
    .replace(/said/g, "mentioned")
    .replace(/thought/g, "considered")
    .replace(/because/g, "since")
    .replace(/i'm/g, "I am")
    .replace(/don't/g, "do not");

  // Varied sentence length: split long sentences into smaller ones
  text = text.replace(/\.([^.]+)(?=[.!?])/g, ". $1");

  // Use bullet points for lists
  text = text.replace(/(- )+(.+)/g, "  * $2");

  // Capitalize first letter of each sentence
  text = text.replace(/(^|\. )([a-z])/g, function (match, $1, $2) {
    return $1 + $2.toUpperCase();
  });

  return text;
}

export default beautifyResponse;
