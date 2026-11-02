let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.trim().split(/\s+/);
let wordCount = words.length;

let lowerFeedback = feedback.toLowerCase();

if (lowerFeedback.includes("bad") || lowerFeedback.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}

console.log("Feedback: " + feedback);
console.log("Word Count: " + wordCount);
