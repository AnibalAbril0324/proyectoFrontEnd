import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

/*export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}*/

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: Usuario[]=[];

  displayedColumns: string[] = ['Usuario', 'Nombre', 'Apellido', 'Sexo','Acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private usuarioservice: UsuarioService,private snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  
  cargarUsuarios(){
    this.listUsuarios=this.usuarioservice.getUsuarios();
    this.dataSource=new MatTableDataSource(this.listUsuarios)

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter= filterValue.trim().toLowerCase();
  }

  eliminarUsuraio(index : number){
    console.log(index)
    this.usuarioservice.eliminarUsuario(index);
    this.cargarUsuarios();

    this.snackBar.open("El usuario se elimino con exito",'',{
      duration:5000,
      horizontalPosition:'center',
    verticalPosition:'bottom'
  })
  }
}
