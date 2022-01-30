import React from "react";
import Grid from "@material-ui/core/Grid";
import "../assest/css/header.css";

export default function Header() {
  return (
    <>
      <Grid container>
        <Grid xs={12} sm={6} md={3}>
          <div className="header_div_grp">
            <img
              className="header_img"
              src="https://lh3.googleusercontent.com/5LSMQsfk2kgkbTT0ih8TMrhoXDETO3inMahYX6-l-vMRkn-JNxOTubZQFPyDLt0JS5sNIFAQx7jgVLF56nO7OmHh0n7eD3mvCXDEvgE=w64-h64"
            ></img>
            <div>
              <div className="div_name">Portals</div>
              <div className="div_price">503.7 &nbsp; SOL</div>
            </div>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <div className="header_div_grp">
            <img
              className="header_img"
              src="https://lh3.googleusercontent.com/SidjjV43LPkQ8kU6ln0fypbKvvEA4E48r6xIjgD4hdTgR_JimaxyN-4QE3z6TxDU_lap2APSEJI5HTOcqzwOntyolcEXrNNlD7SwoQ=w64-h64"
            ></img>
            <div>
              <div className="div_name">Portals</div>
              <div className="div_price">503.7 &nbsp; SOL</div>
            </div>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <div className="header_div_grp">
            <img
              className="header_img"
              src="https://lh3.googleusercontent.com/FZUXPi29VHw3bGPlzyA09OwyAh9tXKuJM-bb7745A3PUo9XlDxPY1r_4hgo6WLXmF7DA_epMLSsEW-dGApdGr4JuJND7DiVyVbO_Yw=w64-h64"
            ></img>
            <div>
              <div className="div_name">Portals</div>
              <div className="div_price">503.7 &nbsp; SOL</div>
            </div>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <div className="header_div_grp">
            <img
              className="header_img"
              src="https://lh3.googleusercontent.com/5LSMQsfk2kgkbTT0ih8TMrhoXDETO3inMahYX6-l-vMRkn-JNxOTubZQFPyDLt0JS5sNIFAQx7jgVLF56nO7OmHh0n7eD3mvCXDEvgE=w64-h64"
            ></img>
            <div>
              <div className="div_name">Portals</div>
              <div className="div_price">503.7 SOL</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
