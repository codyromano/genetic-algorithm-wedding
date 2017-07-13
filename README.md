# Genetic Algorithm Wedding

Have you ever attended a wedding, dinner party or other large event where you didn't have a lot in common with other guests? Given a list of friends, this algorithm figures out whom should be invited to an event — and where they should sit — so that everyone gets along. It takes into account the guests' sense of humor and political affiliations.

Take a list of all your friends:

![](https://media.giphy.com/media/l0IynVv35qWZH5jOM/giphy.gif)

Run the experiment to group them based on political preferences and sense of humor:

![](https://media.giphy.com/media/xUA7aUzVdHkSMezrdC/giphy.gif)

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

## How the GA works

![](http://i.imgur.com/ZytwGow.jpg)
