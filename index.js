//? Step 1: Define Quiz Data

const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question: "Which CSS property is used to control the spacing between elements?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correct: 1,
  },
  {
    question: "Which JavaScript keyword is used to declare a constant variable?",
    options: ["var", "let", "const", "static"],
    correct: 2,
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1,
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["font-color", "text-color", "color", "background-color"],
    correct: 2,
  },
  {
    question: "Which method is used to convert JSON data into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
    ],
    correct: 1,
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["<!-- -->", "/* */", "//", "#"],
    correct: 2,
  },
  {
    question: "Which HTML attribute is used to provide alternative text for an image?",
    options: ["title", "alt", "src", "href"],
    correct: 1,
  },
  {
    question: "Which CSS layout module is best for creating a flexible one-dimensional layout?",
    options: ["Grid", "Flexbox", "Float", "Position"],
    correct: 1,
  },
  {
    question: "Which JavaScript function is used to select an element by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElementsByClass()",
      "selectById()",
    ],
    correct: 0,
  },
];

//? Step 2: JavaScript Initialization

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] = 
document.querySelectorAll(
    "#question, #option_1, #option_2, #option_3, #option_4"
);

const submitBtn = document.querySelector("#submit");

const currentQuiz = 0;
const score = 0;

//? Step 3: Load Quiz Function

const loadQuiz = () => {
    const {question, options} = quizData[currentQuiz];
    console.log(options);

    questionElm.innerText = question;
    // options.forEach((curOption, index) => (option_1.innerText = curOption));

    options.forEach((curOption, index) => window[`option_${index + 1}`].innerText = curOption);
    
}

loadQuiz();