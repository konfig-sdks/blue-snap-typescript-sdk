/* tslint:disable */
/* eslint-disable */
/*
API Settings

At BlueSnap, we look at payments a little differently. Our Payment Orchestration Platform helps businesses accept payments globally and is designed to increase revenue and reduces costs. We provide a comprehensive back-end solutions that simplifies the complexity of payments, managing the full process from start to finish.

BlueSnap supports payments through multiple sales channels such as online and mobile sales, marketplaces, subscriptions, invoice payments and manual orders through a virtual terminal. And for businesses looking for embedded payments, we offer white-labeled payments for platforms with automated underwriting and onboarding that supports marketplaces and split payments.

And with one integration and contract, businesses can sell in over 200 geographies with access to local acquiring in 47 countries, 110+ currencies and 100+ global payment types, including popular eWallets, automated accounts receivable, world-class fraud protection and chargeback management, built-in solutions for regulation and tax compliance, and unified global reporting to help businesses grow.

With a US headquarters in Waltham, MA, and EU headquarters in Dublin, Ireland, BlueSnap is backed by world-class private equity investors including Great Hill Partners and Parthenon Capital Partners. 

Learn more at BlueSnap.com

The version of the OpenAPI document: 8976-Tools


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { VendorCreateRequest } from '../models';
// @ts-ignore
import { VendorCreateRequestVendorAgreement } from '../models';
// @ts-ignore
import { VendorCreateRequestVendorPrincipal } from '../models';
// @ts-ignore
import { VendorUpdateVendorRequest } from '../models';
// @ts-ignore
import { VendorUpdateVendorRequestPayoutInfoInner } from '../models';
// @ts-ignore
import { VendorUpdateVendorRequestVendorAgreement } from '../models';
// @ts-ignore
import { VendorUpdateVendorRequestVendorPrincipal } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * VendorApi - axios parameter creator
 * @export
 */
