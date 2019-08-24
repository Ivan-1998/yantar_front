import ImgHeader from '../assets/images/partners-header.png';
import ImgPosition from '../assets/images/partners-profitable-position.svg';
import ImgProduct from '../assets/images/partners-profitable-product.svg';
import ImgProduction from '../assets/images/partners-profitable-production.svg';
import ImgCooperation from '../assets/images/partners-profitable-cooperation.svg';
import ImgFlowers from '../assets/images/partners-terms-flowers.svg';
import ImgCollection from '../assets/images/partners-terms-collection.svg';
import ImgFoodProduction from '../assets/images/partners-terms-foodproduction.svg';
import ImgStore from '../assets/images/partners-terms-store.svg';

export default {
  data() {
    return {
      title: 'Приглашаем Вас к взаимовыгодному сотрудничеству!',
      subtitle: 'Мы всегда открыты для любых интересных предложений и вариантов продуктивного сотрудничества!', 
      img: ImgHeader,
      termsTitle: 'Этапы производства',
      profitableTitle: 'Почему работать с нами выгодно?',
      profitable: [
        {
          text: 'Уверенная позиция на рынке.',
          image: ImgPosition
        },
        {
          text: 'Продукт высокого качества.',
          image: ImgProduct
        },
        {
          text: 'Собственное производство.',
          image: ImgProduction
        },
        {
          text: 'Выгодные условия сотрудничества.',
          image: ImgCooperation
        }
      ],
      terms: [
        {
          text: 'Выращивание урожая на поле.',
          image: ImgFlowers
        },
        {
          text: 'Сбор и хранение сырья.',
          image: ImgCollection
        },
        {
          text: 'Производство продуктов и сырья',
          image: ImgFoodProduction
        },
        {
          text: 'Дистрибьюция готового продукта.',
          image: ImgStore
        }
      ]
    };
  }
};