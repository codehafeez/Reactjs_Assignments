import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Switch, Route, Link } from "react-router-dom";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      title: "",
      description: "",
      published: false,
      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  saveTutorial() {
    let data = {
      title: this.state.title,
      description: this.state.description,
      published: false
    };

    TutorialDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      title: "",
      description: "",
      published: false,
      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <br/><br/>
            <button style={{ width:'100%' }} className="btn btn-success" onClick={this.newTutorial}>Add New Item</button>
            <br/><br/>
			
			<Link to={"/tutorials"}>
            <button style={{ width:'100%' }} className="btn btn-success" onClick={this.newTutorial}> View Data </button>
			</Link>
			
            <br/><br/>
            <h4>You submitted successfully!</h4>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <input
                placeholder="Enter Title"
                type="text"
                className="form-control"
                id="title"
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <input
                placeholder="Enter Description"
                type="text"
                className="form-control" id="description" value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <button style={{ width:'100%' }} onClick={this.saveTutorial} className="btn btn-success">Submit</button>
          </div>
        )}
      </div>
    );
  }
}
