import { EmployeeModel } from '../models/employee.model';

export interface MappedTaskQueryModel {
  readonly name: string;
  readonly description: string;
  readonly startDate: number;
  readonly dueDate: number;
  readonly assigneeIds: string[];
  readonly assignees: EmployeeModel[];
  readonly checkList: CheckListModel[];
  readonly tasksProgress: number;
  readonly projectId: string;
  readonly id: string;
}

export interface CheckListModel {
  readonly id: string;
  readonly isDone: boolean;
  readonly name: string;
}
