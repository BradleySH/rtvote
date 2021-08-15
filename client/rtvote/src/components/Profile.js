//import IssueList from "./IssueList";
import IssueForm from "./IssueForm";
//import Issue from "./Issue";

const Profile = () => {
  return (
    <div className="profile">
      <h1>Wellcome @Username!</h1>
      <h3>Add an Issue</h3>
      <IssueForm />
      <h3>Your Issues</h3>
    </div>
  )
};

export default Profile
