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
 * 
 * @export
 * @interface LoginPostRequest
 */
export interface LoginPostRequest {
    /**
     * 
     * @type {string}
     * @memberof LoginPostRequest
     */
    apikey: string;
    /**
     * 
     * @type {string}
     * @memberof LoginPostRequest
     */
    pin?: string;
}

/**
 * Check if a given object implements the LoginPostRequest interface.
 */
export function instanceOfLoginPostRequest(value: object): value is LoginPostRequest {
    if (!('apikey' in value) || value['apikey'] === undefined) return false;
    return true;
}

export function LoginPostRequestFromJSON(json: any): LoginPostRequest {
    return LoginPostRequestFromJSONTyped(json, false);
}

export function LoginPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginPostRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'apikey': json['apikey'],
        'pin': json['pin'] == null ? undefined : json['pin'],
    };
}

  export function LoginPostRequestToJSON(json: any): LoginPostRequest {
      return LoginPostRequestToJSONTyped(json, false);
  }

  export function LoginPostRequestToJSONTyped(value?: LoginPostRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apikey': value['apikey'],
        'pin': value['pin'],
    };
}

