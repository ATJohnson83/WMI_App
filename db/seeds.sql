USE wmi_app_db;

INSERT INTO jobs (name, active) VALUES ("RTI",TRUE);
INSERT INTO jobs (name, active) VALUES ("Wake Tech",FALSE);

INSERT INTO foremens (name, active) VALUES("Connie Whitman", TRUE);
INSERT INTO foremens (name, active) VALUES("Parker Allen", FALSE);

INSERT INTO reports (job, date, foreman, brick, cmu, masons, labor, foremen, operators, hours, additional) 
VALUES ("RTI", "2017-9-25", "Bradley Sutton", 1500,450,9,5,1,1,9.5,"Set up scaffold");