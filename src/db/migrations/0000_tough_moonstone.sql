CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`username` varchar(256),
	`password` varchar(256),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `username_idx` UNIQUE(`username`)
);
