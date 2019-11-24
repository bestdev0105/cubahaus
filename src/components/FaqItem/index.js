import React, { Component } from "react";
import "./style.scss";

class FaqItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
  }

  showAnswer = e => {
    this.setState({
      isSelected: !this.state.isSelected
    });
  };

  render() {
    const { question, answer } = this.props;
    const { isSelected } = this.state;

    return (
      <div>
        <div className="faqItem">
          <div>
            <div className="checkIcon" onClick={this.showAnswer}>
              <span className="checkIconText">{isSelected ? "-" : "+"}</span>
            </div>
          </div>
          <p className="question">{question}</p>
        </div>
        {isSelected && <p className="answer">{answer}</p>}
      </div>
    );
  }
}

export default FaqItem;
