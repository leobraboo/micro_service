import { SendNotification } from './send-notification';

describe('send notification', () => {
  it('deve ser possivel enviar a notificação', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'isso é uma notificação',
      category: 'social',
      recipientId: 'exemplo-de-id',
    });

    expect(notification).toBeTruthy();
  });
});
