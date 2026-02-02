import { RemoteConfigurationService } from "@/services/remote-configuration/RemoteConfigurationService";
import { RemoteConfig } from "@/types/remote-config.types";

export class MockRemoteConfigurationService implements RemoteConfigurationService {
  async getRemoteConfig() {
    return new Promise<RemoteConfig>((resolve, reject) => {
      // Simulate async data loading
      setTimeout(() => {
        resolve({
          showDealsSpotlight: true,
        });
      }, 200);
    });
  }
}
