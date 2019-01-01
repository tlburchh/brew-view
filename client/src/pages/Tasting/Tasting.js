import React, { Component } from "react";
import Card from "../../components/Card";
// import API from "../../utils/API";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '5px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  
});


class Tasting extends Component {

 
    constructor(props) {
      super(props);
  
      this.state = {
        data:[],
        available: []
      
      };
     
    }
    
    // componentDidMount() {
    //   this.loadBeers();
      
    // };
    
    // loadBeers = () => {
    //   API.getBeers()
    //   .then(res => {
    //     console.log(this.res);
    //     this.setState({
    //       data: res.data
    //     });
    //     console.log('api check')
    //     console.log(this.state.data)
    //   })
    //   .catch(err => console.log(err));
    // };
    
    


  render() {

    const { classes } = this.props;

    const availableBeer = this.props.data.filter(beer => beer.available !== false);
    console.log('Where you at Tasting page?' );
    console.log('availableBeer', availableBeer)
    return(
      <div className={classes.flexContainer}>
        {availableBeer.map((beerData, i) => (      
          <div key={i}>
            <Grid   container>                
                  <Grid style={{width:'475px'}}>
                    <Paper style={{background:'blue', height: '175px', margin:'3px'}}
                          className={classes.paper}>
                      <Card 
                        style={{height:'250px'}}
                        beer={beerData}
                        key={i}
                      />
                    </Paper>
                  </Grid>
              </Grid>
          </div>
        ))}
      </div>
    )
  }
}

Tasting.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tasting);