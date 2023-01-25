import React from "react"
import memesData from "./memesData"

const Meme = () => {

    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomIndex = Math.floor(Math.random()* memesArray.length);
        setMemeImage(memesArray[randomIndex].url)
    };
    return (
        <section className = "ThirdProjMeme">
            <div className = "ThirdProjForm">
            <input type = "text" placeholder = "Top text" className = "MemeLInput"></input>
            <input type = "text" placeholder = "Bottom Text" className="MemeRInput"></input>
            <button className = "MemeButton" onClick={getMemeImage}>Get a new meme image</button>
            <img className="MemeImage" src = {memeImage} alt = ""></img>
            </div>
        </section>
    );
};

export default Meme;