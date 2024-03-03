export type PropsType = {
  endTime?: string;
  descriptions?: string;
  isEditable: boolean;
  taskListId: number;
  taskId: number;
};

export type FromInputType = {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  modelValue: string;
};
