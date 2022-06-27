import React from "react";
import Memedata from "../Memedata";

export default function Meme() {
  //an object meme hold 3 variables
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(Memedata);

  function getMemeImage() {
    const memesArray = allMemeImages[0].data; //get meme data array
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].images.downsized_medium.url; // a random object
    setMeme((prevMeme) => ({
      ...prevMeme, //save topText and bottom Text values
      randomImage: url,
    })); // calling function setMemeImage
    //replace previous state with a whole url
  }

  function handleChange(event) {
    setMeme((prevMeme) => {
      const { name, value } = event.target; //destructure
      return {
        ...prevMeme,
        [name]: value,
      };
    });
    console.log(event.target.value);
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="img meme">
        <img src={meme.randomImage} className="new-meme" />
        <div className="meme__text">
          <h2 className="meme__text--top">{meme.topText}</h2>
          <h2 className="meme__text--bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
