import { useState } from "react";
import Header from "./component/header";
import FeedBackList from "./component/feedBackList";
import FeedBackData from "./data/feedBackData";

const App = () => {
 
  const [ feedBack, setFeedBack ] = useState(FeedBackData)

  return ( 
    <>
    <Header />

  <div className="container">
       <FeedBackList feedBack = { feedBack } />
  </div>
    </>
   
   );
}
 
export default App;