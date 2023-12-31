import "./global.css";
import { Nunito } from "next/font/google";
import { Header } from "./ui/header/header.jsx";
import { StoreProvider } from "@/redux/StoreProvider";
import styles from "./layout.module.scss";

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

export const metadata = {
  title: "abz.agency",
  description: "test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <StoreProvider>
          <div className={styles[`wrapper`]}>
            <Header />
            <main className={styles[`main`]}>{children}</main>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
