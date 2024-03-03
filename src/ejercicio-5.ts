interface NotificationService {
    notify(message: string): void;
}
  
class EmailService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}
  
class ShortMessageService implements NotificationService {
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}
  
class Notifier {
  constructor(private notificationService: NotificationService) {
  }
  
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
  
  // Client code
  const emailNotifier = new Notifier(new EmailService());
  emailNotifier.sendNotification('Hello World!');
  
  const shortMessageNotifier = new Notifier(new ShortMessageService());
  shortMessageNotifier.sendNotification('Hello World!');