import FeedBackItem from "./feedBackItem";

const FeedBackList = ({ feedBack  }) => {
    if(!feedBack || feedBack.length === 0) {
        return <p>No FeedBack to Display</p>
    }
    return ( 
       <div className="feedback-list">
          { feedBack.map(item => 
          <FeedBackItem key = {item.id} item = { item }/>
            ) }
       </div>
     );
}
 
export default FeedBackList;