# ngx-tawk

## Installation
`npm install ngx-tawk` or `yarn install ngx-tawk`

## Usage
An Angular component to integrate Tawk. Built for Angular 5.

### Module
```
import { NgxTawkModule } from 'ngx-tawk';

@NgModule({
  imports: [
    NgxTawkModule
  ]
})
export class AppModule { }
```

### Component
```
<ngx-tawk [id]="tawkId"></ngx-tawk>
```

The `id` parameter is for the string value identifying your account with Tawk. It is a hexadecimal string, 22 characters long, found in the code Tawk suggests you embed during the setup process.