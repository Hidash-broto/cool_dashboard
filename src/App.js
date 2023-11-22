import { Button, Container, Hidden } from "@mui/material";
import style from "./style";
import SideBar from "./component/SideBar";
import Dashboard from "./component/Dashboard";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

function App() {
  const [slideSideBar, setSlideSideBar] = useState(false)

  const handleSideBar = () => {
    setSlideSideBar(!slideSideBar)
  }  

  return (
    <Container sx={style.mainContainer}>
      <Hidden mdUp>
      <Button onClick={handleSideBar} sx={style.sideSlideButton} variant="outlined" >
          <MenuIcon />
        </Button>
      </Hidden>
      {
        slideSideBar ? <SideBar /> : (
          <>
          <Hidden mdDown >
          <SideBar />
          </Hidden>
          <Dashboard />
          </>
        )
      }
    </Container>
  );
}

export default App;
