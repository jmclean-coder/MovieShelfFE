import React from 'react';
import "../App.css"

class Home extends React.Component{


    render(){
        return(
            <header>
                <br></br>
            <h1>Welcome!</h1>

            <div id="image-container">
            <img src={'https://techcrunch.com/wp-content/uploads/2018/09/GettyImages-104187321.jpg'}></img>
            </div>
            </header>
        )
    }
}
export default Home