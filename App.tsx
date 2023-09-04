import React from 'react';
import {SafeAreaView} from 'react-native';
import {Form} from './src/form/Form';
import {DynamicFieldData} from './src/form/control-types';
import {validateCpf} from './src/form/validators';

const schema: DynamicFieldData[] = [
  {
    type: 'number',
    fieldName: 'age',
    label: 'Age',
    defaultValue: '23',
    disabled: true,
    rules: {
      required: 'Age is required',
      max: {
        message: 'Please insert a valid age',
        value: 130,
      },
      min: {
        message: 'Please insert a valid age',
        value: 0,
      },
    },
  },
  {
    type: 'text',
    fieldName: 'firstName',
    label: 'First Name',
    rules: {
      maxLength: {
        message: 'max 10 characters',
        value: 10,
      },
    },
  },
  {
    type: 'cpf',
    fieldName: 'cpf',
    label: 'CPF',
    rules: {
      required: 'CPF is required',
      validate: text => {
        if (validateCpf(text)) {
          return true;
        }
        return 'Invalid CPF';
      },
    },
  },
];

function App(): JSX.Element {
  return (
    <SafeAreaView style={{padding: 24}}>
      <Form schema={schema} />
    </SafeAreaView>
  );
}

export default App;
