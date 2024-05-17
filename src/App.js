import React, { useState } from 'react';
import SearchInput from './SearchInput';

function App() {
    const [searchCriteria, setSearchCriteria] = useState('');
    const [candidates, setCandidates] = useState ([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    
// TODO: Fetch candidates based on criteria
    useEffect(() => {
      if (!searchCriteria){
        return;  // Don't fetch if there's no criteria
      }
    })
      const fetchData = async () => {
        setIsLoading(true);
        setError(null);
      }
        try {
          const response = await fetch (`https://your-api-url.com/api/candidates?query=${encodeURIComponent(searchCriteria)}`);
          if (!response.ok){
            throw new Error ('Network response was not ok'); 
          }
          const data = await response.json();
          setCandidates(data);
        } catch (err){
          setError(err.message); // Handle errors such as network issues
        } finally {
          setIsLoading(false); // Ensure loading is set to false after operation
        }
      
      }; 
      
      if (searchCriteria){
        fetchData();
      }

return (
    <div className="App">
        <header>
            <h1>Cornell Tech Intern Search App</h1>
        </header>
        <SearchInput onSearch={handleSearch} />
        {/* TODO: Add CandidateList component here */}
        {isLoading ?(
          <p> Loading ... </p>
        ): error ? (
          <p> Error: {error} </p>
        ): (
          candidates.map(candidate => (
            <div key = {candidate.id}>
              <p>{candidate.name}</p>
              <p>{candidate.email}</p>
              <a href = {candidate.linkedin}>LinkedIn</a>
              <p>{candidate.role}</p>
            </div>
          ))
        )}
      </div>
    ); 
export default App;