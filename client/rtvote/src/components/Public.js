import React, {useContext} from "react"
import IssueList from "../Issues/IssueList"
import { UserContext } from "../context/UserProvider";


const Public = () => {
  const { user: {username}, issues } = useContext(UserContext);

  return (
    <div>
      <IssueList issues={issues} />
    </div>
      
  )
}

export default Public