import { RemoteConfigurationService } from "@/services/remote-configuration/RemoteConfigurationService";

export class MockRemoteConfigurationService implements RemoteConfigurationService {
  async getRemoteConfig() {
    return {
      showDealsSpotlight: true,
    };
  }
}
