import { Context, u128, PersistentVector } from 'near-sdk-as';

@nearBindgen
export class Note {

    private content: string;
    constructor(public text: string) {
        this.content = text;
    }

    delete(): void {
        this.content = "";
    }

    edit(note: string, append: bool = false): string {
        if (append)
            this.content.concat(note);
        else
            this.content = note;

        return this.content;
    }

    get(): string {
        return this.content;
    }
}

@nearBindgen
export class Vector<T> extends PersistentVector<T>{
    get_all(): Array<T> {
        const result = new Array<T>();
        for (let i = 0; i < this.length; i++) {
            const entry = this[i];
            result.push(entry);
        }
        return result;
    }
}