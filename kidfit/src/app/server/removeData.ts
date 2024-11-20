"use server";
// Import fs library to fetch from the DB
import fs from "fs";
import path from "path";

export async function removeData(search: { [key: string | number]: string | number }) {
	let databaseFile;

	try {
		// Get the database file path
		const dbFilePath = path.join(__dirname, "../../../lib/database.json");

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
		const filteredData = databaseData.filter(
			(item: { [key: string | number]: string | number }) => {
				return !Object.keys(search).every(
					(key) => item[key] === search[key]
				);
			}
		);

		// Overwrite file data
		fs.writeFileSync(
			dbFilePath,
			JSON.stringify(filteredData, null, 2),
			"utf-8"
		);
		// Return a custom success message
		return JSON.stringify({
			success: true,
			status: "Successfully removed data!",
		});
	} catch (error) {
		console.error(`(removeData.ts):`);
		console.error(error);

		// Return a custom error message
		return JSON.stringify({
			success: false,
			status: "Failed to remove data.",
		});
	}
}
