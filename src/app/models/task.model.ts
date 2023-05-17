import { EmployeeModel } from './employee.model';

export interface TaskModel {
  readonly name: string;
  readonly description: string;
  readonly startDate: number;
  readonly dueDate: number;
  readonly assigneeIds: EmployeeModel[];
  readonly checkList: string[];
  readonly projectId: string;
  readonly id: string;
}
