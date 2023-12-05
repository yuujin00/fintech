import React, { useState } from "react";
import AppHeader from "../components/common/AppHeader";
import Search from "../components/common/Search";
import NewsList from "../components/common/NewsList";
import axios from "axios";

const NewsPage = () => {
  const [searchText, setSearchText] = useState();
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };

  const handleClick = () => {
    console.log(searchText);
    let apiKey="0da7a2c4f4f7473c8661d6da06fe2df3"
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchText}&from=2023-07-21&sortBy=publishedAt&apiKey=0da7a2c4f4f7473c8661d6da06fe2df3`
      )
      .then(({ data }) => {
        console.log(data.articles);
        setSearchResult(data.articles);
      });
  };

  return (
    <div>
      <AppHeader title={"뉴스검색"}></AppHeader>
      <center><Search
        handleChange={handleChange}
        handleClick={handleClick}
      ></Search></center>
      <NewsList newsList={searchResult}></NewsList>
    </div>
  );
};

export default NewsPage;