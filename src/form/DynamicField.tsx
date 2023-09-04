import * as React from 'react';
import {TextInput} from 'react-native-paper';
import {useFormContext} from 'react-hook-form';
import {DynamicFieldData} from './control-types';
import {ControlledTextInput} from './ControlledTextInput';

export const DynamicField = ({
  type,
  fieldName,
  label,
  rules,
  defaultValue,
  ...rest
}: DynamicFieldData) => {
  const {control} = useFormContext();

  switch (type) {
    case 'text':
      return (
        <ControlledTextInput
          control={control}
          name={fieldName}
          label={label}
          rules={rules}
          {...rest}
        />
      );

    case 'number':
      return (
        <ControlledTextInput
          control={control}
          name={fieldName}
          label={label}
          defaultValue={defaultValue}
          rules={rules}
          keyboardType="number-pad"
          {...rest}
        />
      );

    case 'cpf':
      return (
        <ControlledTextInput
          control={control}
          name={fieldName}
          label={label}
          rules={rules}
          keyboardType="number-pad"
          mask="999.999.999-99"
          {...rest}
        />
      );
    // case 'select': {
    //   return (
    //     <select
    //       {...register(fieldName, config)}
    //       defaultValue={defaultValue}
    //       name={fieldName}
    //       id={fieldName}>
    //       {options.map((o, index) => (
    //         <option key={index} value={o.value}>
    //           {o.label}
    //         </option>
    //       ))}
    //     </select>
    //   );
    // }
    default:
      return <TextInput />;
  }
};
