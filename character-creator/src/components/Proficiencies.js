import React, { Component } from 'react';

class Proficiencies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: 0
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.class !== prevProps.class) {
      this.setState({
        checked: 0
      })
    }
  }

  limitCheck = (event) => {
    let limit = this.props.choiceSet.choose;
    if (event.target.defaultChecked === false) {
      if (this.state.checked < limit) {
        this.setState({
          checked: this.state.checked + 1
        })
        event.target.defaultChecked = true;
      } else {
        event.preventDefault();
        alert(
          `You can only choose ${limit} proficiencies from this category!`
        );
      }
    } else if (event.target.defaultChecked === true) {
      if (this.state.checked <= limit) {
        this.setState({
          checked: this.state.checked - 1
        })
        event.target.defaultChecked = false;
      }
    }
  }

  render() {
    return (
      <div className="choice-groups">
        <h5>Choose {this.props.choiceSet.choose} from...</h5>
        <div className="choices">
          {this.props.choiceSet.from.map((option, index) => {
            return (
              <div key={index + this.props.class} className="checkbox">
                <input
                  type="checkbox"
                  onClick={(event) => this.limitCheck(event)}
                  onChange={this.props.handleCheck}
                  name={option.name}
                  value={option.url}
                />
                <span className="option">{option.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Proficiencies;