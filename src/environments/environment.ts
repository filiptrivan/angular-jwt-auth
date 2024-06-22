import { HttpHeaders } from "@angular/common/http";

export const environment = {
    production: false,
    apiUrl: 'https://localhost:44368/api',
    httpOptions: {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    },
  };