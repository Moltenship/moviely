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
 * An alias model, which can be associated with a series, season, movie, person, or list.
 * @export
 * @interface Alias
 */
export interface Alias {
    /**
     * A 3-4 character string indicating the language of the alias, as defined in Language.
     * @type {string}
     * @memberof Alias
     */
    language?: string;
    /**
     * A string containing the alias itself.
     * @type {string}
     * @memberof Alias
     */
    name?: string;
}

/**
 * Check if a given object implements the Alias interface.
 */
export function instanceOfAlias(value: object): value is Alias {
    return true;
}

export function AliasFromJSON(json: any): Alias {
    return AliasFromJSONTyped(json, false);
}

export function AliasFromJSONTyped(json: any, ignoreDiscriminator: boolean): Alias {
    if (json == null) {
        return json;
    }
    return {
        
        'language': json['language'] == null ? undefined : json['language'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

  export function AliasToJSON(json: any): Alias {
      return AliasToJSONTyped(json, false);
  }

  export function AliasToJSONTyped(value?: Alias | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'language': value['language'],
        'name': value['name'],
    };
}

