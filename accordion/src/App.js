import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion />
    </div>
  );
}

const Accordion = () => {
  const [curOpen, setCurOpen] = useState(1);
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpenItem={setCurOpen}
          num={i}
          title={faq.title}
        >
          {faq.text}
        </AccordionItem>
        // For test
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpenItem={setCurOpen}
        num={3}
        title="Think in React"
      >
        <p>Hello react</p>
      </AccordionItem>
    </div>
  );
};

const AccordionItem = ({ num, title, children, curOpen, onOpenItem }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = curOpen === num;
  return (
    <div
      className={`item ${isOpen && "open"}`}
      onClick={() => onOpenItem(isOpen ? "null" : num)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default App;
