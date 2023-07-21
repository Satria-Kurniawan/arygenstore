import { FaUserCircle } from "react-icons/fa";
import Rate from "../components/Rate";
import { formatDate } from "../utils/dateFormater";
import { useEffect, useState } from "react";

export default function Review() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_HOST}/api/comment/all`)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Terjadi kesalahan saat mengambil data.");
      })
      .then((data) => setReviews(data.data.comments))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main id="Testimoni" className="my-5 dark:text-white">
      <h1 className="text-2xl font-semibold">Ulasan</h1>
      <hr className="bg-primary h-[2px] mt-3" />

      <div className="grid grid-cols-2 mt-5">
        <section className=""></section>
        <section className="shadow-md rounded-2xl p-5 flex flex-col gap-y-5">
          {reviews.length > 0 &&
            reviews.map((review) => {
              return (
                <article key={review._id} className="flex gap-x-3">
                  <FaUserCircle size={30} />
                  <div className="flex flex-col gap-y-2">
                    <div className="flex justify-between">
                      <span>{review.author}</span>
                      <span>{formatDate(new Date(review.createdAt))}</span>
                    </div>
                    <Rate rating={4} />
                    <p>{review.text}</p>
                  </div>
                </article>
              );
            })}
        </section>
      </div>
    </main>
  );
}
