import { useState } from "react";


const FAQ = () => {
  const faqs = [
    {
      question: "What cuisines does Prasad Restaurant offer?",
      answer: "We offer Indian, Turkish and Thai dishes prepared by expert chefs."
    },
    {
      question: "Do you provide outdoor seating?",
      answer: "Yes! We have outdoor, indoor, and bar seating options."
    },
    {
      question: "Do you accept table reservations?",
      answer: "Yes, you can reserve a table through our website or by calling us."
    },
    {
      question: "Is parking available?",
      answer: "We offer free and secure parking for all customers."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqs">
        <div className="faq_container">
      <h2 className="faq_heading">FAQS</h2>

      <div className="faq_wrapper">
        {faqs.map((item, index) => (
          <div className="faq_item" key={index}>
            
            {/* Question Row */}
            <div className="faq_question">
              <h3>{item.question}</h3>
              <button 
                className="toggle_btn"
                onClick={() => toggleFAQ(index)}
              >
                {activeIndex === index ? "−" : "+"}
              </button>
            </div>

            {/* Answer */}
            <div className={activeIndex === index ? "faq_answer show" : "faq_answer"}>
              <p>{item.answer}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;
