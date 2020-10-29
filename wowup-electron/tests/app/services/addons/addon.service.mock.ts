import { Subject } from "rxjs";

export class MockAddonService {
  public readonly addonInstalled$ = new Subject<void>().asObservable();
  public readonly addonRemoved$ = new Subject<void>().asObservable();

  public saveAddon() {}
  public async search() {}
  public async installPotentialAddon() {}
  public async processAutoUpdates() {}
  public canUpdateAddon() {}
  public getAutoUpdateEnabledAddons() {}
  public installAddon() {}
  public async logDebugData() {}
  public getAddonById() {}
  public async getAddonByUrl() {}
  public getAddon() {}
  public getFullInstallPath() {}
  public async removeAddon() {}
  public async getAddons() {}
  public getFeaturedAddons() {}
  public isInstalled() {}
}
