class Serie {
    id: string;
    title: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    cover: string;
    constructor(id, title, channel, seasons, description, link, cover) {
        this.id = id;
        this.title = title;
        this.channel = channel; 
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.cover = cover;
    }
  }