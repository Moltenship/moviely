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
import type { AwardNomineeBaseRecord } from './AwardNomineeBaseRecord';
import {
    AwardNomineeBaseRecordFromJSON,
    AwardNomineeBaseRecordFromJSONTyped,
    AwardNomineeBaseRecordToJSON,
    AwardNomineeBaseRecordToJSONTyped,
} from './AwardNomineeBaseRecord';
import type { Company } from './Company';
import {
    CompanyFromJSON,
    CompanyFromJSONTyped,
    CompanyToJSON,
    CompanyToJSONTyped,
} from './Company';
import type { Character } from './Character';
import {
    CharacterFromJSON,
    CharacterFromJSONTyped,
    CharacterToJSON,
    CharacterToJSONTyped,
} from './Character';
import type { SeasonBaseRecord } from './SeasonBaseRecord';
import {
    SeasonBaseRecordFromJSON,
    SeasonBaseRecordFromJSONTyped,
    SeasonBaseRecordToJSON,
    SeasonBaseRecordToJSONTyped,
} from './SeasonBaseRecord';
import type { TranslationExtended } from './TranslationExtended';
import {
    TranslationExtendedFromJSON,
    TranslationExtendedFromJSONTyped,
    TranslationExtendedToJSON,
    TranslationExtendedToJSONTyped,
} from './TranslationExtended';
import type { AwardBaseRecord } from './AwardBaseRecord';
import {
    AwardBaseRecordFromJSON,
    AwardBaseRecordFromJSONTyped,
    AwardBaseRecordToJSON,
    AwardBaseRecordToJSONTyped,
} from './AwardBaseRecord';
import type { TagOption } from './TagOption';
import {
    TagOptionFromJSON,
    TagOptionFromJSONTyped,
    TagOptionToJSON,
    TagOptionToJSONTyped,
} from './TagOption';
import type { RemoteID } from './RemoteID';
import {
    RemoteIDFromJSON,
    RemoteIDFromJSONTyped,
    RemoteIDToJSON,
    RemoteIDToJSONTyped,
} from './RemoteID';
import type { ContentRating } from './ContentRating';
import {
    ContentRatingFromJSON,
    ContentRatingFromJSONTyped,
    ContentRatingToJSON,
    ContentRatingToJSONTyped,
} from './ContentRating';
import type { Trailer } from './Trailer';
import {
    TrailerFromJSON,
    TrailerFromJSONTyped,
    TrailerToJSON,
    TrailerToJSONTyped,
} from './Trailer';

/**
 * extended episode record
 * @export
 * @interface EpisodeExtendedRecord
 */
