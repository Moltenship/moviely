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
import type { Translation } from './Translation';
import {
    TranslationFromJSON,
    TranslationFromJSONTyped,
    TranslationToJSON,
    TranslationToJSONTyped,
} from './Translation';

/**
 * translation extended record
 * @export
 * @interface TranslationExtended
 */
export interface TranslationExtended {
    /**
     * 
     * @type {Array<Translation>}
     * @memberof TranslationExtended
     */
    nameTranslations?: Array<Translation>;
    /**
     * 
     * @type {Array<Translation>}
     * @memberof TranslationExtended
     */
    overviewTranslations?: Array<Translation>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TranslationExtended
     */
    alias?: Array<string>;
}

/**
 * Check if a given object implements the TranslationExtended interface.
 */
export function instanceOfTranslationExtended(value: object): value is TranslationExtended {
    return true;
}

export function TranslationExtendedFromJSON(json: any): TranslationExtended {
    return TranslationExtendedFromJSONTyped(json, false);
}

export function TranslationExtendedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationExtended {
    if (json == null) {
        return json;
    }
    return {
        
        'nameTranslations': json['nameTranslations'] == null ? undefined : ((json['nameTranslations'] as Array<any>).map(TranslationFromJSON)),
        'overviewTranslations': json['overviewTranslations'] == null ? undefined : ((json['overviewTranslations'] as Array<any>).map(TranslationFromJSON)),
        'alias': json['alias'] == null ? undefined : json['alias'],
    };
}

  export function TranslationExtendedToJSON(json: any): TranslationExtended {
      return TranslationExtendedToJSONTyped(json, false);
  }

  export function TranslationExtendedToJSONTyped(value?: TranslationExtended | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'nameTranslations': value['nameTranslations'] == null ? undefined : ((value['nameTranslations'] as Array<any>).map(TranslationToJSON)),
        'overviewTranslations': value['overviewTranslations'] == null ? undefined : ((value['overviewTranslations'] as Array<any>).map(TranslationToJSON)),
        'alias': value['alias'],
    };
}

