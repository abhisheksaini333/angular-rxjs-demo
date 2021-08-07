import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { from, of, interval, pipe } from 'rxjs';
import { map, find, take, filter, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];

  constructor(private _productsService: ProductsService) {
    this.products = _productsService.getProducts();
    this.ofFunctionDemo();
    this.fromFunctionDemo();
    this.intervalFunctionDemo();
    this.mapAndPipeExample();
    this.findAndPipeExample();
    this.takeAndPipeExample();
    this.filterAndPipeExample();
    this.throwCatchErrorExample();
  }

  ngOnInit(): void {
  }

  addNewProduct() {
    this._productsService.addProduct({ name: 'iPad', price: '$799' });
  }

  ofFunctionDemo() {
    console.log("===> of demo");
    const array = [2,3,56,78,1];
    of(array).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log('Error in of : ' + err);
      },
      () => {
        console.log("All the values processed for 'of' function");
      }
    )
  }


  fromFunctionDemo() {
    console.log("===> from demo");
    const array = [2,3,56,78,1];
    from(array).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log('Error in of : ' + err);
      },
      () => {
        console.log("All the values processed for 'from' function");
      }
    )
  }


  intervalFunctionDemo() {
    console.log("===> interval demo");
    const timer = interval(1000);
    timer.subscribe(
      (res) => {
        console.log(`Values coming at ${res} second`);
      },
      (err) => {
        console.log('Error in of : ' + err);
      },
      () => {
        console.log("All the values processed for 'timer' function");
      }
    )
  }

  mapAndPipeExample() {
    console.log("===> map and pipe demo");

    const source = from([1,2,3,4,5,6,7]);

    source
      .pipe(
        map(x => x * 10), 
        map(x => x / 2),
        map(x => x * 3)
      )
      .subscribe(
        (n) => {
          console.log(n);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log("map example complete")
        }
      )

  }

  findAndPipeExample() {
    console.log("===> find and pipe demo");

    const source = from([1,2,3,4,5,6,7]);

    source
      .pipe(
        map(x => x * 10), 
        map(x => x / 2),
        map(x => x * 3),
        find(x => x % 5 === 0)
      )
      .subscribe(
        (n) => {
          console.log(n);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log("find example complete")
        }
      )

  }

  takeAndPipeExample() {
    console.log("===> take and pipe demo");

    const timer = interval(1000);

    timer
      .pipe(
        take(7)
      )
      .subscribe(
        (n) => {
          console.log(`Value received at ${n} second`);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log("take example complete")
        }
      )

  }

  filterAndPipeExample() {
    console.log("===> filter and pipe demo");

    const source = from([1,2,3,4,5,6,7, 8, 9]);

    source
      .pipe(
        map(x => x * 10), 
        map(x => x / 2),
        map(x => x * 3),
        filter(x => x % 6 === 0)
      )
      .subscribe(
        (n) => {
          console.log(n);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log("filter example complete")
        }
      )

  }

  throwCatchErrorExample() {
    console.log("===> catchError and pipe demo");

    const source = from([1,2,3,4,5,6,7, 8, 9]);

    source
      .pipe(
        map(x => {
          if (x === 5) {
            throw "I am an Error !";
          }
        }),
        catchError(er => {
          return of([1,2,3,45,56])
        })
      )
      .subscribe(
        (n) => {
          console.log(n);
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log("catchError example complete")
        }
      )

  }
  

}