export interface EpisodeExtendedRecord {
    /**
     * 
     * @type {string}
     * @memberof EpisodeExtendedRecord
     */
    aired?: string;
    /**
     * 
     * @type {number}
     * @memberof EpisodeExtendedRecord
     */
    airsAfterSeason?: number;
    /**
     * 
     * @type {number}
     * @memberof EpisodeExtendedRecord
     */
    airsBeforeEpisode?: number;
    /**
     * 
     * @type {number}
     * @memberof EpisodeExtendedRecord
     */
    airsBeforeSeason?: number;
    /**
     * 
     * @type {Array<AwardBaseRecord>}
     * @memberof EpisodeExtendedRecord
     */
    awards?: Array<AwardBaseRecord>;
    /**
     * 
     * @type {Array<Character>}
     * @memberof EpisodeExtendedRecord
     */
    characters?: Array<Character>;
    /**
     * 
     * @type {Array<Company>}
     * @memberof EpisodeExtendedRecord
     */
    companies?: Array<Company>;
    /**
     * 
     * @type {Array<ContentRating>}
     * @memberof EpisodeExtendedRecord
     */
    contentRatings?: Array<ContentRating>;
    /**
     * season, midseason, or series
     * @type {string}
     * @memberof EpisodeExtendedRecord
     */
    finaleType?: string;
    /**
     * 
     * @type {number}
     * @memberof EpisodeExtendedRecord
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof EpisodeExtendedRecord
     */
    image?: string;
    /**
     * 
     * @type {number}
     * @memberof EpisodeExtendedRecord
     */
    imageType?: number | null;
    /**
     * 
     * @type {number}
     * @memberof EpisodeExtendedRecord
     */
    isMovie?: number;
    /**
     * 
     * @type {string}
     * @memberof EpisodeExtendedRecord
     */
    lastUpdated?: string;
    /**
     * 
     * @type {number}
     * @memberof EpisodeExtendedRecord
     */
    linkedMovie?: number;
    /**
     * 
     * @type {string}
     * @memberof EpisodeExtendedRecord
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof EpisodeExtendedRecord
     */
    nameTranslations?: Array<string>;
    /**
     * 
     * @type {Array<Company>}
     * @memberof EpisodeExtendedRecord
     */
    networks?: Array<Company>;
    /**
     * 
     * @type {Array<AwardNomineeBaseRecord>}
     * @memberof EpisodeExtendedRecord
     */
    nominations?: Array<AwardNomineeBaseRecord>;
    /**
     * 
     * @type {number}
     * @memberof EpisodeExtendedRecord
     */
    number?: number;
    /**
     * 
     * @type {string}
     * @memberof EpisodeExtendedRecord
     */
    overview?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof EpisodeExtendedRecord
     */
    overviewTranslations?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof EpisodeExtendedRecord
     */
    productionCode?: string;
    /**
     * 
     * @type {Array<RemoteID>}
     * @memberof EpisodeExtendedRecord
     */
    remoteIds?: Array<RemoteID>;
    /**
     * 
     * @type {number}
     * @memberof EpisodeExtendedRecord
     */
    runtime?: number | null;
    /**
     * 
     * @type {number}
     * @memberof EpisodeExtendedRecord
     */
    seasonNumber?: number;
    /**
     * 
     * @type {Array<SeasonBaseRecord>}
     * @memberof EpisodeExtendedRecord
     */
    seasons?: Array<SeasonBaseRecord>;
    /**
     * 
     * @type {number}
     * @memberof EpisodeExtendedRecord
     */
    seriesId?: number;
    /**
     * 
     * @type {Array<Company>}
     * @memberof EpisodeExtendedRecord
     */
    studios?: Array<Company>;
    /**
     * 
     * @type {Array<TagOption>}
     * @memberof EpisodeExtendedRecord
     */
    tagOptions?: Array<TagOption>;
    /**
     * 
     * @type {Array<Trailer>}
     * @memberof EpisodeExtendedRecord
     */
    trailers?: Array<Trailer>;
    /**
     * 
     * @type {TranslationExtended}
     * @memberof EpisodeExtendedRecord
     */
    translations?: TranslationExtended;
    /**
     * 
     * @type {string}
     * @memberof EpisodeExtendedRecord
     */
    year?: string;
}

/**
 * Check if a given object implements the EpisodeExtendedRecord interface.
 */
export function instanceOfEpisodeExtendedRecord(value: object): value is EpisodeExtendedRecord {
    return true;
}

export function EpisodeExtendedRecordFromJSON(json: any): EpisodeExtendedRecord {
    return EpisodeExtendedRecordFromJSONTyped(json, false);
}

