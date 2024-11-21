"use server";
// Import fs library to fetch from the DB
import fs from "fs";
import path from "path";

export async function fetchData(search: { [key: string | number]: string | number }) {
	let databaseFile;

	try {
		// Get the database file path
		const dbFilePath = path.join("./lib/database.json");

		// Get the database file
		databaseFile = fs.readFileSync(dbFilePath, "utf-8");

		// If databse file doesn't exist -> Create a file
		if (!databaseFile) {
			databaseFile = fs.writeFile(
				"database.json",
				JSON.stringify({}, null, 2),
				(err) => {
					if (err) {
						return console.error(err);
					}
				}
			);
		}

		// Parsing and filtering the databse file
		const databaseData = JSON.parse(databaseFile as string);
		const results = databaseData.filter(
			(item: { [key: string | number]: string | number }) => {
				return Object.keys(search).every(
					(key) => item[key] === search[key]
				);
			}
		);

		// Return the content in the file
		return JSON.stringify(results, null, 2);
	} catch (error) {
		console.error(`(fetchData.ts):`);
		console.error(error);

		return [];
	}
}
