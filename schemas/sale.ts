export default {
  name: 'sale',
  title: 'Sale',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: [{hotsopot: true}],
    },
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
    {
      name: 'dealName',
      title: 'Deal Name',
      type: 'string',
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
    },
    {
      name: 'season',
      title: 'Season Name',
      type: 'string',
    },
    {
      name: 'aboutDeal',
      title: 'About Deal',
      type: 'string',
    },
    {
      name: 'btnText',
      title: 'Button Text',
      type: 'string',
    },
  ],
}
