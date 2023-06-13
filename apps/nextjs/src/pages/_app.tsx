import "../styles/globals.css";
import type { AppType } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import { Comfortaa, Poppins } from 'next/font/google'
import SizeObserver from "~/utils/size-observer";
import ScrollObserver from "~/utils/scroll-observer";
const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <SizeObserver>
        <ScrollObserver>
          <main className={`${comfortaa.variable} ${poppins.variable}`}>
            <Component {...pageProps} />
          </main>
        </ScrollObserver>
      </SizeObserver>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
