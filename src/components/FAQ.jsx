// src/components/FAQ.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import Header from './Header';
import Footer from './Footer';
import './FAQ.css'; // Import the CSS file for styling

const faqData = [
  {
    question: 'MYTH: Whole Grains Cause Inﬂammation',
    answer: 'Whole grains are part of the solution, not the problem, when it comes to inﬂammation. That’s important, because research increasingly shows that systemic inﬂammation may fuel many diseases, from allergies to heart disease to cancer. In a recent clinical trial, researchers at the University of Nebraska showed that eating a cup of whole grain barley or brown rice (or a combination of the two) for as little as four weeks can increase the “good” bacteria in your gut that ﬁght inﬂammation. (Read our blog on this study.) In another randomized controlled trial, this time in Iran, overweight girls were divided into two groups, one eating mostly reﬁned grains and one eating mostly whole grains. There was a signiﬁcant reduction in inﬂammation markers among those eating whole grains.'
  },
  {
    question: 'MYTH: All Grains Make Your Blood Sugar Spike',
    answer: 'Research links many chronic diseases, from diabetes to heart disease, with diets that send your blood sugar on a roller coaster ride. Indeed, when you eat certain foods, especially those high in reﬁned, highly processed grains and sugar, your blood sugar can spike – then quickly plummet, leaving your energy depleted and causing damage to some bodily systems.  It’s healthier to choose foods that provide a steady, slow release of glucose (blood sugar). The Glycemic Index rates how quickly carbohydrate foods are converted into glucose – and you may be surprised to learn that many grain foods have a low GI score (55 or less on the 1 to 100 GI scale is considered low).  Virtually all intact whole grains have a very low GI score: whole grain barley has a GI of about 25, wheatberries about 30, rye berries about 35, buckwheat about 45, and brown rice about 48, to cite a few examples. The big surprise? Pasta has a low GI score, with whole grain spaghetti rating about 37, and even “white” pasta coming in at 42-45. That’s because the starch structure of pasta causes it to be digested much more slowly than the same amount of ﬂour made into bread. So look for intact whole grains and pasta to enjoy grains that will fuel you slowly and steadily.'
  },
  {
    question: 'Wheat is the reason we’re overweight and obese',
    answer: 'While eating too much of anything can make you fat, wheat plays no special role in putting on the pounds. Wheat makes an easy scapegoat, but other countries with much higher per-capita wheat consumption have much lower rates of overweight and obesity. (The French, for instance, consume nearly twice as much wheat per person as Americans, but have about one-third our obesity rate.)Weight problems are almost never the fault of one food; it’s total diet and lifestyle that matter. Go ahead and enjoy your whole grains, especially in their intact and traditional minimally processed forms, in the context of a diet overﬂowing with fruits, vegetables, legumes, ﬁsh, olive oil, and other health foods. If you eat a healthy diet comprised of whole, minimally-processed foods in reasonable portion sizes, you do not need to fear succombing to “wheat belly.” A whole grain cookie (even a gluten-free one) is still a cookie Peer-reviewed scientiﬁc journals have rebutted the misconceptions in pop-science books like Wheat Belly. Here are two good articles that take a point-by-point approach: “Wheat Belly – an Analysis of Selected Statements and Basic Theses from the Book” Julie Jones, Cereal Foods World. July-August 2013, 57(4):177-189. “Does Wheat Make Us Fat and Sick?” Brouns et al., Journal of Cereal Science. 58(2013) 209-15. In January 2018, Prof. Fred Brouns published an article that takes a scientiﬁc approach to separating truth from ﬁction when it comes to myths about wheat and gluten. You can ﬁnd his article here.'
  },
  {
    question: 'Can I eat grains if I have diabetes?',
    answer: 'Yes, whole grains can be beneficial for people with diabetes as they have a lower glycemic index compared to refined grains. It is important to monitor portions and choose whole grains like oats and barley.'
  },
  {
    question: 'Myth: All Grains Are Unhealthy',
    answer: 'Fact: Not all grains are unhealthy. Whole grains, like brown rice, quinoa, and millets, are packed with nutrients including fiber, vitamins, and minerals. They support digestive health, help regulate blood sugar levels, and provide sustained energy.'
  },
  {
    question: 'Myth: All Grains Are the Same',
    answer: 'Fact: Different grains have different nutritional profiles and health benefits. For example, quinoa is a complete protein, while barley is high in soluble fiber. Each grain offers unique benefits, and incorporating a variety into your diet can provide a broad range of nutrients.'
  },
  {
    question: 'Myth: Grains Are Just Empty Calories',
    answer: 'Fact: Whole grains are far from empty calories. They are packed with essential nutrients and offer numerous health benefits. Refined grains, however, have fewer nutrients and less fiber, so it’s important to choose whole grains whenever possible.'
  },
  {
    question: 'Myth: Grains Are High in Carbohydrates and Should Be Avoided',
    answer: 'Fact: While grains do contain carbohydrates, they are an important source of energy. Whole grains provide complex carbohydrates, which release energy slowly and help maintain steady blood sugar levels. Balancing grains with proteins and fats can be part of a healthy diet.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <Header />
      <Element name="home" className="element">
                <div className="home">
                </div>
            </Element><div className="faq-container">
              <h1>Breaking the myths on grains!!</h1>
              <div className="faq-list">
                  {faqData.map((item, index) => (
                      <div key={index} className="faq-item">
                          <div
                              className="faq-question"
                              onClick={() => handleToggle(index)}
                          >
                              {item.question}
                          </div>
                          {activeIndex === index && (
                              <div className="faq-answer">
                                  {item.answer}
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </div>
          <Footer />
          </>
  );
};

export default FAQ;
