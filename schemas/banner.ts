export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: 'true'},
    },
    {
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      options: {hotspot: 'true'},
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'btnText',
      title: 'Button Text',
      type: 'string',
    },
  ],
}
