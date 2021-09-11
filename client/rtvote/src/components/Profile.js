import React, { useContext } from "react";
import IssueList from "./IssueList";
import IssueForm from "./IssueForm";
//import Issue from "./Issue";
import { UserContext } from "../context/UserProvider";

const Profile = () => {
  const { user: {username}, addIssue, issues } = useContext(UserContext);

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add an Issue</h3>
      <IssueForm addIssue={addIssue} />
      <h3>Your Issues</h3>
      <IssueList issues={issues} />
    </div>
  )
};

export default Profile
