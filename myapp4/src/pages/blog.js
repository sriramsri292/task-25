import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Blog = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const arrParam = searchParams.get('arrParam');
  
  // Define a state variable to store the array data
  const [arrData, setArrData] = useState([]);

  useEffect(() => {
    // Check if arrParam exists
    if (arrParam) {
      // Decode the URL parameter and parse it as JSON
      const decodedArrData = JSON.parse(decodeURIComponent(arrParam));
      setArrData(decodedArrData);
    }
  }, [arrParam]);

  return (
    <div className='k'>
      
      {/* Now you can use arrData in your component */}
      <ul>
        {arrData.map((item) => (
         
          <li key={item.id}>
            <h2>{item.title}</h2>
            <img className='bb' src={item.image} alt={item.title} />
            <p>{item.content}</p>
          </li>
         
        ))}
      </ul>
    </div>
  );
};

export default Blog;
