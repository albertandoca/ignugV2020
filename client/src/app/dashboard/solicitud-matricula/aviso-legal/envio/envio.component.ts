import { InformacionComponent } from './../informacion.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.scss']
})
export class EnvioComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InformacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean
  ) { }

  ngOnInit(): void {
  }
  opcion(op: number)
  {
      this.dialogRef.close(op)
  }

}
