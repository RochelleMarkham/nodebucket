/*======================================
; Title: task-create-dialog.ts
; Author: Professor Krasso
; Date: 12/14/20
; Modified By: Rochelle Markham
; Description: nodebucket-app
======================================*/

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-task-create-dialog',
  templateUrl: './task-create-dialog.component.html',
  styleUrls: ['./task-create-dialog.component.css']
})
export class TaskCreateDialogComponent implements OnInit {
  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<TaskCreateDialogComponent>, private fb: FormBuilder) { }

  //requires form validation
  ngOnInit() {
    this.form = this.fb.group({
      text: [null, Validators.compose([Validators.required])]
    });
  }

  //Save button for task creation
  submit() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
