USE wmi_app_db;

INSERT INTO jobs (name, active) VALUES ("RTI",TRUE);
INSERT INTO jobs (name, active) VALUES ("Wake Tech",FALSE);

INSERT INTO users (name, password, active) VALUES("Connie Whitman",1965, TRUE);
INSERT INTO users (name, password, active) VALUES("Parker Allen",1965, FALSE);
INSERT INTO users (name, password, active) VALUES("Management",1965, FALSE);

INSERT INTO reports (job, date, foreman, brick, cmu, masons, labor, foremen, operators, hours, additional) 
VALUES ("RTI", "2017-9-25", "Bradley Sutton", 1500,450,9,5,1,1,9.5,"Set up scaffold");