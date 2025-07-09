import Gallery__Comment__Form from "../Gallery__Comment__Form";
import Gallery__Comment from "./Gallery__Comment";

export default function Gallery__Comments({ comments, setComments, slug }) {
  return (
    <section className="comments">
      <h3>Comments</h3>
      <ul>
        {comments.length ? (
          comments.map(
            (comment, index) =>
              comment.slug === slug && (
                <Gallery__Comment key={index} comment={comment} />
              )
          )
        ) : (
          <p className="comment__empty">no comments yet</p>
        )}
      </ul>

      <Gallery__Comment__Form
        comments={comments}
        setComments={setComments}
        slug={slug}
      />
    </section>
  );
}
