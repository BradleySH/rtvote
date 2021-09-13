
const Issue = (props) => {
  const { title, description } = props
  return (
    <div className="issue">
      <h3>{title}</h3>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Issue
