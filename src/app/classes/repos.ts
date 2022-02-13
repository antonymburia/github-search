export class Repos {
    description: string;
    name: any;
    watchers: number;
    forks: any;
    default_branch: string;
    login: string;
    html_url:string


    constructor(description: string, name: string, owner: any, watchers: number, forks: number, default_branch: string, html_url: string, login: string) {
        this.description = description;
        this.name = name;
        this.watchers = watchers;
        this.forks = forks;
        this.default_branch = default_branch;
        this.login = login;
        this.html_url =html_url;
    }
}
