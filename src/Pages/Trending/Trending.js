import React, { useEffect, useState } from "react";
import axios from "axios";
const Trending = () => {
  const [content, setcontent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    // console.log(data.results);
    setcontent(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <span className="pageTitle">Trending page</span>
      <div className="trending"></div>
    </div>
  );
};

export default Trending;
