import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
// import { Consumer } from '../../components/APIContext';
// import API from '../../utils/API'

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


 class SimpleCard extends React.Component {

  constructor(props) {
		super(props);

		this.state = {
      data:[],
      
		
    };
   
  }
  
  render(){
    
    const { classes } = this.props;
    
  
  return (
    <React.Fragment>
  
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {this.props.beer['Brewery Name']}
          </Typography>
          <Typography variant="h5" component="h2">
          {this.props.beer['Beer Name']}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {this.props.beer['Beer Style']}
          </Typography>
          <Typography component="p">
          ABV:{this.props.beer.ABV}
            <br />
          IBU:{this.props.beer.IBU}
          </Typography>
        </CardContent>
      </Card>
    
    </React.Fragment>
  );

  };
};

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);