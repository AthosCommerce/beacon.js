
# Context

Contextual data about the event

## Properties

Name | Type
------------ | -------------
`initiator` | string
`pageLoadId` | string
`pageUrl` | string
`sessionId` | string
`timestamp` | string
`userId` | string
`attribution` | [Array&lt;AttributionInner&gt;](AttributionInner.md)
`currency` | [Currency](Currency.md)
`dev` | boolean
`iP` | string
`shopperId` | string
`userAgent` | string

## Example

```typescript
import type { Context } from ''

// TODO: Update the object below with actual values
const example = {
  "initiator": null,
  "pageLoadId": null,
  "pageUrl": null,
  "sessionId": null,
  "timestamp": null,
  "userId": null,
  "attribution": null,
  "currency": null,
  "dev": null,
  "iP": null,
  "shopperId": null,
  "userAgent": null,
} satisfies Context

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Context
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


