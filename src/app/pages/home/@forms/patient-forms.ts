import { FieldGroup } from '@shared/components/field-generator/field.group';

const searchForm: FieldGroup[] = [
  {
    fields: [
      {
        value: '',
        title: 'search',
        label: 'Search',
        description: 'Enter search field',
        type: 'text',
        validationMessage: 'please enter value',
        isRequired: true,
        span: 24,
      },
      {
        value: '',
        title: 'select',
        label: 'Search Patient',
        description: 'Search and select patient',
        type: 'select',
        validationMessage: 'please enter value',
        isRequired: true,
        options: [
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
          { label: 'Option 3', value: 3 },
          { label: 'Option 4', value: 4 },
        ],
        span: 24,
      },
      {
        value: '',
        title: 'remote search',
        label: 'Search',
        description: 'Search',
        type: 'search',
        iconName: 'search',
        validationMessage: 'please enter value',
        isRequired: true,
        options: [],
        span: 24,
      },
      {
        value: '',
        title: 'Date',
        label: 'Search by date',
        description: 'Enter date',
        type: 'date',
        validationMessage: 'please enter date',
        isRequired: true,
        span: 24,
      },
      {
        value: [],
        title: 'Check Box',
        label: 'Select',
        description: 'Select multiple',
        type: 'checkBox',
        validationMessage: 'please select',
        isRequired: true,
        options: [
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
          { label: 'Option 3', value: 3 },
          { label: 'Option 4', value: 4 },
        ],
        span: 24,
      },
      {
        value: '',
        title: 'Radio',
        label: 'Select',
        description: 'Select one',
        type: 'radio',
        validationMessage: 'please select one',
        isRequired: true,
        options: [
          { label: 'Option 1', value: 1 },
          { label: 'Option 2', value: 2 },
          { label: 'Option 3', value: 3 },
          { label: 'Option 4', value: 4 },
        ],
        span: 24,
      },
      {
        value: '',
        title: 'Text Area',
        label: 'Text area',
        description: 'this is the text area',
        type: 'textArea',
        validationMessage: 'please type',
        isRequired: true,
        span: 24,
      },
      {
        value: '',
        title: 'Plan',
        type: 'submitButton',
        span: 24,
      },
    ],
  },
];

const patient: FieldGroup[] = [
  {
    title: 'Personal Information',
    fields: [
      {
        value: '',
        name: 'firstName',
        title: 'First Name',
        label: 'First Name',
        description: 'Enter first name',
        type: 'text',
        validationMessage: 'please enter first name',
        isRequired: true,
        span: 12,
      },
      {
        value: '',
        name: 'middleName',
        title: 'Middle Name',
        label: 'Middle Name',
        description: 'Enter middle name',
        type: 'text',
        validationMessage: 'please enter middle name',
        isRequired: true,
        span: 12,
      },
      {
        value: '',
        name: 'lastName',
        title: 'Last Name',
        label: 'Last Name',
        description: 'Enter last name',
        type: 'text',
        validationMessage: 'please enter last name',
        isRequired: true,
        span: 12,
      },
      {
        value: '',
        title: 'Date of Birth',
        name: 'birthDate',
        label: 'Date of Birth',
        description: 'Enter date of birth',
        type: 'date',
        validationMessage: 'please enter date of birth',
        isRequired: true,
        span: 12,
      },
      {
        value: '',
        name: 'phone',
        title: 'Phone Number',
        label: 'Phone Number',
        description: 'Enter phone number',
        type: 'text',
        validationMessage: 'please enter phone number',
        isRequired: true,
        span: 12,
      },
      {
        value: '',
        name: 'email',
        title: 'Email Address',
        label: 'Email Address',
        description: 'Enter email address',
        type: 'text',
        validationMessage: 'please enter email address',
        isRequired: true,
        span: 12,
      },
      {
        value: '',
        name: 'gender',
        title: 'Gender',
        label: 'Gender',
        description: 'Select Gender',
        type: 'select',
        validationMessage: 'please select gender',
        isRequired: true,
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
        ],
        span: 12,
      },
    ],
  },
  {
    title: 'Base Information',
    fields: [
      {
        value: '',
        name: 'active',
        title: 'Active',
        label: 'Status',
        description: 'Select Status',
        type: 'select',
        validationMessage: 'please select status',
        isRequired: true,
        options: [
          { label: 'Active', value: true },
          { label: 'Inactive', value: false },
        ],
        span: 12,
      },
      {
        value: '',
        name: 'medicalRecordNo',
        title: 'Medical Record No',
        label: 'Medical record number',
        description: 'Enter medical record number',
        type: 'text',
        validationMessage: 'please enter medical record number',
        isRequired: true,
        span: 12,
      },
      {
        value: '',
        name: 'address',
        title: 'Address',
        label: 'Address',
        description: 'Enter address',
        type: 'text',
        validationMessage: 'please enter address',
        isRequired: true,
        span: 12,
      },
      {
        value: '',
        name: 'birthCountryCode',
        title: 'Country Code',
        label: 'Country Code',
        description: 'Enter country code',
        type: 'text',
        validationMessage: 'please enter country code',
        isRequired: true,
        span: 12,
      },
      {
        value: '',
        name: 'nationality',
        title: 'Nationality',
        label: 'Nationality',
        description: 'Enter nationality',
        type: 'text',
        validationMessage: 'please enter nationality',
        isRequired: true,
        span: 12,
      },
    ],
  },
];

export const patientForms = {
  searchForm,
  patient,
};
