import React from "react";
import { feedbacks } from "../db/constants";
import "../styles/Feedback.css";
const Feedbacks = () => {
  // testimonial, star ratings, cutomer images and customer details
  return (
    <>
      <section className="feedbacks">
        <div className="flex w-full feed-container">
          <div className="flex feeds w-full">
            {feedbacks.map((feedback, i) => (
              <div
                key={`${i}-${feedback.name}`}
                className="feed-card flex flex-col"
              >
                <h3 className="feed-heading">Review</h3>
                <div className="flex feed-body">
                  <div className="flex flex-col feed-user">
                    <img
                      src={feedback.img}
                      alt={feedback.name}
                      className="feed-user-img"
                    />
                    <h4 className="feed-user-name">{feedback.name}</h4>
                  </div>
                  <div className="feed-text">{feedback.review}</div>
                </div>
                <span className="feed-rating">{feedback.rating}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedbacks;
