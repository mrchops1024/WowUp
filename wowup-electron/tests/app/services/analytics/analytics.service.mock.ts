import { BehaviorSubject } from "rxjs";

export class MockAnalyticsService {
  public readonly telemetryPromptUsedKey;
  public readonly telemetryEnabledKey;
  public readonly telemetryEnabled$ = new BehaviorSubject(false).asObservable();

  public get shouldPromptTelemetry() {
    return false;
  }
  public get telemetryEnabled() {
    return false;
  }
  public set telemetryEnabled(value) {}

  public async trackStartup() {}
  public async trackUserAction() {}
}
