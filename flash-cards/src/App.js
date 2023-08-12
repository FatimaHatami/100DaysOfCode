import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function App() {
  return (
    <div className="App">
      {questions.map((question) => (
        <FlashCard question={question} />
      ))}
    </div>
  );
}

const FlashCard = ({ question }) => {
  const [selectedId, setSelectedId] = useState(null);
  const clickHandler = (id) => {
    setSelectedId((a) => (id !== selectedId ? id : null));
  };
  return (
    <div
      className={`flashcard ${
        question.id === selectedId ? "answer" : "question"
      }`}
      onClick={() => clickHandler(question.id)}
    >
      {question.id === selectedId ? (
        <p className="answer">{question.answer}</p>
      ) : (
        <p className="question">{question.question}</p>
      )}
    </div>
  );
};

export default App;
