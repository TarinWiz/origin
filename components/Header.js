import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Path } from "./commons/Path";
import { passThroughSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

const pages = [
  { name: "HOME", path: "/" },
  { name: "LIST", path: "/list" },
  { name: "MYSTERY", path: "#" },
];

const Header = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          {pages.map((page, index) => {
            return (
              <Path path={page.path} name={page.name} key={index} mr={4} />
            );
          })}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
