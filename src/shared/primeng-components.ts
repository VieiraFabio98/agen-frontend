import { NgModule } from "@angular/core"
import { ButtonModule } from 'primeng/button'
import { Menu } from 'primeng/menu'
import { AvatarModule } from 'primeng/avatar'
import { BadgeModule } from 'primeng/badge'
import { RippleModule } from 'primeng/ripple'

@NgModule({
  imports:[
    ButtonModule,
    Menu,
    AvatarModule,
    BadgeModule,
    RippleModule
  ],
  exports: [
    ButtonModule,
    Menu,
    AvatarModule,
    BadgeModule,
    RippleModule
  ]
})
export class PrimeNgComponentsModule {}