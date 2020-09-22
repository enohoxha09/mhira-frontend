import { Component, OnInit, OnChanges } from '@angular/core';
import { Patient } from '../home.interfaces';
import { table } from '../patients/patients.table';
import { PatientsService } from '@app/pages/home/@services/patients.service';
import { patientForms } from '@app/pages/home/@forms/patient-forms';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { environment } from '@env/environment';

const CryptoJS = require('crypto-js');

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit, OnChanges {
  isLoading = false;
  isVisible = false;
  isOkLoading = false;
  patients: any[] = [];
  patientsTable: { columns: any[]; rows: Patient[] } = {
    columns: table.columns,
    rows: [],
  };
  actions = table.actions;
  patientForms = patientForms;
  currentPatientIndex: number;

  constructor(private patientsService: PatientsService, private router: Router) {}

  ngOnInit(): void {
    this.getPatients();
  }

  ngOnChanges() {}

  getPatients() {
    this.isLoading = true;
    this.patients = [];
    const _patients: any[] = [];
    this.patientsService.getPatients().subscribe(
      async ({ data }) => {
        const patientsData = data['getPatients'];
        patientsData.edges.map((patient: any) => {
          const row = Object.assign({}, patient.node);

          const color = row.active
            ? 'ng-trigger ng-trigger-fadeMotion ant-tag-green ant-tag'
            : 'ng-trigger ng-trigger-fadeMotion ant-tag-red ant-tag';
          const active = row.active ? 'active' : 'inactive';
          row.updatedAt = row.updatedAt ? moment(row.updatedAt).format('DD-MM-YYYY HH:mm') : '';
          row.birthDate = row.birthDate ? moment(row.birthDate).format('DD-MM-YYYY HH:mm') : '';
          row.active = `<nz-tag class="${color}">${active}</nz-tag>`;
          _patients.push(row);
          this.patients.push(patient.node);
        });

        this.patientsTable.rows = _patients;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  deletePatient() {
    this.isOkLoading = true;
    const patient = this.patients[this.currentPatientIndex];
    this.patientsService.deletePatient(patient).subscribe(
      async ({ data }) => {
        const deletedIndex = this.patients.findIndex((_patient) => _patient.id === patient.id);
        this.patients.splice(deletedIndex, 1);
        this.patientsTable.rows = this.patients;
        this.isVisible = false;
        this.isOkLoading = false;
      },
      (error) => {
        this.isVisible = false;
        this.isOkLoading = false;
      }
    );
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleCreatePatient(): void {
    this.router.navigate(['/mhira/home/profile']);
  }

  handleActionClick(event: any): void {
    console.log(this.patients[event.index]);
    switch (event.action.name) {
      case 'Delete Patient':
        this.isVisible = true;
        this.currentPatientIndex = event.index;
        break;
      case 'Edit Patient':
        const dataString = CryptoJS.AES.encrypt(
          JSON.stringify(this.patients[event.index]),
          environment.secretKey
        ).toString();
        this.router.navigate(['/mhira/home/profile'], {
          queryParams: { profile: dataString },
        });
    }
  }
}
