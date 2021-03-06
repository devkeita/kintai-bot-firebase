import User from "../user";
import {inject, injectable} from "inversify";
import {TYPES} from "../DI/types";
import {App} from "@slack/bolt";
import UsersFactory from "../firestore/factory/usersFactory";

@injectable()
export default class UserFactory {
    constructor(
        @inject(TYPES.App) readonly app: App,
        @inject(TYPES.SlackToken) readonly slackToken: string,
        @inject(TYPES.UsersFactory) readonly usersFactory: UsersFactory
    ) {}

    async factory(userID: string) {
        const result = await this.app.client.users.info({
            token: this.slackToken,
            user: userID
        });
        // @ts-ignore
        const users = await this.usersFactory.factory(result.user.profile.email, userID, result.user.name);
        return new User(users);
    }
}
