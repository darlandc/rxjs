import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.sass']
})
export class AsyncComponent implements OnInit {

  name = 'Get schwifty!';
  apiUrl = 'https://www.techiediaries.com/api/data.json';

  constructor(private httpClient: HttpClient){}

  ngOnInit() {
    this.fetchData();
  }


  private async fetchData(){
    const data = await this.httpClient.get(this.apiUrl).toPromise();
    //console.log("Data: " + JSON.stringify(data));  
    console.log(data)
  }


}
