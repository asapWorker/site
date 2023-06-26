import styles from "./review.module.css";
import classNames from "classnames"
import { FunctionComponent } from "react"
import { ImageWithPlaceholder } from "../../../components/image-with-placeholder/image-with-placeholder";
import { Review as ReviewType} from "@/redux/services/reviewsApi";

interface ReviewProps {
  review: ReviewType
}

export const Review: FunctionComponent<ReviewProps> = ({
  review
}) => {
  return (
    <section className={classNames("block", styles.review)}>
      <ImageWithPlaceholder
        imgUrl={review?.photoUrl}
        imageWithPlaceholderClassName={styles.photo}
      />

      <section>
        <div className={styles.header}>
          <h4>
            {review.name}
          </h4>

          <span className={styles.rating}>
            Оценка: <span className={styles["rating-value"]}>{review.rating}</span>
          </span>
        </div>

        <p>
          {review.text}
        </p>
      </section>
    </section>
  )
}