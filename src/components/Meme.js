import React from "react";

export default function Meme() {
  //an object meme hold 3 variables
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemes, setAllMemes] = React.useState([]);

  /*
  useEffect takes a function as its parameter. If that function returns
  something, it needs to be a CLEANUP function. Otherwise, it should 
  return nothing. If we make it an async function, it automatically returns
  a promise instead of a function or nothing. Therefore, if you want to use
  async operations inside of useEffect, you need to define the function
  seperately inside of the callback function, as seen below: 
  */

  React.useEffect(() => {
    async function getMeme() {
      const res = await fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=laD2jrOSFN8gPwZ48M4RbION8F8ZPBmi&limit=100&rating=r"
      );
      const data = await res.json();
      setAllMemes(data.data); // don't need a clean up function because we just make a call 1 time
    }
    getMeme();


    /*fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=laD2jrOSFN8gPwZ48M4RbION8F8ZPBmi&limit=100&rating=r"
    )
       .then((res) => res.json())
   .then((data) => setAllMemes(data.data)); //data: the object */
  }, []);

  //useEffect will run [] first ->  run setAllMemes function -> run first function

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);

    const url = allMemes[randomNumber].images.downsized_medium.url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
        <img src={meme.randomImage} className="new-meme" alt="geting a random meme"/>
        <div className="meme__text">
          <h2 className="meme__text--top">{meme.topText}</h2>
          <h2 className="meme__text--bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
