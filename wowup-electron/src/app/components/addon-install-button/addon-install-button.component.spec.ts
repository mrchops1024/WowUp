import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { MockProgressButtonComponent } from '../../../../tests/app/components/progress-button/progress-button.component.mock';
import { MockAddonService } from '../../../../tests/app/services/addons/addon.service.mock';
import { MockSessionService } from '../../../../tests/app/services/session/session.service.mock';
import { MockTranslateService } from '../../../../tests/app/services/translate/translate.service.mock';
import { AddonService } from '../../services/addons/addon.service';
import { SessionService } from '../../services/session/session.service';
import { AddonInstallButtonComponent } from './addon-install-button.component';

describe('AddonInstallButtonComponent', () => {
  let component: AddonInstallButtonComponent;
  let fixture: ComponentFixture<AddonInstallButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddonInstallButtonComponent,
        MockProgressButtonComponent,
      ],
      providers: [
        { provide: AddonService, useClass: MockAddonService },
        { provide: SessionService, useClass: MockSessionService },
        { provide: TranslateService, useClass: MockTranslateService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonInstallButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
