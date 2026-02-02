import { Tabs } from 'expo-router';
import React from 'react';

import { IconSymbol } from '@/components/atoms/icon-symbol/icon-symbol';
import { useThemedColorSelection } from "@/hooks/use-themed-color-selection";
import { HapticTab } from "@/components/atoms/haptic-tab/HapticTab";
import { useRemoteConfig } from "@/hooks/use-remote-config";

export default function TabLayout() {
  const tabBarActiveTintColor = useThemedColorSelection(palette => palette.tint);
  const { showDealsSpotlight } = useRemoteConfig();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="deals-spotlight"
        options={{
          title: 'Spotlight',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          href: showDealsSpotlight ? '/deals-spotlight' : null,
        }}
      />
    </Tabs>
  );
}
