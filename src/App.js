import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     
      <District name='chittagong' specialty='mejban'></District>
      <District name='Dhaka' specialty='biriyani'></District>
      <District name='Comilla' specialty='Misty'></District>
      <LoadPosts></LoadPosts>
    </div>
  );
 
}

function LoadPosts(){
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return(
    <div>
      <h1>Posts:{posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}

function Post(props){
  return(
    <div style={{backgroundColor:'lightblue',border: '2px red', borderRadius:'15px' ,padding:'5px',margin:'20px'}}>
      <h2>Title:{props.title}</h2>
      <p>Body:{props.body}</p>
    </div>
  )
}

 const districtStyle = {
    backgroundColor : 'pink',
    margin:'20px',
    padding:'15px',
    borderRadius: '20px'
  }

function District(props){
  const [power,setPower] = useState(1);
const boostPower = ()=> setPower(power *2);
// const boostPower = ()=>{
//   const newPower = power *2;
//   setPower(newPower);
// }
  return(
    <div style={districtStyle}>
      <h2>Name:{props.name}</h2>
      <p>Specialty:{props.specialty}</p>
      <h4>Power:{power}</h4>
      <button onClick={boostPower}>Boost the power</button>
      
    </div>
  )
}

export default App;
