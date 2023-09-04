import {Rules} from './ControlledTextInput';

export type FieldType = DynamicFieldData['type'];

export interface SelectOption {
  label: string;
  value: string;
  isSelected: boolean;
}

export type DynamicFieldData =
  | {
      label: string;
      fieldName: string;
      defaultValue?: any;
      rules?: Rules;
      disabled?: boolean;
    } & (
      | {
          type: 'text' | 'number' | 'checkbox' | 'cpf';
        }
      | {
          type: 'select' | 'multi-select';
          options?: SelectOption[];
        }
    );
