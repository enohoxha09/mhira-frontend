export default {
  dashboard: {
    welcome: 'Willkommen in MHIRA',
    name: 'MHIRA',
  },
  menu: {
    dashboard: 'Dashboard',
    caseManagement: 'Patienten',
    patientList: 'Patientenliste',
    createPatient: 'Patient erstellen',
    caregiverList: 'Liste der Betreuer',
    questionnaires: 'Fragebögen',
    questionnairesList: 'Fragebogenliste',
    uploadQuestionnaire: 'Fragebogen hochladen',
    assessments: 'Einschätzungen',
    planAssessment: 'Einschätzung planen',
    plannedAssessments: 'Geplante Einschätzungen',
    userManagement: 'Benutzer',
    listUsers: 'Benutzerliste',
    newUser: 'Benutzer erstellen',
    administration: 'Administration',
    reports: 'Berichte',
    permissionMatrix: 'Berechtigungs-Matrix',
    permissions: 'Berechtigungen',
    roles: 'Rollen',
    departments: 'Abteilungen',
    settings: 'Einstellungen',
    systemConfiguration: 'System-Einstellungen',
    patientStatuses: 'Patientenstatus',
    notFound: 'Nicht gefunden',
    noTabs: 'Keine Registerkarten',
  },
  tables: {
    patients: {
      firstName: 'Vorname',
      middleName: 'Zweitname',
      lastName: 'Nachname',
      medicalRecordNo: 'Patienten ID',
      gender: 'Geschlecht',
      birthDate: 'Geburtsdatum',
      status: 'Status',
      informants: 'Informanten',
      caseManager: 'Case Manager',
      createdAt: 'Erstellt am',
    },
    contact: {
      firstName: 'Vorname',
      middleName: 'Zweitname',
      lastName: 'Nachname',
      email: 'E-Mail',
      phone: 'Telefon',
      relation: 'Beziehung',
      emergency: 'Notfall',
      note: 'Notiz',
      patients: 'Patient',
    },
    casemanagers: {
      firstName: 'Vorname',
      middleName: 'Zweitnamen',
      lastName: 'Nachname',
      workID: 'Mitarbeiter ID',
      phone: 'Telefon',
      username: 'Benutzername',
    },
    departments: {
      name: 'Name',
      description: 'Beschreibung',
      createdAt: 'Erstellt am',
    },
    users: {
      firstName: 'Vorname',
      middleName: 'Zweitnamen',
      lastName: 'Nachname',
      workID: 'Mitarbeiter ID',
      phone: 'Telefon',
      username: 'Benutzername',
      formattedStatus: 'Status',
      formattedRoles: 'Rollen',
      formattedDepartments: 'Abteilungen',
    },
    department: {
      name: 'Abteilungsname',
      description: 'Beschreibung',
      formattedStatus: 'Status',
      createdAt: 'Erstellt am',
    },
  },
  forms: {
    changePassword: {
      newPassword: 'Neues Passwort eingeben',
      newPasswordConfirmation: 'Passwort wiederholen',
    },
    changeUserPassword: {
      currentPassword: 'Aktuelles Passwort eingeben',
      newPassword: 'Neues Passwort eingeben',
      newPasswordConfirmation: 'Passwort wiederholen',
    },
    userProfile: {
      username: 'Benutzername',
      workID: 'Mitarbeiter ID',
      email: 'E-Mail',
      firstName: 'Vorname',
      middleName: 'Zweitnamen',
      lastName: 'Nachname',
      phone: 'Telefon',
      password: 'Passwort',
      passwordConfirmation: 'Passwort wiederholen',
    },
    userProfileEdit: {
      username: 'Benutzername',
      workID: 'Mitarbeiter ID',
      email: 'E-Mail',
      firstName: 'Vorname',
      middleName: 'Zweitname',
      lastName: 'Nachname',
      phone: 'Telefon',
    },
    userRolesPermissions: {
      roleId: 'Rolle',
    },
    patients: {
      patientInformation: 'Patienten Informationen',
      firstName: 'Vorname',
      middleName: 'Zweitnamen',
      lastName: 'Nachname',
      id: 'Patienten ID',
      birthDate: 'Geburtsdatum',
      gender: 'Geschlecht',
      department: 'Abteilung',
      patientAddress: 'Adresse',
      street: 'Strasse',
      addressNumber: 'Hausnummer',
      addressApartment: 'Apartment',
      addressPlace: 'Ort',
      addressPostalCode: 'Postleitzahl',
      addressCountryCode: 'Land',
      patientContact: 'Kontaktdaten',
      email: 'E-Mail Adresse',
      phone: 'Telefon',
      phone2: 'Telefon (alternativ)',
      relation: 'Beziehung zum Patienten',
      number: 'Number',
      apartment: 'Wohnung',
      place: 'Platz',
      postalCode: 'Postleitzahl',
      country: 'Land',
      emergency: 'Notfallkontakt',
      note: 'Hinweis',
      addCaregiver: 'Betreuer Hinzufügen',
    },
  },
  assessmentForm: {
    license: 'Lizenz: {{license}}',
    questionsAnswered: '{{actual}}/{{total}} beantwortet',
    optionalAnswered: '+{{actual}} optional',
    fillingTime: 'Dauer: {{time}}min',
    completeAssessment: 'Einschätzung abschliessen',
    alreadyCompleted: 'Einschätzung ist abgeschlossen',
    overview: 'Übersicht',
    next: 'Weiter',
    prev: 'Zurück',
    complete: 'Danke für das Ausfüllen der Einschätzung. Die Seite kann jetzt geschlossen werden.',
  },
  questionnaires: {
    name: 'Name',
    formattedStatus: 'Status',
    language: 'Sprache',
    abbreviation: 'Abkürzung',
    keywords: 'Schlüsselwörter',
    timeToComplete: 'Zeit zum Abschluss',
    copyright: 'Urheberrechte ©',
    website: 'Webseite',
    license: 'Lizenz',
    createdAt: 'Erstellt am',
  },
  questionnairesForm: {
    name: 'Name',
    excelFile: 'Excel-Datei',
    status: 'Status',
    language: 'Sprache',
    copyright: 'Urheberrechte ©',
    timeToComplete: 'Zeit bis zum Abschluss (Minuten)',
    website: 'Webseite',
    license: 'Lizenz',
    keywords: 'Schlüsselwörter',
  },
  plannedAssessments: {
    name: 'Name',
    formattedStatus: 'Status',
    patientMedicalRecordNo: 'Patienten ID',
    formattedPatient: 'Patient',
    clinicianWorkId: 'Mitarbeiter ID',
    formattedClinician: 'Kliniker',
    informant: 'Informant',
    createdAt: 'Hergestellt am',
  },
  planAssessment: {
    assessmentName: 'Name der Einschätzung',
    patient: 'Patient',
    clinician: 'Kliniker',
    informant: 'Informant',
  },
  form: {
    system: {
      systemLocale: 'Systemgebietsschema festlegen',
      systemTimezone: 'Systemzeitzone einstellen',
      dateFormat: 'Datumsformat einstellen',
      timeFormat: 'Zeitformat einstellen',
      passwordLifeTimeInDays: 'Passwortlebensdauer (in Tagen)',
      passwordReUseCutoffInDays: 'Passwort-Wiederverwendung verbieten während (Tage)',
      maxLoginAttempts: 'Maximale Anmeldeversuche',
    },
  },
};
