import { controller, httpGet } from "inversify-express-utils";

@controller('/home')
export class HomeController {

    @httpGet('/')
    async index() {
        return "Welcome to muffin serverless app.";
    }
}