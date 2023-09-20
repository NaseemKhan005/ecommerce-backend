export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {hotspot: 'true'},
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'actualPrice',
      title: 'Actual Price',
      type: 'number',
    },
    {
      name: 'discountPrice',
      title: 'Discount Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'featuredProduct',
      title: 'Featured Product',
      type: 'boolean',
    },
    {
      name: 'bestSell',
      title: 'Best Sell',
      type: 'boolean',
    },
    {
      name: 'hashtag',
      title: 'Hashtag',
      type: 'string',
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'boolean',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
    {
      name: 'review',
      title: 'Reviews',
      type: 'number',
    },
  ],
}
