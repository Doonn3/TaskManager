import { defineStore } from 'pinia';
import { ref } from 'vue';

const NAME_SPACE = 'useSelectedTaskStore';

type EditDataType = {
  endTime: string;
  descriptions: string;
}

export const useSelectedTaskStore = defineStore(NAME_SPACE, () => {
  const selectTaskListID = ref<number>(0);
  const selectTaskID = ref<number>(0);

  const cardEditData = ref<EditDataType>({ endTime: '', descriptions: '' });

  return {
    selectTaskListID,
    selectTaskID,
    cardEditData
  };
});
