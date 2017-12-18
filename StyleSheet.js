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
  TextInputStyleClass: {

    // Setting up Hint Align center.
    textAlign: 'center',

    // Setting up TextInput height as 50 pixel.
    height: 50,

    // Set border width.
    borderWidth: 2,

    // Set border Hex Color Code Here.
    borderColor: 'red',

    // Set border Radius.
    borderRadius: 20,

    // Set background color of Text Input.
    backgroundColor: '#FFFFFF',

  },
  searchButton: {
    marginTop: 20,
    fontSize: 20,
    color: 'blue',
    width: 60,
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
