import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AeropuertoModelo } from '../modelos/aeropuerto.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {
  
  

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) { this.token = this.seguridadService.getToken();
  }

  url = "http://localhost:3000"
token: string = ''

//metodo de crear aeropuerto

store(aeropuerto: AeropuertoModelo): Observable<AeropuertoModelo> {
  return this.http.post<AeropuertoModelo>(`${this.url}/aeropuertos`, {
    nombre: aeropuerto.nombre,
    ciudad: aeropuerto.ciudad,
    pais: aeropuerto.pais,
    coord_x: aeropuerto.coord_x,
    coord_y: aeropuerto.coord_y,
    siglas: aeropuerto.siglas,
    tipo: aeropuerto.tipo
  });
}


// metodo listar aeropuertos

getAll(): Observable<AeropuertoModelo[]>{
  return this.http.get<AeropuertoModelo[]>(`${this.url}/aeropuertos`, {
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })
  })
}


// metodo actualizar aeropuertos 

update(aeropuerto: AeropuertoModelo): Observable<AeropuertoModelo> {
  return this.http.patch<AeropuertoModelo>(`${this.url}/aeropuertos/${aeropuerto.id}`, {
    nombre: aeropuerto.nombre,
    ciudad: aeropuerto.ciudad,
    pais: aeropuerto.pais,
    coord_x: aeropuerto.coord_x,
    coord_y: aeropuerto.coord_y,
    siglas: aeropuerto.siglas,
    tipo: aeropuerto.tipo
  }, {
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })
  });
}

//metodo para consultar aeropuerto 

getWithId(id: string): Observable<AeropuertoModelo>{
  return this.http.get<AeropuertoModelo>(`${this.url}/aeropuertos/${id}`,{
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })
  })
}

// metodo para borrar aeropuerto

delete(id: string): Observable<AeropuertoModelo[]>{
  return this.http.delete<AeropuertoModelo[]>(`${this.url}/aeropuertos/${id}`, {
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })
  })
}


}
