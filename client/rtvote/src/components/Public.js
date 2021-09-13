import IssueList from "../Issues/IssueList"


const Public = (props) => {
  const {addComment, issues} = props
  return (
    <div>
      <IssueList 
      issues={issues}
      addComment={addComment} />
    </div>
  )
}

export default Public