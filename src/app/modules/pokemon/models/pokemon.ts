export class Pokemon {

    id: number;
    name: string;
    hp: number;
    cp: number;
    picture: string;
    types: Array<string>;
    created: Date;

    static readonly BASE_URL: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

    constructor(
      name: string = '',
      hp: number = 0,
      cp: number = 0,
      types: Array<string> = ['Normal'],
      picture: string = 'xxx.png'
    ) {
        this.created = new Date();
        this.name = name;
        this.types = types;
        this.hp = hp;
        this.cp = cp;
        this.picture = Pokemon.BASE_URL + picture;
    }

}
