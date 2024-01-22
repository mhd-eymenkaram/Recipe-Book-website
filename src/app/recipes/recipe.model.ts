export class Recipe{
    public name:string;
    public desicription:string;
    public imgPath:string;

    constructor(name: string, description: string, imPath: string){
        this.name = name;
        this.desicription = description;
        this.imgPath = imPath;
    }

}