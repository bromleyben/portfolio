import React from 'react';
import './App.css';

import {
  Container,
  Button,
  UncontrolledTooltip,
} from "reactstrap";

import SkillSection from './skillSection';

function App() {

  let pageHeader = React.createRef<any>();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <div className="profile-page">
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("./assets/background.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container" style={{display: 'flex', justifyContent: 'center'}}>
            <img style={{height: "100%", maxWidth: 'initial'}} alt="..." src={require("./assets/me.jpg")}></img>
          </div>
          <h3 className="title">Ben Bromley</h3>
          <p className="category">Software Developer</p>
        </Container>
      </div>
      <div className="section">
      <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Follow
              </Button>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip515203352"
                size="lg"
              >
                <i className="fab fa-github"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Check out my Github
              </UncontrolledTooltip>
              {/* <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                size="lg"
              >
                <i className="fab fa-instagram"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on Instagram
              </UncontrolledTooltip> */}
            </div>
            <div style={{maxWidth: '1600px', margin: 'auto'}}>
              <h3 className="title">
                Who am I?
              </h3>

              <h5 className="description">
                <p>
                I am a full stack web developer with over 5 years industry experience engaging with companies around Australia to help them achieve the most from their enterprise systems.
                </p>
                <br/>
                <p>
                I have a passion for bringing out the very best of a project at every stage. Nothing beats hearing "Wow, this is even better than I imagined!". I believe believe regular consultation, feedback and copious amounts of caffine are key client satisfaction (without the budget blowout). 
                </p>
                
                         
                </h5>

              <h3 className="title">
                My Skills
              </h3>

              <h5 className="description">
                <SkillSection/>
              </h5>

              <h3 className="title">
                My Projects
              </h3>

              <h5 className="description">
                Talk about what I have done
              </h5>

              <h3 className="title">
                Blog
              </h3>

              <h5 className="description">
                Some stuff about the blog
              </h5>
            </div>
          </div>
    </div>
  );
}

export default App;
