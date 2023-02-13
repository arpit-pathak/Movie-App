import { Tab, Tabs } from "@mui/material";
import "./Search.css";
// import { SearchIcon } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Card from "../../components/Card/Card";

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div className="page">
      <div className="searchdiv">
        <input
          className="searchInput"
          type="text"
          placeholder="Search Movies & Tv series"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="searchbtn" onClick={fetchSearch}>
          search
        </button>
      </div>

      <Tabs
        value={type}
        indicatorColor="secondary"
        textColor="primary"
        onChange={(event, newValue) => {
          setType(newValue);
          console.log(newValue);
          setPage(1);
        }}
        style={{ paddingBottom: 5 }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "red",
            height: "2px",
          },
        }}
        sx={{
          "& .MuiTab-textColorPrimary.Mui-selected": {
            color: "red",
          },
          "& .MuiTab-textColorPrimary": {
            color: "white",
          },
        }}
        aria-label="disabled tabs example"
      >
        <Tab style={{ width: "50%" }} label="Search Movies" />
        <Tab style={{ width: "50%" }} label="Search TV Series" />
      </Tabs>
      <div className="trending">
        {content &&
          content.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
