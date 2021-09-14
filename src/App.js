import React,{useEffect, useState} from "react";
import 'antd/dist/antd.css'; 
import {Route} from 'react-router-dom';
import './App.css';
import UserList from './components/userslist';
import SearchUser from "./components/search-user";
import JobsListView from "./components/jobs-detail-view";
import CategoryList from "./components/categorylist";


function App() {

  const [users,setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTitle, setSearchTitle] = useState('');
  const [filteredTitle, setFilteredTitle] = useState([]);
  


  useEffect (() => {
    const  fetchData = async() => {
        setIsLoading(true);
         try{
           const response = await fetch('https://remotive.io/api/remote-jobs');
           if(!response.ok){
            throw new Error('Something went Wrong');
          }
           const result = await response.json();
           setUsers(result.jobs);
           setIsLoading(false);
           console.log(result);
  
         }catch(error){
           console.log(error);
         }
    };
    fetchData();
  },[]);

  useEffect(() => {
    setFilteredTitle(
      users.filter(item => {
        return item.title.toLowerCase().includes(searchTitle.toLowerCase())
      })
    )
  }, [searchTitle,users]);
  
  if(isLoading){
    return (
      <div className="loading-wrapper"><p>Loading...</p></div>
    );
  }

  const allCategoty = ['All', users.map(item => item.category)];
  console.log(allCategoty);


const fiteredItem = (catItem) => {
    const updatedItems = users.filter((curentEle) => {
        return curentEle.category === catItem;
    });

    setUsers(updatedItems);
}


  return (
    <>
    <div>

         <Route path='/' exact>
             <SearchUser setSearchTitle={setSearchTitle}/> 
             {/* <CategoryList filteredTitle={filteredTitle} fiteredItem={fiteredItem}/> */}
             <UserList filteredTitle={filteredTitle}/>   
             
          </Route>
          
        <Route path='/detail/:id'>
          <JobsListView users={users}/>

        </Route>
      
    </div>
    </>
  );
}

export default App;
