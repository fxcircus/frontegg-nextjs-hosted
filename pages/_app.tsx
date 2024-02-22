import { withFronteggApp } from "@frontegg/nextjs/pages";
import { AppProps } from "next/app";

function CustomApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withFronteggApp(CustomApp, {
  hostedLoginBox: false,
  authOptions: {
    keepSessionAlive: true, // Uncomment this in order to maintain the session alive
  },
  contextOptions: {
    tenantResolver: () => ({
      tenant: new URLSearchParams(window.location.search).get("organization"),
    }),
  }
});
