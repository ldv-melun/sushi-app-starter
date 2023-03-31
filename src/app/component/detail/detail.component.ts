import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerSushiBoxService } from 'src/app/service/manager-sushi-box.service';
import { IBox } from 'src/model/IBox';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  
  
  boxSushi : IBox | undefined;
  
  constructor(private activatedroute:ActivatedRoute, 
              private managerSushiBoxservice: ManagerSushiBoxService){

  }
 
  ngOnInit(): void {
    let id = this.activatedroute.snapshot.paramMap.get("id")
    let idBox = id ? Number(id) : 0  // force conversion number
    console.log('idBox : ' + idBox)

    // on demande de nouveau toutes les boxe (pas très optimisé...) puis on ne retient que la boxe sélectionnée 
    this.managerSushiBoxservice.getSushiBoxes().subscribe(
      {
      next:(boxes: IBox[]) => {
        this.boxSushi = boxes.find( b => b.id == idBox)
        console.log(this.boxSushi)
      }, 
      error:er => console.log(er)
    })
  }

}
