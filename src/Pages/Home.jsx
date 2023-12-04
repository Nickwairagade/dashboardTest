import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Table from "../components/Table";
import Chart from "../components/Chart";

import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [click, setClick] = React.useState("");
    const handleChange = (event) => {
        setClick(event.target.value);
      };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={6}>
                    <Card sx={{ width: 100 + "vh" }}>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                        ></Typography>
                        <Typography variant="body2" color="text.secondary">
                          <Table />
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Card sx={{ width: 100 + "vh" }}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          <Toolbar
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography sx={{ fontWeight: 600 }}>
                              Ad Insights
                            </Typography>
                            <Box>
                              <FormControl
                                sx={{ m: 1, minWidth: 120 }}
                                size="small"
                              >
                                <Select
                                  value={click}
                                  onChange={handleChange}
                                  displayEmpty
                                  inputProps={{ "aria-label": "Without label" }}
                                >
                                  <MenuItem value="">
                                    <em>Click</em>
                                  </MenuItem>
                                  <MenuItem value={10}>Male</MenuItem>
                                  <MenuItem value={20}>Female</MenuItem>
                                  <MenuItem value={30}>Unkown</MenuItem>
                                </Select>
                                {/* <FormHelperText>Without label</FormHelperText> */}
                              </FormControl>
                            </Box>
                          </Toolbar>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <Chart />
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
