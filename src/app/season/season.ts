export class Season {

    id: number;
    name: string;
    episodes: number;

    constructor(
        id: number,
        name: string,
        episodes: number
    )
{
        this.id = id;
        this.name = name;
        this.episodes = episodes;
    }   
}
