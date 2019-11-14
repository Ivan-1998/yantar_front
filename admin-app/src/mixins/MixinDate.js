export default {
  data() {
    return {
      dateNumericOptions: {day: 'numeric', month: 'numeric', year: 'numeric'},
    };
  },
  methods: {
    setNumericDate(value) {
      if (value) {
        const date = new Date(value);
        return date.toLocaleString('ru-RU', this.dateNumericOptions);
      } 
      return '__.__.____';
    }
  }
};