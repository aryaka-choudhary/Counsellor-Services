# Counsellor-Services
## Book available slots for the given mental health counsellors

###### Follow these steps to run this project on your pc
1. Download Xampp and run Xampp Controller.
2. Start Apache and MYSQL and open http://localhost/phpmyadmin/ 
3. Create database with a name counselling and create a table named users, with 4 columns ID,name,email and password while ID being the primary key.
4. In the db directory open the Event.txt file and create an event in your database by clicking on event option and paste the contents of this file there to create an SQL event.
5. This SQL event sets all the values of is_booked column to Available after every 24 hours. So if a user books a slot for tommorow to make the slot unavailable for that day then next day that slot again becomes available for anyone else to book. 
6. Import two given .sql file from db directory.
7. In the .env file check your username and password for the db and update there accordingly.
8. Type node app.js in your terminal, open http://localhost:8000/ in your browser.

###### It should now be running correctly on your browser!
