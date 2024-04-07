import BookReview from "./BookReview";
function Reviews() {
  const bookReviews = [
    {
      username: "John Doe",
      stars: "⭐⭐⭐⭐",
      index: 1,
      review:
        "Very good book. I really like the movie so I wanted to give the book a try",
      url: "https://www.cbc.ca/strombo/content/images/worst-book-covers-tarzan.jpg",
      title: "Tarzan",
    },
    {
      username: "Jane Doe",
      stars: "⭐⭐⭐⭐⭐",
      index: 1,
      review: "Amazing Book! You must have it in your library.",
      url: "https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg",
      title: "Harry Potter and the Prisoner of Azkaban",
    },
    {
      username: "Jane Doe",
      stars: "⭐⭐⭐⭐⭐",
      index: 1,
      review: "Breathtaking thriller for anybody with strong gut!",
      url: "https://m.media-amazon.com/images/I/81k8KJK+UkL._AC_UF1000,1000_QL80_.jpg",
      title: "Into the Labyrinth",
    },
    {
      username: "John Doe",
      stars: "⭐⭐⭐⭐⭐",
      index: 1,
      review: "You must read this!",
      url: "https://m.media-amazon.com/images/I/41D7u2rjhXL.jpg",
      title: "Therapy",
    },
  ];
  return (
    <>
      <div>
        <div className="catalog-title">
          <div className="line"></div>
          <h3 className="title"> Reviews</h3>
          <div className="line"></div>
        </div>

        <div className="book-review">
          {bookReviews.map((review, index) => (
            <BookReview
              key={index}
              url={review.url}
              username={review.username}
              stars={review.stars}
              review={review.review}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Reviews;
