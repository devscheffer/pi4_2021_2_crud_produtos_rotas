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
  produto: Produto = new Produto();
  id!: number;
  botaoAcao = "Cadastrar";

  constructor(private produtoService: ProdutoService,
            private route: ActivatedRoute,
            private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if(this.id) {
      this.botaoAcao = "Editar";
    }

  }

  cadastrar() {
    if(!this.id){ 
      this.produtoService.addProduto(this.produto);
      this.produto = new Produto();
    }
  
  }

  cancelar() {
    this.router.navigate(['/tabela']);
  }

}
