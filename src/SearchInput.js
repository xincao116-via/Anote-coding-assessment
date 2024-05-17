import React, { useState } from 'react';

function SearchInput({ onSearch }) {
    const [input, setInput] = useState('');
    const handleInputChange = (event) => {
        setInput(event.target.value);
};

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        onSearch(input);       // Trigger the onSearch callback with input value
        setInput(''); // Clear the input after search
};

useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            // Update the endpoint and query parameters as necessary
            const response = await fetch(`https://your-api-endpoint/candidates?name=${input.name}&amp;role=${input.role}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data from the server');
            }
            const data = await response.json();
            setCandidates(data);
        } catch (err) {
            setError(`Error: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    if (searchCriteria.name || searchCriteria.role) {
        fetchData();
    }
}, [searchCriteria]);

return (
    <div>
        <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter skills or other criteria"
/>
        <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default SearchInput;