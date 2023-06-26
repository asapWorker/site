import { useGetReviewsQuery } from "@/redux/services/reviewsApi";
import { FunctionComponent } from "react";
import { Review } from "./review/review";

interface ReviewProps {
  movieId: string;
}

export const Reviews: FunctionComponent<ReviewProps> = ({ movieId }) => {
  const { data, isLoading, error } = useGetReviewsQuery(movieId);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  return (
    <>
      {data.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </>
  );
};
