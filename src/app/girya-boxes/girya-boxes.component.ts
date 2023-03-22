import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
	selector: 'app-girya-boxes',
	templateUrl: './girya-boxes.component.html',
	styleUrls: ['./girya-boxes.component.scss']
})
export class GiryaBoxesComponent implements OnInit {
	public g: GiryaBox[] = [];

	constructor() { }

	ngOnInit(): void {
	}

	addFirst() {
		if(this.g.length !== 0) return;

		this.putBox(String.fromCharCode(97+(Math.floor(Math.random()*100)%26)));
		console.log(this.g);

	}

	add(id: string) {
		this.putBox(String.fromCharCode(97+(Math.floor(Math.random()*100)%26)), id);
	}

	putBox(val: string, id: string = null) {
		const newBox = {val: val, id: id ?? uuidv4()}
		if(id === null) {
			this.g.push(newBox);
		}
		else {
			const ind = this.g.findIndex(g => g?.id === id);
			this.g.splice(ind, 0, newBox);
		}
	}

}

export interface GiryaBox {
	val: string,
	id: string
}
