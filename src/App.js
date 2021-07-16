import React, { Component } from 'react';
import './App.css';

class App extends React.Component{
  state = {
    profile: {},
    username: ''
  }

  handleTextChange(e) {
    this.setState ({
      username:e.target.value,
    })
  }

  handleClick(e){
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.username}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        profile: res,
      })
    })
  }

  render(){
    return (
      <div className='container'>
        
        <div className="card">
          <div className="logo-title">
            <i class="fab fa-github-alt"></i>
            <h1>Github Busca</h1>
          </div>

          <label>Digite o nome de usuário: </label>
          <input type="text" onChange={this.handleTextChange.bind(this)} placeholder="username" className="form-control"></input>
          <button onClick={this.handleClick.bind(this)} class="btn btn-primary">Search</button>

          <div className='profile-info row'>
            <div className="col-md">
              <img src={this.state.profile.avatar_url}></img>
            </div>
            <div className="col-md">
              <p><strong>{this.state.profile.name}</strong></p>
              <p><strong>{this.state.profile.bio}</strong></p>
              <p><strong>{this.state.profile.location}</strong></p>
              <p><strong>{this.state.profile.public_repos}</strong></p>
            </div>
          </div>
        </div>        
      </div>
    )
  }
}
export default App;