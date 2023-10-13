export default {
  core: {
    assessments: 'Testungen',
    profile: 'Profil',
    caseManagers: 'Case Manager',
    departments: 'Abteilungen',
    caregivers: 'Betreuer',
    reports: 'Berichte',
    previous: 'Vorherige',
    next: 'Nächste',
    reset: 'Zurücksetzen',
    search: 'Suchen',
    editCaregiver: 'Betreuer bearbeiten',
    createCaregiver: 'Betreuer erstellen',
    questionnaire: 'Fragebogen',
    scripts: 'Scripts',
  },
  dashboard: {
    welcome: 'Willkommen in MHIRA',
    name: 'MHIRA',
    header: 'Bitte wählen Sie einen Bericht aus:',
  },
  assessments: {
    myAssessment: 'Meine Testungen',
    archivedAssessments: 'Archivierte Testungen anzeigen',
    notArchivedAssessments: 'Nicht-archivierte Testungen anzeigen',
  },
  card: {
    changePassword: 'Passwort ändern',
    profile: 'Benutzerprofil',
    logout: 'Abmelden',
  },
  questionnaireSelection: {
    noResult: 'Keine Fragebögen gefunden',
    searchSelect: 'Fragebögen suchen',
    selectQuestionnaires: 'Fragebögen hinzufügen',
    selectedQuestionnaires: 'Ausgewählte Fragebögen',
  },
  assessmentMessages: {
    expiredText: 'Diese Testung ist nicht mehr verfügbar!',
    plannedText: 'Die Testung ist noch nicht verfügbar! Verfügbar ab:',
    completedText: 'Diese Testung ist abgeschlossen!',
  },
  menu: {
    dashboard: 'Dashboard',
    createAssessment: 'Neue Testung erstellen',
    caseManagement: 'Patientenverwaltung',
    patientList: 'Patientenliste',
    createPatient: 'Patient erstellen',
    caregiverList: 'Betreuer',
    questionnaires: 'Fragebögen',
    questionnairesList: 'Fragebögen',
    uploadQuestionnaire: 'Neuen Fragebogen erstellen',
    questionnairesVersionList: 'Alte Fragebogenversionen',
    assessments: 'Testungen',
    planAssessment: 'Testung erstellen',
    plannedAssessments: 'Bestehende Testungen',
    userManagement: 'Benutzerverwaltung',
    listUsers: 'Benutzerliste',
    newUser: 'Benutzer erstellen',
    administration: 'Administration',
    reports: 'Berichte',
    createReport: 'Bericht erstellen',
    permissionMatrix: 'Berechtigungs-Matrix',
    permissions: 'Berechtigungen',
    roles: 'Rollen',
    departments: 'Abteilungen',
    settings: 'Einstellungen',
    systemConfiguration: 'System-Einstellungen',
    patientStatuses: 'Patientenstatus',
    notFound: 'Nicht gefunden',
    noTabs: 'Keine Registerkarten',
    disclaimers: 'Mitteilungen',
    emailTemplates: 'Emails konfigurieren',
    version: 'Version',
  },
  patients: {
    myPatients: 'Meine Patienten',
    archivedPatients: 'Archivierte Patienten anzeigen',
    notArchivedPatients: 'Nicht-archivierte Patienten anzeigen',
  },
  tables: {
    assessmentAdministration: {
      assessmentType: 'Bezeichnung',
      lastUpdate: 'Letztes Änderung',
      status: 'Status',
    },
    disclaimer: {
      type: 'Art',
      textInformation: 'Text',
      lastUpdate: 'Letzte Änderung',
    },
    assessmentsPatients: {
      title: 'Bezeichnung',
      manager: 'Zuständiger Mitarbeiter',
      informant: 'Informant',
      questionnaires: 'Fragebögen',
      deliveryDate: 'Aktivierungsdatum',
      expirationDate: 'Ablaufdatum',
      updatedAt: 'Ausfülldatum',
      status: 'Status',
    },
    scripts: {
      name: 'Name',
      version: 'Version',
      creator: 'Erstellt von',
      reports: 'Berichte',
      repositoryLink: 'Repository',
    },
    reports: {
      name: 'Name',
      resources: 'Art des Berichts',
      roles: 'Rollen mit Zugang zum Bericht',
      status: 'Status',
      repositoryLink: 'Repository',
      createdAt: 'Erstellungsdatum',
    },
    patients: {
      firstName: 'Vorname',
      middleName: 'Zweitname',
      lastName: 'Nachname',
      medicalRecordNo: 'ID',
      gender: 'Geschlecht',
      birthDate: 'Geburtsdatum',
      status: 'Status',
      informants: 'Informanten',
      caseManager: 'Fallführende Person',
      createdAt: 'Erstellungsdatum',
    },
    contact: {
      firstName: 'Vorname',
      middleName: 'Zweitname',
      lastName: 'Nachname',
      email: 'E-Mail',
      phone: 'Telefon',
      relation: 'Beziehung zum Patienten',
      emergency: 'Notfallkontakt',
      note: 'Anmerkungen',
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
      createdAt: 'Erstellungsdatum',
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
      name: 'Abteilung',
      description: 'Beschreibung',
      formattedStatus: 'Status',
      createdAt: 'Erstellungsdatum',
      departmentName: 'Abteilungsname',
      status: 'Status',
    },
  },
  forms: {
    assessmentAdministration: {
      nameType: 'Bezeichnung',
      status: 'Status',
    },
    patientStatuses: {
      name: 'Patientenstatus',
      description: 'Beschreibung',
    },
    scripts: {
      name: 'Name',
      version: 'Ausführung',
      creator: 'Erstellt von',
      reports: 'Berichte',
      excelFile: 'Script-Datei (.csv, .txt, ...)',
      repositoryLink: 'Repository',
    },
    createReportForm: {
      reportName: 'Berichtsname',
      description: 'Beschreibung',
      resources: 'Ressourcen',
      url: 'URL des Berichts',
      appName: 'App Name',
      repositoryLink: 'Repository-Link',
      reportStatus: 'Berichtsstatus',
      anonymus: 'Anonym',
      roles: 'Rollen',
    },
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
      patientInformation: 'Profil',
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
      addressApartment: 'Wohnungsnummer',
      addressPlace: 'Ort',
      addressPostalCode: 'Postleitzahl',
      addressCountryCode: 'Land',
      patientContact: 'Kontaktdaten',
      email: 'E-Mail Adresse',
      phone: 'Telefon',
      phone2: 'Telefon (alternativ)',
      relation: 'Beziehung zum Patienten',
      number: 'Nummer',
      apartment: 'Wohnung',
      place: 'Platz',
      postalCode: 'Postleitzahl',
      country: 'Land',
      emergency: 'Notfallkontakt',
      note: 'Anmerkungen',
      addCaregiver: 'Betreuer Hinzufügen',
    },
  },
  assessmentForm: {
    license: 'Lizenz: {{license}}',
    questionsAnswered: '{{actual}}/{{total}} beantwortet',
    optionalAnswered: '+{{actual}} optional',
    fillingTime: 'Dauer: {{time}}min',
    completeAssessment: 'Testung abschliessen und Daten übermitteln',
    alreadyCompleted: 'Testung wurde abgeschlossen',
    overview: 'Fragebogen abschliessen und zurück zur Übersicht',
    next: 'Weiter',
    prev: 'Zurück',
    complete: 'Danke für die Teilnahme an der Untersuchung.',
  },
  questionnaires: {
    questionnairesId: 'Versions-ID',
    id: 'ID',
    name: 'Name',
    formattedStatus: 'Status',
    language: 'Sprache',
    abbreviation: 'Abkürzung',
    keywords: 'Suchwörter',
    timeToComplete: 'Bearbeitungszeit',
    copyright: 'Urheberrechte ©',
    website: 'Website',
    license: 'Lizenz',
    createdAt: 'Erstellungsdatum',
    discardedTitle: 'Sind Sie sicher, dass Sie diesen Fragebogen entfernen möchten?',
    discardedMessage: `<p>Bitte beachten Sie die folgenden Konsequenzen:</p>
    <ol>
      <li><b>Neue Testungen</b>: Der entfernte Fragebogen steht für zukünftige Testungen nicht mehr zur Verfügung.</li>
      <li><b>Datenzugriff</b>: Daten, die mit dem nun entfernten Fragebogen erhoben wurden, bleiben weiterhin zugänglich.</li>
      <li><b>Berichtsanpassungen</b>: Berichte, die den entfernten Fragebogen beinhalten, können nach wie vor angepasst werden.</li>
      <li><b>Archiv-Bereich</b>: Der entfernte Fragebogen wird in den Bereich "Alte Fragebogenversionen" verschoben, wo er weiterhin bearbeitet werden kann.</li>
      <li><b>Ersatzmöglichkeit</b>: Nach dem Entfernen haben Sie die Möglichkeit, einen neuen Fragebogen mit der gleichen Abkürzung und in derselben Sprache zu erstellen.</li>
    </ol>`,
    continueButton: 'Fortfahren',
    cancelButton: 'Abbrechen',
  },
  questionnairesForm: {
    name: 'Name',
    excelFile: 'Excel-Datei',
    status: 'Status',
    language: 'Sprache',
    copyright: 'Urheberrechte ©',
    timeToComplete: 'Bearbeitungszeit (Minuten)',
    website: 'Website',
    license: 'Lizenz',
    keywords: 'Suchwörter',
  },
  plannedAssessments: {
    name: 'Name',
    formattedStatus: 'Status',
    patientMedicalRecordNo: 'Patienten ID',
    formattedPatient: 'Patient',
    submissionDate: 'Ausfülldatum',
    emailStatus: 'Email Status',
    clinicianWorkId: 'Mitarbeiter ID',
    formattedClinician: 'Kliniker',
    informant: 'Informant',
    createdAt: 'Erstellungsdatum',
    deliveryDate: 'Aktivierungsdatum',
    updatedAt: 'Letzte Änderung',
    expirationDate: 'Ablaufdatum',
  },
  planAssessment: {
    assessmentName: 'Bezeichnung der Testung',
    patient: 'Wählen Sie den Patienten aus, zu dem diese Bewertung gehört',
    clinician: 'Kliniker',
    informant: 'Informant',
  },
  createAssessment: {
    title: 'Titel',
    assessmentManager: 'Verantwortlicher Mitarbeiter',
    patient: 'Patient',
    departmentsUser: `Mitarbeiter`,
    patientsCaregiver: `Betreuer des Patienten`,
    deliveryDate: 'Aktivierungsdatum',
    expirationDate: 'Ablaufdatum',
    notes: 'Anmerkungen für Mitarbeiter',
  },
  form: {
    system: {
      systemLocale: 'Systemgebietsschema festlegen',
      systemTimezone: 'Systemzeitzone einstellen',
      dateFormat: 'Datumsformat einstellen',
      timeFormat: 'Zeitformat einstellen',
      passwordLifeTimeInDays: 'Passwortverfallszeit (in Tagen)',
      passwordReUseCutoffInDays: 'Passwort-Wiederverwendung verbieten während (Tage)',
      maxLoginAttempts: 'Maximale Anzahl falscher Anmeldeversuche (Konto wird gesperrt)',
    },
  },
  caregiver: {
    patient: 'Patient',
    birthDate: 'Geburtsdatum',
    medicalRecordNumber: 'Krankenaktennummer',
    relationToPatient: 'Beziehung zum Patienten',
    nonExistingCaregiver: 'Fügen Sie einen noch nicht registrierten Betreuer hinzu:',
    existingCaregiver: 'Suche nach bestehendem Betreuer',
    searchCaregiver: 'Suchen Sie nach der Nummer oder dem Namen einer bereits registrierten Betreuers',
    add: 'HINZUFÜGEN',
    newCaregiver: 'Neuer Betreuer ',
  },
  rolesPermissions: {
    permissions: 'Berechtigungen',
    roles: 'Rollen',
  },
  emailTemplates: {
    createTemplate: 'Email-Vorlage erstellen',
    created: 'Email-Vorlage wurde erstellt',
    updated: 'Email-Vorlage wurde aktualisiert',
    deleted: 'Email-Vorlage wurde gelöscht',
    unableToLoad: 'Email-Vorlage kann nicht geladen werden',
    name: 'Bezeichnung',
    body: 'Email-Vorlage Text',
    subject: 'Email-Vorlage Betreff',
    status: 'Status',
    module: 'Art der Email-Vorlage',
  },
  emailStatusFilter: {
    expired: 'Abgelaufen',
    planned: 'Geplant',
    pending: 'Ausstehend',
    openForCompletion: 'Bereit zum Ausfüllen',
    partiallyCompleted: 'Teilweise abgeschlossen',
    completed: 'Abgeschlossen',
  },
  modal: {
    continue: 'Zur nächsten Sektion gehen?',
    continueOverview: 'Fragebogen beenden?',
    unansweredQuestions:
      'Sie haben {{count}} unbeantwortete Pflichtfragen. Alle Pflichtfragen müssen beantwortet werden, um den Fragebogen abschliessen zu können.',
    unansweredQuestionsOverview:
      'Sie haben {{count}} unbeantwortete Pflichtfragen. Alle Pflichtfragen müssen beantwortet werden, um den Fragebogen abschliessen zu können.',
    cancel: 'Fortfahren ohne Vervollständigung (Nicht empfohlen)',
    ok: 'Zurück und Pflichtfragen beantworten',
  },
};
