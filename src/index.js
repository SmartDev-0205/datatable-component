import React, { useEffect, useState, useMemo } from "react";
import ReactDOM from "react-dom";
import DataTable, { createTheme } from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { BiMenu } from "react-icons/bi";
import { RiMenuFill } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { GrLogout } from "react-icons/gr";
import movies from "./movies";
import "./styles.css";
import {
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";



createTheme("solarized", {
  text: {
    primary: "white",
    secondary: "white",
  },
  background: {
    default: " rgb(33, 59, 82)",
  },
  context: {
    text: "whtie",
  },

  sortFocus: {
    default: "white",
  },
});

function App() {

  const [data, setData] = useState(movies);

  useEffect(() => {
    setData(movies);
  }, [movies]);

  const [category, setCategory] = useState(new Set());
  const [search, setSearch] = useState(data);
  const [select, setSelect] = useState(data);

  //filter data
  const handleSearchChange = (e) => {
    if (data.length === 0) return;
    const value = e.target.value;

    const newFilter = [...select].filter(
      (val) =>
        val.name.toLowerCase().includes(value.toLowerCase()) ||
        String(val.rating)
          .toLowerCase()
          .includes(value.toLowerCase())
    );

    setSearch(newFilter);
  };

  const handleSortChange = (e) => {
    if (data.length === 0) return;
    const value = e;
    console.log(e);
    if (value === "all") {
      setSearch(data);
      setSelect(data);
    } else {
      const newFilter = [...data].filter(
        (val) =>
          val.category.toLowerCase().includes(value.toLowerCase()) ||
          String(val.rating)
            .toLowerCase()
            .includes(value.toLowerCase())
      );

      setSelect(newFilter);
      setSearch(newFilter);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      let field = new Set();

      data.map((e) => field.add(e.category));

      setCategory(field);
    }
  }, [data]);

  const columns = [
    {
      name: "STT",
      selector: "stt",
      cell: (selector) => (
        <div>
          <img src={selector.stt} width="50" height="50" />
        </div>
      ),
      sortable: true,

    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Status",
      selector: "category",
      sortable: true,
      cell: (selector) => (
        <div className={"status-" + selector.category}>{selector.category}</div>
      ),
    },
    {
      name: "Floor",
      selector: "floor",
      sortable: true,
      cell: (selector) => (
        <div style={{ display: "flex" }}>
          <BiMenu />
          {selector.floor}
        </div>
      ),
    },
    {
      name: "Supply",
      selector: "supply",
      sortable: true,
    },
    {
      name: "Explore",
      selector: "explore",
      minWidth: "20%",

      cell: (selector) => (
        <div style={{ display: "flex" }}>
          {selector.explore.map((data, index) => (
            <img
              className="social-img"
              src={selector.explore[index]}
              width="25"
              height="25"
            />
          ))}
        </div>
      ),
      sortable: true,

    },
    {
      name: "Vol in 1/7/30 days",
      selector: "vol",
      sortable: true,
      minWidth: "20%",
      cell: (selector) => (
        <div style={{ display: "flex" }}>
          {selector.vol.map((data, index) => (
            <div style={{ display: "flex" }}>
              <RiMenuFill className="vol-icon" />
              <div className={"div-vol" + index}>{selector.vol[index]}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      name: "Expecting reveal time",
      selector: "expect",
      sortable: true,
    },
    {
      name: "Fully revealed At",
      selector: "fully",
      sortable: true,
    },
  ];

  

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4} lg={2}>
          <span className="logo_text">On-going Projects</span>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} lg={2}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel htmlFor="searchByName" className="search-label">
              Search For Project Name
            </InputLabel>
            <OutlinedInput
              onChange={handleSearchChange}
              id="searchByName"
              className="searchByName"
              endAdornment={<Search />}
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} lg={2}>
          <ButtonGroup>
            <Button
              className="search_btn_grp"
              onClick={() => handleSortChange("all")}
            >
              All
            </Button>
            <Button
              className="search_btn_grp"
              onClick={() => handleSortChange("Reveal")}
            >
              Reveal
            </Button>
            <Button
              className="search_btn_grp"
              onClick={() => handleSortChange("UnReal")}
            >
              UnReveal
            </Button>
            <Button
              className="search_btn_grp"
              onClick={() => handleSortChange("Reavealing")}
            >
              Reavealing
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} lg={6}>
          <Button className="btn_log">
            <GrLogout style={{ color: "white" }}  />
            &nbsp; Connect
          </Button>
          <Button className="btn_set">
            <FiSettings style={{ color: "white" }} />
          </Button>
        </Grid>
      </Grid>
      <br />
      <Card>
        <DataTable
          columns={columns}
          data={search}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          pagination
          striped
          theme="solarized"
        />
      </Card>

      <Grid container spacing={3} className="footer" justify="center">
        <Grid item xs={12} md={12} lg={2}>
          <div style={{ display: "flex" }} className="footer-left-grp">
            <div className="footer-block footer-grp">
              <span className="footer-grey">Block:</span>
              <span className="footer-white">133639392</span>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={12} lg={5}>
          <div style={{ display: "flex" }} className="footer-left-grp">
            <div className="footer-fast footer-grp">
              <span className="footer-grey">Gas(Gwei):</span>
              <span className="footer-white">Fast</span>
              <span className="footer-green">281</span>
            </div>

            <div className="footer-normal footer-grp">
              <span className="footer-white">Normal</span>
              <div className="footer-game"> 281</div>
            </div>
            <div className="footer-slow footer-grp">
              <span className="footer-white">Slow</span>
              <span className="footer-red">281</span>
            </div>
          </div>
        </Grid>
        <Grid item item xs={12} md={12} lg={5} className="footer-right-grp">
          <div class="links_container__EX2pN" style={{ marginLeft: "50%" }}>
            <a
              class="button-module_button__3MTAs outline-module_normal__2UWTT size-module_medium__3lKxN flat-module_main__3JgWA highlight-module_flat__YhA5p"
              aria-label="Discord"
              href="https://discord.gg/N6dbAXZT49"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="button-module_icon__uuptV">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  style={{ width: "16px", height: "16px" }}
                  class="icon-module_block__1lrnj"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill-rule="nonzero"
                      d="M10.076 11c.6 0 1.086.45 1.075 1 0 .55-.474 1-1.075 1C9.486 13 9 12.55 9 12s.475-1 1.076-1zm3.848 0c.601 0 1.076.45 1.076 1s-.475 1-1.076 1c-.59 0-1.075-.45-1.075-1s.474-1 1.075-1zm4.967-9C20.054 2 21 2.966 21 4.163V23l-2.211-1.995-1.245-1.176-1.317-1.25.546 1.943H5.109C3.946 20.522 3 19.556 3 18.359V4.163C3 2.966 3.946 2 5.109 2H18.89zm-3.97 13.713c2.273-.073 3.148-1.596 3.148-1.596 0-3.381-1.482-6.122-1.482-6.122-1.48-1.133-2.89-1.102-2.89-1.102l-.144.168c1.749.546 2.561 1.334 2.561 1.334a8.263 8.263 0 0 0-3.096-1.008 8.527 8.527 0 0 0-2.077.02c-.062 0-.114.011-.175.021-.36.032-1.235.168-2.335.662-.38.178-.607.305-.607.305s.854-.83 2.705-1.376l-.103-.126s-1.409-.031-2.89 1.103c0 0-1.481 2.74-1.481 6.121 0 0 .864 1.522 3.137 1.596 0 0 .38-.472.69-.871-1.307-.4-1.8-1.24-1.8-1.24s.102.074.287.179c.01.01.02.021.041.031.031.022.062.032.093.053.257.147.514.262.75.357.422.168.926.336 1.513.452a7.06 7.06 0 0 0 2.664.01 6.666 6.666 0 0 0 1.491-.451c.36-.137.761-.337 1.183-.62 0 0-.514.861-1.862 1.25.309.399.68.85.68.85z"
                    ></path>
                  </g>
                </svg>
              </span>
            </a>
            <a
              class="button-module_button__3MTAs outline-module_normal__2UWTT size-module_medium__3lKxN flat-module_main__3JgWA highlight-module_flat__YhA5p"
              aria-label="Twitter"
              href="https://twitter.com/trait_sniper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="button-module_icon__uuptV">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  style={{ width: "16px", height: "16px" }}
                  class="icon-module_block__1lrnj"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"></path>
                  </g>
                </svg>
              </span>
            </a>
            <a
              class="button-module_button__3MTAs outline-module_normal__2UWTT size-module_medium__3lKxN flat-module_main__3JgWA highlight-module_flat__YhA5p"
              aria-label="Chrome Extension"
              href="https://chrome.google.com/webstore/detail/traitsniper/acaonckckmmakfgjfkgbfeepdhmajkeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="button-module_icon__uuptV">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  style={{ width: "16px", height: "16px" }}
                  class="icon-module_block__1lrnj"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10.365 19.833l1.93-3.342a4.499 4.499 0 0 1-4.234-2.315L4.794 8.52a8.003 8.003 0 0 0 5.57 11.313zm2.225.146A8 8 0 0 0 19.602 9.5h-3.86A4.48 4.48 0 0 1 16.5 12a4.48 4.48 0 0 1-.642 2.318l-3.268 5.66zm1.553-6.691l.022-.038a2.5 2.5 0 1 0-4.354-.042l.024.042a2.499 2.499 0 0 0 4.308.038zm-8.108-6.62l1.929 3.34A4.5 4.5 0 0 1 12 7.5h6.615A7.992 7.992 0 0 0 12 4a7.98 7.98 0 0 0-5.965 2.669zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path>
                  </g>
                </svg>
              </span>
            </a>
            <a
              class="button-module_button__3MTAs outline-module_normal__2UWTT size-module_medium__3lKxN flat-module_main__3JgWA highlight-module_flat__YhA5p"
              href="https://traitsniper.com/subscription"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="button-module_icon__uuptV">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  style={{ width: "16px", height: "16px" }}
                  class="icon-module_block__1lrnj"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M4.873 3h14.254a1 1 0 0 1 .809.412l3.823 5.256a.5.5 0 0 1-.037.633L12.367 21.602a.5.5 0 0 1-.734 0L.278 9.302a.5.5 0 0 1-.037-.634l3.823-5.256A1 1 0 0 1 4.873 3z"></path>
                  </g>
                </svg>
              </span>
              <span
                class="div-module_px__38Chf"
                style={{ width: "8px", height: "8px" }}
              ></span>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
