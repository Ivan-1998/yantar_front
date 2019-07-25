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
                            <img src="/src/images/question.png" alt="Ответим на любые ваши вопросы!">
                        </div>
                    </div>
                    <div class="form__inputs">
                        <div>
                            <input type="text" placeholder="Ваше имя" required>
                        </div>
                        <div>
                            <input type="email" placeholder="Ваш email" required>
                        </div>
                        <div>
                            <input type="text" placeholder="Ваш номер телефона">
                        </div>
                        <div class="textarea">
                            <textarea placeholder="Ваше сообщение" required></textarea>
                        </div>
                        <div class="form-group form-group-checkbox">
                            <label>Я согласен с <a href="#">условиями обработки персональных данных</a> 
                                <input type="checkbox" checked>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="submit">
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