export const VendorApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Vendor
         * @param {VendorCreateRequest} [vendorCreateRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (vendorCreateRequest?: VendorCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/vendors`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            // authentication sec1 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec1", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: vendorCreateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/vendors',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(vendorCreateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve All Vendors
         * @param {boolean} [gettotal] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllVendors: async (gettotal?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/vendors?{parameters}`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            // authentication sec1 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec1", configuration })
            if (gettotal !== undefined) {
                localVarQueryParameter['gettotal'] = gettotal;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/vendors?{parameters}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve Vendor
         * @param {number} vendorId BlueSnap identifier for the vendor
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVendor: async (vendorId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'vendorId' is not null or undefined
            assertParamExists('getVendor', 'vendorId', vendorId)
            const localVarPath = `/vendors/{vendorId}`
                .replace(`{${"vendorId"}}`, encodeURIComponent(String(vendorId !== undefined ? vendorId : `-vendorId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            // authentication sec1 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec1", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/vendors/{vendorId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Vendor
         * @param {number} vendorId BlueSnap identifier for the vendor
         * @param {VendorUpdateVendorRequest} [vendorUpdateVendorRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateVendor: async (vendorId: number, vendorUpdateVendorRequest?: VendorUpdateVendorRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'vendorId' is not null or undefined
            assertParamExists('updateVendor', 'vendorId', vendorId)
            const localVarPath = `/vendors/{vendorId}`
                .replace(`{${"vendorId"}}`, encodeURIComponent(String(vendorId !== undefined ? vendorId : `-vendorId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            // authentication sec1 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec1", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: vendorUpdateVendorRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/vendors/{vendorId}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(vendorUpdateVendorRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * VendorApi - functional programming interface
 * @export
 */
export const VendorApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VendorApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Vendor
         * @param {VendorApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(requestParameters: VendorApiCreateRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const vendorCreateRequest: VendorCreateRequest = {
                email: requestParameters.email,
                firstName: requestParameters.firstName,
                lastName: requestParameters.lastName,
                phone: requestParameters.phone,
                address: requestParameters.address,
                city: requestParameters.city,
                country: requestParameters.country,
                state: requestParameters.state,
                zip: requestParameters.zip,
                defaultPayoutCurrency: requestParameters.defaultPayoutCurrency,
                ipnUrl: requestParameters.ipnUrl,
                vendorPrincipal: requestParameters.vendorPrincipal,
                vendorAgreement: requestParameters.vendorAgreement,
                payoutInfo: requestParameters.payoutInfo
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(vendorCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve All Vendors
         * @param {VendorApiGetAllVendorsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllVendors(requestParameters: VendorApiGetAllVendorsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllVendors(requestParameters.gettotal, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve Vendor
         * @param {VendorApiGetVendorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVendor(requestParameters: VendorApiGetVendorRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVendor(requestParameters.vendorId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Vendor
         * @param {VendorApiUpdateVendorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateVendor(requestParameters: VendorApiUpdateVendorRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const vendorUpdateVendorRequest: VendorUpdateVendorRequest = {
                email: requestParameters.email,
                name: requestParameters.name,
                firstName: requestParameters.firstName,
                lastName: requestParameters.lastName,
                address: requestParameters.address,
                city: requestParameters.city,
                zip: requestParameters.zip,
                country: requestParameters.country,
                phone: requestParameters.phone,
                state: requestParameters.state,
                taxId: requestParameters.taxId,
                vendorUrl: requestParameters.vendorUrl,
                ipnUrl: requestParameters.ipnUrl,
                defaultPayoutCurrency: requestParameters.defaultPayoutCurrency,
                vendorPrincipal: requestParameters.vendorPrincipal,
                payoutInfo: requestParameters.payoutInfo,
                vendorAgreement: requestParameters.vendorAgreement
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateVendor(requestParameters.vendorId, vendorUpdateVendorRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VendorApi - factory interface
 * @export
 */
export const VendorApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VendorApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Vendor
         * @param {VendorApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: VendorApiCreateRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.create(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve All Vendors
         * @param {VendorApiGetAllVendorsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllVendors(requestParameters: VendorApiGetAllVendorsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getAllVendors(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve Vendor
         * @param {VendorApiGetVendorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVendor(requestParameters: VendorApiGetVendorRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getVendor(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Vendor
         * @param {VendorApiUpdateVendorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateVendor(requestParameters: VendorApiUpdateVendorRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateVendor(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for create operation in VendorApi.
 * @export
 * @interface VendorApiCreateRequest
 */
export type VendorApiCreateRequest = {
    
} & VendorCreateRequest

/**
 * Request parameters for getAllVendors operation in VendorApi.
 * @export
 * @interface VendorApiGetAllVendorsRequest
 */
export type VendorApiGetAllVendorsRequest = {
    
    /**
    * 
    * @type {boolean}
    * @memberof VendorApiGetAllVendors
    */
    readonly gettotal?: boolean
    
}

/**
 * Request parameters for getVendor operation in VendorApi.
 * @export
 * @interface VendorApiGetVendorRequest
 */
export type VendorApiGetVendorRequest = {
    
    /**
    * BlueSnap identifier for the vendor
    * @type {number}
    * @memberof VendorApiGetVendor
    */
    readonly vendorId: number
    
}

/**
 * Request parameters for updateVendor operation in VendorApi.
 * @export
 * @interface VendorApiUpdateVendorRequest
 */
export type VendorApiUpdateVendorRequest = {
    
    /**
    * BlueSnap identifier for the vendor
    * @type {number}
    * @memberof VendorApiUpdateVendor
    */
    readonly vendorId: number
    
} & VendorUpdateVendorRequest

/**
 * VendorApiGenerated - object-oriented interface
 * @export
 * @class VendorApiGenerated
 * @extends {BaseAPI}
 */
export class VendorApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create Vendor
     * @param {VendorApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorApiGenerated
     */
    public create(requestParameters: VendorApiCreateRequest = {}, options?: AxiosRequestConfig) {
        return VendorApiFp(this.configuration).create(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve All Vendors
     * @param {VendorApiGetAllVendorsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorApiGenerated
     */
    public getAllVendors(requestParameters: VendorApiGetAllVendorsRequest = {}, options?: AxiosRequestConfig) {
        return VendorApiFp(this.configuration).getAllVendors(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve Vendor
     * @param {VendorApiGetVendorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorApiGenerated
     */
    public getVendor(requestParameters: VendorApiGetVendorRequest, options?: AxiosRequestConfig) {
        return VendorApiFp(this.configuration).getVendor(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Vendor
     * @param {VendorApiUpdateVendorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VendorApiGenerated
     */
    public updateVendor(requestParameters: VendorApiUpdateVendorRequest, options?: AxiosRequestConfig) {
        return VendorApiFp(this.configuration).updateVendor(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
