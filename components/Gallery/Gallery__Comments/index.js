import { uid } from "react-uid";

export default function Gallery__Comments({ comments, setComments }) {
  return (
    <>
      <h3>Comments</h3>
      <p>{comments[0].body}</p>
      {comments?.map((comment) => {
        return <p key={uid(comment)}>{comment.body}</p>;
      })}
      <button onClick={() => setComments([...comments, { body: "yo" }])}>
        Yo
      </button>
    </>
  );
}
