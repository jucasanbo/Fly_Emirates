import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../servicios/usuario.service';
import Swal from 'sweetalert2';
import { UsuarioModelo } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  listado: UsuarioModelo[] = []
  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.usuarioService.getAll().subscribe((data: UsuarioModelo[]) => {
      this.listado = data
      console.log(data)
    })
  }
 
  delete(id?: any){
    console.log(id)
    Swal.fire({
      title: '¿Esta seguro de eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.delete(id).subscribe((data: any) => {
          Swal.fire('¡Eliminado correctamente!', '', 'success')
          this.getAll();
        })
      }
    })
  }


}