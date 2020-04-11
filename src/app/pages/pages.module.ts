import { NgModule } from '@angular/core';

import { PageComponent } from '../pages/components/page.component';
import { Page1Component } from '../pages/pages/page1/page1.component';
import { Page2Component } from '../pages/pages/page2/page2.component';
import { Page3Component } from '../pages/pages/page3/page3.component';

@NgModule({
  declarations: [PageComponent, Page1Component, Page2Component, Page3Component],
  exports: [PageComponent, Page1Component, Page2Component, Page3Component],
})
export class PagesModule {}
