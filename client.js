import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '<knseki64>',
  dataset: '<production>',
  apiVersion: '2022-03-24',
  useCdn: true
})
