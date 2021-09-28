import Issue from "./Issue"


const IssueList = (props) => {
  const { issues } = props
  return (
    <div className="issue-list">
      { issues.map(issue => <Issue {...issues} key={issue._id}/>) }
    </div>
  )
}

export default IssueList