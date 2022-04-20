import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [link, setLink] = useState([]);

  function changeHandler(e) {
    setData(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    axios
      .get(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCtJcmsglYgS_NNJ5Nb8MczZpE_Te7e3Lo&type=video&q=" +
          data.toString()
      )
      .then((res) => {
        var h = res.data.items;
        var narr = h.map(
          (i) => "https://www.youtube.com/embed/" + i.id.videoId.toString()
        );
        setLink(narr);
        // console.log(narr);

        // arr.append(res.data.items[0].id.videoId)
      });
    // console.log(narr)
  }
  return (
    <div>
      <center>
        <h1>YOUTUBE SEARCH</h1>
        <br />
        <br />
        <form onSubmit={submitHandler}>
          <label>Search</label>
          <input
            type="text"
            value={data}
            onChange={changeHandler}
            placeholder="Search"
          />
          <br />
          <br />
          <Button variant="primary" type="submit">
            Search
          </Button>
        </form>
        {link.map((i) => (
          <iframe
            width="560"
            height="315"
            src={i}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ))}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5W1ni0_8zAU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </center>
    </div>
  );
}
export default App;
