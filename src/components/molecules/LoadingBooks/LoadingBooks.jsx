import React from "react";
import styles from "./loadingBooks.module.css";
import Text from "../../atoms/Text/Text";
const LoadingBooks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loadingBooks}>
        <div class={styles.bookshelf_wrapper}>
          <ul class={styles.books_list}>
            <li class={`${styles.book_item} ${styles.first}`}></li>
            <li class={`${styles.book_item} ${styles.second}`}></li>
            <li class={`${styles.book_item} ${styles.third}`}></li>
            <li class={`${styles.book_item} ${styles.fourth}`}></li>
            <li class={`${styles.book_item} ${styles.fifth}`}></li>
            <li class={`${styles.book_item} ${styles.sixth}`}></li>
          </ul>
          <div class={styles.shelf}></div>
        </div>
      </div>
      <div className={styles.msg}>
        <Text textAlign="center">Esto puede tardar 3-4 minutos</Text>
      </div>
    </div>
  );
};

export default LoadingBooks;
