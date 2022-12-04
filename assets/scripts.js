<<<<<<< HEAD
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

if (topics === 'HTML') {
  console.log("Let's study HTML!");
} else if (topics === 'CSS') {
  console.log("Let's study CSS!");
} else if (topics === 'Git') {
  console.log("Let's study Git!");
} else if (topics === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}

var topics = ["HTML", "CSS", "Git", "JavaScript"];
for(var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
   }
   
=======



var topics = ['HTML', 'CSS', 'Git', 'JavaScripts'];
git status
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

console.log(topics);

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
  }

  function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }

console.log('Here are the topics we learned through Prework:');

listTopics()

console.log('Which topic should we study first?');

selectTopic()
>>>>>>> 7520454274cd07d1c25cb607c972cc934a4f99fa
