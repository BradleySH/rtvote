import React, {useState} from "react";
//import Comment from "./Comment"
import "./issues.css";

const initInputs = {
  title: "",
  description: "",
}

const IssueForm = (props) => {
  const [inputs, setInputs] = useState(initInputs);
  const {addIssue} = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
  }

  const { title, description } = inputs
  return (
    <form className="issue-form" onSubmit={handleSubmit}>
      <label>Title:</label>
      <input 
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Title" />
       <label>Description:</label> 
      <textarea
      className="textarea"
      type="text"
      name="description"
      value={description}
      onChange={handleChange}
      placeholder="Description"></textarea>
        <button>Submit Issue</button>
      {/* <Comment /> */}
    </form>

  )
}

export default IssueForm