import React, { Component } from "react";
import NewsCard from "./components/NewsCard";
import axios from "axios";

const baseUrl = "https://newsapi.org/v2/";
const urlHeadline =
  baseUrl +
  "top-headlines?" +
  "country=id&" +
  `apiKey=${process.env.REACT_APP_API_KEY}`;

export default class App extends Component {
  state = {
    listNews: [],
  };

  componentDidMount() {
    const self = this;
    axios
      .get(urlHeadline)
      .then(function (response) {
        console.log(response.data);
        self.setState({
          listNews: response.data.articles,
        });
      })
      .catch(function (error) {
        alert(error);
      });
  }

  render() {
    const { listNews } = this.state;
    return (
      <div>
        <div style={{ display: "flex", marginTop: 10, marginLeft: 10 }}>
          {listNews.map((item) => {
            return (
              <NewsCard src={item.urlToImage} subTitle={item.description} />
            );
          })}
        </div>
      </div>
    );
  }
}
