import { Content } from './notification-content';

describe('Notification content', () => {
  it('Deve ser possivel criar o conteudo da notificacao', () => {
    const content = new Content('Voce recebeu uma notificacao');
    expect(content).toBeTruthy();
  });

  it('Não Deve ser possivel criar o conteudo da notificacao , possui poucos caracteres', () => {
    expect(() => new Content('tres')).toThrow();
  });

  it('Não Deve ser possivel criar o conteudo da notificacao , possui muitos caracteres', () => {
    expect(() => new Content('x'.repeat(301))).toThrow();
  });
});
