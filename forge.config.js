module.exports = {
    
    makers: [
      {
        name: '@electron-forge/maker-deb',
          config: {
            options: {
              icon: '/assets/iconForApp.png'
            }
        }
      }
    ]
  };