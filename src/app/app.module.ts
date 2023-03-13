import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgIconsModule } from '@ng-icons/core';
import { heroUsers, heroPlus, heroSquaresPlus, heroMagnifyingGlassPlus, heroChartBar, heroMap, heroXCircle, heroClipboardDocumentList, } from '@ng-icons/heroicons/outline';
import { heroCurrencyDollarSolid, heroEnvelopeSolid, heroGlobeAltSolid, heroChatBubbleLeftRightSolid, heroClockSolid } from '@ng-icons/heroicons/solid';
import { jamBatteryThreeQuartersF } from '@ng-icons/jam-icons';
import { ionColorPalette, ionImage, ionCalculatorSharp } from '@ng-icons/ionicons';
import { CalcComponent } from './calc/calc.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { BrowserComponent } from './browser/browser.component';
import { BankComponent } from './bank/bank.component';
import { BgImageComponent } from './bgImage/bgImage.component';
import { ClockComponent } from './clock/clock.component';
import { MapsComponent } from './maps/maps.component';
import { TextingComponent } from './texting/texting.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    TodoComponent,
    BrowserComponent,
    BankComponent,
    BgImageComponent,
    ClockComponent,
    MapsComponent,
    TextingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIconsModule.withIcons({ heroUsers, heroCurrencyDollarSolid, heroEnvelopeSolid, heroGlobeAltSolid, heroPlus, heroChatBubbleLeftRightSolid, heroClockSolid, heroSquaresPlus, heroMagnifyingGlassPlus,jamBatteryThreeQuartersF, heroChartBar, ionColorPalette, ionImage, heroMap, heroXCircle, ionCalculatorSharp, heroClipboardDocumentList, }),
  ],
  providers: [],
  bootstrap: [AppComponent, CalcComponent, TodoComponent, BrowserComponent, BankComponent, BgImageComponent, ClockComponent, MapsComponent, TextingComponent ]
})
export class AppModule { }
