import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const styles = theme => ({
  progress: {
    margin: 0,
  },
  colorSwitchBase: {
    color: red[100],
    '&$colorChecked': {
      color: green[500],
      '& + $colorBar': {
        backgroundColor: red[500],
      },
    },
  },
  colorBar: {},
  colorChecked: {},
  iOSSwitchBase: {
    '&$iOSChecked': {
      color: theme.palette.common.white,
      '& + $iOSBar': {
        backgroundColor: '#52d869',
      },
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
  },
  iOSChecked: {
    transform: 'translateX(15px)',
    '& + $iOSBar': {
      opacity: 1,
      border: 'none',
    },
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: 'solid 1px',
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  iOSIcon: {
    width: 24,
    height: 24,
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1],
  },
});

class CustomizedSwitches extends React.Component{

  handleChange = status  => event => {
    console.log(event.target.checked)
    this.props.toggleServer(this.props.id)
  };

  render() {
    const { classes } = this.props;
   console.log(this.props.checked)
    return (
      <FormGroup row>
        {this.props.inProgress&&
          <CircularProgress className={classes.progress} style={{color: red[300]}}>
        </CircularProgress>
        }
        {this.props.inProgress ||
          <FormControlLabel
          control={
            <Switch
              classes={{
                switchBase: classes.colorSwitchBase,
                bar: classes.iOSBar,
                icon: classes.iOSIcon,
                iconChecked: classes.iOSIconChecked,
                checked: classes.iOSChecked,
              }}
              disableRipple
              checked={this.props.checked}
              onChange={this.handleChange(this.props.checked)}
              value="checkedA"
            />
          }
          label={this.props.checked ? "on" : "stopped"}
        />
        }
      </FormGroup>
    );
  }
}

CustomizedSwitches.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedSwitches);
