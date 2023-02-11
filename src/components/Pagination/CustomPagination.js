import React from "react";
import Pagination from "@mui/material/Pagination";
import "./CustomPagination.css";
const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className="paginationStyle">
      <Pagination
        count={numOfPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
        sx={{
          "& .MuiPaginationItem-root": {
            backgroundColor: "#161616",
            color: "white",
          },
          "& .Mui-selected": {
            backgroundColor: "#000",
            color: "red",
          },
        }}
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};

export default CustomPagination;
