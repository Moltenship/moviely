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
 * tag option record
 * @export
 * @interface TagOption
 */
export interface TagOption {
    /**
     * 
     * @type {string}
     * @memberof TagOption
     */
    helpText?: string;
    /**
     * 
     * @type {number}
     * @memberof TagOption
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TagOption
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof TagOption
     */
    tag?: number;
    /**
     * 
     * @type {string}
     * @memberof TagOption
     */
    tagName?: string;
}

/**
 * Check if a given object implements the TagOption interface.
 */
export function instanceOfTagOption(value: object): value is TagOption {
    return true;
}

export function TagOptionFromJSON(json: any): TagOption {
    return TagOptionFromJSONTyped(json, false);
}

export function TagOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagOption {
    if (json == null) {
        return json;
    }
    return {
        
        'helpText': json['helpText'] == null ? undefined : json['helpText'],
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'tag': json['tag'] == null ? undefined : json['tag'],
        'tagName': json['tagName'] == null ? undefined : json['tagName'],
    };
}

  export function TagOptionToJSON(json: any): TagOption {
      return TagOptionToJSONTyped(json, false);
  }

  export function TagOptionToJSONTyped(value?: TagOption | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'helpText': value['helpText'],
        'id': value['id'],
        'name': value['name'],
        'tag': value['tag'],
        'tagName': value['tagName'],
    };
}

