# verifik-test

The candidate will utilize this mini angular app template where they can see examples of screens already built by our developers in the Team.

The Test is based on 3 simple things:

First the candidate will download the repository and run the project locally with the `ng` commands, after that, the candidate will build a page 

just like this one here (https://status.onesignal.com/) but inside our platform.

## Details:

1. The page should display the status of each of our endpoints (https://docs.verifik.co). Create your free account in https://app.verifik.co. and we can increase your limit when you run out of API requests or keep creating free accounts.

2. You will request every 1 minute the status of each endpoint ( for the sake of the test only ) but in a real case scenario we will ping it every 10-15 minutes.

3. The design should look very similar to the one provided by https://status.onesignal.com. We care a lot about nice UX/UI so it's important that the developer knows how to make great frontend designs.

4. each ping will represent a green or red bar. You will save them in the localStorage each time you request the API to see the status of each endpoint.

5. Remember that we need to keep track of each ping and when the service is down, we would like to know that it's down.

## Bonus points:

1. Create a mini Node.js project with MongoDB to store those pings into a Collection so when we refresh or open it in another tab, it will still keep the previous PINGS which represent the red/green bars on each endpoint.
