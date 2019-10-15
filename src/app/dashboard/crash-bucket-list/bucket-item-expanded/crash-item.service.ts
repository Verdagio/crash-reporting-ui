import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { CrashItem } from './crash-item.model';



@Injectable({
  providedIn: 'root'
})
export class CrashItemService {
  text: string = `Exception Type:        EXC_CRASH (SIGABRT)\n
  Exception Codes:       0x0000000000000000, 0x0000000000000000\n\n
  Application Specific Information:\n
  abort() called\n\n
  Thread 0 Crashed:: Dispatch queue: com.apple.main-thread\n
  0   libsystem_kernel.dylib        	0x9769169a __pthread_kill + 10\n
  1   libsystem_pthread.dylib       	0x9836bf19 pthread_kill + 101\n
  2   libsystem_c.dylib             	0x9bde5eee abort + 156\n
  3   libglib-2.0.0.dylib           	0x02b5dd8a g_assertion_message + 346\n
  4   libglib-2.0.0.dylib           	0x02b5e470 g_assertion_message_expr + 96\n
  5   libgncmod-gnome-utils.dylib   	0x0029ec4a gnc_main_window_init + 2650\n
  6   libgobject-2.0.0.dylib        	0x02ae7496 g_type_create_instance + 470\n
  7   libgobject-2.0.0.dylib        	0x02ad51a2 g_object_new_internal + 562\n
  8   libgobject-2.0.0.dylib        	0x02ad5a90 g_object_newv + 480\n
  9   libgobject-2.0.0.dylib        	0x02ad5b7d g_object_new + 61\n
  10  libgncmod-gnome-utils.dylib   	0x002a03d7 gnc_main_window_new + 39\n
  11  libgncmod-gnome-utils.dylib   	0x0029a6f5 gnc_gui_init + 581\n
  12  Gnucash-bin                   	0x00011387 main + 1143\n
  13  Gnucash-bin                   	0x00010ed6 start + 54\n\n`;
  crashItemSelected = new EventEmitter<CrashItem>();
  crashItemsChanged = new Subject<CrashItem[]>();
  private crashItems: CrashItem[] = [
    new CrashItem('A1', this.text, 'my-app', 'osx', new Date(new Date().getTime())),
    new CrashItem('A44', this.text, 'my-app', 'windows', new Date(new Date().getTime())),
    new CrashItem('A87', this.text, 'my-app', 'linux', new Date(new Date().getTime())),
    new CrashItem('A5', this.text, 'my-app', 'osx', new Date(new Date().getTime())),
    new CrashItem('B4', this.text, 'my-app', 'osx', new Date(new Date().getTime())),
    new CrashItem('C22', this.text, 'my-app', 'osx', new Date(new Date().getTime())),
  ];
  constructor() { }

  getCrashItems(){
    return this.crashItems.slice();
  }

  getCrashItem(index: number){
    return this.crashItems[index];
  }


  removeCrashItem(crashItem: CrashItem){
    let index = this.crashItems.indexOf(crashItem)
    this.crashItems.splice(index, 1);
    this.crashItemsChanged.next(this.crashItems.slice());
  }

}
