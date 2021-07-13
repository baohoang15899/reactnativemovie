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
    padding: 15,
  },
  header: {
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
  childBlock: {
    borderRadius: 8,
    backgroundColor: '#1d1d1d',
    borderColor: '#2e2e2e',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingVertical: 8,
  },
  input: {
    backgroundColor: '#2e2e2e',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  inputTitle: {
    marginBottom: 5,
    color: '#9A9A9A',
  },
  btn: {
    flex: 1,
    marginTop: 30,
  },
});
