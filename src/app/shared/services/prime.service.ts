import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class PrimeService {
  public loading: boolean = false;

  constructor(
    private http: Http
  ){}

  public calculate(n: number, clientSide: boolean = true) {
    let numbers = [];
    this.loading = true;

    if (clientSide) {
      for (let i = 2; i < n; i++) {
        if (this.isPrime(i)) {
          numbers.push(i);
        }
      }
      setTimeout( () => this.loading = false, 200);
      return Observable.of(numbers);
    }else {
      return this.http.post('http://localhost:3000/prime/calculate', {number: n})
      .map((response) => {
        this.loading = false;
        return response.json(); 
      });
    }

  }

  private isPrime(n: number): boolean {
    for(let divisor = 2; divisor <= Math.sqrt(n); divisor++) {
      if(n % divisor === 0) return false;
    }
    return true;
  }
}
