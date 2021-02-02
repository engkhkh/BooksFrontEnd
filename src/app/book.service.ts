import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url:string="https://localhost:44382/api/books"

  books:Book[]  ;
  book:Book;

  constructor(public http:HttpClient) {}
    getallbooks()
    {

      this.http.get(this.url).toPromise().then(res=>{
        this.books=res as Book[];
      }
      )
    }
    postbook(){
      return this.http.post(this.url,this.book);
    

    }
    putbook(){
      return this.http.put(this.url+"/"+this.book.id,this.book);
    

    }
    deletebook(id){
      return this.http.delete(this.url+"/"+id);
    

    }
   }

