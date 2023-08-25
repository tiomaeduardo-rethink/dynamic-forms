import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {HelperText, TextInput, TextInputProps} from 'react-native-paper';

export type Rules = UseControllerProps<FieldValues>['rules'];

export const ControlledTextInput = <FormType extends FieldValues>({
  control,
  name,
  rules,
  defaultValue,
  ...textInputProps
}: UseControllerProps<FormType> & TextInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({field, fieldState}) => (
        <>
          <TextInput
            blurOnSubmit
            mode="outlined"
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            error={fieldState.invalid}
            {...textInputProps}
          />
          <HelperText type="error" visible={fieldState.invalid}>
            {fieldState.error?.message}
          </HelperText>
        </>
      )}
    />
  );
};
