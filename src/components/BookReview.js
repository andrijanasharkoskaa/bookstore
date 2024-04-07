import Book from "./Book";

function BookReview({ url, title, username, stars, review }) {
  return (
    <div className="book-review">
      <div className="books-review-widget">
        {title}
        <img src={url} alt={title} />
        <div>
          <p className="review-username">{username}</p>
          <p>{stars}</p>
          <p className="review-text">'{review}'</p>
        </div>
      </div>
    </div>
  );
}

export default BookReview;
