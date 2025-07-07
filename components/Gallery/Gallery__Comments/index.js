import { uid } from "react-uid";
import Gallery__Comment__Form from "../Gallery__Comment__Form";

export default function Gallery__Comments({ comments, setComments, id }) {
  return (
    <section className="comments">
      <h3>Comments</h3>
      <ul>
        {comments.length &&
          comments.map((comment) => {
            return (
              <li key={uid(comment)} className={comment}>
                <p>{comment.body}</p>
                <p>{comment.date}</p>
              </li>
            );
          })}
      </ul>
      <button
        onClick={() =>
          setComments([
            ...comments,
            { body: "yo", date: new Date().toLocaleString(), id: id },
          ])
        }
      >
        Yo
      </button>
      <Gallery__Comment__Form
        comments={comments}
        setComments={setComments}
        id={id}
      />
    </section>
  );
}
