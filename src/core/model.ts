export class Material{
    idmaterial: number;
    nome:String;
    fksetor: Setor;
    quantidade:number;
    tombo:string;
    validade:Date;
    fkcategoria: Categoria;
    fkmaterialtipo: MaterialTipo;

    constructor(){
        this.fksetor = new Setor();
        this.fkmaterialtipo = new MaterialTipo();
        this.fkcategoria= new Categoria();
    }
}

export class Categoria{
    idcategoria:number;
    descricao:string;
}

export class Setor{
    idsetor:number;
    descricao:string;
}

export class MaterialTipo{
    idmaterialtipo:number;
    tipo:string;
}

export class MaterialStatus{
    idmaterialstatus:number;
    status:string;
}
