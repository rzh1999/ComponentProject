import faker from "faker";
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today At 4:55PM"
        commentText="Great Time"
        avatarImg={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today At 2:00AM"
        commentText="Awesome!!!!"
        avatarImg={faker.image.avatar()}
      />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Yesterday At 5:00PM"
        commentText="Fantastic!!!"
        avatarImg={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
