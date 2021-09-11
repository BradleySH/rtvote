import React from "react";

const CommentFrom = () => {
  return (
    <form>
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Leave a comment"
        />
    </form>
  )
}

export default CommentForm