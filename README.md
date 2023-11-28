# login-page

This project is a demonstration of an OAuth2.0 login process. I decided to create this project to teach myself exactly what goes on when you click a 'Sign in with Google' button to log in to a website. This branch of the project uses a React frontend, and a PHP/Laravel/MySQL backend. The branch currently deployed to my website uses an ExpressJS backend, but this branch is fully functional and functionally identical and will be deployed to AWS shortly.

Link to project: https://jamiethomas.website/projects/login-page

The frontend and backend are running in Docker containers, which are deployed via GitHub Actions to an AWS Fargate service via the ECR. I am using Route 53 and an EC2 load balancer to point my domain name to the ECS service this site is running on.



Logged out             |  Logged in
:-------------------------:|:-------------------------:
![image](https://github.com/jamiethomas1/login-page/assets/75147459/50e3fdb4-edee-4292-b6f0-e883e1c5e201)  |  ![image](https://github.com/jamiethomas1/login-page/assets/75147459/cd40700c-94b3-4ef7-91e9-ac78346ca903)

The project has two pages - the logged-out page and the logged-in page. Once you click 'Sign in with Google' and go through the usual Google Account login process, you get to a page that provides some information about your login, and a text box. The text box is there to demonstrate a functioning REST API. You can write a note, post it and it will appear on the page, you can then edit it or delete it.
