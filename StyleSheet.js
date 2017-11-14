import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  allChampions: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  singleChampion: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  button: {
    padding: 10,
    height: 45,
    width: 250,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  squares: {
    flex: 1,
  },
  navBar: {
    backgroundColor: '#0D47A1',
  },
  navBarTitle: {
    color: 'white',
  },
  barButtonTextStyle: {
    color: '#FFFFFF',
  },
  barButtonIconStyle: {
    tintColor: 'rgb(255,255,255)',
  },
});
