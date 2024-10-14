import UserProfile from './component/UserProfile';
import './App.css';

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Rahul",
    role: "Web Developer"
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Java Developer'
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Python Developer'
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
    name: 'Devon Lane',
    role: 'QA Engineer'
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Users Lists</h1>
    <ul>
      {userDetailsList.map((eachItem) => (
        <UserProfile userDetails = {eachItem} key = {eachItem.uniqueNo}/>
      ))}
    </ul>
  </div>
); 

export default App;
