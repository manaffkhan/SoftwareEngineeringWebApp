export class Data{
	public data: string;
	public nums: Number[]
	
	constructor(){
        this.data = undefined;
	}
	
	getnums(){
		var temp = this.data.split(',').map(function(item){
			return parseInt(item, 10);});
		this.nums = temp;
		return temp;
		}
	getmean(){
		this.getnums();
		var sum = 0;
		for(let i of this.nums){
			sum = sum + i.valueOf();
		}
		return sum/this.nums.length

	}
}
