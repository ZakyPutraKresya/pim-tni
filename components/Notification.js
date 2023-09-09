import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export const showSuccessNotification = (message) => {
  NotificationManager.success(message, 'Sukses', 3000);
};

export const showErrorNotification = (message) => {
  NotificationManager.error(message, 'Error', 3000);
};
