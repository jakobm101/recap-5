export default function Gallery__Comment__Form({ comments, setComments, slug}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HANDLING🙀", e.target.body.value);
    setComments([
      ...comments,
      { body: e.target.body.value, date: new Date().toLocaleString(), slug: slug},
    ]);
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>New Comment</h4>
      <label htmlFor="body">Comment</label>
      <input
        type="text"
        id="body"
        name="body"
        placeholder="Write your comment here"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
