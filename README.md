# WMI_App

- This is a custom built application for Whitman Masonry, INC., a commercial masonry contractor based in Raleigh, NC.  As an employee of WMI, I was responsible for collecting daily production reports from our superintendants that documented the number of materials installed, the number and break down of workers, and the hours worked.  At the end of the week I plug in this information to an excel formula and get the total weekly # of each materials installed, total # of hours worked, and average rate of installation/ hour/ mason.  

- We then take that information, the amounts we used in our estimate, and the amount we paid out in labor that week, to determine if we were profitable that week, and how our actual production numbers are comparing with the production we calculated in the estimate.  Essentially we get a week to week update on how we are doing production wise compared to the overall scope of the project, what our profits/ losses are, and we can use that to address issues in the field that could be slowing us down.  

- Our company has been in buisness since 1965, and many of the superintendants are used to operating the "old school" way, where they didn't do paperwork, or use much technology at all.  Getting them all to use cell phones was quite a task.  So needless to say, they were not happy about this new production report system that we started.  My first attemt was to get them to text message me this info daily...That was a disaster.  My second attempt was to print out weekly production sheets that had a table like grid for them to fill out the daily production info and turn in at the end of the week when the turned in their time clocks.....That was also a disaster....if I got a report back it was ripped up, muddy, and unreadable.   

- During this time, I was going through the full-stack coding boot camp at through UNC-CH, and we had just finished the first back-end section where we learned to use node.js, express.js, passport, mySql, sequelize.  While brainstorming for project ideas, i realized that i had all the tools under my belt to create an app that would eliminate the use of paper handouts, and allow our foremen to directly submit their daily reports from their phones, and me to have the ability to get that information directly from the office, without having to try and track down a piece of paper, or go back to the job and count the production for those foremen that always "lost" their paper forms.

- This application is the result,  In it's current state it has essentially 2 "sections"; Management and Foremen.  Depending on who logs in, it takes you to your designated page.  The foremen page is fully mobile responsive and is set up clear and easy to use.  They fill out their information and press submit.  It is quick and simple.  I used dropdown menus as much as possible to limit the amount of typos.  The management section allows us to manage the jobs, the foremen, and view the reports.  We can search a certain job within a certain time range and see the reports that match that criteria.

- The app is hoted on Heroku, and I put a link to it as an icon on each formans phone.  Since we pay for their phones, we made it clear that they are required to submit these reports daily.  The results have been incredible.  There are still many bugs, and additional features to address but the app was put to use in October, and it is used weekly.  
I estimate that this app saves me at least 10 hours per week and the results from getting consistant production data from each job, each day, have added much value to our company.

- We are able to go back and compare the estimate of a job to the actual production, we can compare the breakdown/ # of workers to the output (we found that we are more productive with less masons on a job).  We have been able to address issues that cause slow production.  In once case the production figures were abnormally slow, when we went to observe the job to see why, we found that the bricks we ordered were damaged at an unusually high rate, and that was slowing everything down.  We allow for 5% damage on bricks, but these bricks had about 30% damage.  We were able to calculate the money that this damage cost us both in materials and in slowed down labor and were able to save tens of thousands of dollars by discounting that from the price of the bricks.

- As you can see, this app has been incredibly beneficial to WMI, and is in its first stage.  There are additions such as a task manager, equipment log, and employee contact info that could add to the value of this app.  This was my first attempt at building a full stack application and I learned a lot during the process, and look forward to updating this app as well as putting other app ideas in to motion.

- Please look through the source code and visit the app demo site (https://wmiappdemo.herokuapp.com/ - all passwords are: 'test') to test out its functionality. 

Thanks for looking, 

Austin T. Johnson