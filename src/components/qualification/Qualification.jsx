import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index)=> {
    setToggleState(index);
  }
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState===1 ? "qualification__button qualification__active button--flex" 
          : "qualification__button button--flex"}
          onClick={()=> toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className={toggleState===2 ? "qualification__button qualification__active button--flex" 
          : "qualification__button button--flex"}
          onClick={()=> toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active":
        "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Software Developer-Fullstack
                </h3>
                <span className="qualification__subtitle">Moringa School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Data Science & Machine Learning
                </h3>
                <span className="qualification__subtitle">Moringa School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021-2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  BSc Statistics
                </h3>
                <span className="qualification__subtitle">University of Nairobi</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active":
        "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Snr Associate Data & Analytics
                </h3>
                <span className="qualification__subtitle">
                  KPMG East Africa
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Consultant-Business Analytics</h3>
                <span className="qualification__subtitle">
                  Zamara Actuaries
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Treasury Officer
                </h3>
                <span className="qualification__subtitle">
                  Guaranty Trust Bank
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Data Manager</h3>
                <span className="qualification__subtitle">
                  Population Council, Kenya
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
