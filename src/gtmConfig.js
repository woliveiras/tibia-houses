const production = {
  gtmId: 'GTM-TFNF96W',
  preview: 'env-1',
  auth: '1SO5Odieyjs7GTQAN5uI4Q'
}

const staging = {
  gtmId: 'GTM-TFNF96W',
  preview: 'env-6',
  auth: 'Huwi-QW7EQZ6S8P368X_2g'
}

const host = window.location.host !== 'localhost:3000'

export default host ? production : staging
