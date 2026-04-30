# ChatApi

All URIs are relative to *https://analytics.athoscommerce.net/beacon/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**chatAddtocart**](ChatApi.md#chataddtocart) | **POST** /{siteId}/chat/addtocart | addtocart |
| [**chatClickthrough**](ChatApi.md#chatclickthrough) | **POST** /{siteId}/chat/clickthrough | clickthrough |
| [**chatFeedback**](ChatApi.md#chatfeedback) | **POST** /{siteId}/chat/feedback | feedback |
| [**chatImpression**](ChatApi.md#chatimpression) | **POST** /{siteId}/chat/impression | impression |



## chatAddtocart

> InlineObject chatAddtocart(siteId, chatAddtocartSchema)

addtocart

&lt;i&gt;/beacon/v2/{siteId}/chat/addtocart&lt;/i&gt;&lt;br&gt;&lt;br&gt;This event should be triggered when a shopper interacts with Chat where Athos Commerce results are rendered, and adds a result to the cart via a &#x60;Quick Add to Cart&#x60; button.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '';
import type { ChatAddtocartRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ChatApi();

  const body = {
    // string | Customer siteId found in the Athos Console or Athos Management Console
    siteId: siteId_example,
    // ChatAddtocartSchema | Add to cart payload
    chatAddtocartSchema: ...,
  } satisfies ChatAddtocartRequest;

  try {
    const data = await api.chatAddtocart(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **siteId** | `string` | Customer siteId found in the Athos Console or Athos Management Console | [Defaults to `undefined`] |
| **chatAddtocartSchema** | [ChatAddtocartSchema](ChatAddtocartSchema.md) | Add to cart payload | |

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `text/plain`, `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **404** | Invalid path |  -  |
| **405** | Invalid request method |  -  |
| **413** | Payload too large |  -  |
| **415** | Unsupported media type |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## chatClickthrough

> InlineObject chatClickthrough(siteId, chatClickthroughSchema)

clickthrough

&lt;i&gt;/beacon/v2/{siteId}/chat/clickthrough&lt;/i&gt;&lt;br&gt;&lt;br&gt;This event should be triggered when a shopper interacts with Chat, clicks on a Athos Commerce result, and will be taken to the product detail page (PDP).

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '';
import type { ChatClickthroughRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ChatApi();

  const body = {
    // string | Customer siteId found in the Athos Console or Athos Management Console
    siteId: siteId_example,
    // ChatClickthroughSchema | Clickthrough payload
    chatClickthroughSchema: ...,
  } satisfies ChatClickthroughRequest;

  try {
    const data = await api.chatClickthrough(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **siteId** | `string` | Customer siteId found in the Athos Console or Athos Management Console | [Defaults to `undefined`] |
| **chatClickthroughSchema** | [ChatClickthroughSchema](ChatClickthroughSchema.md) | Clickthrough payload | |

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `text/plain`, `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **404** | Invalid path |  -  |
| **405** | Invalid request method |  -  |
| **413** | Payload too large |  -  |
| **415** | Unsupported media type |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## chatFeedback

> InlineObject chatFeedback(siteId, chatFeedbackSchema)

feedback

&lt;i&gt;/beacon/v2/{siteId}/chat/feedback&lt;/i&gt;&lt;br&gt;&lt;br&gt;This event should be triggered when a shopper provides feedback to Chat.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '';
import type { ChatFeedbackRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ChatApi();

  const body = {
    // string | Customer siteId found in the Athos Console or Athos Management Console
    siteId: siteId_example,
    // ChatFeedbackSchema | Feedback payload
    chatFeedbackSchema: ...,
  } satisfies ChatFeedbackRequest;

  try {
    const data = await api.chatFeedback(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **siteId** | `string` | Customer siteId found in the Athos Console or Athos Management Console | [Defaults to `undefined`] |
| **chatFeedbackSchema** | [ChatFeedbackSchema](ChatFeedbackSchema.md) | Feedback payload | |

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `text/plain`, `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **404** | Invalid path |  -  |
| **405** | Invalid request method |  -  |
| **413** | Payload too large |  -  |
| **415** | Unsupported media type |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## chatImpression

> InlineObject chatImpression(siteId, chatImpressionSchema)

impression

&lt;i&gt;/beacon/v2/{siteId}/chat/impression&lt;/i&gt;&lt;br&gt;&lt;br&gt;This event should be triggered when a shopper interacts with Chat and Athos Commerce results receive an impression.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '';
import type { ChatImpressionRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ChatApi();

  const body = {
    // string | Customer siteId found in the Athos Console or Athos Management Console
    siteId: siteId_example,
    // ChatImpressionSchema | Impression payload
    chatImpressionSchema: ...,
  } satisfies ChatImpressionRequest;

  try {
    const data = await api.chatImpression(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **siteId** | `string` | Customer siteId found in the Athos Console or Athos Management Console | [Defaults to `undefined`] |
| **chatImpressionSchema** | [ChatImpressionSchema](ChatImpressionSchema.md) | Impression payload | |

### Return type

[**InlineObject**](InlineObject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `text/plain`, `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **404** | Invalid path |  -  |
| **405** | Invalid request method |  -  |
| **413** | Payload too large |  -  |
| **415** | Unsupported media type |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

