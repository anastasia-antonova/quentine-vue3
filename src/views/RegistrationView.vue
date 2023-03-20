<template lang="pug">
h2 Registration
pre {{ form.password }}
pre {{ form.email }}

form
  .form-group(v-show="step === 1")
    label name
    input
    span
  .form-group(:class="{ invalid: !form.email.valid }")
    label email
    input(v-model="form.email.value")
    span error
  .form-group
    label password
    input(type="password", v-model="form.password.value")
    span
button(@click="getData()") asfasfasf
</template>

<script lang="ts" setup>
// data: () => ({
//   nameData: '',
//   number1: '+996 705 188 955',
//   number2: '+453 705 188 955',
//   cardsArray: [] as CardItemInterface[]
// }),

import { ref } from "vue";
import { useForm } from "@/use/form";

const step = 1;
const number1 = ref("+996 705 188 955"); // {value: "+996 705 188 955"}
const number2 = "+453 705 188 955";
const cardsArray = ref([]); // {value: []}

const required = (val: string) => {
  return !!val;
};

const minLength = (num: number) => {
  return (val: string) => {
    return val.length >= num;
  };
};

const form = useForm({
  email: {
    value: "email.@mail.ru",
    validators: { required },
  },
  password: {
    value: "myPassword",
    validators: { required, minLength: minLength(8) },
  },
});

// methods: {
//   getData() {
//     this.cardsArray = [
//       {
//         img: 'img_1',
//         name:"Aаломон сет 1",
//         price: "1000",
//         gram: '1000',
//         peace: '8'
//       },
//       {
//         img: 'img_2',
//         name:"Филадельфия и лосось сет",
//         price: "1200",
//         gram: '2000',
//         peace: '12'
//       },
//       {
//         img: 'img_3',
//         name:"Самая большая Филадельфия",
//         price: "2000",
//         gram: '100',
//         peace: '16'
//       },
//       {
//         img: 'img_4',
//         name:"Dаломон сет 4",
//         price: "1559",
//         gram: '200',
//         peace: '16'
//       },
//       {
//         img: 'img_3',
//         name:"Eаломон сет 5",
//         price: "1519",
//         gram: '120',
//         peace: '15'
//       },
//       {
//         img: 'img_5',
//         name:"Iаломон сет 6",
//         price: "1465",
//         gram: '458',
//         peace: '43'
//       },
//       {
//         img: 'img_7',
//         name:"Dаломон сет 7",
//         price: "1539",
//         gram: '456',
//         peace: '3'
//       },
//       {
//         img: 'img_8',
//         name:"Саломон сет 8",
//         price: "1443",
//         gram: '120',
//         peace: '9'
//       },
//       {
//         img: 'img_9',
//         name:"Саломон сет 9",
//         price: "143",
//         gram: '120',
//         peace: '5'
//       },
//     ];
//   }
// }

const getData = () => {
  console.log("getData");
  cardsArray.value = [
    {
      img: "img_1",
      name: "Aаломон сет 1",
      price: "1000",
      gram: "1000",
      peace: "8",
    },
    {
      img: "img_2",
      name: "Филадельфия и лосось сет",
      price: "1200",
      gram: "2000",
      peace: "12",
    },
    {
      img: "img_3",
      name: "Самая большая Филадельфия",
      price: "2000",
      gram: "100",
      peace: "16",
    },
    {
      img: "img_4",
      name: "Dаломон сет 4",
      price: "1559",
      gram: "200",
      peace: "16",
    },
    {
      img: "img_3",
      name: "Eаломон сет 5",
      price: "1519",
      gram: "120",
      peace: "15",
    },
    {
      img: "img_5",
      name: "Iаломон сет 6",
      price: "1465",
      gram: "458",
      peace: "43",
    },
    {
      img: "img_7",
      name: "Dаломон сет 7",
      price: "1539",
      gram: "456",
      peace: "3",
    },
    {
      img: "img_8",
      name: "Саломон сет 8",
      price: "1443",
      gram: "120",
      peace: "9",
    },
    {
      img: "img_9",
      name: "Саломон сет 9",
      price: "143",
      gram: "120",
      peace: "5",
    },
  ];
  number1.value += "test";
};
</script>

<style scoped lang="scss">
.invalid {
  border-color: red;
}
</style>
