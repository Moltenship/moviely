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
  GetAllSeasons200Response,
  GetEpisodeTranslation200Response,
  GetSeasonBase200Response,
  GetSeasonExtended200Response,
  GetSeasonTypes200Response,
} from '../models/index';
import {
    GetAllSeasons200ResponseFromJSON,
    GetAllSeasons200ResponseToJSON,
    GetEpisodeTranslation200ResponseFromJSON,
    GetEpisodeTranslation200ResponseToJSON,
    GetSeasonBase200ResponseFromJSON,
    GetSeasonBase200ResponseToJSON,
    GetSeasonExtended200ResponseFromJSON,
    GetSeasonExtended200ResponseToJSON,
    GetSeasonTypes200ResponseFromJSON,
    GetSeasonTypes200ResponseToJSON,
} from '../models/index';

export interface GetAllSeasonsRequest {
    page?: number;
}

export interface GetSeasonBaseRequest {
    id: number;
}

export interface GetSeasonExtendedRequest {
    id: number;
}

export interface GetSeasonTranslationRequest {
    id: number;
    language: string;
}

/**
 * 
 */
export class SeasonsApi extends runtime.BaseAPI {

    /**
     * returns list of seasons base records
     */
    async getAllSeasonsRaw(requestParameters: GetAllSeasonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetAllSeasons200Response>> {
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
            path: `/seasons`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetAllSeasons200ResponseFromJSON(jsonValue));
    }

    /**
     * returns list of seasons base records
     */
    async getAllSeasons(requestParameters: GetAllSeasonsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetAllSeasons200Response> {
        const response = await this.getAllSeasonsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns season base record
     */
    async getSeasonBaseRaw(requestParameters: GetSeasonBaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSeasonBase200Response>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSeasonBase().'
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
            path: `/seasons/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSeasonBase200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns season base record
     */
    async getSeasonBase(requestParameters: GetSeasonBaseRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSeasonBase200Response> {
        const response = await this.getSeasonBaseRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns season extended record
     */
    async getSeasonExtendedRaw(requestParameters: GetSeasonExtendedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSeasonExtended200Response>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSeasonExtended().'
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
            path: `/seasons/{id}/extended`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSeasonExtended200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns season extended record
     */
    async getSeasonExtended(requestParameters: GetSeasonExtendedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSeasonExtended200Response> {
        const response = await this.getSeasonExtendedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns season translation record
     */
    async getSeasonTranslationRaw(requestParameters: GetSeasonTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetEpisodeTranslation200Response>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getSeasonTranslation().'
            );
        }

        if (requestParameters['language'] == null) {
            throw new runtime.RequiredError(
                'language',
                'Required parameter "language" was null or undefined when calling getSeasonTranslation().'
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
            path: `/seasons/{id}/translations/{language}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))).replace(`{${"language"}}`, encodeURIComponent(String(requestParameters['language']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetEpisodeTranslation200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns season translation record
     */
    async getSeasonTranslation(requestParameters: GetSeasonTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetEpisodeTranslation200Response> {
        const response = await this.getSeasonTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns season type records
     */
    async getSeasonTypesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetSeasonTypes200Response>> {
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
            path: `/seasons/types`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetSeasonTypes200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns season type records
     */
    async getSeasonTypes(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetSeasonTypes200Response> {
        const response = await this.getSeasonTypesRaw(initOverrides);
        return await response.value();
    }

}
