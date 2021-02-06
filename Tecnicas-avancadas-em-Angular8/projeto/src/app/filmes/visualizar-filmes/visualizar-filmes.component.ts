import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { Alerta } from 'src/app/shared/models/alerta';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-visualizar-filmes',
  templateUrl: './visualizar-filmes.component.html',
  styleUrls: ['./visualizar-filmes.component.scss']
})
export class VisualizarFilmesComponent implements OnInit {
  readonly semFoto = 'https://lh3.googleusercontent.com/proxy/LnWWC3FzIigGb4PAI7jKesfl7px0BH5NolsSisXaLYQ9sJOEMFPYfBb-4l6IqSSaJHU0Ayxf5dBfcNbSFiCwTP_uXoL4WhrSZF_bJj1-4nQ_yD9bFf-XHZ6kiTIbB9OoXuQOhBscl8TG_NdyPbIIy_4-t4-B-8FoQ74o1wj1T-DK2Cj-KgWd'
  filme: Filme;
  id: number;
  constructor(public dialog: MatDialog,
              private activateRoute : ActivatedRoute,
              private router: Router,
              private filmesService : FilmesService) { }

  ngOnInit() {
    this.id=this.activateRoute.snapshot.params['id'];
    this.visualizar();
  }
  editar():void{
    this.router.navigateByUrl('/filmes/cadastro/' + this.id);
  }
  excluir():void{     
        const config = {
          data:{
            titulo: 'Você tem certeza que deseja excluir o filme?',
            descricao: 'Caso você tenha certeza que deseja excluir o filme, clique no botao OK',
            corBtnCancelar: 'primary',
            corBtnSucesso: 'warn',
            possuirBtnFechar: true
          } as Alerta
        };
        const dialogRef = this.dialog.open(AlertaComponent, config);
        dialogRef.afterClosed().subscribe((opcao: boolean) => {
          if(opcao){
            this.filmesService.excluir(this.id)
            .subscribe(() => this.router.navigateByUrl('/filmes'));
          }
        });
  }
  private visualizar():void{
    this.filmesService.visualizar(this.id).subscribe((filme: Filme)=>{
      this.filme = filme;
    })
  }
}
