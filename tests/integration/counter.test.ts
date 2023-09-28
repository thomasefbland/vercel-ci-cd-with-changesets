import { test, expect } from "@playwright/test";

test("Counter: increment, decrement, reset", async ({ page }) => {
	await page.goto("http://localhost:4173");

	const counter1 = page.locator("css=#counter-1");
	let counter1Value = await counter1.locator("input").inputValue();
	const counter1Initial = counter1Value;
	const counter1Decrement = counter1.getByRole("button", { name: "-" });
	const counter1Increment = counter1.getByRole("button", { name: "+" });
	const counter1Reset = counter1.getByRole("button", { name: "Reset" });

	await counter1Increment.click();
	await counter1Increment.click();
	await counter1Increment.click();
	counter1Value = (parseInt(counter1Value) + 3).toString();
	await expect(page.locator("css=#counter-1").locator("input")).toHaveValue(counter1Value);

	await counter1Decrement.click();
	await counter1Decrement.click();
	await counter1Decrement.click();
	await counter1Decrement.click();
	counter1Value = (parseInt(counter1Value) - 4).toString();
	await expect(page.locator("css=#counter-1").locator("input")).toHaveValue(counter1Value);

	await counter1Reset.click();
	await expect(page.locator("css=#counter-1").locator("input")).toHaveValue(counter1Initial);

	// Counter 2
	const counter2 = page.locator("css=#counter-2");
	let counter2Value = await counter2.locator("input").inputValue();
	const counter2Initial = counter2Value;
	const counter2Decrement = counter2.getByRole("button", { name: "-" });
	const counter2Increment = counter2.getByRole("button", { name: "+" });
	const counter2Reset = counter2.getByRole("button", { name: "Reset" });

	await counter2Increment.click();
	await counter2Increment.click();
	await counter2Increment.click();
	counter2Value = (parseInt(counter2Value) + 3).toString();
	await expect(page.locator("css=#counter-2").locator("input")).toHaveValue(counter2Value);

	await counter2Decrement.click();
	await counter2Decrement.click();
	await counter2Decrement.click();
	await counter2Decrement.click();
	counter2Value = (parseInt(counter2Value) - 4).toString();
	await expect(page.locator("css=#counter-2").locator("input")).toHaveValue(counter2Value);

	await counter2Reset.click();
	await expect(page.locator("css=#counter-2").locator("input")).toHaveValue(counter2Initial);
});
