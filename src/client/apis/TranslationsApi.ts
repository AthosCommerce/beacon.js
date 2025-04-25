/* tslint:disable */
/* eslint-disable */
/**
 * beacon.searchspring.io
 * # Endpoint Details Each endpoint begins with `/{siteId}/` - this is a six digit alpha-numeric value ([a-z0-9]{6}) and is unique for each store. Each store\'s `siteId` can be found in the SMC (Searchspring Management Console).  Every endpoint accepts _text/plain_ POST data.  ### List of Endpoints  [**Autocomplete**](/#tag/Autocomplete) - [/{siteId}/autocomplete/render](#tag/Autocomplete/operation/autocomplete-render) - [/{siteId}/autocomplete/impression](#tag/Autocomplete/operation/autocomplete-impression) - [/{siteId}/autocomplete/addtocart](#tag/Autocomplete/operation/autocomplete-addtocart) - [/{siteId}/autocomplete/clickthrough](#tag/Autocomplete/operation/autocomplete-clickthrough) - [/{siteId}/autocomplete/redirect](#tag/Autocomplete/operation/autocomplete-redirect)  [**Cart**](#tag/Cart)   - [/{siteId}/cart/add](#tag/Cart/operation/cart-add) - [/{siteId}/cart/remove](#tag/Cart/operation/cart-remove)   [**Category**](#tag/Category) - [/{siteId}/category/render](#tag/Category/operation/category-render) - [/{siteId}/category/impression](#tag/Category/operation/category-impression) - [/{siteId}/category/addtocart](#tag/Category/operation/category-addtocart) - [/{siteId}/category/clickthrough](#tag/Category/operation/category-clickthrough)  [**Error Logs**](#tag/Error-Logs) - [/{siteId}/log/personalization](#tag/Error-Logs/operation/log-personalization) - [/{siteId}/log/shopifypixel](#tag/Error-Logs/operation/log-shopifypixel) - [/{siteId}/log/snap](#tag/Snap-Log)  [**Messaging Recommendations**](#tag/Messaging-Recommendations) - [/{siteId}/messaging/email/clickthrough](#tag/Messaging-Recommendations/operation/messaging-email-clickthrough) - [/{siteId}/messaging/email/render](#tag/Messaging-Recommendations/operation/messaging-email-render) - [/{siteId}/messaging/sms/clickthrough](#tag/Messaging-Recommendations/operation/messaging-sms-clickthrough) - [/{siteId}/messaging/sms/render](#tag/Messaging-Recommendations/operation/messaging-sms-render)  [**Order**](#tag/Order)   - [/{siteId}/order/transaction](#tag/Order/operation/order-transaction)    [**Product**](#tag/Product)   - [/{siteId}/product/pageview](#tag/Product/operation/product-pageview)  [**Recommendations**](#tag/Recommendations) - [/{siteId}/recommendations/render](#tag/Recommendations/operation/recommendations-render) - [/{siteId}/recommendations/impression](#tag/Recommendations/operation/recommendations-impression) - [/{siteId}/recommendations/addtocart](#tag/Recommendations/operation/recommendations-addtocart) - [/{siteId}/recommendations/clickthrough](#tag/Recommendations/operation/recommendations-clickthrough)  [**Search**](#tag/Search) - [/{siteId}/search/render](#tag/Search/operation/search-render) - [/{siteId}/search/impression](#tag/Search/operation/search-impression) - [/{siteId}/search/addtocart](#tag/Search/operation/search-addtocart) - [/{siteId}/search/clickthrough](#tag/Search/operation/search-clickthrough) - [/{siteId}/search/redirect](#tag/Search/operation/search-redirect)  [**Shopper**](/#tag/Shopper) - [/{siteId}/shopper/login](#tag/Shopper/operation/login)  [**Translations**](/#tag/Translations) - [/{siteId}/cart/view/translation](#tag/Cart/operation/cart-view-translation) - [/{siteId}/category/clickthrough/translation](#tag/Category/operation/category-clickthrough-translation) - [/{siteId}/order/transaction/translation](#tag/Order/operation/order-transaction-translation) - [/{siteId}/product/pageview/translation](#tag/Product/operation/product-pageview-translation)  - [/{siteId}/recommendations/render/translation](#tag/Recommendations/operation/recommendations-render-translation) - [/{siteId}/recommendations/impression/translation](#tag/Recommendations/operation/recommendations-impression-translation) - [/{siteId}/recommendations/clickthrough/translation](#tag/Recommendations/operation/recommendations-clickthrough-translation) - [/{siteId}/search/clickthrough/translation](#tag/Search/operation/search-clickthrough-translation) - [/{siteId}/shopper/login/translation](#tag/Shopper/operation/login/translation)   # Payload Details ### Context Information Each beacon event must include a `context` object in the payload. It is important for reporting that certain properties have consistent values.  | property | description | type | required |  |---|---|:---:|:---:| | IP | This is the current shoppers IP address, accepts IPv4 and IPv6 formats. Recommended this is passed for accuracy. If not, will attempt to default to the \"x-forwarded-for\" or the Remote Address. | string |  | | userAgent | This is the current shoppers UserAgent. Recommended this is passed for accuracy. If not, will attempt to default to \"user-agent\" request header.  | string |  | | timestamp | RFC3339 formatted timestamp represents the time the event occurred. | string | ✔️ | | pageUrl | Current page window.location.href value. | string | ✔️ | | userId | This should be an unique identifier for each shopper, it is typically an auto-generted UUID that persists across page navigation and visits. This value must be consistent across all beacon events for reporting purposes. | string | ✔️ | | sessionId | This unique identifier is for the customer\'s current session, it is typically an auto-generted UUID and should expire after the store visit. | string | ✔️ | | pageLoadId | Unique identifier that represents a unique page load. Used to tie multiple events made on a single page together. | string | ✔️ | | shopperId | This unique identifier is for product personalization, it is typically a user id or email and should be consistently sent if the user is authenticated on the storefront. | string | | | initiator | Application identifier that initiated the event | string | ✔️ | | attribution | Provides attribution details on product landing pages - it is currently only used for email recommendations | object | | | attribution.type | This identifies the type of attribution. For email recommendations its value is \'email\' | string |  | | attribution.id | This unique identifier is for the attribution. It is typically the profile name. | string |  | | currency | Active currency type on the site | object | |  | currency.code | currency code in [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html#:~:text=The%20first%20two%20letters%20of,and%20the%20D%20for%20dollar.) format  | string | | | dev | Developer mode flag. If set to `true`, the event data will not populate in reporting | boolean | |  NOTE: the above **does not** apply to `/translation` endpoints.  ### Event Data Information Each beacon event must also include a `data` object in the payload. Every event has its own unique properties and values - see the specific events for those details.
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CartviewSchema,
  CategorySchema,
  Model400Response,
  Model404Response,
  OrderTransactionSchema1,
  ProductPageviewSchema1,
  RecommendationsSchema,
  SearchSchema,
  ShopperLoginSchema1,
} from '../models/index';
import {
    CartviewSchemaFromJSON,
    CartviewSchemaToJSON,
    CategorySchemaFromJSON,
    CategorySchemaToJSON,
    Model400ResponseFromJSON,
    Model400ResponseToJSON,
    Model404ResponseFromJSON,
    Model404ResponseToJSON,
    OrderTransactionSchema1FromJSON,
    OrderTransactionSchema1ToJSON,
    ProductPageviewSchema1FromJSON,
    ProductPageviewSchema1ToJSON,
    RecommendationsSchemaFromJSON,
    RecommendationsSchemaToJSON,
    SearchSchemaFromJSON,
    SearchSchemaToJSON,
    ShopperLoginSchema1FromJSON,
    ShopperLoginSchema1ToJSON,
} from '../models/index';

export interface CartViewTranslationRequest {
    siteId: string;
    cartviewSchema?: CartviewSchema;
}

export interface CategoryClickthroughTranslationRequest {
    siteId: string;
    categorySchema?: CategorySchema;
}

export interface LoginTranslationRequest {
    siteId: string;
    shopperLoginSchema1?: ShopperLoginSchema1;
}

export interface OrderTransactionTranslationRequest {
    siteId: string;
    orderTransactionSchema1?: OrderTransactionSchema1;
}

export interface ProductPageviewTranslationRequest {
    siteId: string;
    productPageviewSchema1?: ProductPageviewSchema1;
}

export interface RecommendationsClickthroughTranslationRequest {
    siteId: string;
    recommendationsSchema?: RecommendationsSchema;
}

export interface RecommendationsImpressionTranslationRequest {
    siteId: string;
    recommendationsSchema?: RecommendationsSchema;
}

export interface RecommendationsRenderTranslationRequest {
    siteId: string;
    recommendationsSchema?: RecommendationsSchema;
}

export interface SearchClickthroughTranslationRequest {
    siteId: string;
    searchSchema?: SearchSchema;
}

/**
 * 
 */
