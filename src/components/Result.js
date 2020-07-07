import React from 'react'

// function standby(){
//     document.getElementById('kazaam').src = "https://upload.wikimedia.org/wikipedia/en/3/38/Kazaam_poster.jpg"
// }
function Result({result, popOut}) {
    console.log(result)
    return (
        <div className="result" onClick={() => popOut(result.imbdId)}>
            <h2>{result.Title} {result.Year}</h2>
            <img id="kazaam" src={result.Poster} alt="Image Not Found"/>
            <br></br>
            <button className="add">Add To Shelf</button>
    
        </div>
    )
}

export default Result
