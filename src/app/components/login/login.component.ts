import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form:FormGroup;
  loading = false;
  
  constructor(private fb:FormBuilder,
              private router:Router,
              private snackBar: MatSnackBar,){

    this.form=this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })
  }
  
  ingresar(){

    const usuario=this.form.value.usuario;
    const password=this.form.value.password;
    console.log(usuario);
    console.log(password);

    if(usuario=='anibal' && password=='admin'){
      this.fakeLoading();
    }else{
      this.error();
      this.form.reset();
    }
  }

  error(){
    this.snackBar.open("Usuario o Contraseña ingresados invalidos",'',{
      duration:5000,
      horizontalPosition:'center',
    verticalPosition:'bottom'
  })
  }

  fakeLoading(){
    this.loading=true;
    setTimeout(() => {
      //redireccionamos al dashboard
      this.loading=false;
      this.router.navigate(['dashboard'])
    },1500);
  }
}
