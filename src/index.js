import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import TagManager from 'react-gtm-module';



const tagManagerArgs = {
    gtmId: 'GTM-MZSWMX2'
}
 
TagManager.initialize(tagManagerArgs);




// Link React app to the HTML
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();


