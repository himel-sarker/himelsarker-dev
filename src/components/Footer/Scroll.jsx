// Scroll.jsx
import React from 'react';
import './ScrollButton.css';

class Scroll extends React.Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0,
      scrollStepInPx: 50
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 300) { // Change the value to your desired scroll position
      document.getElementById('scrollButton').style.display = 'block';
    } else {
      document.getElementById('scrollButton').style.display = 'none';
    }
  };

  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep, 15);
    this.setState({ intervalId: intervalId });
  };

  scrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.state.scrollStepInPx);
  };

  render() {
    return (
      <button id="scrollButton" className="scroll-btn" onClick={this.scrollToTop} title="Back to Top">
        <span className="arrow-up"></span>
      </button>
    );
  }
}

export default Scroll;
