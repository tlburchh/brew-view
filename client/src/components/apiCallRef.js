
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data:{}
    }

  }
  componentDidMount() {
    this.loadBeers();
  };
  loadBeers = () => {
    API.getBeers()
    .then(res => {
      console.log(this.res);
      this.setState({
        data: res.data
      });
      console.log('api check')
        console.log(this.state.data)
      })
      .catch(err => console.log(err));
  };
 