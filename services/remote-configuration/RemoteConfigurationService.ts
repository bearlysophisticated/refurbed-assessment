import { RemoteConfig } from "@/types/remote-config.types";

export interface RemoteConfigurationService {
  getRemoteConfig(): Promise<RemoteConfig>;
}
