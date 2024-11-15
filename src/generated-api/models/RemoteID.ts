/* tslint:disable */
/* eslint-disable */
/**
 * TVDB API V4
 * Documentation of [TheTVDB](https://thetvdb.com/) API V4. All related information is linked from our [Github repo](https://github.com/thetvdb/v4-api). You might also want to use our [Postman collection] (https://www.getpostman.com/collections/7a9397ce69ff246f74d0) ## Authentication 1. Use the /login endpoint and provide your API key as \"apikey\". If you have a user-supported key, also provide your subscriber PIN as \"pin\". Otherwise completely remove \"pin\" from your call. 2. Executing this call will provide you with a bearer token, which is valid for 1 month. 3. Provide your bearer token for subsequent API calls by clicking Authorize below or including in the header of all direct API calls: `Authorization: Bearer [your-token]`  ## Notes 1. \"score\" is a field across almost all entities.  We generate scores for different types of entities in various ways, so no assumptions should be made about the meaning of this value.  It is simply used to hint at relative popularity for sorting purposes. 
 *
 * The version of the OpenAPI document: 4.7.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * remote id record
 * @export
 * @interface RemoteID
 */
export interface RemoteID {
    /**
     * 
     * @type {string}
     * @memberof RemoteID
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof RemoteID
     */
    type?: number;
    /**
     * 
     * @type {string}
     * @memberof RemoteID
     */
    sourceName?: string;
}

/**
 * Check if a given object implements the RemoteID interface.
 */
export function instanceOfRemoteID(value: object): value is RemoteID {
    return true;
}

export function RemoteIDFromJSON(json: any): RemoteID {
    return RemoteIDFromJSONTyped(json, false);
}

export function RemoteIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoteID {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : json['type'],
        'sourceName': json['sourceName'] == null ? undefined : json['sourceName'],
    };
}

  export function RemoteIDToJSON(json: any): RemoteID {
      return RemoteIDToJSONTyped(json, false);
  }

  export function RemoteIDToJSONTyped(value?: RemoteID | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'type': value['type'],
        'sourceName': value['sourceName'],
    };
}

