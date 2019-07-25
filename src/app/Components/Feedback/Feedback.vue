<template>
    <div class="feedback">
        <div class="feedback__content">

            <form class="form">
                <h3>Написать письмо директору</h3>
                <div class="form__content">
                    <div class="form__inputs">
                        <div class="form__group">
                            <input type="text" placeholder="Ваше имя*" required>
                        </div>
                        <div class="form__group">
                            <input type="email" placeholder="Ваш email*" required>
                        </div>
                        <div class="form__group">
                            <input type="text" placeholder="Ваш номер телефона">
                        </div>
                    </div>
                    <div class="form__textarea">
                        <textarea placeholder="Ваше сообщение*" required></textarea>
                    </div>
                </div>
                <div class="form__submit">
                    <input type="submit" value="Отправить письмо">
                </div>
            </form>
            <img src="/src/images/feedback-man.png" alt="Написать письмо директору">
        </div>
    </div>
</template>

<script>
export default ({
    name: 'Feedback'
});
</script>