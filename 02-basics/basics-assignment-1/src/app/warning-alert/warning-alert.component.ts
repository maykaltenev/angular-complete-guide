import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>This is a warning, you are amazing!</p> `,
  styles: [
    `
      p {
        padding: 20px;
        background-color: mistyrose;
        border: 1px red solid;
      }
    `,
  ],
})
export class WarningAlertComponent {}
