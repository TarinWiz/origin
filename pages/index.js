import Head from "next/head";
import Layout from "../components/Layout";
import { theme } from "../utils/themeConfig";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function Home() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Head>
          <title>K origin</title>
        </Head>
      </Layout>
    </MuiThemeProvider>
  );
}
