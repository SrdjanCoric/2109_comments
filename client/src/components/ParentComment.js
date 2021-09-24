const ParentComment = ({ comment }) => {
  return (
    <div class="parent-comment">
      <div class="comment">
        <hr />
        <div class="image">
          <img src="/images/no-user-image.gif" alt="" />
        </div>
        <div class="header">
          <h3 class="author">{comment.author}</h3>
          <span>{comment.postedAt}</span>
        </div>
        <p>{comment.body}</p>
      </div>
      <div class="replies">
        <div class="comment">
          <hr />
          <div class="image">
            <img src="/images/no-user-image.gif" alt="" />
          </div>
          <div class="header">
            <h3 class="author">Cydney Robel</h3>
            <span>2 hours ago</span>
          </div>
          <p>
            Ratione quibusdam sed doloremque expedita fugit similique et aut.
          </p>
        </div>
        <a href="#" class="show_more">
          Show More Replies (2)
        </a>
      </div>
    </div>
  );
};

export default ParentComment;
