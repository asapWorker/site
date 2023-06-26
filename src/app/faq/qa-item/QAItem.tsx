import classNames from "classnames";
import styles from "./QAItem.module.css";
import Image from "next/image";
import { FunctionComponent, useState } from "react";

interface Props {
  renderQuestion: () => React.ReactNode;
  renderAnswer: (isOpen: boolean) => React.ReactNode;
}

export const QAItem: FunctionComponent<Props> = function ({
  renderQuestion,
  renderAnswer,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={"block"}>
      <div
        className={styles.question}
        onClick={() => setIsOpen((cur) => !cur)}
      >
        {renderQuestion()}

        <div className={styles["img-container"]}>
          <Image
            className={classNames(styles.icon, (isOpen) ? styles.open : '')}
            alt="arrow"
            src="/arrow.svg"
            fill={true}
          />
        </div>
      </div>

      {renderAnswer(isOpen)}
    </div>
  );
};
