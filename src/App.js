import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from './Switch'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    width: 700,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

class SimpleTable extends React.Component {
  state = {
    rows: [
     {name: "QA1", status: "Down"},
     {name: "QA2", status: "Running"},
     {name: "QA3", status: "Down"},
     {name: "QA4", status: "Running"},
     {name: "QA5", status: "Running"},
     {name: "QA6", status: "Running"},
    ]
  }

  componentDidMount() {
    /*
    axios.get("http://localhost:8080/servers").then(resp => {
      this.setState({rows: resp.data})
    })
    */
  }

  toggleServer(id) {
    console.log(id)
  }

  render() {
    console.log(this.state)
  const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Environment</TableCell>
              <TableCell>status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell  className="status-header" component="th" scope="row">
                    <Switch
                      checked={row.status === "Running"}
                      id={row.id}
                      toggleServer={this.toggleServer}
                      inProgress={row.status === "StartingUp"}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(SimpleTable)
