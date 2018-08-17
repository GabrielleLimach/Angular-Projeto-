export class Material{
    idmaterial: number;
    nome: string;
    quantidade:number;
    tombo:string;
    validade:Date;
    fksetor: Setor;
    fkcategoria: Categoria;
    fkmaterialtipo: MaterialTipo;
    fkmaterialstatus: MaterialStatus

    constructor(){
        this.fksetor = new Setor();
        this.fkmaterialtipo = new MaterialTipo();
        this.fkcategoria = new Categoria();
        this.fkmaterialstatus = new MaterialStatus();
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

export class Funcionarios{
    idfuncionario: number;
    nome:string;
    login:string;
    senha:string;
    fkcargo: Cargo;
    fksetor:Setor;

    constructor(){
        this.fkcargo = new Cargo();
        this.fksetor = new Setor();
    }
}

export class Cargo {
    idcargo: number;
    decricao: string;
}

export class Historico{
    idhistorico: number;
    data:Date;
    descricao:string;
    fksolicitacao: Solicitacao;

    constructor(){
        this.fksolicitacao = new Solicitacao();
    }
}

export class Solicitacao{
    idsolicitacao:number;
    data:Date;
    justificativa:string;
    fkfuncinario: Funcionarios;
    fksolicitacaostatus: SolicitacaoStatus;

    constructor(){
        this.fksolicitacaostatus = new SolicitacaoStatus;
    }
}

export class SolicitacaoStatus{
    idsoliciacaostatus:number;
    status:string
}

export class SolicitacaoItem{
    idsolicitacaoitem: number;
    quantidade:number;
    fkmaterial: Material;
    fksolicitacao: Solicitacao

    constructor(){
        this.fkmaterial = new Material;
        this.fksolicitacao = new Solicitacao;

    }
}

export class PorTipo{
    id: number;
    material: Material;
    tipo: MaterialTipo;
    data:Date;
    qde: number;
    
    constructor(){
        this.tipo = new MaterialTipo;
        this.material = new Material;
    }
}

export class PorSetor{
    id: number;
    material:Material;
    categoria: Categoria;
    setor: Setor;
    data: Date;
    qtd: number;
 
    constructor(){
        this.material = new Material;
        this.categoria = new Categoria;
        this.setor = new Setor;
    }
}

export class PorCategoria{
    id: number;
    material: Material;
    tipo: MaterialTipo;
    categoria: Categoria;
    data: Date;
    qtd: number;

    constructor(){
        this.material = new Material;
        this.tipo = new MaterialTipo;
        this.categoria = new Categoria;
    }
}

export class Porfuncionario{
    id: number;
    material: Material;
    categoria: Categoria;
    funcionario: Funcionarios;
    data: Date;
    qtd: number;
    
    constructor(){
        this.material = new Material;
        this.funcionario = new Funcionarios;
        this.categoria = new Categoria;
    }
}