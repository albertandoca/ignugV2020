import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  identificacion: string;
  emailInstitucional: string;
}

@Component({
  selector: 'app-olvido-psw',
  templateUrl: './olvido-psw.component.html',
  styleUrls: ['./olvido-psw.component.scss']
})
export class OlvidoPswComponent implements OnInit {

  olvidoPswForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<OlvidoPswComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder
  ) { this.crearOlvidoPswForm(); }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearOlvidoPswForm() {
    this.olvidoPswForm = this.fb.group({
      identificacion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('^[a-zA-Z0-9]*$')]],
      emailInstitucional: ['', [Validators.required, Validators.pattern('^[a-z]*[0-9.]*([a-z])*(@yavirac.edu.ec)$')]]
    });
  }
}
