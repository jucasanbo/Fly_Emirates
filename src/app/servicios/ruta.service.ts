import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RutaModelo } from '../modelos/ruta.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class RutaService {
  
  

  constructor(private http: HttpClient,
    private SeguridadService: SeguridadService) { this.token = this.SeguridadService.getToken();
  }

  url = "http://localhost:3000"
token: string = ''

//metodo de crear ruta

store(ruta: RutaModelo): Observable<RutaModelo> {
  return this.http.post<RutaModelo>(`${this.url}/ruta`, {
    origen: ruta.origen,
    destino: ruta.destino,
    tiempo_estimado: ruta.tiempo_estimado
    
  });
}


// metodo listar rutas

getAll(): Observable<RutaModelo[]>{
  return this.http.get<RutaModelo[]>(`${this.url}/rutas`, {
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })
  })
}


// metodo actualizar rutas

update(ruta: RutaModelo): Observable<RutaModelo> {
  return this.http.patch<RutaModelo>(`${this.url}/rutas/${ruta.id}`, {
    origen: ruta.origen,
    destino: ruta.destino,
    tiempo_estimado: ruta.tiempo_estimado
  }, {
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })
  });
}

//metodo para consultar ruta 

getWithId(id: string): Observable<RutaModelo>{
  return this.http.get<RutaModelo>(`${this.url}/rutas/${id}`,{
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })
  })
}

// metodo para borrar rutas

delete(id: string): Observable<RutaModelo[]>{
  return this.http.delete<RutaModelo[]>(`${this.url}/rutas/${id}`, {
    headers: new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    })
  })
}


}
