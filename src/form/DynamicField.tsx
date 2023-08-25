import {useFormContext} from 'react-hook-form';
import {DynamicFieldData} from './control-types';

import * as React from 'react';
import {TextInput} from 'react-native-paper';
import {ControlledTextInput} from './ControlledTextInput';

export const DynamicField = ({type, ...rest}: DynamicFieldData) => {
  const {control} = useFormContext();

  switch (type) {
    case 'text':
      return (
        <ControlledTextInput
          control={control}
          name={rest.fieldName}
          label={rest.label}
          rules={rest.rules}
        />
      );

    case 'number':
      return (
        <ControlledTextInput
          control={control}
          name={rest.fieldName}
          label={rest.label}
          rules={rest.rules}
          keyboardType="number-pad"
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
    // case 'number':
    //   return (
    //     <input
    //       type="number"
    //       {...register(fieldName, config)}
    //       defaultValue={defaultValue}
    //     />
    //   );
    default:
      return <TextInput />;
  }
};
