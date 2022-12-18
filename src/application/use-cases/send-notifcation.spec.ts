import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notificationsRepository = {
  async create(notification: Notification) {
    console.log(notification);
  },
};

describe('send notification', () => {
  it('deve ser possivel enviar a notificação', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'isso é uma notificação',
      category: 'social',
      recipientId: 'exemplo-de-id',
    });

    expect(notification).toBeTruthy();
  });
});
