import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer';

let cardList = [
  {title: "Card1", 
  imageURL: "https://via.placeholder.com/500x325", 
  description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  buttonLabel: "Find out More!",
  buttonURL: "https://www.google.com/"
 },
 {title: "Card2", 
 imageURL: "https://via.placeholder.com/500x325", 
 description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
 buttonLabel: "Find out More!",
 buttonURL: "https://www.google.com/"
},
{title: "Card3", 
imageURL: "https://via.placeholder.com/500x325", 
description:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
buttonLabel: "Find out More!",
buttonURL: "https://www.google.com/"
},
{title: "Card4", 
imageURL: "https://via.placeholder.com/500x325", 
description:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis",
buttonLabel: "Find out More!",
buttonURL: "https://www.google.com/"
}
];


function App(props) {
  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron 
        mainTitle="A Warm Welcome!" 
        mainDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        mainButtonLabel="Call to action!"
        mainButtonURL="https://www.google.com/"
        />
        <div className="row">
          {cardList.map(function(item, index){
            return(
              <Card key={index} title={item.title} imageURL={item.imageURL} description={item.description} buttonLabel={item.buttonLabel} buttonURL={item.buttonURL} />
            )
          })
          }
        </div>
      </div>
      <Footer copyright="Copyright @ Your Website 2020" />
    </>
  );
}

export default App;
