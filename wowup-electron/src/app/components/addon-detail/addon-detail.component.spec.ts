import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TranslateService } from "@ngx-translate/core";
import { AddonService } from "../../services/addons/addon.service";
import { AddonDetailComponent } from "./addon-detail.component";

import { MockAddonService } from "../../../../tests/app/services/addons/addon.service.mock";
import { MockTranslatePipe } from "../../../../tests/app/pipes/translate.pipe.mock";
import { MockAddonProviderBadgeComponent } from "../../../../tests/app/components/addon-provider-badge/addon-provider-badge.component.mock";

describe("AddonDetailComponent", () => {
  let component: AddonDetailComponent;
  let fixture: ComponentFixture<AddonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddonDetailComponent,
        MockTranslatePipe,
        MockAddonProviderBadgeComponent,
      ],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: AddonService, useClass: MockAddonService },
        { provide: TranslateService, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
