export default {
  core: {
    assessments: 'Assessments',
    profile: 'Profile',
    caseManagers: 'Case Managers',
    departments: 'Departments',
    caregivers: 'Caregivers',
    reports: 'Reports',
    previous: 'Previous',
    next: 'Next',
    reset: 'Reset',
    search: 'Search',
    editCaregiver: 'Edit Caregiver',
    createCaregiver: 'Create Caregiver',
    questionnaire: 'Questionnaire',
    scripts: 'Scripts',
  },
  dashboard: {
    welcome: 'Welcome to MHIRA',
    name: 'MHIRA',
    header: 'Select the report you want to generate:',
  },
  assessments: {
    myAssessment: 'My Assessment',
  },
  card: {
    changePassword: 'Change Password',
    profile: 'Profile',
    logout: 'Logout',
  },
  questionnaireSelection: {
    noResult: 'No Result',
    searchSelect: 'Search and select questionnaires to add to the assessment',
    selectQuestionnaires: 'Select Questionnaires',
    selectedQuestionnaires: 'Selected Questionnaires',
  },
  assessmentMessages: {
    expiredText: 'Sorry, assessment is no longer available!',
    plannedText: 'Sorry, assessment is not available! It will be available at:',
    completedText: 'This assessment has been completed!',
  },
  menu: {
    dashboard: 'Dashboard',
    createAssessment: 'Create Assessment',
    caseManagement: 'Case Managment',
    patientList: 'Patients List',
    createPatient: 'Create Patient',
    caregiverList: 'Caregiver List',
    questionnaires: 'Questionnaires',
    questionnairesList: 'Questionnaires',
    questionnairesVersionList: 'Old Versions',
    uploadQuestionnaire: 'Upload Questionnaire',
    assessments: 'Assessments',
    planAssessment: 'Plan Assessments',
    plannedAssessments: 'Planned Assessments',
    userManagement: 'User Management',
    listUsers: 'List Users',
    newUser: 'New User',
    administration: 'Administration',
    reports: 'Reports',
    createReport: 'Create Report',
    permissionMatrix: 'Permission Matrix',
    permissions: 'Permissions',
    roles: 'Roles',
    departments: 'Departments',
    settings: 'Settings',
    systemConfiguration: 'System Configuration',
    patientStatuses: 'Patient Statuses',
    notFound: 'Not Found',
    noTabs: 'No Tabs',
    disclaimers: 'Messages',
    emailTemplates: 'Email Templates',
    version: 'Version'
  },
  patients: {
    myPatients: 'My Patients',
    archivedPatients: 'Archived'
  },
  tables: {
    assessmentAdministration: {
      assessmentType: 'Assessment Type',
      lastUpdate: 'Last Update',
      status: 'Status',
    },
    patientStatus: {
      name: '',
    },
    disclaimer: {
      type: 'Type',
      textInformation: 'Text Information',
      lastUpdate: 'Last Update',
    },
    assessmentsPatients: {
      title: 'Assessment Name',
      manager: 'Manager',
      informant: 'Informant',
      questionnaires: 'Questionnaires',
      deliveryDate: 'Delivery Date',
      expirationDate: 'Expiration Date',
      emailStatus: 'Email Status',
      status: 'Status',
    },
    scripts: {
      name: 'Name',
      version: 'Version',
      creator: 'Creator',
      reports: 'Reports',
      repositoryLink: 'Repository Link',
    },
    reports: {
      name: 'Name',
      resources: 'Report Type',
      roles: 'Roles',
      status: 'Status',
      repositoryLink: 'Repository Link',
      createdAt: 'Created At',
    },
    patients: {
      firstName: 'First Name',
      middleName: 'Middle Name',
      lastName: 'Last Name',
      medicalRecordNo: 'Hospital ID',
      gender: 'Gender',
      birthDate: 'Date of Birth',
      status: 'Status',
      informants: 'Informants',
      caseManager: 'Case Manager',
      createdAt: 'Created At',
    },
    contact: {
      firstName: 'First name',
      middleName: 'Middle name',
      lastName: 'Last name',
      email: 'E-Mail',
      phone: 'Phone',
      relation: 'Relation',
      emergency: 'Emergency',
      note: 'Note',
      patients: 'Patients',
    },
    casemanagers: {
      firstName: 'First name',
      middleName: 'Middle name',
      lastName: 'Last name',
      workID: 'Work ID',
      phone: 'Phone',
      username: 'Login Username',
    },
    departments: {
      name: 'Name',
      description: 'Description',
      createdAt: 'Created At',
    },
    users: {
      firstName: 'First name',
      middleName: 'Middle name',
      lastName: 'Last name',
      workID: 'Work ID',
      phone: 'Phone',
      username: 'Username',
      formattedStatus: 'Status',
      formattedRoles: 'Roles',
      formattedDepartments: 'Departments',
    },
    department: {
      name: 'Name',
      description: 'Description',
      formattedStatus: 'Status',
      createdAt: 'Created At',
      departmentName: 'Department Name',
      status: 'Status',
    },
  },
  forms: {
    assessmentAdministration: {
      typeName: 'Type Name',
      status: 'Status',
    },
    patientStatuses: {
      name: 'Patient Status Name',
      description: 'Description',
    },
    scripts: {
      name: 'Name',
      version: 'Version',
      creator: 'Creator',
      reports: 'Reports',
      excelFile: 'Export File',
      repositoryLink: 'Repository Link',
    },
    createReportForm: {
      reportName: 'Report Name',
      description: 'Description',
      resources: 'Resources',
      url: 'URL Of The Reporting Tool',
      appName: 'App Name',
      repositoryLink: 'Repository Link',
      reportStatus: 'Report Status',
      anonymus: 'Anonymus',
      roles: 'Roles',
    },
    changePassword: {
      newPassword: 'Enter New Password',
      newPasswordConfirmation: 'Repeat Password',
    },
    changeUserPassword: {
      currentPassword: 'Enter current password',
      newPassword: 'Enter new password',
      newPasswordConfirmation: 'Repeat password',
    },
    userProfile: {
      username: 'Login Username',
      workID: 'ID',
      email: 'Email',
      firstName: 'First Name',
      middleName: 'Middle name',
      lastName: 'Last name',
      phone: 'Phone',
      password: 'Password',
      passwordConfirmation: 'Repeat Password',
    },
    userProfileEdit: {
      username: 'Login Username',
      workID: 'ID',
      email: 'Email',
      firstName: 'First Name',
      middleName: 'Middle name',
      lastName: 'Last name',
      phone: 'Phone',
    },
    userRolesPermissions: {
      roleId: 'User Role',
    },
    patients: {
      patientInformation: 'Patient Information',
      firstName: 'First Name',
      middleName: 'Middle Name',
      lastName: 'Last Name',
      id: 'Id',
      birthDate: 'Date of Birth',
      gender: 'Gender',
      department: 'Department',
      patientAddress: 'Patient Address',
      street: 'Street',
      addressNumber: 'Number',
      addressApartment: 'Apartment',
      addressPlace: 'Place',
      addressPostalCode: 'Postal Code',
      addressCountryCode: 'Country',
      patientContact: 'Patient Contact',
      email: 'Email Address',
      phone: 'Phone',
      phone2: 'Alternative Phone',
      relation: 'Relation to Patient',
      number: 'Number',
      apartment: 'Apartment',
      place: 'Place',
      postalCode: 'Postal Code',
      country: 'Country',
      emergency: 'Emergency Contacts',
      note: 'Note',
      addCaregiver: 'Add Caregiver',
    },
  },
  assessmentForm: {
    license: 'License: {{license}}',
    questionsAnswered: '{{actual}}/{{total}} answered',
    optionalAnswered: '+{{actual}} optional',
    fillingTime: 'Filling time: {{time}}min',
    completeAssessment: 'Submit assessment',
    alreadyCompleted: 'Assessment is completed',
    overview: 'Finish Questionnaire',
    next: 'Next',
    prev: 'Previous',
    complete: 'Thank you for completing this assessment! You can close this page now.',
  },
  questionnaires: {
    questionnairesId: 'Version ID',
    id: 'ID',
    name: 'Name',
    formattedStatus: 'Status',
    language: 'Language',
    abbreviation: 'Abbreviation',
    keywords: 'Keywords',
    timeToComplete: 'Time To Complete',
    copyright: 'Copyright',
    website: 'Website',
    license: 'License',
    createdAt: 'Created At',
  },
  questionnairesForm: {
    name: 'Name',
    excelFile: 'XSL Form',
    status: 'Status',
    language: 'Language',
    copyright: 'Copyright',
    timeToComplete: 'Time to complete (minutes)',
    website: 'Website',
    license: 'License',
    keywords: 'Keywords',
  },
  plannedAssessments: {
    name: 'Assessment Name',
    formattedStatus: 'Status',
    patientMedicalRecordNo: 'Patient Hospital ID',
    formattedPatient: 'Patient',
    submissionDate: 'Submission Date',
    emailStatus: 'Email Status',
    clinicianWorkId: 'Clinician Work ID',
    formattedClinician: 'Clinician',
    informant: 'Informant',
    createdAt: 'Created At',
    expirationDate: 'Expiration Date',
    updatedAt: 'Submission Date',
    deliveryDate: 'Delivery Date',
  },
  planAssessment: {
    assessmentName: 'Assessment Name',
    patient: 'Select the patient this assesment belongs to',
    clinician: 'Clinician',
    informant: 'Informant',
  },
  createAssessment: {
    title: 'Assessment Name',
    assessmentManager: 'Assessment Manager',
    patient: 'Patient',
    departmentsUser: `Department's User`,
    patientsCaregiver: `Patient's Caregiver`,
    deliveryDate: 'Delivery Date',
    expirationDate: 'Expiration Date',
    notes: 'Notes for the assessment manager',
  },
  form: {
    system: {
      systemLocale: 'Set System Locale',
      systemTimezone: 'Set System Time Zone',
      dateFormat: 'Set Date Format',
      timeFormat: 'Set Time Format',
      passwordLifeTimeInDays: 'Password Life Time (In Days)',
      passwordReUseCutoffInDays: 'Password Re-Use Cut Off(In Days)',
      maxLoginAttempts: 'Max Login Attempts',
    },
  },
  caregiver: {
    patient: 'Patient',
    birthDate: 'Birth Date',
    medicalRecordNumber: 'Medical Record Number',
    relationToPatient: 'Relation To Patient',
    nonExistingCaregiver: 'Add a non-existing caregiver:',
    existingCaregiver: 'Search for existing caregiver',
    searchCaregiver: 'Search existing caregiver number or name',
    add: 'ADD',
    newCaregiver: 'New Caregiver',
  },
  rolesPermissions: {
    permissions: 'Permissions',
    roles: 'Roles',
  },
  emailTemplates:{
    createTemplate: 'Create Template',
    created: 'Email template created successfully!',
    updated: 'Email template updated successfully!',
    deleted: 'Email template deleted successfully!',
    unableToLoad: 'Unable to load email templates',
    name: 'Name',
    subject: 'Subject',
    status: 'Status',
    module: 'Module'
  }
};
