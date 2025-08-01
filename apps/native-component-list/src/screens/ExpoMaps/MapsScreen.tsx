import { Platform } from 'react-native';

import { optionalRequire } from '../../navigation/routeBuilder';
import ComponentListScreen, { ListElement } from '../ComponentListScreen';

export const MapsScreens = Platform.select({
  android: [
    {
      name: 'Basic map',
      route: 'expo-maps/basic',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./google/MapsBasicScreen'));
      },
    },
    {
      name: 'Camera controls',
      route: 'expo-maps/camera-controls',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./google/MapsCameraControlsScreen'));
      },
    },
    {
      name: 'Maps properties',
      route: 'expo-maps/properties',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./google/MapsPropertiesScreen'));
      },
    },
    {
      name: 'Maps permissions',
      route: 'expo-maps/permissions',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./google/MapsPermissionsScreen'));
      },
    },
    {
      name: 'Maps custom location',
      route: 'expo-maps/custom-location',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./google/MapsUserLocationScreen'));
      },
    },
    {
      name: 'Maps UI settings',
      route: 'expo-maps/ui-settings',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./google/MapsUISettingsScreen'));
      },
    },
    {
      name: 'Markers',
      route: 'expo-maps/markers',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./google/MapsMarkerScreen'));
      },
    },
    {
      name: 'Polyline',
      route: 'expo-maps/polyline',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./google/MapsPolylineScreen'));
      },
    },
    {
      name: 'Polygon',
      route: 'expo-maps/polygon',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./google/MapsPolygonScreen'));
      },
    },
    {
      name: 'Circle',
      route: 'expo-maps/circle',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./google/MapsCircleScreen'));
      },
    },
    {
      name: 'Maps events',
      route: 'expo-maps/events',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./google/MapsEventsScreen'));
      },
    },
    {
      name: 'Marker with custom image',
      route: 'expo-maps/image-ref',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./google/MapsImageRefIntegrationScreen'));
      },
    },
    {
      name: 'Maps content padding',
      route: 'expo-maps/content-padding',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./google/MapsContentPaddingScreen'));
      },
    },
    {
      name: 'Street view',
      route: 'expo-maps/street-view',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./google/MapsStreetViewScreen'));
      },
    },
  ],
  ios: [
    {
      name: 'Basic map',
      route: 'expo-maps/basic',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./apple/MapsBasicScreen'));
      },
    },
    {
      name: 'Camera controls',
      route: 'expo-maps/camera-controls',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./apple/MapsCameraControlsScreen'));
      },
    },
    {
      name: 'Look around',
      route: 'expo-maps/look-around',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./apple/MapsLookAroundScreen'));
      },
    },
    {
      name: 'Maps properties',
      route: 'expo-maps/properties',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./apple/MapsPropertiesScreen'));
      },
    },
    {
      name: 'Maps permissions',
      route: 'expo-maps/permissions',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./apple/MapsPermissionsScreen'));
      },
    },
    {
      name: 'Maps camera position',
      route: 'expo-maps/camera-position',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./apple/MapsCameraPositionScreen'));
      },
    },
    {
      name: 'Maps Annotations',
      route: 'expo-maps/annotations',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./apple/MapsAnnotationsScreen'));
      },
    },
    {
      name: 'Maps UI settings',
      route: 'expo-maps/ui-settings',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./apple/MapsUISettingsScreen'));
      },
    },
    {
      name: 'Markers',
      route: 'expo-maps/markers',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./apple/MapsMarkerScreen'));
      },
    },
    {
      name: 'Polyline',
      route: 'expo-maps/polyline',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./apple/MapsPolylineScreen'));
      },
    },
    {
      name: 'Polygon',
      route: 'expo-maps/polygon',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./apple/MapsPolygonScreen'));
      },
    },
    {
      name: 'Circle',
      route: 'expo-maps/circle',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./apple/MapsCircleScreen'));
      },
    },
    {
      name: 'Maps events',
      route: 'expo-maps/events',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./apple/MapsEventsScreen'));
      },
    },
    {
      name: 'Annotation with custom image',
      route: 'expo-maps/image-ref',
      options: {},
      getComponent() {
        return optionalRequire(() => require('./apple/MapsImageRefIntegrationScreen'));
      },
    },
  ],
  default: [],
});

export default function ImageScreen() {
  const apis: ListElement[] = MapsScreens.map((screen) => {
    return {
      name: screen.name,
      isAvailable: true,
      route: `/components/${screen.route}`,
    };
  });
  return <ComponentListScreen apis={apis} sort={false} />;
}
