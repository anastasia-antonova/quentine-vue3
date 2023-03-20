import { ref, reactive } from "vue";
import { useField } from "@/use/field";

export const useForm = (init: any) => {
  const form: any = reactive({});

  for (const [key, value] of Object.entries(init)) {
    form[key] = useField(value);
  }
  return form;
};
