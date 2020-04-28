import React, {useState} from 'react';
import styled from 'styled-components';

import {
    Row,
    Col
  } from "reactstrap";
  import PercentBar from './Components/percentBar';

  const SkillsData = [
      {
          label: 'Javascript',
          desc: `Javascript is my native tounge. I am working with it every day to achieve all kinds of weird and wonderful things. I am fluent in modern JS features such as async/await, frameworks like React, build tools such as Webpack and the JS superset Typescript.`,
          percentage: 90,
          color: '#ffa5006e'
      },
      {
        label: 'HTML/CSS',
        desc: `The bread and butter of web development. I am fluent in CSS preprocessors such as LESS and SASS, and frequenty use the tools such as flexbox and CSS Grid to pull off elegant layouts.`,
        percentage: 80,
        color: '#ff00007d'
    },
    {
        label: 'Python',
        desc: `Let's face it, Python is the best. It's elegant, powerful and easy to write. I have been working with Python for years building custom business logic for Odoo systems.`,
        percentage: 70,
        color: '#00008b78'
    },
    {
        label: 'React',
        desc: `React has changed the fronted-dev landscape massivly in the last few years. Recently I have been migrating a large application for a not-for-profit organisation from a monolithic KnockoutJS application into a beautifully clean and modern React app.`,
        percentage: 70,
        color: '#00008b78'
    },
    {
        label: 'SQL',
        desc: `When working with large sets of data, nothing beats cutting straight to the source and crafting an elegant SQL statement to fetch the data in a flash.`,
        percentage: 50,
        color: '#00008b78'
    },
    {
        label: 'C#',
        desc: `Whilst not my strongest language, I have experience on .NET projects that have exposed me to the values and advantages of stongly typed languages, which motivated me to learn Typescript to help my Javascript scale.`,
        percentage: 40,
        color: '#00008b78'
    },
    {
        label: 'Angular',
        desc: `One of the other big players in the JS framework game, I have experience working with several Angular projects, both for work and through university.`,
        percentage: 30,
        color: '#00008b78'
    }

  ]

const SkillSectionRow = styled(Row)`
    height: 350px;
`;

const SkillsList = styled(Col)`
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
`;

function SkillSection() {
    const [selected, setSelected] = useState<number>(0);


    return <>
    <SkillSectionRow>
        <Col sm="6">
            {SkillsData.map((skill, idx) => {
                return <div key={idx}>
                    {selected === idx && <>
                        <h4 style={{marginTop: 0}}>{skill.label}</h4>
                        <p>{skill.desc}</p>
                    </>}
                </div>
            })}
        </Col>

        <SkillsList sm="6">
            {SkillsData.map((skill, idx) => {
                return <PercentBar 
                    key={idx}
                    label={skill.label} 
                    percent={skill.percentage} 
                    color={skill.color} 
                    onClick={() => setSelected(idx)}
                    />
            })}
        </SkillsList>
    </SkillSectionRow>
    </>
}

export default SkillSection;