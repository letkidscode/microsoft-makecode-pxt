import * as actions from './types'
import { GalleryView } from '../store/assetEditorReducer';

export const dispatchChangeSelectedAsset = (assetType?: pxt.AssetType, assetId?: string) => ({ type: actions.CHANGE_SELECTED_ASSET, assetType, assetId });
export const dispatchChangeGalleryView = (view: GalleryView) => ({ type: actions.CHANGE_GALLERY_VIEW, view });
export const dispatchUpdateUserAssets = () => ({ type: actions.UPDATE_USER_ASSETS });