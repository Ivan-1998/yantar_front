import ImgHeader from '../assets/images/consumers-header.png';
import ImgMaslo from '../assets/images/consumers-maslo.png';
import ImgSeeds from '../assets/images/consumers-seeds.png';
import ImgHalva from '../assets/images/consumers-halva.png';

export default {
  data() {
    return {
      title: 'Потребители знакомы с нашими первоклассными продуктами с 1999 года!',
      subtitle: 'Мы предлагаем только качественные продукты, произведенные из отборных семян подсолнечника',
      img: ImgHeader,
      items: [
        { 
          titleMain: 'Нерафинированное масло прямого отжима - ',
          title: 'лучший выбор для домашнего стола. С 1999 года мы радуем своих потребителей качественным подсолнечным маслом, произведенным в солнечном Казахстане',
          class: 'item-right',
          img: ImgMaslo,
          advantages: [
            'Полезные вещества. При производстве подсолнечного масла мы сохраняем все важные  компоненты: фосфатиды, растительные жиры, минеральные вещества и др.',
            'Первый сорт. Наше подсолнечное масло - это высококачественный товар собственного производства. Оно соответствует всем стандартам и требованиям.',
            'Прекрасный ингредиент. Вы смело можете использовать в своих рецептах наш натуральный продукт.'
          ]
        },
        {
          titleMain: 'Семечки, обладающие полезными свойствами и веществами.',
          title: '',
          class: 'item-left',
          img: ImgSeeds,
          advantages: [
            'Мы жарим семечки воздухом. В воздух ничего невозможно добавить, таким образом на выходе чистый и здоровый продукт.',
            'Современные технологии. В процессе производства мы используем самые современные технологии, что позволяет нам быть конкурентоспособными на рынке и радовать наших потребителей.',
            'Отборное сырье. Для производства мы используем только отборное сырье кондитерских сортов, благодаря этому, семечки обладают крупной и красивой формой и имеют аппетитный запах',
            'Контроль качества. Прежде чем семечки попадают в упаковку, они проходят полный контроль на всех этапах производства. От лабораторно физико-химического анализа до финальной шлифовки.'
          ]
        },
        {
          titleMain: 'Десерт, изготавливаемый из сахара и орехов или семян. ',
          title: 'Наша халва - это лучшее лакомство для Вашего стола. Это именно тот продукт, который одновременно и полезный и вкусный.',
          class: 'item-right',
          img: ImgHalva,
          advantages: [
            'Натуральный продукт. В производстве мы не применяем никаких эмульгаторов, красителей и прочей химии и активно поддерживаем эту позицию',
            'Ценим традиции. Мы не отступаем от традиционных способов производства халвы и чтим традиции самого популярного восточного десерта.',
            'Вкусное лакомство. Наша халва - это очень полезный и вкусный продукт, который могут употреблять в пищу как взрослые, так и дети.'
          ]
        }
      ]
    };
  }
};