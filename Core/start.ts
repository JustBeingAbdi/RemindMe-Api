import { Api } from "./../Api"
export class Core {
    public async init(): Promise<any> {
        this.start();

    }
    private async start(): Promise<any> {
        new Api().init();


    }
 }