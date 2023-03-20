import { reactive, ref, watch } from "vue";

const not = (val: any) => !val;

export const useField = (field: any) => {
  const valid: any = ref(true);
  const value: any = ref(field.value);
  const errors: any = reactive({});

  const reassign: any = (val: any) => {
    valid.value = true;
    Object.keys(field.validators ?? {}).map((name) => {
      const isValid = field.validators[name](val);
      errors[name] = !isValid;
      if (not(isValid)) {
        valid.value = false;
      }
    });
  };

  watch(value, reassign);

  reassign(field.value);

  return { value, valid, errors };
};