export class TranslationsApi extends runtime.BaseAPI {

    /**
     * <i>/beacon/v2/{siteId}/cart/view/translation</i><br><br>Shopper views the cart contents.<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * cart view
     */
    async cartViewTranslationRaw(requestParameters: CartViewTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['siteId'] == null) {
            throw new runtime.RequiredError(
                'siteId',
                'Required parameter "siteId" was null or undefined when calling cartViewTranslation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';

        const response = await this.request({
            path: `/{siteId}/cart/view/translation`.replace(`{${"siteId"}}`, encodeURIComponent(String(requestParameters['siteId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CartviewSchemaToJSON(requestParameters['cartviewSchema']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * <i>/beacon/v2/{siteId}/cart/view/translation</i><br><br>Shopper views the cart contents.<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * cart view
     */
    async cartViewTranslation(requestParameters: CartViewTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.cartViewTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <i>/beacon/v2/{siteId}/category/clickthrough/translation</i><br><br>Shopper lands on a category results page, clicks on a Searchspring result, and will be taken to the product detail page (PDP).<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * category clickthrough
     */
    async categoryClickthroughTranslationRaw(requestParameters: CategoryClickthroughTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['siteId'] == null) {
            throw new runtime.RequiredError(
                'siteId',
                'Required parameter "siteId" was null or undefined when calling categoryClickthroughTranslation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';

        const response = await this.request({
            path: `/{siteId}/category/clickthrough/translation`.replace(`{${"siteId"}}`, encodeURIComponent(String(requestParameters['siteId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CategorySchemaToJSON(requestParameters['categorySchema']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * <i>/beacon/v2/{siteId}/category/clickthrough/translation</i><br><br>Shopper lands on a category results page, clicks on a Searchspring result, and will be taken to the product detail page (PDP).<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * category clickthrough
     */
    async categoryClickthroughTranslation(requestParameters: CategoryClickthroughTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.categoryClickthroughTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <i>/beacon/v2/{siteId}/shopper/login/translation</i><br><br>Shopper successfully logs into their account.<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * shopper login
     */
    async loginTranslationRaw(requestParameters: LoginTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['siteId'] == null) {
            throw new runtime.RequiredError(
                'siteId',
                'Required parameter "siteId" was null or undefined when calling loginTranslation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';

        const response = await this.request({
            path: `/{siteId}/shopper/login/translation`.replace(`{${"siteId"}}`, encodeURIComponent(String(requestParameters['siteId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ShopperLoginSchema1ToJSON(requestParameters['shopperLoginSchema1']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * <i>/beacon/v2/{siteId}/shopper/login/translation</i><br><br>Shopper successfully logs into their account.<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * shopper login
     */
    async loginTranslation(requestParameters: LoginTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.loginTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <i>/beacon/v2/{siteId}/order/transaction</i><br><br> Shopper has completed an order transaction. Tracks order contents.<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * order transaction
     */
    async orderTransactionTranslationRaw(requestParameters: OrderTransactionTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['siteId'] == null) {
            throw new runtime.RequiredError(
                'siteId',
                'Required parameter "siteId" was null or undefined when calling orderTransactionTranslation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';

        const response = await this.request({
            path: `/{siteId}/order/transaction/translation`.replace(`{${"siteId"}}`, encodeURIComponent(String(requestParameters['siteId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrderTransactionSchema1ToJSON(requestParameters['orderTransactionSchema1']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * <i>/beacon/v2/{siteId}/order/transaction</i><br><br> Shopper has completed an order transaction. Tracks order contents.<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * order transaction
     */
    async orderTransactionTranslation(requestParameters: OrderTransactionTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.orderTransactionTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <i>/beacon/v2/{siteId}/product/pageview/translation</i><br><br>Shopper has navigated to a product detail page (PDP).<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * product pageview
     */
    async productPageviewTranslationRaw(requestParameters: ProductPageviewTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['siteId'] == null) {
            throw new runtime.RequiredError(
                'siteId',
                'Required parameter "siteId" was null or undefined when calling productPageviewTranslation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';

        const response = await this.request({
            path: `/{siteId}/product/pageview/translation`.replace(`{${"siteId"}}`, encodeURIComponent(String(requestParameters['siteId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProductPageviewSchema1ToJSON(requestParameters['productPageviewSchema1']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * <i>/beacon/v2/{siteId}/product/pageview/translation</i><br><br>Shopper has navigated to a product detail page (PDP).<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * product pageview
     */
    async productPageviewTranslation(requestParameters: ProductPageviewTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.productPageviewTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <i>/beacon/v2/{siteId}/recommendations/clickthrough/translation</i><br><br>Shopper clicks on a rendered Searchspring personalized recommended result, and is taken to the product detail page (PDP).<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * recommendations clickthrough
     */
    async recommendationsClickthroughTranslationRaw(requestParameters: RecommendationsClickthroughTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['siteId'] == null) {
            throw new runtime.RequiredError(
                'siteId',
                'Required parameter "siteId" was null or undefined when calling recommendationsClickthroughTranslation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';

        const response = await this.request({
            path: `/{siteId}/recommendations/clickthrough/translation`.replace(`{${"siteId"}}`, encodeURIComponent(String(requestParameters['siteId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RecommendationsSchemaToJSON(requestParameters['recommendationsSchema']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * <i>/beacon/v2/{siteId}/recommendations/clickthrough/translation</i><br><br>Shopper clicks on a rendered Searchspring personalized recommended result, and is taken to the product detail page (PDP).<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * recommendations clickthrough
     */
    async recommendationsClickthroughTranslation(requestParameters: RecommendationsClickthroughTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.recommendationsClickthroughTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <i>/beacon/v2/{siteId}/recommendations/impression/translation</i><br><br>Shopper scrolls into view rendered Searchspring personalized recommended results. Results sent ***must*** only be results in the shoppers view at the time of the event.<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * recommendations impression
     */
    async recommendationsImpressionTranslationRaw(requestParameters: RecommendationsImpressionTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['siteId'] == null) {
            throw new runtime.RequiredError(
                'siteId',
                'Required parameter "siteId" was null or undefined when calling recommendationsImpressionTranslation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';

        const response = await this.request({
            path: `/{siteId}/recommendations/impression/translation`.replace(`{${"siteId"}}`, encodeURIComponent(String(requestParameters['siteId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RecommendationsSchemaToJSON(requestParameters['recommendationsSchema']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * <i>/beacon/v2/{siteId}/recommendations/impression/translation</i><br><br>Shopper scrolls into view rendered Searchspring personalized recommended results. Results sent ***must*** only be results in the shoppers view at the time of the event.<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * recommendations impression
     */
    async recommendationsImpressionTranslation(requestParameters: RecommendationsImpressionTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.recommendationsImpressionTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <i>/beacon/v2/{siteId}/recommendations/render/translation</i><br><br>Shopper navigates to a page where Searchspring personalized recommendations are requested from the [Personalized Recommendations API endpoint](https://docs.searchspring.com/reference/get-recommendations) and rendered on the page.<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * recommendations render
     */
    async recommendationsRenderTranslationRaw(requestParameters: RecommendationsRenderTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['siteId'] == null) {
            throw new runtime.RequiredError(
                'siteId',
                'Required parameter "siteId" was null or undefined when calling recommendationsRenderTranslation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';

        const response = await this.request({
            path: `/{siteId}/recommendations/render/translation`.replace(`{${"siteId"}}`, encodeURIComponent(String(requestParameters['siteId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RecommendationsSchemaToJSON(requestParameters['recommendationsSchema']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * <i>/beacon/v2/{siteId}/recommendations/render/translation</i><br><br>Shopper navigates to a page where Searchspring personalized recommendations are requested from the [Personalized Recommendations API endpoint](https://docs.searchspring.com/reference/get-recommendations) and rendered on the page.<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * recommendations render
     */
    async recommendationsRenderTranslation(requestParameters: RecommendationsRenderTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.recommendationsRenderTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * <i>/beacon/v2/{siteId}/search/clickthrough/translation</i><br><br>This event should be triggered when a shopper lands on a search results page, clicks on a Searchspring search result, and will be taken to the product detail page (PDP).<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * search clickthrough
     */
    async searchClickthroughTranslationRaw(requestParameters: SearchClickthroughTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['siteId'] == null) {
            throw new runtime.RequiredError(
                'siteId',
                'Required parameter "siteId" was null or undefined when calling searchClickthroughTranslation().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'text/plain';

        const response = await this.request({
            path: `/{siteId}/search/clickthrough/translation`.replace(`{${"siteId"}}`, encodeURIComponent(String(requestParameters['siteId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SearchSchemaToJSON(requestParameters['searchSchema']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * <i>/beacon/v2/{siteId}/search/clickthrough/translation</i><br><br>This event should be triggered when a shopper lands on a search results page, clicks on a Searchspring search result, and will be taken to the product detail page (PDP).<br><br>**NOT FOR NORMAL USAGE - CONSULT REPORTING TEAM.**
     * search clickthrough
     */
    async searchClickthroughTranslation(requestParameters: SearchClickthroughTranslationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.searchClickthroughTranslationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
