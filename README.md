# countdown
Countdown timer from 1 minute and 10 seconds that stops at 0.

## To start project:
1) ```npm install```

###### Compiles and hot-reloads for development
2) ```npm run serve```

3) Go to http://localhost:8080/ to view.

## Functions:
- **Start**: Double click the black timer circle

- **Pause**: Single click the black timer circle

- **Reset**: Click the reset button to set the countdown back to 1 minute and 10 seconds

###### Used Npm Vue Countdown package
###### https: //www.npmjs.com/package/@chenfengyuan/vue-countdown
###### All commits in the repo follow the conventional commits method https://www.conventionalcommits.org/en/v1.0.0/

### Lighthouse accessibility score: 96% (run: 2/1/22)

## If I were to continue to develop this project: 
- Install a library to handle touch events, for users on mobile screens.
	- https://www.npmjs.com/package/vue2-touch-events
- Add some celebratory confetti when the countdown reaches 0.

- I'm not really happy with how the reset button works by refreshing the component, but the library I used doesn't give me many good options. If I were to do this again, i'd write my own JS for the countdown and not pull in an extra library, although it is a small.


---
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
