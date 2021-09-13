import { useEffect, useState } from 'react';
import './App.css';
import SearchUser from './components/search-user';
import UserList from './components/userslist';
import 'antd/dist/antd.css'; 


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

  return (
    <>
    <div>
     <SearchUser setSearchTitle={setSearchTitle}/>
     <UserList filteredTitle={filteredTitle} />
     
     </div>
    </>
  );
}

export default App;
