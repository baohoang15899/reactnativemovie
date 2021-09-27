import {StyleSheet} from 'react-native';

export const lightMode = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    color: '#FF6347',
    fontSize: 26,
    textAlign: 'center',
    letterSpacing: 1,
    fontFamily: 'Roboto-Bold',
  },
});

export const darkMode = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A18',
    paddingHorizontal: 15,
  },
  header: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#3A3A3A',
    borderRadius: 6,
  },
  headerText: {
    fontFamily: 'Roboto-Bold',
    color: '#fff',
    fontSize: 30,
    letterSpacing: 1,
    marginLeft: 18,
  },
  textOption: {
    flex:1,
    color: '#9A9A9A',
  },
  option: {
    flex: 1,
    marginTop:'4%'
  },
  block: {
    flex: 1,
    flexDirection: 'row',
    marginTop:'4%'
  },
  inputGroup: {
    flex:1,
    marginBottom: 10,
  },
});
