import { Pageable } from "./pageable.model";

export class Page<T> {
    content: Array<T>;
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    numberOfElements: number;
    size: number;
    number: number;
  
    public constructor() {
      this.pageable = new Pageable();
    }
  }