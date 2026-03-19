import { routes } from '../../utils/core/routes';

export const NAV_LIST_WITHOUT_AUTH = [
  {
    title: 'Биржа',
    link: routes.burse,
  },
  {
    title: 'Ворки',
    link: routes.works,
  },
  {
    title: 'Конкурсы',
    link: routes.competitions,
  },
  {
    title: 'Создать ворк',
    link: routes.createWork,
  },
  {
    title: 'Создать заказ',
    link: routes.createOrder,
  },
] as const;

export const NAV_LIST_WITH_AUTH = [
  {
    title: 'Биржа',
    link: routes.burse,
  },
  {
    title: 'Ворки',
    link: routes.works,
  },
  {
    title: 'Конкурсы',
    link: routes.competitions,
  },
  {
    title: 'Создать заказ',
    link: routes.createOrder,
  },
] as const;
