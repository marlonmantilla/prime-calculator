import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormBuilder

} from '@angular/forms';
import 'rxjs/Rx';


import { PrimeService } from '../../shared/services';

@Component({
  selector: 'my-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.scss']
})
export class PrimeComponent implements OnInit {

  public searchForm: FormGroup;
  public searchField: FormControl;
  public isClientSide: boolean = false;
  public results;

  constructor(
    private formBuilder: FormBuilder,
    private primeService: PrimeService
  ) {
    this.searchField = new FormControl();

    this.searchForm  = formBuilder.group({
      search: this.searchField,
      isClientSide: this.isClientSide
    });
  }

  public ngOnInit() {
    this.searchField.valueChanges
      .distinctUntilChanged()
      .debounceTime(400)
      .switchMap(term => this.primeService.calculate(+term, this.isClientSide) )
      .subscribe( result => {
        this.primeService.loading = false;
        this.results = result
      } );
  }

  public calculate() {
    this.primeService.calculate(+this.searchField.value, this.isClientSide)
    .subscribe( result => this.results = result );
  }

}
