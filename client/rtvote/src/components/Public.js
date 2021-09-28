import IssueList from "../Issues/IssueList"


const Public = (props) => {
  const {addComment, issues} = props
  return (
    <div>
      <IssueList 
      addComment={addComment} />
    </div>
  )
}

export default Public