import React, { useEffect, useState } from "react";

import tableData from "../assest/data/top";
import DataTable, { createTheme } from "react-data-table-component";
import Card from "@material-ui/core/Card";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { Grid } from "@material-ui/core";
import { TailSpin } from "react-loader-spinner";
import "../assest/css/table.css";
createTheme("solarized", {
  text: {
    primary: "white",
    secondary: "white",
  },
  background: {
    default: "rgba(46, 44, 44, 0.682)",
  },
  context: {
    text: "black",
  },

  sortFocus: {
    default: "white",
  },
});
const TopData = () => {
  const [data, setData] = useState(tableData);
  const [category, setCategory] = useState(new Set());
  const [flag, setFlag] = useState("false");
  const [search, setSearch] = useState(data);
  const [select, setSelect] = useState(data);

  const handleSearchChange = (e) => {
    if (data.length === 0) return;
    const value = e.target.value;

    const newFilter = [...select].filter(
      (val) =>
        val.Item[1].toLowerCase().includes(value.toLowerCase()) ||
        String(val.Item[1]).toLowerCase().includes(value.toLowerCase())
    );

    setSearch(newFilter);
  };
  const handleSearchChange1 = (e) => {
    if (data.length === 0) return;
    const value = e.target.value;

    const newFilter = [...select].filter(
      (val) =>
        val.price.toLowerCase().includes(value.toLowerCase()) ||
        String(val.price).toLowerCase().includes(value.toLowerCase())
    );

    setSearch(newFilter);
  };
  const handleSearchChange2 = (e) => {
    if (data.length === 0) return;
    const value = e.target.value;

    const newFilter = [...select].filter(
      (val) =>
        val.time.toLowerCase().includes(value.toLowerCase()) ||
        String(val.time).toLowerCase().includes(value.toLowerCase())
    );

    setSearch(newFilter);
  };
  useEffect(() => {
    if (data.length > 0) {
      let field = new Set();

      data.map((e) => field.add(e.category));

      setCategory(field);
    }
  }, [data]);

  useEffect(() => {
    setFlag("true");
    setData(tableData);
    setTimeout(() => {
      setFlag("false");
    }, 700);
  }, [tableData]);
  const Rendering = () => {
    setFlag("true");
    setData(tableData);
    setTimeout(() => {
      setFlag("false");
    }, 700);
  };

  const columns = [
    {
      selector: "Item",
      cell: (selector) => (
        <img
          src={selector.Item[0]}
          width="35"
          height="35"
          className="avatar_img"
        />
      ),
      sortable: true,
    },
    {
      selector: "topbuyer",

      sortable: true,
    },
    {
      selector: "price",
      sortable: true,
    },
  ];
  return (
    <>
      {flag == "true" ? (
        <div className="spinnner1">
          <TailSpin heigth="100" width="100" color="blue" ariaLabel="loading" />
        </div>
      ) : (
        <Card
          style={{ background: "rgba(46, 44, 44, 0.682)", padding: "10px" }}
        >
          <br />

          <Grid container spacing={3} className="table_header">
            <Grid item xs={12}>
              <span className="logo_text">Biggest Whales</span>
              <br />
              <span className="logo_text1">SOL spent in the last 14 days</span>
              &nbsp; &nbsp; &nbsp;
              <Button onClick={Rendering} className="search_btn_load">
                <AutorenewIcon />
              </Button>
            </Grid>
          </Grid>
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
      )}
    </>
  );
};
export default TopData;
