import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastrarTalentoService } from 'src/app/cadastrar-talento.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  form:FormGroup;
  senhaConfirmada: boolean = true;

  constructor(
    private fb: FormBuilder,
    private cadastrarTalentoService: CadastrarTalentoService,
    private router: Router
  ){
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email:['', Validators.required],
      CPF:['', Validators.required],
      senha:['', Validators.required],
      confirmarSenha: ['', Validators.required]
    });
  }

  onSubmit(){
    if (this.form.valid) {
      if (this.form.value.senha === this.form.value.confirmarSenha) {
        const dadosCadastro = {
          nome: this.form.value.nome,
          cpf: this.form.value.cpf,
          email: this.form.value.email,
          senha: this.form.value.senha
        };
        this.cadastrarTalentoService.cadastrarTalento(dadosCadastro).subscribe(
          () => {
            alert('Cadastro realizado com sucesso!');
            this.router.navigate(['/home']);
          },
          error => {
            alert('Erro ao cadastrar talento!');
            console.log(error);
          }
        );
      } else {
        this.senhaConfirmada = false;
        alert('Senha e Confirmar Senha devem ser iguais!');
      }
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  }

};