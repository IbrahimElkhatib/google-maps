import { WebPlugin } from '@capacitor/core';

import {
  AddMarkerOptions,
  AddMarkerResult,
  AddMarkersOptions,
  AddMarkersResult,
  CallbackID,
  CapacitorGoogleMapsPlugin,
  ClearMapOptions,
  CreateMapOptions,
  CreateMapResult,
  DefaultEventOptions,
  DefaultEventWithPreventDefaultOptions,
  DidBeginDraggingMarkerCallback,
  DidBeginMovingCameraCallback,
  DidCloseInfoWindowCallback,
  DidDragMarkerCallback,
  DidEndDraggingMarkerCallback,
  DidEndMovingCameraCallback,
  DidLongPressMapCallback,
  DidMoveCameraCallback,
  DidTapInfoWindowCallback,
  DidTapMapCallback,
  DidTapMarkerCallback,
  DidTapMyLocationButtonCallback,
  DidTapMyLocationDotCallback,
  DidTapPoiCallback,
  ElementFromPointResultOptions,
  InitializeOptions,
  MoveCameraOptions,
  RemoveMapOptions,
  RemoveMarkerOptions,
  UpdateMapOptions,
  UpdateMapResult,
} from './definitions';
import { CircleOptions, PolygonOptions, PolylineOptions } from './interfaces';

export class CapacitorGoogleMapsWeb
    extends WebPlugin
    implements CapacitorGoogleMapsPlugin {
  constructor() {
    super({
      name: 'CapacitorGoogleMaps',
      platforms: ['web'],
    });
  }

  async addPolyline(_options: PolylineOptions): Promise<void> {
    throw new Error('Method not implemented on web.');
  }

  async addCircle(_options: CircleOptions): Promise<void> {
    throw new Error('Method not implemented on web.');
  }

  async addPolygon(_options: PolygonOptions): Promise<void> {
    throw new Error('Method not implemented on web.');
  }

  async initialize(_options: InitializeOptions): Promise<void> {
    throw this.unimplemented("Not implemented on web.");
  }

  async createMap(_options: CreateMapOptions): Promise<CreateMapResult> {
    throw this.unimplemented("Not implemented on web.");
  }

  async removeMap(_options: RemoveMapOptions): Promise<void> {
    throw this.unimplemented("Not implemented on web.");
  }

  async clearMap(_options: ClearMapOptions): Promise<void> {
    throw this.unimplemented("Not implemented on web.");
  }

  async updateMap(_options: UpdateMapOptions): Promise<UpdateMapResult> {
    throw this.unimplemented("Not implemented on web.");
  }

  async moveCamera(_options: MoveCameraOptions): Promise<void> {
    throw this.unimplemented("Not implemented on web.");
  }

  async addMarker(_options: AddMarkerOptions): Promise<AddMarkerResult> {
    throw this.unimplemented("Not implemented on web.");
  }

  async addMarkers(_options: AddMarkersOptions): Promise<AddMarkersResult> {
    throw this.unimplemented("Not implemented on web.");
  }

  async removeMarker(_options: RemoveMarkerOptions): Promise<void> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didTapInfoWindow(
    _options: DefaultEventOptions,
    _callback: DidTapInfoWindowCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didCloseInfoWindow(
    _options: DefaultEventOptions,
    _callback: DidCloseInfoWindowCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didTapMap(
    _options: DefaultEventOptions,
    _callback: DidTapMapCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didLongPressMap(
    _options: DefaultEventOptions,
    _callback: DidLongPressMapCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didTapMarker(
    _options: DefaultEventWithPreventDefaultOptions,
    _callback: DidTapMarkerCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didBeginDraggingMarker(
    _options: DefaultEventOptions,
    _callback: DidBeginDraggingMarkerCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didDragMarker(
    _options: DefaultEventOptions,
    _callback: DidDragMarkerCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didEndDraggingMarker(
    _options: DefaultEventOptions,
    _callback: DidEndDraggingMarkerCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didTapMyLocationButton(
    _options: DefaultEventWithPreventDefaultOptions,
    _callback: DidTapMyLocationButtonCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didTapMyLocationDot(
    _options: DefaultEventWithPreventDefaultOptions,
    _callback: DidTapMyLocationDotCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didTapPoi(
    _options: DefaultEventOptions,
    _callback: DidTapPoiCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didBeginMovingCamera(
    _options: DefaultEventOptions,
    _callback: DidBeginMovingCameraCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didMoveCamera(
    _options: DefaultEventOptions,
    _callback: DidMoveCameraCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async didEndMovingCamera(
    _options: DefaultEventOptions,
    _callback: DidEndMovingCameraCallback
  ): Promise<CallbackID> {
    throw this.unimplemented("Not implemented on web.");
  }

  async elementFromPointResult(
    _options: ElementFromPointResultOptions
  ): Promise<void> {
    throw this.unimplemented("Not implemented on web.");
  }
}
