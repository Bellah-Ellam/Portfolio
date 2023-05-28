import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Data from './Data';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Level</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Data />

        </div>
    </section>
  )
}

export default Skills