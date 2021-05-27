import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''

    };
  }

  handleChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    this.setState({[name]: val})
  }

  // countMessage = () => {
  //   if(this.state.message <= this.props.maxChars){
  //     this.setState({totalChars: this.state.totalChars + 1})
  //     return this.state.totalChars
  //   }else{
  //     return <p> Too many Characters. Try again! </p>
  //   }
  // }

  render() {
    let charNum = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        onChange={this.handleChange}
        type="text" 
        name="message" 
        id="message"
        value={this.state.message} />
        {charNum} {/*ternary operator would also work here*/} {/*{this.state.message && charNum}*/}
      </div>
    );
  }
}

export default TwitterMessage;
