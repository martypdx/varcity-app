import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInfo, updateInfo } from '../store/athletes/actions';
import { getCountries, getRegions, getCities } from './address/actions';
import InfoEditor from './InfoEditor';
import { InfoPresentation } from './InfoPresentation';
import defaultValues from '../store/athletes/defaultValues';

export class InfoContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoadingData: true,
      info: {
        firstName: ''
      }
    };
    
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSave = this.handleOnSave.bind(this);
    // this.updateInitialState = this.updateInitialState.bind(this);
  }

  componentWillMount() {
    this.props.getInfo(this.props.currentId);
  }

  // updateInitialState() {
  //   console.log('this.props', this.props);
  //   const { info } = this.props.athletes[this.props.currentId];
  //   this.setState({info});
  // }

  // componentDidMount() {
  //   this.updateInitialState();
  // }

  handleOnChange(event) {
    const { name, value } = event.target;
    console.log('updating state with', name, value);
    this.setState({
      info: { [name]: value }
    });
  }
  
  handleOnSave() {
    console.log('saving with id', this.props.currentId, 'and data', this.state.info);
    this.props.updateInfo(this.props.currentId, this.state.info);
  }


  // }
  
  render() {
    console.log('this.state',this.state);
    // const { currentId, authId } = this.props;
    // TODO: determine if edit mode is on, currentId === authId ?
    // TODO: check if public
    const editModeOn = true;
    const { info } = this.props.athletes[this.props.currentId] || defaultValues[123];
    // this.setState({ info });
    // this.updateInitialState();

    return (
      <div>
        {editModeOn
          ? <InfoEditor id={this.props.currentId} props={this.state.info} change={this.handleOnChange} save={this.handleOnSave} />
          : <InfoPresentation info={this.state.info} /> }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    athletes: state.athletes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInfo: (id) => {
      dispatch(getInfo(id));
    },
    updateInfo: (id, data) => {
      dispatch(updateInfo(id, data));
    },
    getCountries: () => {
      dispatch(getCountries());
    },
    getRegions: (country) => {
      dispatch(getRegions(country));
    },
    getCities: (country, region) => {
      dispatch(getCities(country, region));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  (stateProps, dispatchProps, ownProps) => {
    return {
      ...stateProps,
      ...dispatchProps,
      currentId: ownProps.location.pathname.split('/athletes/')[1],
    };
  })(InfoContainer);
