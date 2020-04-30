import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['./aviso-legal.component.scss']
})
export class AvisoLegalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AvisoLegalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/dashboard/solicitud-matricula']);
  }

}
