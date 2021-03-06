import React from 'react';
import { Text, TouchableOpacity } from 'react-native'; 

const Button = ({ onPress, btnText }) => {

  const { buttonStyle, textStyle } = styles; 

  return ( 
    <TouchableOpacity style={ buttonStyle } onPress={onPress} >
      <Text style={ textStyle } buttonText={ btnText } >
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: { 
    alignSelf: 'center',
    color: '#007aaf',
    fontSize: 16,
    paddingTop: 10, 
    paddingBottom: 10 
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5, 
    marginRight: 5
  }
}

export default Button; 