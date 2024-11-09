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


import * as runtime from '../runtime';
import type {
  GetAllPeople200Response,
  GetEpisodeTranslation200Response,
  GetPeopleBase200Response,
  GetPeopleExtended200Response,
} from '../models/index';
import {
    GetAllPeople200ResponseFromJSON,
    GetAllPeople200ResponseToJSON,
    GetEpisodeTranslation200ResponseFromJSON,
    GetEpisodeTranslation200ResponseToJSON,
    GetPeopleBase200ResponseFromJSON,
    GetPeopleBase200ResponseToJSON,
    GetPeopleExtended200ResponseFromJSON,
    GetPeopleExtended200ResponseToJSON,
} from '../models/index';

export interface GetAllPeopleRequest {
    page?: number;
}

export interface GetPeopleBaseRequest {
    id: number;
}

export interface GetPeopleExtendedRequest {
    id: number;
    meta?: GetPeopleExtendedMetaEnum;
}

export interface GetPeopleTranslationRequest {
    id: number;
    language: string;
}

/**
 * 
 */
export class PeopleApi extends runtime.BaseAPI {

    /**
     * Returns a list of people base records with the basic attributes.
     */
    async getAllPeopleRaw(requestParameters: GetAllPeopleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetAllPeople200Response>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/people`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetAllPeople200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns a list of people base records with the basic attributes.
     */
    async getAllPeople(requestParameters: GetAllPeopleRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetAllPeople200Response> {
        const response = await this.getAllPeopleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns people base record
     */
    async getPeopleBaseRaw(requestParameters: GetPeopleBaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPeopleBase200Response>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPeopleBase().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/people/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPeopleBase200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns people base record
     */
    async getPeopleBase(requestParameters: GetPeopleBaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPeopleBase200Response> {
        const response = await this.getPeopleBaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns people extended record
     */
    async getPeopleExtendedRaw(requestParameters: GetPeopleExtendedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPeopleExtended200Response>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPeopleExtended().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['meta'] != null) {
            queryParameters['meta'] = requestParameters['meta'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/people/{id}/extended`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPeopleExtended200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns people extended record
     */
    async getPeopleExtended(requestParameters: GetPeopleExtendedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPeopleExtended200Response> {
        const response = await this.getPeopleExtendedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns people translation record
     */
    async getPeopleTranslationRaw(requestParameters: GetPeopleTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetEpisodeTranslation200Response>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getPeopleTranslation().'
            );
        }

        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError(
                'language',
                'Required parameter "language" was null or undefined when calling getPeopleTranslation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/people/{id}/translations/{language}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"language"}}`, encodeURIComponent(String(requestParameters['language']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetEpisodeTranslation200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns people translation record
     */
    async getPeopleTranslation(requestParameters: GetPeopleTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetEpisodeTranslation200Response> {
        const response = await this.getPeopleTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetPeopleExtendedMetaEnum = {
    Translations: 'translations'
} as const;
export type GetPeopleExtendedMetaEnum = typeof GetPeopleExtendedMetaEnum[keyof typeof GetPeopleExtendedMetaEnum];
