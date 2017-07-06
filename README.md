# Genetic Algorithm Wedding
Algorithm that determines who should be invited to a wedding (or similar large event) to maximize how well everyone gets along

![](https://media.giphy.com/media/l0IynVv35qWZH5jOM/giphy.gif)

# Try it
```
git clone https://github.com/codyromano/genetic-algorithm-wedding.git
cd genetic-algorithm-wedding
npm install
npm install -g webpack
npm start
```
Open `http://localhost:9999` in your browser

## How it works
1. Gets all your Facebook friends
2. Produces many random combinations
3. Judges the combinations using "happiness criteria" you provide
4. Optimizes for overall guest happiness

## Background
I'm building this app to use as an example in a talk on genetic algorithms later this year.
