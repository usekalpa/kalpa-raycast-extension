/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Token - Your Kalpa API token for authentication (get from usekalpa.com/settings) */
  "apiToken": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `login` command */
  export type Login = ExtensionPreferences & {}
  /** Preferences accessible in the `search-links` command */
  export type SearchLinks = ExtensionPreferences & {}
  /** Preferences accessible in the `browse-universes` command */
  export type BrowseUniverses = ExtensionPreferences & {}
  /** Preferences accessible in the `quick-save` command */
  export type QuickSave = ExtensionPreferences & {}
  /** Preferences accessible in the `recent-links` command */
  export type RecentLinks = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `login` command */
  export type Login = {}
  /** Arguments passed to the `search-links` command */
  export type SearchLinks = {}
  /** Arguments passed to the `browse-universes` command */
  export type BrowseUniverses = {}
  /** Arguments passed to the `quick-save` command */
  export type QuickSave = {}
  /** Arguments passed to the `recent-links` command */
  export type RecentLinks = {}
}

