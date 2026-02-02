import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { RemoteConfig } from "@/types/remote-config.types";
import { RemoteConfigContextValue } from "@/contexts/remote-config/RemoteConfigContext.types";
import { MockRemoteConfigurationService } from "@/services/remote-configuration/MockRemoteConfigurationService";
import { DEFAULT_REMOTE_CONFIG } from "@/constants/remote-config";
const RemoteConfigContext = createContext<RemoteConfigContextValue | undefined>(undefined);

export function RemoteConfigProvider({ children }: PropsWithChildren) {
  const [remoteConfig, setRemoteConfig] = useState<RemoteConfig>(DEFAULT_REMOTE_CONFIG);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const loadRemoteConfig = async () => {
    setLoading(true);
    setError(null);

    try {
      const remoteConfigService = new MockRemoteConfigurationService();
      const config = await remoteConfigService.getRemoteConfig();
      setRemoteConfig(config);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load deals'));
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRemoteConfig();
  }, []);

  const value: RemoteConfigContextValue = {
    remoteConfig,
    loading,
    error,
  };

  return (
    <RemoteConfigContext.Provider value={value}>
      {children}
    </RemoteConfigContext.Provider>
  );
}

export function useRemoteConfigContext(): RemoteConfigContextValue {
  const context = useContext(RemoteConfigContext);

  if (context === undefined) {
    throw new Error('useRemoteConfigContext must be used within a RemoteConfigProvider');
  }

  return context;
}

