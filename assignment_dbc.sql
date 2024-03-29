CREATE TABLE movie(
	id INT NOT NULL,
	name VARCHAR(100) NOT NULL,
	release_date DATE NOT NULL,
	PRIMARY KEY (id)
)ENGINE=INNODB;

CREATE TABLE review(
	id INT NOT NULL,
	reviewer_name VARCHAR(100) DEFAULT NULL,
	rating INT NOT NULL,
	comments VARCHAR(300) NOT NULL,
	movie_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (movie_id) REFERENCES movie(id) ON DELETE CASCADE
) ENGINE=INNODB;

CREATE VIEW vw_movie
AS 
SELECT m.id, m.name, m.release_date, CASE r.movie_id WHEN NULL THEN NULL ELSE AVG(r.rating) END AS avg_rating
FROM movie m
LEFT JOIN review r ON m.id = r.movie_id
GROUP BY m.id, m.name, m.release_date, r.movie_id;