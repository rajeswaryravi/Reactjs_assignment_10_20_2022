import logo from './logo.svg';
import './App.css';


import StopWatchComponent from './components/StopWatchComponent';
import ProfileAccordianComponent from './components/ProfileAccordianComponent';


function App() {
  var employee = [
    {
      Name:"Elite",
      img:"/images/profile.jpg",
      aboutus:" What an 'About Us' page should be is a goal-oriented sales page, one that focuses on highlighting the biggest selling points of your story and brand at the top of the page, making a strong first impression on curious customers"
    },
    {
      Name:"John",
      img:"/images/profile.jpg",
      aboutus:" What an 'About Us' page should be is a goal-oriented sales page, one that focuses on highlighting the biggest selling points of your story and brand at the top of the page, making a strong first impression on curious customers"
    },
    {
      Name:"Krishna",
      img:"/images/profile.jpg",
      aboutus:" What an 'About Us' page should be is a goal-oriented sales page, one that focuses on highlighting the biggest selling points of your story and brand at the top of the page, making a strong first impression on curious customers"
    }

  ]


  var books = [
    {
        Id:"B-001",
        Name:"C",
        Author:"Kanitkar",
        Publication:"World-pub"
    },
    {
      Id:"B-001",
      Name:"C",
      Author:"Kanitkar",
      Publication:"World-pub"
  },
  {
    Id:"B-001",
    Name:"C",
    Author:"Kanitkar",
    Publication:"World-pub"
},
{
  Id:"B-001",
  Name:"C",
  Author:"Kanitkar",
  Publication:"World-pub"
},
{
  Id:"B-001",
  Name:"C",
  Author:"Kanitkar",
  Publication:"World-pub"
},
    ];
  
  return (
    <div className="App">
      
      <StopWatchComponent/>
      <ProfileAccordianComponent/>


     
    </div>
  );
}

export default App;
