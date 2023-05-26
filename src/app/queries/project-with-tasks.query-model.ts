import { CheckListItemModel } from '../models/check-list-item.model';
import { ProjectModel } from '../models/project.model';

export interface ProjectWithTasksQueryModel extends ProjectModel {
  tasks: CheckListItemModel[];
}
