import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ReactNode } from 'react';
// import styles from "./layout.module.scss";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div >
      <p>This is a layout</p>
      <main ><div><div>{children}</div></div></main>
    </div>
  );
};



export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>;
}
