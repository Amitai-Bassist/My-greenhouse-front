import { Component } from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications';

export class UserNotification extends Component {
    componentDidMount(){
        NotificationManager.info('Info message','Welcome back Old McDonald!',600)
        NotificationManager.success('Success message', 'Database A is updating!',1150);
        NotificationManager.success('Success message', 'Database B is synchronized!',1600);
    }
    
    createNotification = (type) => {
        return () => {
          switch (type) {
            case 'info':
              NotificationManager.info('Info message');
              break;
            case 'success':
              NotificationManager.success('Success message', 'Title here');
              break;
            case 'warning':
              NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
              break;
            case 'error':
              NotificationManager.error('Error message', 'Click me!', 5000, () => {
                alert('callback');
              });
              break;
          }
        };
      };
    
      render() {
        return (
          <div>
            <NotificationContainer/>
          </div>
        );
      }
}
