import fs from "fs/promises";
import tmp from "tmp";

export async function writeString(value: string): Promise<string> {
	const file = tmp.fileSync({ postfix: ".js" }).name;
	await fs.writeFile(file, value);
	return (await fs.readFile(file)).toString();
}
