import React, {useState, useContext} from "react"
import Comment from "../Comments/Comment"
import TextField from '@mui/material/TextField';
import SendIcon from "@material-ui/icons/Send";
import Button from '@mui/material/Button';
import { UserContext } from "../context/UserProvider";

const Issue = (props) => {
  const { title, description, _id, addComment, comment } = props
  const [leaveComment, setLeaveComment] = useState[""]

  const handleChange = (e) => {
    const { name, value } = e.target
    setLeaveComment(prevComments => ({
      ...prevComments,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addComment(leaveComment)
    setLeaveComment("")
  }

  return (
    <div className="issue">
      <h3>{title}</h3>
      <div className="description">
        <p>{description}</p>
      </div>
      <div>
        <Comment />
      </div>
      <div>
      <TextField
          onSubmit={handleSubmit}
          label="Add Comment"
          id="outlined-size-small"
          size="small"
          name="comment"
          value={comment}
          onChange={handleChange}
          placeholder="Add a comment"
        />
      <Button 
          variant="contained" 
          endIcon={<SendIcon />}
          onClick={handleSubmit}
          type="submit"
      >
        Send
      </Button>
      </div>
    </div>
  )
}

export default Issue
