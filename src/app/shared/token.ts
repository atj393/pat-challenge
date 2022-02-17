import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class Token {

    token: string | undefined;
    tokenListener: BehaviorSubject<Date | null> = new BehaviorSubject<Date | null>(null);;

    setToken(token: string) {
        this.token = token;
        this.tokenListener.next(new Date());
    }

    getToken() {
        return this.token ? this.token : null;
    }

}
