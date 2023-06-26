import classNames from 'classnames';
import './globals.css'
import styles from './layout.module.css';
import Link from 'next/link';
import { StoreProvider } from '@/redux/StoreProvider';
import { Basket } from '@/components/basket/basket';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ru">
      <body>
          <header className={styles.header}>
            <Link href={"/"}>
              <h1 className={classNames(styles["nav-link"], styles.title)}>
                Билетопоиск
              </h1>
            </Link>

            <Link href={"/cart"}>
              <StoreProvider>
                <Basket/>
              </StoreProvider>
            </Link>
          </header>

          <main className={styles.content}>
            <StoreProvider>
              {children}
            </StoreProvider>
          </main>

          <footer className={styles.footer}>
            <Link href={"/about"}>
              <span className={styles["nav-link"]}>
                О нас
              </span>
            </Link>

            <Link href={"/faq"}>
              <span className={styles["nav-link"]}>
                Вопросы-ответы
              </span>
            </Link>
          </footer>
      </body>
    </html>
  )
}
