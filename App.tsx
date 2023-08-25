import React from 'react';
import {SafeAreaView} from 'react-native';
import {Form} from './src/form/Form';
import {DynamicFieldData} from './src/form/control-types';

const schema: DynamicFieldData[] = [
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
    type: 'number',
    fieldName: 'age',
    label: 'Age',
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
];

function App(): JSX.Element {
  return (
    <SafeAreaView style={{padding: 24}}>
      <Form schema={schema} />
    </SafeAreaView>
  );
}

export default App;
