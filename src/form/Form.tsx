import * as React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {DynamicFieldData} from './control-types';
import {View} from 'react-native';
import {DynamicField} from './DynamicField';
import {Button} from 'react-native-paper';

interface FormProps {
  schema: DynamicFieldData[];
}

export const Form = ({schema}: FormProps) => {
  const formMethods = useForm({
    mode: 'onTouched',
  });
  formMethods.getValues();

  function onSubmit(data, error) {
    // your logic on what to do with data
    console.log(data);
  }

  return (
    <View>
      <FormProvider {...formMethods}>
        {schema.map((d, i) => (
          <View>
            <DynamicField {...d} />
          </View>
        ))}

        <Button
          mode="contained"
          onPress={formMethods.handleSubmit(onSubmit)}
          style={{marginTop: 16}}>
          submit
        </Button>
      </FormProvider>
    </View>
  );
};
