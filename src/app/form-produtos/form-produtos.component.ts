import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  produto: Produto = new Produto();;
  id!: number;
  botaoAcao = "Cadastrar";
  mensagem = "";

  constructor(private produtoService: ProdutoService,
            private route: ActivatedRoute,
            private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.mensagem = "";
    if(this.id) {
      this.botaoAcao = "Editar";
      this.produto = Object.assign({}, 
          this.produtoService.buscarPorId(this.id));
    }    
  }  

  salvar() {
    if(!this.id){ 
      this.produtoService.addProduto(this.produto);
      this.mensagem = this.produto.nome + 
        " cadastrado com sucesso!";
      this.produto = new Produto();
    }
    else {
      this.produtoService.editarProduto(this.id, this.produto);
      this.mensagem = this.produto.nome + 
      " editado com sucesso!";
    }
  
  }

  cancelar() {
    this.router.navigate(['/tabela']);
  }

}
