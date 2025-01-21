export const questions = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Animals",
    question:
      "Which animal was part of an Russian domestication experiment in 1959?",
    correct_answer: "Foxes",
    incorrect_answers: ["Pigeons", "Bears", "Alligators"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Video Games",
    question:
      "Which of these features was added in the 1994 game &quot;Heretic&quot; that the original &quot;DOOM&quot; could not add due to limitations?",
    correct_answer: "Looking up and down",
    incorrect_answers: [
      "Increased room sizes",
      "Unlimited weapons",
      "Highly-detailed textures",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Video Games",
    question:
      "Which character does the player play as in the video game &quot;Bastion&quot;?",
    correct_answer: "The Kid",
    incorrect_answers: ["Rucks", "Zulf", "Zia"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Entertainment: Music",
    question:
      "Green Day&#039;s album &#039;American Idiot&#039; is considered a &quot;punk rock opera.&quot;",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "General Knowledge",
    question:
      "In a standard set of playing cards, which is the only king without a moustache?",
    correct_answer: "Hearts",
    incorrect_answers: ["Spades", "Diamonds", "Clubs"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Entertainment: Music",
    question: "Scatman John&#039;s real name was John Paul Larkin.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Japanese Anime &amp; Manga",
    question:
      "In the anime Black Butler, who is betrothed to be married to Ciel Phantomhive?",
    correct_answer: "Elizabeth Midford",
    incorrect_answers: [
      "Rachel Phantomhive",
      "Alexis Leon Midford",
      "Angelina Dalles",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "History",
    question: "Which of the following is NOT classified as a Semetic language?",
    correct_answer: "Sumerian",
    incorrect_answers: ["Maltese", "Akkadian", "Mandaic"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Comics",
    question:
      "In the Marvel Universe, the planet of Svartalfheim is home to what race?",
    correct_answer: "Dark Elves",
    incorrect_answers: ["Frost Giants", "Kronans", "Skrulls"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "History",
    question: "What was found in 1946 by two young shepards near a cave?",
    correct_answer: "Dead Sea Scrolls",
    incorrect_answers: [
      "The Blackbeard Chest",
      "Sheep",
      "The First Oaxaca Cave Sleeper",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Video Games",
    question: "When was Left 4 Dead 2 released?",
    correct_answer: "November 17, 2009",
    incorrect_answers: ["May 3, 2008", "November 30, 2009", "June 30, 2010"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Video Games",
    question: "In Overwatch, what is L&uacute;cio&#039;s full name?",
    correct_answer: "L&uacute;cio Correia Dos Santos",
    incorrect_answers: [
      "L&uacute;cio Luiz L&oacute;s Guilherme",
      "L&uacute;cio Jo&atilde;o Lucas",
      "L&uacute;cio Chupar Prima",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Video Games",
    question:
      "What is the boss round featured in the &quot;Call Of Duty: Zombies&quot; map &quot;Five&quot;?",
    correct_answer: "The Pentagon Thief",
    incorrect_answers: ["Hellhounds", "Jumping Jacks", "Napalm Zombie"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Television",
    question: "Who was the winner of the 2016 WWE Royal Rumble?",
    correct_answer: "Triple H",
    incorrect_answers: ["Roman Reigns", "AJ Styles", "Dean Ambrose"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Celebrities",
    question: "Which of these celebrities was not a member of the Jackson 5?",
    correct_answer: "Bo Jackson",
    incorrect_answers: ["Tito Jackson", "Jermaine Jackson", "Marlon Jackson"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science &amp; Nature",
    question: "Which of these elements on the Periodic Table is a Noble Gas?",
    correct_answer: "Neon",
    incorrect_answers: ["Potassium", "Iodine", "Colbalt"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Music",
    question:
      "Which of these songs is NOT in The Beatles&#039; album &quot;Sgt. Pepper&#039;s Lonely Hearts Club Band&quot;?",
    correct_answer: "Strawberry Fields Forever",
    incorrect_answers: [
      "Getting Better",
      "Fixing a Hole",
      "Lucy in the Sky with Diamonds",
    ],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "General Knowledge",
    question: "When was &quot;YouTube&quot; founded?",
    correct_answer: "February 14, 2005",
    incorrect_answers: ["May 22, 2004", "September 12, 2005", "July 19, 2009"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Entertainment: Cartoon &amp; Animations",
    question:
      "Snagglepuss was part of the Yogi Yahooies in the 1977 show Scooby&#039;s All-Star Laff-a-Lympics.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Animals",
    question: "The Killer Whale is considered a type of dolphin.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
];

export const answers = new Array(20).fill("");
answers[0] = "Pigeons";
answers[2] = "The Kid";
answers[3] = "False";
export const finalData = questions.map((ques, idx) => {
  const { question, incorrect_answers, correct_answer } = ques;
  return {
    id: idx,
    question,
    incorrect_answers,
    correct_answer,
    status: idx === 0 ? "active" : "inactive",
    options: [...incorrect_answers, correct_answer].map((ele, idx) => {
      return {
        id: idx,
        option: ele,
      };
    }),
  };
});
