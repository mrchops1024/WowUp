import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "firebase/analytics";
import * as firebase from "firebase/app";
import { BehaviorSubject } from "rxjs";
import { v4 as uuidv4 } from "uuid";
import { AppConfig } from "../../../environments/environment";
import { ElectronService } from "../electron/electron.service";
import { PreferenceStorageService } from "../storage/preference-storage.service";

@Injectable({
  providedIn: "root",
})
export class AnalyticsService {
  private readonly analyticsUrl = "https://www.google-analytics.com";
  private readonly installIdPreferenceKey = "install_id";
  private readonly _installId: string;
  private readonly _appVersion: string;
  private readonly _telemetryEnabledSrc = new BehaviorSubject(false);

  public readonly telemetryPromptUsedKey = "telemetry_prompt_sent";
  public readonly telemetryEnabledKey = "telemetry_enabled";
  public readonly telemetryEnabled$ = this._telemetryEnabledSrc.asObservable();

  private get installId() {
    return this._installId;
  }

  public get shouldPromptTelemetry() {
    return (
      this._preferenceStorageService.get(this.telemetryEnabledKey) === undefined
    );
  }

  public get telemetryEnabled() {
    const preference = this._preferenceStorageService.findByKey(
      this.telemetryEnabledKey
    );
    return preference === true.toString();
  }

  public set telemetryEnabled(value: boolean) {
    this._preferenceStorageService.set(this.telemetryEnabledKey, value);
    this._telemetryEnabledSrc.next(value);
  }

  constructor(
    private _electronService: ElectronService,
    private _httpClient: HttpClient,
    private _preferenceStorageService: PreferenceStorageService
  ) {
    this._appVersion = _electronService.remote.app.getVersion();
    this._installId = this.loadInstallId();
    this._telemetryEnabledSrc.next(this.telemetryEnabled);
    console.log("installId", this._installId);
  }

  public async trackStartup() {
    await this.track((params) => {
      params.set("t", "pageview");
      params.set("dp", "app/startup");
    });
  }

  public async trackUserAction(
    category: string,
    action: string,
    label: string = null
  ) {
    await this.track((params) => {
      params.set("t", "event");
      params.set("ec", category);
      params.set("ea", action);
      params.set("el", label);
    });
  }

  private async track(action: (params: HttpParams) => void = undefined) {
    if (!this.telemetryEnabled) {
      return;
    }

    var url = `${this.analyticsUrl}/collect`;

    try {
      let params = new URLSearchParams();
      params.set("v", "1");
      params.set("tid", AppConfig.googleAnalyticsId);
      params.set("cid", this._installId);
      params.set("ua", window.navigator.userAgent);
      params.set("an", "WowUp Client");
      params.set("av", this._appVersion);

      action?.call(this, params);

      const fullUrl = `${url}?${params}`;

      const response = await this._httpClient
        .post(
          fullUrl,
          {},
          {
            responseType: "text",
          }
        )
        .toPromise();
    } catch (e) {
      // eat
      console.error(e);
    }
  }

  private loadInstallId() {
    let installId = this._preferenceStorageService.findByKey(
      this.installIdPreferenceKey
    );
    if (installId) {
      return installId;
    }

    installId = uuidv4();
    this._preferenceStorageService.set(this.installIdPreferenceKey, installId);

    return installId;
  }
}
