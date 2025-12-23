
# OrderTransactionSchemaData

Event details

## Properties

Name | Type
------------ | -------------
`orderId` | string
`transactionTotal` | number
`total` | number
`vat` | number
`city` | string
`state` | string
`country` | string
`results` | [Array&lt;Product&gt;](Product.md)

## Example

```typescript
import type { OrderTransactionSchemaData } from ''

// TODO: Update the object below with actual values
const example = {
  "orderId": null,
  "transactionTotal": null,
  "total": null,
  "vat": null,
  "city": null,
  "state": null,
  "country": null,
  "results": null,
} satisfies OrderTransactionSchemaData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrderTransactionSchemaData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


