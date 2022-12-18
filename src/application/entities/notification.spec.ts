import { Content } from './notification-content';
import { Notification } from './notification';

describe('Notification', () => {
  it('Deve ser possivel criar a notificacao', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'exemplo-id',
    });
    expect(notification).toBeTruthy();
  });
});
