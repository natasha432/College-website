import React, { useRef } from "react";
import "./Testimonials.css";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: -containerWidth * 0.25,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: containerWidth * 0.25,
        behavior: "smooth",
      });
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Upashana Mishra",
      position: "Student, IIT Patna",
      image: user_1,
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      id: 2,
      name: "Kishna kumar",
      position: "Alumni, IIT Patna",
      image: user_2,
      text: "The education I received at Edusity has been instrumental in shaping my career. The professors are knowledgeable and the curriculum is designed to prepare students for real-world challenges.",
    },
    {
      id: 3,
      name: "Sakshi Shah",
      position: "Researcher, IIT Patna",
      image: user_3,
      text: "Edusity offers an incredible learning environment. The resources available and the emphasis on practical learning have helped me grow both academically and personally.",
    },
    {
      id: 4,
      name: "Prakash singh",
      position: "Engineer, IIT Patna",
      image: user_4,
      text: "I am grateful for the opportunities Edusity provided me. The network of alumni and the focus on innovation have opened many doors for me in my professional journey.",
    },
  ];

  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-wrapper">
          <button className="scroll-btn left-btn" onClick={scrollLeft}>
            ‹
          </button>
          <div className="testimonials-grid" ref={scrollRef}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-author">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="author-image"
                    />
                    <div className="author-info">
                      <h3>{testimonial.name}</h3>
                      <span>{testimonial.position}</span>
                    </div>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-btn right-btn" onClick={scrollRight}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
