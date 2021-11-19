import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit{
  @Input('nome') nomeComponente = 'Tabela de Produtos';
  produtos: Produto[] = [];
  nomePesquisado = "";

 constructor(private produtoService: ProdutoService) { 
   this.produtos = this.produtoService.getProdutos();
 }

 ngOnInit(): void {
 }


 //Não estava renderizando -> Ver filtro-pesquisa.pipe
 deletar(id: number){
  this.produtoService.deletarProduto(id);
 }

}

