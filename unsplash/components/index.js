module.exports = {
  type: 'list',
  translucent: true,
  async fetch(page) {
    console.log($http)
    let photos = await $http.get('https://api.unsplash.com/photos', {
      page: page
    })
    let quality = $prefs.get('quality')
    return {
      nextPage: page + 1,
      items: photos.data.map((item) => {
        let image_url = item.urls.regular;
        if (quality == 'full') {
          image_url = item.urls.full
        } else if (quality == 'raw') {
          image_url = item.urls.raw
        }
        return {
          title: item.description,
          route: $route('@image', {
            url: image_url,
            color: item.color,
            aspect: (item.width * 1.0 / item.height).toFixed(3),
          }),
          style: 'gallery',
          summary: item.description || item.alt_description,
          link: item.links.html,
          author: {
            name: item.user.name,
            avatar: item.user.profile_image.medium,
            route: $route(item.user.links.html)
          },
          thumb: item.urls.small,
          color: item.color,
          aspect: (item.width * 1.0 / item.height).toFixed(3)
        }
      })
    }
  }
}