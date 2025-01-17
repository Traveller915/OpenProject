import { Model, NonAttribute } from "sequelize";
import User from "./User";

type CommunityAttributes = {
  id: string;
  name: string;
  description: string;
  projects: Array<string>;
  subscribers: Array<string>;
  createdAt: Date;
  updatedAt: Date;
};
class Community extends Model<CommunityAttributes> {
  declare id: string;
  declare name: string;
  declare description: string;
  declare projects: Array<string>;
  declare subscribers: Array<string>;
  declare createdAt: Date;
  declare updatedAt: Date;

  get Description(): NonAttribute<string> {
    return this.description;
  }
  get Id(): NonAttribute<string> {
    return this.id;
  }
  get Name(): NonAttribute<string> {
    return this.name;
  }
  get Projects(): Array<string> {
    return this.projects;
  }
  get CreatedAt(): NonAttribute<Date> {
    return this.createdAt;
  }
  async getSubscribers() {
    return this.subscribers.map(s => User.findOne({ where: { id: s } }));
  }
}

export default Community;
