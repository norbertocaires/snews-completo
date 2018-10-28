import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class NotificationService {

	public eventUpdateUserStorage = new Subject<any>();

	public onSuccess = new Subject<any>();
	public onError = new Subject<any>();
	public onInfo = new Subject<any>();
	public onWarning = new Subject<any>();
	
	emitUpdateUserStorage(showLogout: boolean): void {
		this.eventUpdateUserStorage.next(showLogout);
	}

	// success(message: string): void {
	// 	this.onSuccess.next({ message: message });
	// }

	// error(message: string): void {
	// 	this.onError.next({ message: message });
	// }

	// info(message: string): void {
	// 	this.onInfo.next({ message: message });
	// }

	// warning(message: string): void {
	// 	this.onWarning.next({ message: message });
	// }
}
