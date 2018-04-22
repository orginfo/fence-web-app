import { ApiProject } from './apiproject';

export const API_PROJECTS: ApiProject[] = [
  {
    id: 1,
    nr: '001',
    contract_date: '2018-04-01T00:00:00Z',
    install_date: '2018-04-21T00:00:00Z',
    address: 'адрес клиента 1',
    comment: 'комментарий 1',
    user: {
      id: 1,
      login: 'логин 1',
      name: 'пользователь 1',
      phone: 'телефон пользователя 1',
      position: 'позиция пользователя 1',
      comment: 'комментарий пользователя 1'
    },
    client: {
      id: 1,
      name: 'клиент 1',
      phone: 'телефон клиента 1',
      comment: "комментарий 1"
    }
  },
  {
    id: 2,
    nr: '002',
    contract_date: '2018-04-02T00:00:00Z',
    install_date: '2018-04-22T00:00:00Z',
    address: 'адрес клиента 2',
    comment: 'комментарий 2',
    user: {
      id: 1,
      login: 'логин 1',
      name: 'пользователь 1',
      phone: 'телефон пользователя 1',
      position: 'позиция пользователя 1',
      comment: 'комментарий пользователя 1'
    },
    client: {
      id: 2,
      name: 'клиент 2',
      phone: 'телефон клиента 2',
      comment: "комментарий 2"
    }
  },
  {
    id: 3,
    nr: '003',
    contract_date: '2018-04-03T00:00:00Z',
    install_date: '2018-04-23T00:00:00Z',
    address: 'адрес клиента 3',
    comment: 'комментарий 3',
    user: {
      id: 2,
      login: 'логин 2',
      name: 'пользователь 2',
      phone: 'телефон пользователя 2',
      position: 'позиция пользователя 2',
      comment: 'комментарий пользователя 2'
    },
    client: {
      id: 3,
      name: 'клиент 3',
      phone: 'телефон клиента 3',
      comment: "комментарий 3"
    }
  },
];
