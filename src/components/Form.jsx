import React from "react"

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="Zip" placeholder="Enter Zip Code \ City" />
        <input type="text" name="Country" placeholder="Enter Country " />
        <button>Get Weather</button>
      </form>
    )
  }
}

export default Form
