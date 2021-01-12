const app = Vue.createApp({
  data() {
    return {
      name: "lorem",
      age: 20,
    };
  },
  methods: {
    ageInFive() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.floor(Math.random() * 100);
    },
  },
});

app.mount("#app");
