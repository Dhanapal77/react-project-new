import React from 'react';
import Title from './title.jsx';
import Card from './card.jsx';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
const PostsData = [
    {
      "category": "MobileTec",
      "title": "Upcoming 2019 Mobiles",
      "text": "Honor Mate20pro,Vivo Z11 pro,Realme x2 pro,oppo Renu 2 Ace and samsung A series latest launch soon!!!! ",
      "image" : img1
    },
    {
      "category": "Marvel",
      "title": "Thor Love and Thunder",
      "text": "Thor 4 shooting has been started and it is confirmed like thor will appear as in End Game",
      "image": img2
    },
    {
      "category": "Cricket",
      "title": "IPL 2020 ",
      "text": "Royal challengers are undergoing heavy training to win the IPL 2020 Trophy",
      "image": img3
    },
    {
      "category": "Game-Update",
      "title": "PUBG Update Soon",
      "text": "PUBG will get new location in the TDM match soon so that anyone can add their frnds and play that game",
      "image": img4
    },
    
    {
      "category": "Development",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": img5
    }
  ]
  
  
  // Start App
  
  class Main extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {
      return <div>
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }

  export default Main;