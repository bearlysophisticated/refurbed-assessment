import { RemoteConfig } from "@/types/remote-config.types";

export interface RemoteConfigContextValue {
  remoteConfig: RemoteConfig;
  loading: boolean;
  error: Error | null;
}
