module.exports = {
  type: 'list',
  async fetch() {
    return [{
      title: 'component',
      route: $route('component')
    }, {
      title: 'File system',
      route: $route('file', {
        path: '/'
      })
    }, {
      title: '$assets',
      route: $route('@image', {
        summary: "$assets('nokia.jpeg')",
        url: $assets('nokia.jpeg'),
        author: {
          avatar: 'https://images.unsplash.com/profile-1559352348408-f8710c0ac313?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff',
          name: 'Steve Halama',
          url: 'https://unsplash.com/@steve3p_0'
        }
      })
    }, {
      title: '$ui',
      route: $route('ui')
    }, {
      title: 'icons',
      route: $route('icons')
    }]
  }
}