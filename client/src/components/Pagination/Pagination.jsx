import React, { useState } from "react";
import "./pagination.css";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  return (
    <>
      <div className="pageNumber">1</div>
      <div className="pageNumber">2</div>
      <div className="pageNumber">3</div>
      <div className="pageNumber">4</div>
    </>
  );
};

export default Pagination;
