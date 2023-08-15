import React, { Component } from "react";
import Data from "./languagesViewData/Data";
export class App extends Component {
    render() {
        return (
            <div>

                    <p>{Data.English[0].v1}</p>
                    <p>{Data.English[0].v2}</p>                
                    
                    <hr/>

                    <p>{Data.Urdu[0].v1}</p>
                    <p>{Data.Urdu[0].v2}</p>

                    <hr/>

                    {Data.English.map((item, i) => (
                        <ul key={i}>
                            <li>{item.v1}</li>
                            <li>{item.v2}</li>
                        </ul>
                    ))}

                    <hr/>

                    {Data.Urdu.map((item, i) => (
                        <ul key={i}>
                            <li>{item.v1}</li>
                            <li>{item.v2}</li>
                        </ul>
                    ))}
            </div>
        );
    }
}

export default App;