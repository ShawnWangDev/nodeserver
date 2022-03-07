CREATE TABLE paulatim.shenlun (
	id INT UNSIGNED auto_increment NOT NULL,
	area varchar(32) NULL,
	title, varchar(120) NOT NULL,
	`year` YEAR NULL,
	material TEXT NOT NULL,
	question_and_answer json NULL,
	CONSTRAINT shenlun_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;

-- law

CREATE TABLE paulatim.law (
	id INT auto_increment NOT NULL,
	title varchar(256) NOT NULL,
	`type` varchar(128) NULL,
	publish_date CHAR NULL,
	content TEXT NOT NULL,
	CONSTRAINT law_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_0900_ai_ci;