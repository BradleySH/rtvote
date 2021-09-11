import React, { useContext } from "react";
import IssueList from "../Issues/IssueList";
import IssueForm from "../Issues/IssueForm";
//import Issue from "./Issue";
import { UserContext } from "../context/UserProvider";
import "./profile.css";

const Profile = () => {
  const { user: {username}, addIssue, issues } = useContext(UserContext);

  return (
    <div className="profile">
      <div className="user-profile">
        <div className="avatar"></div>
        <h1>Welcome @{username}!</h1>
      </div>
      <div>
        <h3>Add an Issue</h3>
        <IssueForm addIssue={addIssue} />
      </div>
      <h3>Your Issues</h3>
      <IssueList issues={issues} />
    </div>
  )
};

export default Profile
