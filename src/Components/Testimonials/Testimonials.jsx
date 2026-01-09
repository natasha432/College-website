import React, { useRef } from "react";
import "./Testimonials.CSS";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt=""
        className="next-btn "
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Upashana sah</h3>
                  <span>IIT, PATNA</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad Lorem ipsum dolor siexercitationem ut dolorum? Nam, neque dignissimos Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, sapiente.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Kishna sah</h3>
                  <span>IIT, PATNA</span>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores repudiandae ut doloribus odio sapiente! Ab iure
                  incidunt blanditiis odit repudiandae vero deserunt nesciunt
                  ipsum aliquid omnis animi saepe sequi nobis vel deleniti amet
                  quia impedit nam autem, excepturi sapiente nulla.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Upas krdd sah</h3>
                  <span>IIT, PATNA</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam voluptate incidunt ex ab, provident tempore deleniti
                  quis cumque dicta placeat harum necessitatibus sunt, vel
                  aliquid atque repudiandae cum, et iusto?
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Priyanka sah</h3>
                  <span>IIT, PATNA</span>
                </div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugiat facere, provident cupiditate ratione iure, consequuntur
                  ex culpa ab adipisci sed ipsa ipsam perferendis itaque officia
                  repudiandae rerum saepe vitae dolores!
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
