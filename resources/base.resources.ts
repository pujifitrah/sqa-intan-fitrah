import { join } from 'path';

export class BaseResource {
    getPath() {
        return "";
    }

    getFile(fileName: string) {
        return join(__dirname, this.getPath() + "/" + fileName);
    }
}