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
 * a entity with selected tag option
 * @export
 * @interface TagOptionEntity
 */
export interface TagOptionEntity {
    /**
     * 
     * @type {string}
     * @memberof TagOptionEntity
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof TagOptionEntity
     */
    tagName?: string;
    /**
     * 
     * @type {number}
     * @memberof TagOptionEntity
     */
    tagId?: number;
}

/**
 * Check if a given object implements the TagOptionEntity interface.
 */
export function instanceOfTagOptionEntity(value: object): value is TagOptionEntity {
    return true;
}

export function TagOptionEntityFromJSON(json: any): TagOptionEntity {
    return TagOptionEntityFromJSONTyped(json, false);
}

export function TagOptionEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagOptionEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'tagName': json['tagName'] == null ? undefined : json['tagName'],
        'tagId': json['tagId'] == null ? undefined : json['tagId'],
    };
}

  export function TagOptionEntityToJSON(json: any): TagOptionEntity {
      return TagOptionEntityToJSONTyped(json, false);
  }

  export function TagOptionEntityToJSONTyped(value?: TagOptionEntity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'tagName': value['tagName'],
        'tagId': value['tagId'],
    };
}
