export class Character {
    constructor(
        public name: string,
        public birth_year?: string,
        public homeworld?: string,
        public gender?: string,
        public height?: string,
        public films?: string[],
        public species?: string[],
        public starships?: string[],
        public vehicles?: string[],
    ) { }
}

