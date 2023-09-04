import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {MaskedTextInput, MaskedTextInputProps} from 'react-native-mask-text';
import {HelperText, TextInput, TextInputProps} from 'react-native-paper';

export type Rules = UseControllerProps<FieldValues>['rules'];

export const ControlledTextInput = <FormType extends FieldValues>({
  control,
  name,
  rules,
  defaultValue,
  mask,

  ...textInputProps
}: UseControllerProps<FormType> &
  TextInputProps &
  Omit<MaskedTextInputProps, 'onChangeText'>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({field, fieldState}) => {
        return (
          <>
            <TextInput
              // style={{backgroundColor: 'red'}}
              blurOnSubmit
              mode="outlined"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.invalid}
              render={
                mask
                  ? props => <MaskedTextInput mask={mask} {...props} />
                  : undefined
              }
              {...textInputProps}
            />
            <HelperText type="error" visible={fieldState.invalid}>
              {fieldState.error?.message}
            </HelperText>
          </>
        );
      }}
    />
  );
};
