import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url: string = 'http://localhost:3001/items';
  httpOptions= {
    headers:{
      'content-Type': 'application/json'
    }
  };
  items:Item[]= [
    
      {
        id:0,
        title:'manzana',
        price:10.5,
        quantify:4,
        completed:false,
      },
      {
        id:0,
        title:'pan',
        price:10.5,
        quantify:4,
        completed:true,
      },
      {
        id:0,
        title:'chamara',
        price:10.5,
        quantify:4,
        completed:false,
      }
    ];
  

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.url)
    
    //return this.items;
  }
  addItem(item:Item):Observable<Item>{
    return this.http.post<Item>(this.url, item, this.httpOptions)
    //this.items.unshift(item);

  }

  toggleItem(item:Item):Observable<Item>{
    return this.http.put<Item>(this.url +item.id, item, this.httpOptions)

  }
  deleteItem(item:Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id);
  }

}
