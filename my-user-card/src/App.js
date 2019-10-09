import React from 'react';
import './App.css';
import UserCard from './Components/UserCard';
import FollowList from './Components/FollowList'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      myData: [],
      myFollowers: []
    }
    }
  componentDidMount() {
    console.log('profile mounted');
    this.FetchData();
    this.FetchFollowers();
  }
  FetchData = () => {
    fetch('https://api.github.com/users/andrewbastian')
    .then(res => {
      return res.json()
    })
    .then(data => {
      return this.setState({myData: data})
    })
    .catch(err => console.log(err))
  }

  FetchFollowers = () => {
    fetch('https://api.github.com/users/andrewbastian/followers')
    .then(res => {
      return res.json()
    })
    .then(data => {
      return this.setState({myFollowers: data})
    })
    .catch(err => console.log(err))
  }

  render(){
    console.log('myData',this.state.myData);
    console.log('followers',this.state.myFollowers)
    return (
      <div className='App'>
      <UserCard myData = {this.state.myData} />
      <FollowList myFollowers = {this.state.myFollowers}/>
      </div>
    )
  }
}

export default App;
