export default function Gallery__Comment({comment}) {
  
  return (
    <>
      <li className={"comment"}>
        <p>{comment.body}</p>
        <p className="comment__date">{comment.date}</p>
      </li>
    </>
  );
}
