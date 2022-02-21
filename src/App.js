import React, {useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [allData,setAllData] = useState([]);
  const [filteredData,setFilteredData] = useState(allData);

  useEffect(() => {
    axios ('https://jsonplaceholder.typicode.com/todos/')
    .then (response => {
      console.log(response.data)
      setAllData(response.data);
      setFilteredData(response.data);
    })
    .catch(error =>{
      console.log('Error getting fake data: ' + error);
    })
  }, []);



  
  const styles = {
    display:'inline',
    width:'30%',
    height:90,
    float:'left',
    padding:5,
    border:'0.5px solid black',
    marginBottom:10,
    marginRight:10,
  }
  const handleSearch = (event) => {
    
      let value = event.target.value.toLowerCase();
      let result = [];
      console.log(value);
      result = allData.filter((data) => {
      return data.title.search(value) !== -1;
      
      
      });
      setFilteredData(result); 
    
      }
  return (
    

    <div className="App">
    <div style={{ margin: '0 auto', marginTop: '10%' }}>
    <label>Search:</label>
    <input type="text" onChange={(event) =>handleSearch(event)} />
    </div>
    <div style={{padding:10}}>
    {filteredData.map((value,index)=>{
    return(
    <div key={value.id}>
    <div style={styles}>
    UserId: {value.userId}<br></br>
    Title: {value.title}<br></br>
    Id:{value.id}<br></br>
    Completed:{value.completed ? '✅' : '❌'} 


    </div>
    </div>
    )
    })}
    </div>
    </div>
  );
}


export default App;
