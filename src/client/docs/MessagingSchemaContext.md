
# MessagingSchemaContext

Contextual data about the event

## Properties

Name | Type
------------ | -------------
`userId` | string
`timestamp` | string
`dev` | boolean

## Example

```typescript
import type { MessagingSchemaContext } from ''

// TODO: Update the object below with actual values
const example = {
  "userId": null,
  "timestamp": null,
  "dev": null,
} satisfies MessagingSchemaContext

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MessagingSchemaContext
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


