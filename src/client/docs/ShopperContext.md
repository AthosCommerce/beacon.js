
# ShopperContext

Contextual data about the shopper event

## Properties

Name | Type
------------ | -------------
`iP` | string
`userAgent` | string
`timestamp` | string
`pageUrl` | string
`userId` | string
`sessionId` | string
`pageLoadId` | string
`shopperId` | string
`initiator` | string
`attribution` | [Array&lt;AttributionInner&gt;](AttributionInner.md)
`currency` | [Currency](Currency.md)
`dev` | boolean

## Example

```typescript
import type { ShopperContext } from ''

// TODO: Update the object below with actual values
const example = {
  "iP": null,
  "userAgent": null,
  "timestamp": null,
  "pageUrl": null,
  "userId": null,
  "sessionId": null,
  "pageLoadId": null,
  "shopperId": null,
  "initiator": null,
  "attribution": null,
  "currency": null,
  "dev": null,
} satisfies ShopperContext

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ShopperContext
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


