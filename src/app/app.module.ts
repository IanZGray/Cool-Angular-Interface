import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgIconsModule } from '@ng-icons/core';
import { heroUsers, heroPlus, heroSquaresPlus, heroMagnifyingGlassPlus, heroChartBar, heroMap, heroXCircle,  } from '@ng-icons/heroicons/outline';
import { heroCurrencyDollarSolid, heroEnvelopeSolid, heroGlobeAltSolid, heroChatBubbleLeftRightSolid, heroClockSolid } from '@ng-icons/heroicons/solid';
import { jamBatteryThreeQuartersF } from '@ng-icons/jam-icons';
import { ionColorPalette, ionImage, ionCalculatorSharp } from '@ng-icons/ionicons';
import { IconComponent } from './icon/icons.component';
import { BenchComponent } from './bench/bench.component';
import { calcComponent } from './calc/calc.component';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    BenchComponent,
    calcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ heroUsers, heroCurrencyDollarSolid, heroEnvelopeSolid, heroGlobeAltSolid, heroPlus, heroChatBubbleLeftRightSolid, heroClockSolid, heroSquaresPlus, heroMagnifyingGlassPlus,jamBatteryThreeQuartersF, heroChartBar, ionColorPalette, ionImage, heroMap, heroXCircle, ionCalculatorSharp, }),
  ],
  providers: [],
  bootstrap: [AppComponent, IconComponent, BenchComponent, calcComponent ]
})
export class AppModule { }
