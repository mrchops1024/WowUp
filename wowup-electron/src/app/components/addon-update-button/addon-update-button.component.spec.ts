import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TranslateService } from "@ngx-translate/core";
import { MockAddonService } from "../../../../tests/app/services/addons/addon.service.mock";
import { MockTranslateService } from "../../../../tests/app/services/translate/translate.service.mock";
import { MockAnalyticsService } from "../../../../tests/app/services/analytics/analytics.service.mock";
import { AddonService } from "../../services/addons/addon.service";
import { AnalyticsService } from "../../services/analytics/analytics.service";
import { AddonUpdateButtonComponent } from "./addon-update-button.component";
import { MockProgressButtonComponent } from "../../../../tests/app/components/progress-button/progress-button.component.mock";

describe("AddonUpdateButtonComponent", () => {
  let component: AddonUpdateButtonComponent;
  let fixture: ComponentFixture<AddonUpdateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddonUpdateButtonComponent, MockProgressButtonComponent],
      providers: [
        { provide: AddonService, useClass: MockAddonService },
        { provide: AnalyticsService, useClass: MockAnalyticsService },
        { provide: TranslateService, useClass: MockTranslateService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonUpdateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
