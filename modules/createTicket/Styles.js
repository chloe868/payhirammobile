import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  CreateTicketContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: '4%',
    flex: 1,
    padding: 15
  },
  InputContainer: {
    width: '90%',
    marginTop: 5
  },
  TicketButtonContainer: {
    width: '100%',
    alignItems: 'center'
  },
  CustomButtonContainer: {
    borderRadius: 10,
    right: 7,
  },
  ButtonTextContainer: {
    paddingVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonTextStyle: {
    textAlign: 'center',
  },
  TicketInputInputContainer: {
    marginTop: '2%',
    width: '100%',
  },
  TicketInputTitleContainer: {
    marginBottom: 5
  },
  TicketInputTitleTextStyle: {
    fontSize: 15,
  },
  TextInputContainer: {
    height: 60,
    marginTop: '2%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
  },
  Image: {
    height: 100,
    width: 100,
  },
});

export default styles;
