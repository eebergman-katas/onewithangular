export class Film {
  constructor(
    public title: string,
    public episode_id: number,
    public opening_crawl: string,
    public director: string,
    public producer: string,
    public release_date: string,
    public species: string[],
    public starships: string[],
    public vehicles: string[],
    public characters: string[],
    public planets: string[],
  ) { }
}
