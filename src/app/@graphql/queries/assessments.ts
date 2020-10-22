import gql from 'graphql-tag';

const assessments = gql`
  query($paging: CursorPaging, $filter: AssessmentFilter, $sorting: [AssessmentSort!]) {
    assessments(paging: $paging, filter: $filter, sorting: $sorting) {
      edges {
        cursor
        node {
          id
          date
          name
          patientId
          clinicianId
          informantId
          status
          createdAt
          updatedAt
          deletedAt
          informant {
            id
            username
            active
            firstName
            middleName
            lastName
            email
            phone
            workID
            address
            gender
            birthDate
            nationality
            createdAt
            updatedAt
          }
          clinician {
            id
            username
            active
            firstName
            middleName
            lastName
            email
            phone
            workID
            address
            gender
            birthDate
            nationality
            createdAt
            updatedAt
          }
          patient {
            id
            active
            medicalRecordNo
            firstName
            middleName
            lastName
            phone
            email
            address
            gender
            birthDate
            birthCountryCode
            nationality
            createdAt
            updatedAt
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

const questionnaires = gql`
  query($paging: CursorPaging, $filter: AssessmentFilter, $sorting: [AssessmentSort!]) {
    questionnaires(paging: $paging, filter: $filter, sorting: $sorting) {
      edges {
        cursor
        node {
          id
          name
          version
          abbreviation
          language
          timeToComplete
          description
          copyright
          license
          website
          references
          icd10
          createdAt
          updatedAt
          deletedAt
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
const c = `questionnaires {
            id
            name
            version
            abbreviation
            language
            timeToComplete
            description
            copyright
            license
            website
            references
            icd10
            createdAt
            updatedAt
          }`;

export const AssessmentsQueries = {
  assessments,
  questionnaires,
};
