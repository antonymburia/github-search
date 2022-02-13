export class UserData {
  avatar_url: string;
  name:string;
  followers: number;
  following: number;
  bio: string;
  company: string;
  location: string;
  created_at: Date;
  logged_at:any;
  email:any;
  login:any;

  constructor(avatar_url: any, name: string, company: any, location: any, followers: any, following: any, logged_at: Date, email: string, bio: any, login: any, created_at: Date,) {
    this.avatar_url = avatar_url;
    this.name = name;
    this.company = company;
    this.followers = followers;
    this.following = following;
    this.bio = bio;
    this.logged_at = logged_at;
    this.email = email;
    this.company = company;
    this.location = location;
    this.created_at = created_at;
    this.login = login;
  }
}
