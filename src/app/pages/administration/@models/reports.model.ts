import { FormattedReport, Reports } from '../@types/reports';
import * as moment from 'moment';

export class ReportsModel {
  public static fromJson(json: FormattedReport): Reports {
    const data = { ...json };

    data.formattedRoles = data.reportRoles.map((role) => ({ color: 'blue', title: role.role.name }));
    data.createdAt = moment(data.createdAt).format('DD-MM-YYYY');
    return data;
  }
}
