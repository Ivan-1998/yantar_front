<template>
  <div class="feedback">
    <form class="feedback-form">
      <div class="feedback-left">
        <h2>Ответим на любые ваши вопросы!</h2>
        <img src="../../assets/images/feedback.svg" alt="Оставьте заявку!" />
      </div>
      <div class="feedback-right">
        <div class="form-group">
          <input type="email" placeholder="Электронный адрес" />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Имя" />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Номер телефона" />
        </div>
        <div class="form-group">
          <textarea placeholder="Сообщение"></textarea>
        </div>
        <div class="form-group form-group__checkbox">
          <label>
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <p>Я согласен с условиями <a href="#">политики конфиденциальности</a></p> 
        </div>
        <div class="form-group">
          <button type="submit">Отправить письмо</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default ({
  name: 'Feedback'
});
</script>