import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import { fetchMasteries } from '../redux/masteries';
import { fetchChampions } from '../redux/champions';
import LandingPage from './LandingPage';
import AllChampions from './AllChampions';
import SingleChamp from './SingleChamp';
import Masteries from './Masteries';
import Precision from './Precision';
import Domination from './Domination';
import Sorcery from './Sorcery';
import Resolve from './Resolve';
import Inspiration from './Inspiration';
import styles from '../StyleSheet';

class Main extends Component {
  componentDidMount(props) {
    this.props.initialData(props);
  }
  render() {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>
        <Scene key="root">
          <Scene key="LandingPage" component={LandingPage} title="        League Of Legends Runed My Life" />
          <Scene key="AllChampions" component={AllChampions} title="All Champions" />
          <Scene key="SingleChamp" component={SingleChamp} />
          <Scene key="Masteries" component={Masteries} title ='Mastery Trees' />
          <Scene key="Precision" component={Precision} title='Precision' />
          <Scene key="Domination" component={Precision} title='Domination' />
          <Scene key="Sorcery" component={Sorcery} title='Sorcery' />
          <Scene key="Resolve" component={Resolve} title ='Resolve'/>
          <Scene key="Inspiration" component={Inspiration} title ='Inspiration'/>
        </Scene>
      </Router>
    );
  }
}

const mapProps = null;

const mapDispatchtoProps = dispatch => ({
  initialData: () => {
    dispatch(fetchMasteries());
    dispatch(fetchChampions());
  },
});

export default connect(mapProps, mapDispatchtoProps)(Main);
