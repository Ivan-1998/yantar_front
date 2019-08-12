<template>
  <div class="feedback">
    <div class="feedback__content flex-center">

      <form class="form">
        <div class="form__content">
          <div class="form__inner">
            <div class="form__title">
              <h3>Ответим на любые ваши вопросы!</h3>
              <div class="lines"></div>
            </div>
            <div class="form__image flex-center">
              <img src="../../assets/images/question.svg" alt="Ответим на любые ваши вопросы!">
            </div>
          </div>

          <div class="form__inputs">
            <div class="form-group">
              <input type="text" placeholder="Ваше имя" required>
            </div>
            <div class="form-group">
              <input type="email" placeholder="Ваш email" required>
            </div>
            <div class="form-group">
              <input type="text" placeholder="Ваш номер телефона">
            </div>
            <div class="form-group form-group__textarea">
              <textarea placeholder="Ваше сообщение" required></textarea>
            </div>
            <div class="form-group form-group__checkbox">
              <label>Я согласен с <a href="#">условиями обработки персональных данных</a> 
                <input type="checkbox" checked>
                <span class="checkmark"></span>
              </label>
            </div>
              <div class="form-group">
                <input type="submit" value="Отправить письмо">
              </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default ({
  name: 'Feedback'
});
</script>