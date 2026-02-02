import { RemoteConfig } from "@/types/remote-config.types";
import { useRemoteConfigContext } from "@/contexts/remote-config/RemoteConfigContext";

export function useRemoteConfig(): RemoteConfig {
  const { remoteConfig } = useRemoteConfigContext();
  return remoteConfig;
}
