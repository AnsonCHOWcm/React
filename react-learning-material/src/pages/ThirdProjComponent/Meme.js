import React from "react"
import memesData from "./memesData"

const Meme = () => {

    const [meme, setMeme] = React.useState({"topText" : "", "bottomText" : "", "randomImage" : "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/10/30/85f2cb5f-44f8-4f2f-a813-63e657e11acc_5065cac7.jpg?itok=gY-K9HdU&v=1635566576"})

    const [allMemeImages, setallMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomIndex = Math.floor(Math.random()* memesArray.length);
        setMeme(previous_meme => {
            return(
                {
                    ...previous_meme,
                    randomImage : memesArray[randomIndex].url
                }
            )
        })
    };

    function handleChange(event) {
            const {name, value} = event.target
            setMeme(prevMeme => ({
                ...prevMeme,
                [name] : value
            }))

    };

    return (
        <section className = "ThirdProjMeme">
            <div className = "ThirdProjForm">
            <input 
            type = "text" 
            placeholder = "Top text" 
            className = "MemeLInput"
            name = "topText"
            onChange={handleChange}
            value = {meme.topText}
            />
            <input 
            type = "text" 
            placeholder = "Bottom Text" 
            className="MemeRInput"
            name = "bottomText"
            onChange={handleChange}
            value = {meme.bottomText}
            />
            <button className = "MemeButton" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className = "ThirdProjMeme--meme">
                <img  src = {meme.randomImage} alt = ""  className = "meme - photo" style = {{width : "100%", height : "90%", position : "absolute"}}/>
                <h2 className = "meme - topText" style = {{position : "relative", textAlign: "center" , marginBottom : "30%",fontSize : "100px",color : "green"}}>{meme.topText}</h2>
                <h2 className = "meme - bottomText" style = {{position : "relative" , textAlign : "center",fontSize : "100px" , color : "green"}}>{meme.bottomText}</h2>
            </div>
        </section>
    );
};

export default Meme;