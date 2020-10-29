import { Component, Input } from "@angular/core";

@Component({
  selector: "app-addon-provider-badge",
  template: "",
})
export class MockAddonProviderBadgeComponent {
  @Input() providerName: any;

  getProviderClass() {}
}
