import Layout from "../components/Layout";
import { theme } from "../utils/themeConfig";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>K origin</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MuiThemeProvider>
  );
};

export default MyApp;
