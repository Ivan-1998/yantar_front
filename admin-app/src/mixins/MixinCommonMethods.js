export default {
  methods: {
    /**
     * @desc Отображение уведомления
     * @param {Object} data - объект с данными
     * @param {String} data.title - заголовок сообщения
     * @param {String} data.text - текст сообщения
     * @param {String} data.status - статус сообщения, enum: [success, error]
     * @param {String} data.position - позиция отображения сообщения 
     * @param {Number} data.timer - время (мс) отображения уведомления
     */
    async showToast(data) {
      const { title, text, status, position, timer } = data;

      const accessStatuses = {
        success: 'Успешно',
        error: 'Ошибка'
      };

      await this.$swal({
        toast: true,
        title: title || `${accessStatuses[status]}!`,
        text: `${text}.`,
        timer: timer || 5000,
        position: position || 'top-right',
        showConfirmButton: false,
        customClass: `swal2-toast swal2-toast-${status}`
      });
      
      this.$store.commit('setToastInfo', {});
    },
    $_errorCatchHandler(err) {
      this.showToast({
        status: 'error',
        text: err.data.error
      });
    },
    /**
     * @desc Загрузка изображения на сервер
     * @param {File} file
     */
    async uploadImage(file) {
      let formData = new FormData();
      formData.append('file', file);

      let name = this.$http.post('images', formData)
        .then(response => response.data.name)
        .catch(err => this.$_errorCatchHandler(err))

      return name;
    },
    removeImage(name) {
      return this.$http.delete(`images/${name}`)
        .then(response => response)
        .catch(err => this.$_errorCatchHandler(err))  
    }
  }
};