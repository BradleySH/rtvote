import React from "react";

const CommentForm = () => {
  return (
    <form>
      <input
        type="text"
        name="comments"
        value={comments}
        onChange={handleChange}
        placeholder="Leave a comment"
        />
    </form>
  )
}

export default CommentForm