export function EpisodeExtendedRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): EpisodeExtendedRecord {
    if (json == null) {
        return json;
    }
    return {
        
        'aired': json['aired'] == null ? undefined : json['aired'],
        'airsAfterSeason': json['airsAfterSeason'] == null ? undefined : json['airsAfterSeason'],
        'airsBeforeEpisode': json['airsBeforeEpisode'] == null ? undefined : json['airsBeforeEpisode'],
        'airsBeforeSeason': json['airsBeforeSeason'] == null ? undefined : json['airsBeforeSeason'],
        'awards': json['awards'] == null ? undefined : ((json['awards'] as Array<any>).map(AwardBaseRecordFromJSON)),
        'characters': json['characters'] == null ? undefined : ((json['characters'] as Array<any>).map(CharacterFromJSON)),
        'companies': json['companies'] == null ? undefined : ((json['companies'] as Array<any>).map(CompanyFromJSON)),
        'contentRatings': json['contentRatings'] == null ? undefined : ((json['contentRatings'] as Array<any>).map(ContentRatingFromJSON)),
        'finaleType': json['finaleType'] == null ? undefined : json['finaleType'],
        'id': json['id'] == null ? undefined : json['id'],
        'image': json['image'] == null ? undefined : json['image'],
        'imageType': json['imageType'] == null ? undefined : json['imageType'],
        'isMovie': json['isMovie'] == null ? undefined : json['isMovie'],
        'lastUpdated': json['lastUpdated'] == null ? undefined : json['lastUpdated'],
        'linkedMovie': json['linkedMovie'] == null ? undefined : json['linkedMovie'],
        'name': json['name'] == null ? undefined : json['name'],
        'nameTranslations': json['nameTranslations'] == null ? undefined : json['nameTranslations'],
        'networks': json['networks'] == null ? undefined : ((json['networks'] as Array<any>).map(CompanyFromJSON)),
        'nominations': json['nominations'] == null ? undefined : ((json['nominations'] as Array<any>).map(AwardNomineeBaseRecordFromJSON)),
        'number': json['number'] == null ? undefined : json['number'],
        'overview': json['overview'] == null ? undefined : json['overview'],
        'overviewTranslations': json['overviewTranslations'] == null ? undefined : json['overviewTranslations'],
        'productionCode': json['productionCode'] == null ? undefined : json['productionCode'],
        'remoteIds': json['remoteIds'] == null ? undefined : ((json['remoteIds'] as Array<any>).map(RemoteIDFromJSON)),
        'runtime': json['runtime'] == null ? undefined : json['runtime'],
        'seasonNumber': json['seasonNumber'] == null ? undefined : json['seasonNumber'],
        'seasons': json['seasons'] == null ? undefined : ((json['seasons'] as Array<any>).map(SeasonBaseRecordFromJSON)),
        'seriesId': json['seriesId'] == null ? undefined : json['seriesId'],
        'studios': json['studios'] == null ? undefined : ((json['studios'] as Array<any>).map(CompanyFromJSON)),
        'tagOptions': json['tagOptions'] == null ? undefined : ((json['tagOptions'] as Array<any>).map(TagOptionFromJSON)),
        'trailers': json['trailers'] == null ? undefined : ((json['trailers'] as Array<any>).map(TrailerFromJSON)),
        'translations': json['translations'] == null ? undefined : TranslationExtendedFromJSON(json['translations']),
        'year': json['year'] == null ? undefined : json['year'],
    };
}

  export function EpisodeExtendedRecordToJSON(json: any): EpisodeExtendedRecord {
      return EpisodeExtendedRecordToJSONTyped(json, false);
  }

  export function EpisodeExtendedRecordToJSONTyped(value?: EpisodeExtendedRecord | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'aired': value['aired'],
        'airsAfterSeason': value['airsAfterSeason'],
        'airsBeforeEpisode': value['airsBeforeEpisode'],
        'airsBeforeSeason': value['airsBeforeSeason'],
        'awards': value['awards'] == null ? undefined : ((value['awards'] as Array<any>).map(AwardBaseRecordToJSON)),
        'characters': value['characters'] == null ? undefined : ((value['characters'] as Array<any>).map(CharacterToJSON)),
        'companies': value['companies'] == null ? undefined : ((value['companies'] as Array<any>).map(CompanyToJSON)),
        'contentRatings': value['contentRatings'] == null ? undefined : ((value['contentRatings'] as Array<any>).map(ContentRatingToJSON)),
        'finaleType': value['finaleType'],
        'id': value['id'],
        'image': value['image'],
        'imageType': value['imageType'],
        'isMovie': value['isMovie'],
        'lastUpdated': value['lastUpdated'],
        'linkedMovie': value['linkedMovie'],
        'name': value['name'],
        'nameTranslations': value['nameTranslations'],
        'networks': value['networks'] == null ? undefined : ((value['networks'] as Array<any>).map(CompanyToJSON)),
        'nominations': value['nominations'] == null ? undefined : ((value['nominations'] as Array<any>).map(AwardNomineeBaseRecordToJSON)),
        'number': value['number'],
        'overview': value['overview'],
        'overviewTranslations': value['overviewTranslations'],
        'productionCode': value['productionCode'],
        'remoteIds': value['remoteIds'] == null ? undefined : ((value['remoteIds'] as Array<any>).map(RemoteIDToJSON)),
        'runtime': value['runtime'],
        'seasonNumber': value['seasonNumber'],
        'seasons': value['seasons'] == null ? undefined : ((value['seasons'] as Array<any>).map(SeasonBaseRecordToJSON)),
        'seriesId': value['seriesId'],
        'studios': value['studios'] == null ? undefined : ((value['studios'] as Array<any>).map(CompanyToJSON)),
        'tagOptions': value['tagOptions'] == null ? undefined : ((value['tagOptions'] as Array<any>).map(TagOptionToJSON)),
        'trailers': value['trailers'] == null ? undefined : ((value['trailers'] as Array<any>).map(TrailerToJSON)),
        'translations': TranslationExtendedToJSON(value['translations']),
        'year': value['year'],
    };
}
