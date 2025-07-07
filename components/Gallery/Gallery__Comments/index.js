import { uid } from "react-uid";
import Gallery__Comment__Form from "../Gallery__Comment__Form";

export default function Gallery__Comments({ comments, setComments, id }) {
  console.log("comm gal com", comments);

  return (
    <section className="comments">
      <h3>Comments</h3>
      <ul>
        {comments.length ? (
          comments.map((comment) => {
            return (
              <li key={uid(comment)} className={"comment"}>
                <p>{comment.body}</p>
                <p className="comment__date">{comment.date}</p>
              </li>
            );
          })
        ) : (
          <p className="comment__empty">no comments yet</p>
        )}
      </ul>

      <Gallery__Comment__Form
        comments={comments}
        setComments={setComments}
        id={id}
      />
    </section>
  );
}
