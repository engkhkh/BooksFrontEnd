import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  constructor(public service :BookService) { }

  ngOnInit(): void {
    this.service.book={
      id:0,
      title:null,
      author:null,
      numberOfPages:null,
      publishedAt:null
    }
  }

submit(){
  if(this.service.book.id==0)



  {
    this.service.postbook().subscribe( res=>{
      this.service.getallbooks()
      
        },err=>{
          console.log(err)
        }
        
      
        )
  }
  else{
    this.service.putbook().subscribe( res=>{
      this.service.getallbooks()
      
        },err=>{
          console.log(err)
        }
        
      
        )
  }
}
}
