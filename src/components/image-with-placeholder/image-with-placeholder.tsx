import styles from "./image-with-placeholder.module.css";
import { FunctionComponent } from "react";
import Image from "next/image";
import classNames from "classnames";

interface ImageWithPlaceholderProps {
  imageWithPlaceholderClassName: string,
  imgUrl: string | null
}

export const ImageWithPlaceholder: FunctionComponent<ImageWithPlaceholderProps> = ({
  imageWithPlaceholderClassName,
  imgUrl
}) => {
  return (
    <div className={classNames(styles["img-base"], imageWithPlaceholderClassName)}>
      <div className={classNames(styles["img-container"], (imgUrl) ? styles.image : styles.placeholder)}>
        <Image
          unoptimized
          src={imgUrl ? imgUrl : "/photo.svg"}
          alt="photo"
          fill={true}
        />
      </div>
    </div>
  )
}