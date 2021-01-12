const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      value: 1,
    };
  },
  methods: {
    addCounter() {
      this.counter = this.counter + this.value;
    },
    minusCounter() {
      this.counter = this.counter - this.value;
    },
    setName(e) {
      this.value = +e.target.value;
    },
  },
});

app.mount("#events");
