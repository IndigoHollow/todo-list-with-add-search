import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleAddWork = this.handleAddWork.bind(this);
    this.handlefindHobby = this.handlefindHobby.bind(this);
    this.handlefindWork = this.handlefindWork.bind(this);
  }

  handleAddTask() {
    if (this.addTask.value) {
      this.props.onAddTask(this.addTask.value);
      this.addTask.value = "";
    }
  }

  handleAddWork() {
    if (this.addTask.value) {
      this.props.onAddWork(this.addTask.value);
      this.addTask.value = "";
    }
  }

  handlefindHobby() {
    this.props.onSearchHobby(this.searchTask.value);
  }

  handlefindWork() {
    this.props.onSearchWork(this.searchTask.value);
  }

  render() {
    //console.log(this.props.testStore);
    return (
      <React.Fragment>
        <div>
          <input type="text" ref={input => (this.addTask = input)} />
          <button onClick={this.handleAddTask}>Add Hobby</button>
          <button onClick={this.handleAddWork}>Add Work</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Find hobby"
            ref={input => (this.searchTask = input)}
            onChange={this.handlefindHobby}
          />
          <input
            type="text"
            placeholder="Find work"
            ref={input => (this.searchTask = input)}
            onChange={this.handlefindWork}
          />
        </div>
        <p>Hobbies list</p>
        <ul className="listHobbies">
          {this.props.hobbies.map((value, key) => (
            <li key={key}>{value.name}</li>
          ))}
        </ul>
        <p>Work list</p>
        <ul className="listWork">
          {this.props.work.map((value, key) => <li key={key}>{value.name}</li>)}
        </ul>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    hobbies: state.reducerHobby.filter(hobby =>
      hobby.name.includes(state.filterHobbies)
    ),
    work: state.reducerWork.filter(work => work.name.includes(state.filterWork))
  }),
  dispatch => ({
    onAddTask: name => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({
        type: "ADD_HOBBIE",
        payload
      });
    },
    onAddWork: name => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({
        type: "ADD_WORK",
        payload
      });
    },
    onSearchHobby: name => {
      dispatch({
        type: "SEARCH_HOBBY",
        payload: name
      });
    },
    onSearchWork: name => {
      dispatch({
        type: "SEARCH_WORK",
        payload: name
      });
    }
  })
)(App);
