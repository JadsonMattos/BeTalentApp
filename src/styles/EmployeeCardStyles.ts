import { StyleSheet } from 'react-native';

export const EmployeeCardStyles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginVertical: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#DFDFDF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 68,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
  },
  icon: {
    color: '#0500FF',
    fontSize: 24,
  },
  details: {
    marginTop: 8,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20,
  },
  value: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'right',
  }
});