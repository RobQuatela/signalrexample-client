import { Component } from '@angular/core';
import { HubConnectionBuilder, HubConnection } from '@aspnet/signalr';
import { MatSnackBar } from '../../node_modules/@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  connection: HubConnection;
  serverEvents: string[] = [];

  constructor(private snackBar: MatSnackBar) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    this.connection = new HubConnectionBuilder().withUrl('http://localhost:5000/messagehub').build();
    this.connection.on('ServerEvent', (message: string) => {
      this.serverEvents.push(message);
      this.snackBar.openFromComponent(SnackBarComponent, {
        data: {
          message
        },
        duration: 1000
      });
    });

    this.connection.start().catch((err) => {
      console.error(err);
    });
  }
}
