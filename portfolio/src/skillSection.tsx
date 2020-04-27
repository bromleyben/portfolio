import React, {useState} from 'react';

import {
    Row,
    Col
  } from "reactstrap";
  import PercentBar from './Components/percentBar';

  const SkillsData = [
      {
          label: 'Javascript',
          desc: 'Pretty Good at this',
          percentage: 80,
          color: '#ffa5006e'
      },
      {
        label: 'HTML',
        desc: 'Pretty Good at HTML',
        percentage: 70,
        color: '#ff00007d'
    },
    {
        label: 'CSS',
        desc: 'Pretty Good at CSS',
        percentage: 70,
        color: '#2ca8ff7d'
    },
    {
        label: 'Python',
        desc: 'Pretty Good at Python',
        percentage: 60,
        color: '#00008b78'
    },
    {
        label: 'React',
        desc: 'Pretty Good at React',
        percentage: 60,
        color: '#00008b78'
    },
    {
        label: 'SQL',
        desc: 'Pretty Good at SQL',
        percentage: 50,
        color: '#00008b78'
    },
    {
        label: 'Angular',
        desc: 'Pretty Good at Angular',
        percentage: 40,
        color: '#00008b78'
    },
    {
        label: 'C#',
        desc: 'Pretty Good at C#',
        percentage: 30,
        color: '#00008b78'
    },

  ]

function SkillSection() {
    const [selected, setSelected] = useState<number>(0);


    return <>
    <Row>
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
        <Col sm="6">
        {SkillsData.map((skill, idx) => {
                return <PercentBar 
                    key={idx}
                    label={skill.label} 
                    percent={skill.percentage} 
                    color={skill.color} 
                    onClick={() => setSelected(idx)}
                    />
            })}
{/* 
            <PercentBar label="Javascript" percent={80} color="orange" />
            <PercentBar label="HTML" percent={70} color="red" />
            <PercentBar label="CSS" percent={70} color="blue" />
            <PercentBar label="Python" percent={60} color="darkblue" />
            <PercentBar label="React" percent={60} color="lightblue" />
            <PercentBar label="SQL" percent={45} color="green" />
            <PercentBar label="Angular" percent={30} color="darkred" />
            <PercentBar label="C#" percent={30} color="purple" /> */}
        </Col>
    </Row>
    </>
}

export default SkillSection;