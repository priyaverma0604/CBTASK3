class StoryNode {
  constructor(text, choice1, choice2, outcome1, outcome2) {
    this.text = text;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.outcome1 = outcome1;
    this.outcome2 = outcome2;
  }
}

let currentNode;

function initializeGame() {
  currentNode = new StoryNode(
    "You find yourself at the entrance of a mysterious cave. Will you enter or continue?",
    "Enter the cave",
    "Continue through the forest",
    "You enter the cave and discover a treasure!",
    "You continue through the forest and encounter a friendly creature."
  );

  displayStory(currentNode);
}

function displayStory(node) {
  document.getElementById('story-text').innerText = node.text;
  document.getElementById('choice1').innerText = node.choice1;
  document.getElementById('choice2').innerText = node.choice2;

  document.getElementById('choice1').addEventListener('click', () => makeChoice(node.outcome1));
  document.getElementById('choice2').addEventListener('click', () => makeChoice(node.outcome2));
}

function makeChoice(outcome) {
  if (typeof outcome === 'string') {
    alert(outcome);
    initializeGame(); // Restart the game
  } else {
    currentNode = outcome;
    displayStory(outcome);
  }
}

initializeGame(); // Start the game
